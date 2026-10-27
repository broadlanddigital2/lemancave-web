/**
 * LeMan Cave website Worker (Cloudflare Workers + static assets).
 *
 * - Serves the static Next.js export in ./out (bound as ASSETS).
 * - POST /api/enquiry: every form on the site (enquiries, contact, corporate quotes,
 *   gift vouchers, booking requests) is forwarded to the Race Car Graphics CRM
 *   (Supabase function `inbound-webform-email`) using LeMan Cave's web form key.
 *   The CRM creates the lead in "LeMan Cave leads → Incoming", links/creates the
 *   customer and emails the staff alert.
 * - Old URL redirects.
 *
 * Config (wrangler.jsonc vars): CRM_WEBFORM_URL, CRM_FORM_KEY
 */

const REDIRECTS = {
  '/experiences': '/attractions',
  '/contact': '/visit-us',
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') return json({ ok: false, error: 'POST required' }, 405);
      return handleEnquiry(request, env);
    }
    const to = REDIRECTS[url.pathname.replace(/\/$/, '')];
    if (to) return Response.redirect(url.origin + to + url.search, 301);
    return env.ASSETS.fetch(request);
  },
};
