/**
 * Le Man Cave website Worker (Cloudflare Workers + static assets).
 *
 * - Serves the static Next.js export in ./out (bound as ASSETS).
 * - POST /api/enquiry: every form on the site (enquiries, contact, corporate quotes,
 *   gift vouchers, booking requests) is forwarded to the Race Car Graphics CRM
 *   (Supabase function `inbound-webform-email`) using Le Man Cave's web form key.
 *   The CRM creates the lead in "Le Man Cave leads → Incoming", links/creates the
 *   customer and emails the staff alert.
 * - Old URL redirects (incl. seo/redirects.json; those paths are also listed in run_worker_first in wrangler.jsonc).
 *
 * Config (wrangler.jsonc vars): CRM_WEBFORM_URL, CRM_FORM_KEY
 */

import { blogResponse, addPostsToSitemap } from './crm-blog.js';
// Shared with the Race Car Graphics and Auto Opulence workers: AI crawler visits and people sent by AI assistants (CRM).
import { trackAi } from './ai-visibility.js';

// Pages moved to keyword addresses (Oct 2026): seo/redirects.json, old path → new path.
import MOVED from '../seo/redirects.json';

// Blog: posts written and approved in the CRM (Marketing → Blog posts), rendered on request into the /blog shell page.
const BLOG = {
  feedUrl: 'https://dipjypzrfigkzuarlsov.supabase.co/functions/v1/seo-blog',
  feedKey: 'c2d40420-4d73-4077-9bbd-217be7ad301d', // seo_sites.feed_key for Le Man Cave
  origin: 'https://lemancave.co.uk',
  basePath: '/blog',
  shellPath: '/blog',
  siteName: 'Le Man Cave Norwich',
  blogName: 'Blog',
  blogTitle: 'The Le Man Cave blog',
  kicker: 'Le Man Cave blog · Norwich',
  intro: 'Party ideas, sim racing tips, seasonal inspiration and news from Norwich’s motorsport entertainment venue.',
  guidesPath: '/guides',
  ctaHtml: '<p><strong>Ready to race?</strong> Book a sim session or the whole cave for your group, or call 01603 517080.</p><p><a class="crmblog-btn" href="/book">Book now</a> <a class="crmblog-btn2" href="/party-venue-norwich">Party venue hire</a></p>',
  css: `.crmblog{max-width:880px;margin:0 auto;color:#E4E4E7;font-family:Barlow,system-ui,sans-serif}
.crmblog-list{max-width:1280px}
.crmblog-crumbs{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.12em;color:#A1A1AA;text-transform:uppercase;margin:0 0 18px}
.crmblog-crumbs a{color:#A1A1AA;text-decoration:none}.crmblog-crumbs span:last-child{color:#ED2835}
.crmblog-kicker,.crmblog-meta{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.14em;color:#FFC233;text-transform:uppercase;margin:0 0 12px}
.crmblog h1{font-family:'Big Shoulders Display',sans-serif;font-weight:900;text-transform:uppercase;color:#fff;font-size:clamp(44px,6vw,84px);line-height:.92;margin:0 0 18px}
.crmblog-post h1{font-size:clamp(38px,5vw,64px)}
.crmblog-intro,.crmblog-lead{font-size:20px;line-height:1.55;color:#D4D4D8;max-width:720px;margin:0 0 34px}
.crmblog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}
.crmblog-card{display:flex;flex-direction:column;background:#131316;border:1px solid #232328;border-radius:10px;overflow:hidden;text-decoration:none;color:inherit;transition:border-color .2s}
.crmblog-card:hover{border-color:#ED2835}
.crmblog-card img,.crmblog-noimg{width:100%;height:auto;aspect-ratio:3/2;object-fit:cover;display:block;background:#0F0F12}
.crmblog-cardbody{display:flex;flex-direction:column;gap:8px;padding:20px 22px 24px}
.crmblog-card .crmblog-meta{margin:0;font-size:11px}
.crmblog-card h2{font-family:'Big Shoulders Display',sans-serif;font-weight:800;text-transform:uppercase;color:#fff;font-size:28px;line-height:1;margin:0}
.crmblog-excerpt{font-size:15px;line-height:1.55;color:#A1A1AA}
.crmblog-more{font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#ED2835}
.crmblog-empty{font-size:18px;color:#A1A1AA}.crmblog-empty a{color:#ED2835}
.crmblog-hero{width:100%;height:auto;border-radius:10px;margin:0 0 30px;display:block}
.crmblog-body{font-size:18px;line-height:1.75;color:#D4D4D8}
.crmblog-body h2{font-family:'Big Shoulders Display',sans-serif;font-weight:900;text-transform:uppercase;color:#fff;font-size:38px;line-height:1;margin:44px 0 14px}
.crmblog-body h3{font-family:'Big Shoulders Display',sans-serif;font-weight:800;text-transform:uppercase;color:#fff;font-size:26px;margin:28px 0 10px}
.crmblog-body p{margin:0 0 18px}.crmblog-body ul,.crmblog-body ol{margin:0 0 18px;padding-left:24px}.crmblog-body li{margin:0 0 8px}
.crmblog-body a{color:#ED2835}.crmblog-body strong{color:#fff}
.crmblog-body blockquote{margin:0 0 18px;padding:14px 20px;border-left:4px solid #ED2835;background:#131316;border-radius:6px}
.crmblog-cta{margin:44px 0 0;padding:28px 30px;border-radius:10px;background:#131316;border:1px solid #232328;border-left:4px solid #ED2835;font-size:17px;line-height:1.6}
.crmblog-cta p{margin:0 0 14px}.crmblog-cta p:last-child{margin:0}
.crmblog-btn,.crmblog-btn2{display:inline-block;margin:4px 10px 0 0;padding:14px 22px;border-radius:4px;font-weight:700;font-size:14px;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
.crmblog-btn{background:#ED2835;color:#09090B}.crmblog-btn2{border:1px solid #52525B;color:#fff}
.crmblog-back{margin:30px 0 0}.crmblog-back a{color:#A1A1AA}`,
};

