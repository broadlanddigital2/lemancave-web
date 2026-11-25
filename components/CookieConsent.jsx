'use client';
import { useEffect, useState } from 'react';

// Cookie banner (hand-written; not from the design converter). Google Tag Manager (GTM-P5RK5S9M, app/layout.tsx) runs
// with Google Consent Mode, denied by default. What needs consent:
//  - "stats": Google Analytics and other statistics tags in GTM (consent analytics_storage).
//  - "ads": Google Ads tags in GTM (ad_storage, ad_user_data, ad_personalization) and keeping the Google Ads click ID / UTM tags of a visitor who came from one of our ads (components/AdClick.jsx,
//    cookie ins_ad), so enquiries and bookings can be matched to the ad. Consents saved before this existed count as no.
//  - "remember": the CRM site search and enquiry bot remembering a visitor between visits (visitor ID, recently
//    viewed pages). Without it they only remember within the open tab. Signalled to both scripts with
//    window.__crmBotTracking and the "rcg-enquiry-bot-consent" event (set before they load in app/layout.tsx).
//  - "maps": Google Maps embeds (components/ConsentMap.jsx), which set Google's own cookies.
// The choice is kept in localStorage "lc-cookie-consent". Any link to #cookie-settings reopens the banner.
export const CONSENT_KEY = 'lc-cookie-consent';

export function readConsent() {
  try { const c = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); return c && c.v === 1 ? c : null; } catch { return null; }
}

function saveConsent(remember, maps, ads, stats) {
  const before = readConsent();
  const value = { remember, maps, ads, stats, at: new Date().toISOString(), v: 1 };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(value)); } catch { /* storage blocked: the banner shows again next visit */ }
  window.__crmBotTracking = remember;
  window.dispatchEvent(new CustomEvent('rcg-enquiry-bot-consent', { detail: { tracking: remember } }));
  window.dispatchEvent(new Event('lc:consent'));
  // Google Consent Mode update for the tags in Google Tag Manager.
  const g = ads ? 'granted' : 'denied';
  window.dataLayer = window.dataLayer || [];
  // gtag commands must be pushed as an arguments object, not an array.
  const gtag = function () { window.dataLayer.push(arguments); }; // eslint-disable-line prefer-rest-params
  gtag('consent', 'update', { analytics_storage: stats ? 'granted' : 'denied', ad_storage: g, ad_user_data: g, ad_personalization: g });
  window.dataLayer.push({ event: 'lc_consent_update' });
  if (before?.maps && !maps) window.location.reload(); // take down any map already showing
  return value;
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [remember, setRemember] = useState(false);
  const [maps, setMaps] = useState(false);
  const [ads, setAds] = useState(false);
  const [stats, setStats] = useState(false);

  useEffect(() => {
    const c = readConsent();
    // Ask again if the saved choice predates the statistics and advert options (added 29 Oct / 15 Nov 2026), so
    // returning visitors get the chance to allow advert measurement before the ads go live.
    if (!c || c.ads === undefined || c.stats === undefined) { setOpen(true); if (c) { setRemember(!!c.remember); setMaps(!!c.maps); } } else { setRemember(!!c.remember); setMaps(!!c.maps); setAds(!!c.ads); setStats(!!c.stats); }
    const reopen = (e) => {
      const a = e.target?.closest?.('a[href$="#cookie-settings"]');
      if (!a) return;
      e.preventDefault();
      const cur = readConsent(); setRemember(!!cur?.remember); setMaps(!!cur?.maps); setAds(!!cur?.ads); setStats(!!cur?.stats); setManage(true); setOpen(true);
    };
    document.addEventListener('click', reopen);
    return () => document.removeEventListener('click', reopen);
  }, []);

  if (!open) return null;
  const choose = (r, m, a, st) => { saveConsent(r, m, a, st); setOpen(false); setManage(false); };
  return (
    <div className="lc-cookies" role="dialog" aria-modal="false" aria-labelledby="lc-cookies-title" aria-describedby="lc-cookies-text">
      <div className="lc-cookies__body">
        <p id="lc-cookies-title" className="lc-cookies__title">Cookies at Le Man Cave</p>
        <p id="lc-cookies-text">We use essential storage to make bookings, gift cards and your account work. With your OK, our site search and chat can remember you between visits, and our maps load from Google, which sets its own cookies, Google Analytics can count visits so we can improve the site, and Google Ads can tell us which adverts lead to bookings. <a href="/cookie-policy">Cookie policy</a> · <a href="/privacy">Privacy policy</a></p>
        {manage && <fieldset className="lc-cookies__options">
          <legend>Choose what we can use</legend>
          <label><input type="checkbox" checked disabled /><span><b>Essential</b>Bookings, payments, gift cards, sign-in and security. Always on.</span></label>
          <label><input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /><span><b>Remember my visits</b>Search and chat remember you between visits, so suggestions and conversations pick up where you left off.</span></label>
          <label><input type="checkbox" checked={maps} onChange={(e) => setMaps(e.target.checked)} /><span><b>Google Maps</b>Show the map on our contact and visit pages. Google may set cookies.</span></label>
          <label><input type="checkbox" checked={stats} onChange={(e) => setStats(e.target.checked)} /><span><b>Website statistics</b>Google Analytics counts visits and which pages are used, so we can improve the site.</span></label>
          <label><input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} /><span><b>Measure our adverts</b>Google Ads cookies, and a note of which of our ads you came from, so we can tell which adverts lead to bookings.</span></label>
        </fieldset>}
      </div>
      <div className="lc-cookies__actions">
        {manage
          ? <button type="button" className="lc-cookies__primary" onClick={() => choose(remember, maps, ads, stats)}>Save choices</button>
          : <button type="button" className="lc-cookies__primary" onClick={() => choose(true, true, true, true)}>Accept all</button>}
        <button type="button" className="lc-cookies__secondary" onClick={() => choose(false, false, false, false)}>Essential only</button>
        {!manage && <button type="button" className="lc-cookies__link" onClick={() => setManage(true)}>Manage</button>}
      </div>
    </div>
  );
}
