"""Convert LeMan Cave .dc.html design components into Next.js (React) components.
Usage: python3 -I conv.py <src_project_dir> <next_project_dir>
"""
import sys, os, re, json, html
from html.parser import HTMLParser

SRC, OUT = sys.argv[1], sys.argv[2]

# ---------- routes ----------
ROUTES = {
 'Main': '/', 'Attractions': '/attractions', 'Events': '/parties-and-events', 'Food': '/food', 'Drinks': '/drinks',
 'Pricing': '/prices', 'Gallery': '/gallery', 'Visit': '/visit-us', 'Corporate': '/corporate-events',
 'Christmas': '/christmas-parties', 'GiftVouchers': '/gift-vouchers',
 'Simulator': '/attractions/racing-simulator', 'Scalextric': '/attractions/digital-scalextric', 'Games': '/attractions/games-and-arcade',
 'MotoSim': '/attractions/motorcycle-simulator', 'PS5': '/attractions/ps5-lounge', 'Pinball': '/attractions/digital-pinball',
 'Pool': '/attractions/pool-table', 'AirHockey': '/attractions/air-hockey', 'TableFootball': '/attractions/table-football',
 'Darts': '/attractions/darts', 'Arcade': '/attractions/arcade', 'Memorabilia': '/attractions/memorabilia',
 'VenueHire': '/venue-hire', 'Birthday': '/birthday-parties', 'KidsParties': '/kids-parties', 'TeenParties': '/teen-parties',
 'StagDo': '/stag-do-norwich', 'HenDo': '/hen-do-norfolk', 'TeamBuilding': '/team-building', 'ClientEntertaining': '/client-entertaining',
 'LeavingParties': '/leaving-and-retirement-parties', 'FamilyDays': '/family-days-out', 'AdultGroups': '/group-nights-out',
 'GroupBookings': '/group-bookings', 'CarClub': '/car-club-meets', 'ClubSocials': '/club-socials',
 'ForFamilies': '/who-its-for/families', 'ForFriends': '/who-its-for/friends', 'ForCorporateTeams': '/who-its-for/corporate-teams',
 'ForMotorsportFans': '/who-its-for/motorsport-fans', 'ForGamers': '/who-its-for/gamers', 'ForNonPetrolheads': '/who-its-for/non-petrolheads',
 'ForTourists': '/who-its-for/tourists', 'ForLocals': '/who-its-for/locals', 'Accessibility': '/accessibility',
 'EastAnglia': '/locations', 'Norwich': '/locations/norwich', 'Norfolk': '/locations/norfolk', 'Wroxham': '/locations/wroxham',
 'Aylsham': '/locations/aylsham', 'Wymondham': '/locations/wymondham', 'NorthWalsham': '/locations/north-walsham',
 'Dereham': '/locations/dereham', 'Cromer': '/locations/cromer', 'GreatYarmouth': '/locations/great-yarmouth', 'Diss': '/locations/diss',
 'Beccles': '/locations/beccles', 'Lowestoft': '/locations/lowestoft', 'Thetford': '/locations/thetford', 'KingsLynn': '/locations/kings-lynn',
 'Ipswich': '/locations/ipswich', 'BuryStEdmunds': '/locations/bury-st-edmunds', 'Cambridge': '/locations/cambridge',
 'Blog': '/guides', 'FAQs': '/faqs', 'OpeningTimes': '/opening-times', 'TravelParking': '/travel-and-parking',
 'GuideNorwich': '/guides/things-to-do-in-norwich', 'GuideIndoor': '/guides/indoor-activities-norfolk', 'GuideTeamEvent': '/guides/planning-a-team-event',
 'GuideBirthday': '/guides/birthday-party-ideas', 'GuideSim': '/guides/race-simulator-guide', 'GuideVenueHire': '/guides/venue-hire-guide',
 'GuideKidsChecklist': '/guides/kids-party-checklist', 'GuideStagHen': '/guides/stag-and-hen-planner', 'GuideSimTips': '/guides/sim-racing-tips',
 'GuideChristmas': '/guides/christmas-party-planner', 'GuideGifts': '/guides/gifts-for-petrolheads', 'GuideLeMans': '/guides/le-mans-history',
 'CompareKarting': '/compare/sim-racing-vs-karting', 'Compare4kVr': '/compare/4k-vs-vr', 'CompareMotionStatic': '/compare/motion-vs-static-simulators',
 'CompareSimVsHire': '/compare/sim-room-vs-whole-cave-hire', 'CompareSaturday': '/compare/saturday-packages', 'CompareIndoor': '/compare/indoor-activities-norwich',
 'CompareTeamBuilding': '/compare/team-building-activities', 'ComparePartyVenues': '/compare/party-venues', 'CompareScalextric': '/compare/digital-vs-classic-scalextric',
 'Sitemap': '/site-map', 'Book': '/book',
}
TEMPLATES = {'Landing', 'Guide', 'Compare', 'Hub', 'Product', 'SiteFooter'}
SKIP = {'Sitemap'}  # strategy diagram board; replaced by a generated HTML site map
FORM_TYPES = {'Main': 'general-enquiry', 'Visit': 'contact', 'Corporate': 'corporate-enquiry', 'GiftVouchers': 'gift-voucher', 'Book': 'booking-request'}

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
ATTR_MAP = {'class': 'className', 'for': 'htmlFor', 'onclick': 'onClick', 'onchange': 'onChange', 'onsubmit': 'onSubmit',
            'oninput': 'onInput', 'viewbox': 'viewBox', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
            'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray', 'text-anchor': 'textAnchor',
            'preserveaspectratio': 'preserveAspectRatio', 'letter-spacing': 'letterSpacing', 'font-size': 'fontSize',
            'font-family': 'fontFamily', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'tabindex': 'tabIndex',
            'colspan': 'colSpan', 'rowspan': 'rowSpan', 'maxlength': 'maxLength', 'readonly': 'readOnly', 'autocomplete': 'autoComplete'}
