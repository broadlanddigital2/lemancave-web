'use client';
import { useEffect } from 'react';
import { readConsent } from './CookieConsent';

// Google Ads measurement (hand-written). When a visitor arrives from one of our ads, the address carries a click ID
// (gclid / gbraid / wbraid) and UTM tags. With "Measure our adverts" consent we keep them in the first-party cookie
// "ins_ad" for 90 days, so an enquiry (components/EnquiryForm.jsx) or a booking (the CRM booking widget reads the same
// cookie) can be matched to the ad click. The CRM then uploads "CRM enquiry" / "CRM sale" conversions to Google Ads.
// Without consent nothing is stored; withdrawing consent deletes the cookie. No Google tags are loaded.
export const AD_COOKIE = 'ins_ad';
const KEYS = /^(gclid|gbraid|wbraid|utm_(source|medium|campaign|term|content))$/;

export function adParams() {
  try {
    const raw = document.cookie.split(/;\s*/).find((c) => c.startsWith(AD_COOKIE + '='))?.split('=').slice(1).join('=') || '';
    const out = new URLSearchParams(decodeURIComponent(raw));
    for (const [k, v] of new URL(window.location.href).searchParams) if (KEYS.test(k)) out.set(k, v.slice(0, 300));
    return out;
  } catch { return new URLSearchParams(); }
}

/** The current path plus any ad click ID / UTM tags, for the enquiry form's page_url (the CRM reads gclid from it). */
export function pageWithAdClick() {
  const p = adParams();
  return window.location.pathname + (p.toString() ? '?' + p.toString() : '');
}

export default function AdClick() {
  useEffect(() => {
    const landing = new URLSearchParams();
    try { for (const [k, v] of new URL(window.location.href).searchParams) if (KEYS.test(k)) landing.set(k, v.slice(0, 300)); } catch { /* ignore */ }
    const apply = () => {
      const ok = !!readConsent()?.ads;
      if (!ok) { document.cookie = AD_COOKIE + '=; Max-Age=0; Path=/; SameSite=Lax; Secure'; return; }
      if (landing.has('gclid') || landing.has('gbraid') || landing.has('wbraid') || landing.has('utm_source'))
        document.cookie = AD_COOKIE + '=' + encodeURIComponent(landing.toString()) + '; Max-Age=' + 90 * 86400 + '; Path=/; SameSite=Lax; Secure';
    };
    apply();
    window.addEventListener('lc:consent', apply);
    return () => window.removeEventListener('lc:consent', apply);
  }, []);
  return null;
}