const REDIRECTS = {
  ...MOVED,
  '/experiences': '/attractions',
  '/contact': '/contact-leman-cave-norwich',
  '/login': '/account',
};

// Subjects avoid the words the CRM uses as field labels (enquiry, message, details, comments).
const FORM_TYPES = {
  'general-enquiry': 'Event request',
  contact: 'Contact form',
  'corporate-enquiry': 'Corporate event request',
  'gift-voucher': 'Gift voucher request',
  'booking-request': 'Booking request',
  enquiry: 'Website form',
};

// Human labels for the CRM email body (the CRM reads "Name:", "Email:", "Phone:", "Company:" lines).
const LABELS = {
  name: 'Name', your_name: 'Name',
  email: 'Email', your_email: 'Email',
  phone: 'Phone',
  company: 'Company',
  what_are_you_planning: 'Event type', type_of_event: 'Event type',
  activities_you_re_interested_in: 'Activities',
  package: 'Package',
  preferred_date: 'Preferred date', preferred_time: 'Preferred time',
  group_size: 'Group size', guests: 'Group size',
  recipient_s_name: 'Recipient', voucher: 'Voucher',
  tell_us_more: 'Notes', message: 'Notes', anything_else: 'Notes', message_optional: 'Notes',
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const clean = (v, n = 2000) => String(v ?? '').replace(/\0/g, '').trim().slice(0, n);

export function buildCrmPayload(body, env, origin) {
  const f = body.fields || {};
  const name = clean(f.name || f.your_name, 120);
  const email = clean(f.email || f.your_email, 254).toLowerCase();
  const type = FORM_TYPES[body.formType] || 'Website enquiry';
  const extra = clean(f.package || f.what_are_you_planning || f.type_of_event || f.voucher, 120);
  const subject = (extra ? `${type} — ${extra}` : type).slice(0, 200);
  // The CRM (inbound-webform-email) reads labelled lines: "Name:", "Email:", "Phone:", "Company:",
  // and takes the lead's message from the "Enquiry:" line, so every other field is summarised there.
  const CONTACT = new Set(['name', 'your_name', 'email', 'your_email', 'phone', 'company', 'website']);
  const summary = [];
  const seen = new Set();
  for (const [k, v] of Object.entries(f)) {
    if (CONTACT.has(k)) continue;
    const value = clean(v, 4000).replace(/\s*\n\s*/g, ' / ');
    if (!value) continue;
    const label = LABELS[k] || k.replace(/_/g, ' ').replace(/^./, (c) => c.toUpperCase());
    const item = `${label}: ${value}`;
    if (seen.has(item)) continue;
    seen.add(item);
    summary.push(item);
  }
  const lines = [`Enquiry: ${type}${summary.length ? ' · ' + summary.join(' · ') : ''}`];
  if (name) lines.push(`Name: ${name}`);
  if (email) lines.push(`Email: ${email}`);
  if (clean(f.phone)) lines.push(`Phone: ${clean(f.phone, 40)}`);
  if (clean(f.company)) lines.push(`Company: ${clean(f.company, 120)}`);
  return {
    form_key: env.CRM_FORM_KEY,
    name,
    email,
    subject,
    details: lines.join('\n'),
    page_url: origin + clean(body.page || '/', 400),
  };
}

export async function handleEnquiry(request, env) {
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: 'Invalid request' }, 400); }
  if (!body || typeof body.fields !== 'object' || !FORM_TYPES[body.formType]) return json({ ok: false, error: 'Invalid form' }, 400);
  if (body.fields.website) return json({ ok: true }); // honeypot: pretend success, drop it

  const url = new URL(request.url);
  const payload = buildCrmPayload(body, env, url.origin);
  if (!payload.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
    return json({ ok: false, error: 'Please add your name and a valid email' }, 422);
  }
  if (!env.CRM_WEBFORM_URL || !env.CRM_FORM_KEY) return json({ ok: false, error: 'Form not configured' }, 500);

  try {
    const res = await fetch(env.CRM_WEBFORM_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      console.error('CRM rejected enquiry', res.status, JSON.stringify(data).slice(0, 300));
      return json({ ok: false, error: 'We couldn’t send that just now' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error('CRM unreachable', String(e));
    return json({ ok: false, error: 'We couldn’t send that just now' }, 502);
  }
}

async function handle(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') return json({ ok: false, error: 'POST required' }, 405);
      return handleEnquiry(request, env);
    }
    const blog = await blogResponse(request, env, BLOG);
    if (blog) return blog;
    if (url.pathname === '/sitemap.xml') {
      const res = await env.ASSETS.fetch(request);
      if (!res.ok) return res;
      return new Response(await addPostsToSitemap(await res.text(), BLOG), { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
    }
    const to = REDIRECTS[url.pathname.replace(/\/$/, '')];
    if (to) return Response.redirect(url.origin + to + url.search, 301);
    return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env, ctx) {
    // www.lemancave.co.uk → lemancave.co.uk (permanent), keeping the path and query.
    const host = new URL(request.url);
    if (host.hostname === 'www.lemancave.co.uk') {
      host.hostname = 'lemancave.co.uk';
      return Response.redirect(host.toString(), 301);
    }
    const response = await handle(request, env);
    // Counted on the workers.dev preview too until the lemancave.co.uk switch (the CRM's Le Man Cave site reads it).
    trackAi(request, response, ctx, { feedKey: BLOG.feedKey, countPreview: true });
    return response;
  },
};