DROP_ATTRS = {'hint-size', 'hint-placeholder-count', 'hint-placeholder-val'}

HOLE = re.compile(r'\{\{\s*([^}]*?)\s*\}\}')

class Node:
    def __init__(self, tag, attrs, parent):
        self.tag, self.attrs, self.parent, self.children = tag, attrs, parent, []

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('#root', [], None); self.cur = self.root
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur); self.cur.children.append(n)
        if tag not in VOID: self.cur = n
    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))
    def handle_endtag(self, tag):
        c = self.cur
        while c is not self.root and c.tag != tag: c = c.parent
        if c is not self.root: self.cur = c.parent
    def handle_data(self, d):
        self.cur.children.append(d)

def expr(path, scope):
    path = path.strip()
    if path in ('true', 'false', 'null') or re.fullmatch(r'-?\d+(\.\d+)?', path): return path
    head = re.split(r'[.\[]', path)[0]
    if head in scope: return path
    return 'V.' + path

def interp(s, scope):
    """string possibly containing holes -> JS expression"""
    m = HOLE.fullmatch(s.strip()) if s else None
    if m and s.strip() == s.strip():
        if HOLE.fullmatch(s): return expr(m.group(1), scope)
    if not HOLE.search(s): return json.dumps(s)
    parts, last = [], 0
    for m in HOLE.finditer(s):
        parts.append(s[last:m.start()].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${'))
        parts.append('${' + expr(m.group(1), scope) + '}')
        last = m.end()
    parts.append(s[last:].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${'))
    return '`' + ''.join(parts) + '`'

def text_jsx(t, scope):
    if not t.strip():
        return ' ' if ('\n' not in t and t) else ('\n' if '\n' in t else '')
    out, last = [], 0
    for m in HOLE.finditer(t):
        seg = t[last:m.start()]
        if seg: out.append('{' + json.dumps(seg) + '}')
        out.append('{' + expr(m.group(1), scope) + '}')
        last = m.end()
    seg = t[last:]
    if seg: out.append('{' + json.dumps(seg) + '}')
    return ''.join(out)

def comp_name(n): return n

def label_text(node):
    for c in node.children:
        if isinstance(c, str) and c.strip(): return c.strip()
    return ''

def slug(s): return re.sub(r'[^a-z0-9]+', '_', s.lower()).strip('_')

def assign_names(node):
    for c in node.children:
        if isinstance(c, str): continue
        if c.tag == 'label':
            lt = label_text(c)
            for d in walk(c):
                if not isinstance(d, str) and d.tag in ('input', 'textarea', 'select') and not any(k == 'name' for k, _ in d.attrs):
                    d.attrs.append(('name', slug(lt) or 'field'))
                    if any(k == 'type' and v == 'email' for k, v in d.attrs) or d.tag == 'textarea' and False: pass
                    if slug(lt) in ('name', 'your_name', 'email', 'your_email'): d.attrs.append(('required', None))
        assign_names(c)

def walk(n):
    for c in n.children:
        yield c
        if not isinstance(c, str): yield from walk(c)

def emit(node, scope, imports, form_type, ind=0):
    out = []
    for c in node.children:
        if isinstance(c, str):
            out.append(text_jsx(c, scope)); continue
        a = dict(c.attrs)
        if c.tag == 'sc-for':
            lst = HOLE.fullmatch(a['list'].strip()).group(1); var = a.get('as', 'item')
            inner = emit(c, scope | {var, '$index'}, imports, form_type)
            out.append('{(' + expr(lst, scope) + ' || []).map((' + var + ', $index) => (<React.Fragment key={$index}>' + inner + '</React.Fragment>))}')
            continue
        if c.tag == 'sc-if':
            cond = HOLE.fullmatch(a['value'].strip()).group(1)
            inner = emit(c, scope, imports, form_type)
            out.append('{' + expr(cond, scope) + ' ? (<>' + inner + '</>) : null}')
            continue
        if c.tag == 'dc-import':
            name = a['name']; imports.add(name)
            props = []
            for k, v in c.attrs:
                if k in ('name',) or k in DROP_ATTRS: continue
                pk = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                props.append(f'{pk}={{{interp(v or "", scope)}}}')
            out.append('<' + name + (' ' + ' '.join(props) if props else '') + ' />')
            continue
        tag = c.tag
        if tag in ('helmet', 'script', 'title', 'meta', 'link', 'style'): continue
        jsx_tag = tag
        attrs = []
        if tag == 'a':
            jsx_tag = 'A'; imports.add('A')
        if tag == 'form':
            jsx_tag = 'EnquiryForm'; imports.add('EnquiryForm')
            attrs.append(f'formType={json.dumps(form_type or "enquiry")}')
        for k, v in c.attrs:
            if k in DROP_ATTRS: continue
            name = ATTR_MAP.get(k, k)
            if v is None:
                attrs.append(f'{name}={{true}}'); continue
            if name == 'style':
                attrs.append(f'style={{css({interp(v, scope)})}}'); continue
            if tag == 'textarea' and name == 'value': name = 'defaultValue'
            e = interp(v, scope)
            if e.startswith('"') and not HOLE.search(v):
                attrs.append(f'{name}={e}' if '"' not in v[1:-1] and '\\' not in e else f'{name}={{{e}}}')
            else:
                attrs.append(f'{name}={{{e}}}')
        open_ = '<' + jsx_tag + (' ' + ' '.join(attrs) if attrs else '')
        if tag in VOID:
            out.append(open_ + ' />')
        else:
            out.append(open_ + '>' + emit(c, scope, imports, form_type) + '</' + jsx_tag + '>')
    return ''.join(out)

def convert(name, src):
    body = src[src.index('<x-dc>'): src.index('</x-dc>') + len('</x-dc>')]
    helmet = re.search(r'<helmet>(.*?)</helmet>', body, re.S)
    css_txt = ''.join(re.findall(r'<style>(.*?)</style>', helmet.group(1), re.S)) if helmet else ''
    body = re.sub(r'<helmet>.*?</helmet>', '', body, flags=re.S)
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    p = P(); p.feed(body); p.close()
    xdc = next(c for c in p.root.children if not isinstance(c, str) and c.tag == 'x-dc')
    assign_names(xdc)
    imports = set()
    jsx = emit(xdc, set(), imports, FORM_TYPES.get(name))
    m = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', src, re.S)
    logic = m.group(1).strip()
    logic = re.sub(r'^class Component extends DCLogic \{', f'export default class {name} extends React.Component {{', logic)
    assert logic.endswith('}')
    logic = logic[:-1].rstrip() + '\n  render() {\n    const V = this.renderVals() || {};\n    return (<>' + jsx + '</>);\n  }\n}\n'
    hdr = "'use client';\nimport React from 'react';\nimport { css } from '../lib/css';\n"
    for i in sorted(imports):
        hdr += f"import {i} from './{i}';\n"
    code = hdr + '\n' + logic
    return code, css_txt

def fix_links(code, exts):
    code = re.sub(r"([A-Za-z_][A-Za-z0-9_\[\]]*) \+ '\.dc\.html'", lambda m: f"route({m.group(1)})", code)
    code = code.replace("href.replace('.dc.html', '')", "pageOf(href)")
    code = code.replace("href.startsWith('Compare')", "href.startsWith('/compare')").replace("href.startsWith('Guide')", "href.startsWith('/guides')")
    code = code.replace("s2.href.startsWith('Christmas')", "s2.href.startsWith('/christmas')")
    if 'route(' in code or 'pageOf(' in code:
        code = code.replace("import { css } from '../lib/css';", "import { css } from '../lib/css';\nimport { route, pageOf } from '../lib/routes';")
    def r(m):
        n = m.group(1)
        return ROUTES.get(n, '/' + n.lower())
    code = re.sub(r'\b([A-Za-z0-9]+)\.dc\.html', r, code)
    code = code.replace('https://lemancave.co.uk/book', '/book').replace('https://lemancave.co.uk/login', '/book')
    code = code.replace('https://lemancave.co.uk/experiences', '/attractions').replace('https://lemancave.co.uk/corporate-events', '/corporate-events')
    code = code.replace('https://lemancave.co.uk/contact', '/visit-us').replace('https://lemancave.co.uk/', '/')
    code = re.sub(r"/_blob/([0-9a-f]{32})", lambda m: f"/images/{m.group(1)}.{exts.get(m.group(1), 'webp')}", code)
    code = code.replace("'/_blob/' + id", "'/images/' + id + '.webp'")
    code = re.sub(r'<A href="/(?:login|book)"[^>]*>\{"Log in"\}</A>', '', code)
    assert '_blob' not in code, code[code.index('_blob') - 80: code.index('_blob') + 40]
    return code

def add_mobile_menu(code):
    # The design has no mobile menu. Put the hand-written <MobileMenu /> (components/MobileMenu.jsx)
    # next to the header's Book now button. The button only shows at 760px and below.
    end = '\n</div>\n</nav>\n</header>'
    if '<header' not in code:
        return code
    assert code.count(end) == 1, 'header end not found'
    code = code.replace(end, '\n<MobileMenu />' + end)
    return code.replace("import { css } from '../lib/css';\n", "import { css } from '../lib/css';\nimport MobileMenu from './MobileMenu';\n", 1)

def add_festive_bar(code):
    # The Christmas ribbon banner (components/FestiveBar.jsx) above the header on every page with one.
    if '<header' not in code:
        return code
    code = code.replace('<header', '<FestiveBar />\n<header', 1)
    return code.replace("import { css } from '../lib/css';\n", "import { css } from '../lib/css';\nimport FestiveBar from './FestiveBar';\n", 1)

def add_booking_widget(code):
    # <div data-lc-booking="form"></div> in a design page becomes the live CRM booking widget (components/CrmBooking.jsx).
    if 'data-lc-booking' not in code:
        return code
    code, n = re.subn(r'<div data-lc-booking="[a-z-]+"\s*(?:/>|>\s*</div>)', '<CrmBooking />', code)
    assert n == 1, 'booking widget placeholder not found'
    return code.replace("import { css } from '../lib/css';\n", "import { css } from '../lib/css';\nimport CrmBooking from './CrmBooking';\n", 1)

if __name__ == '__main__':
    exts = {}
    imgdir = os.path.join(OUT, 'public', 'images')
    for f in os.listdir(imgdir):
        b, e = os.path.splitext(f); exts[b] = e[1:]
    os.makedirs(os.path.join(OUT, 'components'), exist_ok=True)
    all_css, pages = [], {}
    for f in sorted(os.listdir(SRC)):
        if not f.endswith('.dc.html'): continue
        name = f[:-8]
        if name in SKIP: continue
        src = open(os.path.join(SRC, f)).read()
        title = html.unescape(re.search(r'<title>(.*?)</title>', src).group(1))
        wrap = re.fullmatch(r'\s*<dc-import name="(\w+)"(?: slug="([\w]+)")? hint-size="[^"]*"></dc-import>\s*', re.sub(r'<helmet>.*?</helmet>', '', src[src.index('<x-dc>') + 6: src.index('</x-dc>')], flags=re.S))
        css_txt = ''.join(re.findall(r'<style>(.*?)</style>', src, re.S))
        all_css.append(css_txt)
        if wrap and name not in TEMPLATES:
            pages[name] = {'component': wrap.group(1), 'slug': wrap.group(2), 'title': title}
            continue
        code, _ = convert(name, src)
        code = fix_links(code, exts)
        code = add_mobile_menu(code)
        code = add_booking_widget(code)
        code = add_festive_bar(code)
        if name == 'GiftVouchers':
            code = re.sub(r'(<EnquiryForm formType="gift-voucher"[^>]*>)', lambda m: m.group(1) + '<input type="hidden" name="voucher" value={`${V.v.title} \u00b7 ${V.v.price}`} />', code, count=1)
            assert 'name="voucher"' in code
        open(os.path.join(OUT, 'components', name + '.jsx'), 'w').write(code)
        if name not in TEMPLATES:
            pages[name] = {'component': name, 'slug': None, 'title': title}
    json.dump({'pages': pages, 'routes': ROUTES}, open(os.path.join(OUT, 'scripts', 'pages.json'), 'w'), indent=1)
    # global css: dedupe rule blocks
    seen, lines = set(), []
    for c in all_css:
        for blk in re.findall(r'@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}|[^{}@]+\{[^{}]*\}', c):
            k = re.sub(r'\s+', ' ', blk.strip())
            if k and k not in seen: seen.add(k); lines.append(blk.strip())
    open(os.path.join(OUT, 'app', 'design.css'), 'w').write('/* Collected from the design canvas pages */\n' + '\n'.join(lines) + '\n')
    print('components', len(os.listdir(os.path.join(OUT, 'components'))), 'pages', len(pages))
