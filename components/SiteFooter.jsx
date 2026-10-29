'use client';
import React from 'react';
import { css } from '../lib/css';
import A from './A';

export default class SiteFooter extends React.Component {
  renderVals() {
    const L = (rows) => rows.map(([label, href]) => ({ label, href }));
    return {
      cols: [
        { title: 'EXPLORE', links: L([['Attractions', '/attractions'], ['Food & Drink', '/pizza-party-norwich'], ['Parties & Events', '/parties-and-events-norwich'], ['Prices', '/party-packages-norwich'], ['Gallery', '/leman-cave-photos'], ['Visit Us', '/contact-leman-cave-norwich']]) },
        { title: 'POPULAR', links: L([['Pro Racing Simulator', '/attractions/racing-simulator-norwich'], ['Digital Scalextric', '/attractions/scalextric-track-norwich'], ['Birthday Parties', '/birthday-party-venue-norwich'], ['Kids Parties', '/kids-party-venue-norwich'], ['Stag & Hen Dos', '/stag-do-norwich'], ['Team Building', '/team-building-norwich'], ['Christmas Parties', '/christmas-party-norwich'], ['Exclusive Venue Hire', '/party-venue-norwich']]) },
        { title: 'PLAN YOUR VISIT', links: L([['Opening Times', '/leman-cave-opening-times'], ['Travel & Parking', '/leman-cave-parking-and-travel'], ['Accessibility', '/accessible-activities-norwich'], ['FAQs', '/leman-cave-faqs'], ['Gift Vouchers', '/experience-gifts-norwich'], ['Advertise With Us', '/advertising-screens-norwich'], ['Contact', '/contact-leman-cave-norwich']]) },
        { title: 'MORE', links: L([['Who it’s for', '/parties-and-events-norwich'], ['All locations', '/locations'], ['Latest blog posts', '/blog'], ['Guides', '/guides'], ['Corporate Events', '/corporate-events-norwich'], ['Comparisons', '/guides']]) }
      ],
      brands: [
        { name: 'Race Car Graphics UK', href: 'https://racecargraphics.uk/', logo: '/images/af46cb048a3538fff3ada1542e3a6666.png' },
        { name: 'Broadland Digital', href: 'https://broadlanddigital.co.uk/', logo: '/images/3af5e52699d5da909dbac3e38fd47a32.svg' },
        { name: 'Consensus Media', href: '#', logo: '/images/8ca017d8a0e0e8edd2c55f414a56e8af.svg' },
        { name: 'Auto Opulence', href: 'https://autoopulence.co.uk/', logo: '/images/30d005beeac001ad9a9af4176bcf0bb6.svg' }
      ]
    };
  }
  render() {
    const V = this.renderVals() || {};
    return (<>
<footer style={css("font-family: 'Barlow', system-ui, sans-serif; color: #E4E4E7; border-top: 1px solid #1F1F23; background: #060608")}>
<div className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 64px 40px 48px; display: flex; flex-wrap: wrap; gap: 48px")}>
<div style={css("flex: 1 1 260px; display: flex; flex-direction: column; gap: 16px")}>
<A href="/" aria-label="LeMan Cave home"><img src="/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg" alt="LeMan Cave" style={css("width: 220px; height: auto; display: block; margin-left: -12px")} /></A>
<p style={css("margin: 0; color: #A1A1AA; font-size: 15px; line-height: 1.6; max-width: 280px")}>{"Norwich\u2019s motorsport entertainment venue \u2014 built for petrolheads, brilliant for everyone."}</p>
<A href="/book" style={css("align-self: flex-start; background: #ED2835; color: #09090B; font-weight: 700; font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; padding: 14px 20px; border-radius: 4px; text-decoration: none")}>{"Book now"}</A>
</div>
{(V.cols || []).map((c, $index) => (<React.Fragment key={$index}>
<nav aria-label={c.title} style={css("flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px")}>
<span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A; margin-bottom: 4px")}>{c.title}</span>
{(c.links || []).map((l, $index) => (<React.Fragment key={$index}>
<A href={l.href} style={css("color: #D4D4D8; font-size: 15px; text-decoration: none; padding: 2px 0")}>{l.label}</A>
</React.Fragment>))}
</nav>
</React.Fragment>))}
</div>
<div className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 32px 40px 40px; border-top: 1px solid #18181B")}>
<p style={css("margin: 0 0 18px; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.16em; color: #71717A")}>{"PART OF THE FAMILY"}</p>
<div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px")}>
{(V.brands || []).map((b, $index) => (<React.Fragment key={$index}>
<A href={b.href} aria-label={b.name} style={css("display: flex; align-items: center; justify-content: center; height: 104px; padding: 16px; box-sizing: border-box; border: 1px solid #27272A; border-radius: 6px; background: #0B0B0E")}>
<img src={b.logo} alt={b.name} style={css("max-height: 56px; max-width: 80%; width: auto; height: auto; display: block")} />
</A>
</React.Fragment>))}
</div>
</div>
<div className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 24px 40px 40px; border-top: 1px solid #18181B; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; font-size: 13px; color: #71717A")}>
<span>{"\u00a9 2026 LeMan Cave. All rights reserved."}</span>
<span>{"Norwich, Norfolk \u00b7 "}<A href="/site-map" style={css("color: #71717A")}>{"Site map"}</A>{" \u00b7 "}<A href="/privacy" style={css("color: #71717A")}>{"Privacy"}</A>{" \u00b7 "}<A href="/cookie-policy" style={css("color: #71717A")}>{"Cookie policy"}</A>{" \u00b7 "}<A href="#cookie-settings" style={css("color: #71717A")}>{"Cookie settings"}</A></span>
</div>
</footer>
</>);
  }
}
