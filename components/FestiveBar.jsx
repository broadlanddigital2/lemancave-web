'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import A from './A';

// Christmas ribbon banner above the header on every page (inserted by scripts/convert_design.py, like MobileMenu).
// Shows until the Christmas run ends (Saturday Night sessions run on weeknights into the first two weeks of January),
// and not on the Christmas page itself. Styles: .lc-festive in app/globals.css.
const FESTIVE_UNTIL = '2027-01-15T00:00:00Z';

export default function FestiveBar() {
  const pathname = usePathname();
  if (Date.now() >= Date.parse(FESTIVE_UNTIL) || pathname === '/christmas-parties') return null;
  return (
    <A href="/christmas-parties" className="lc-festive" aria-label="Christmas parties: now booking">
      <span className="lc-festive-bow" aria-hidden="true">
        <svg viewBox="0 0 48 28" width="40" height="24"><path d="M24 14C17 4 6 2 4 8s6 10 20 6Zm0 0c7-10 18-12 20-6s-6 10-20 6Zm0 0-7 13 4 0 3-6 3 6 4 0Z" fill="#ED2835" stroke="#FFC233" strokeWidth="1.2" strokeLinejoin="round" /><circle cx="24" cy="14" r="3.2" fill="#FFC233" /></svg>
      </span>
      <span className="lc-festive-tag">Now booking</span>
      <span>Christmas parties: every weeknight in December, from £45pp</span>
      <span className="lc-festive-link">The Festive Grand Prix →</span>
    </A>
  );
}
