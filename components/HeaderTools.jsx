'use client';
import React from 'react';
import A from './A';

// Icon buttons in every page header, next to Book now (inserted by scripts/convert_design.py, like MobileMenu):
// Search opens the CRM site search (loaded in app/layout.tsx); Account goes to /account (bookings, invoices,
// gift cards, advertising). Styles: .lc-hdr-* in app/globals.css.
export default function HeaderTools() {
  return (
    <span className="lc-hdr-tools">
      <button type="button" className="lc-hdr-icon" aria-label="Search the site" title="Search"
        onClick={() => { if (window.SiteSearch) window.SiteSearch.open(''); }}>
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
      </button>
      <A href="/account" className="lc-hdr-icon" aria-label="Your account" title="Your account">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
      </A>
    </span>
  );
}
