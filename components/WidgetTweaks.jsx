'use client';
import { useEffect } from 'react';

// Phones: the CRM's floating Search button (bottom left) and "Need help?" chat launcher (bottom right) shrink to small
// round icons so they don't sit over page text, and the chat's pop-up teaser stays hidden (the launcher still opens
// the chat, and "Search the site" is in the mobile menu). Both widgets draw inside their own shadow DOM, which page CSS
// can't reach, so this adds a style sheet inside each one once it appears. Loaded once from app/layout.tsx.
const STYLES = {
  'rcg-enquiry-bot': `@media (max-width: 760px) {
    .ao-launcher { width: 52px !important; height: 52px !important; min-width: 0 !important; padding: 0 !important;
      font-size: 0 !important; gap: 0 !important; justify-content: center !important; right: 14px !important; bottom: 14px !important; }
    .ao-launcher > :not(.ao-launcher-mark) { display: none !important; }
    .ao-launcher-mark { font-size: 18px !important; margin: 0 !important; }
    .ao-teaser { display: none !important; }
  }`,
  'site-search-root': `@media (max-width: 760px) {
    .fab { width: 44px !important; height: 44px !important; min-width: 0 !important; padding: 0 !important;
      font-size: 0 !important; gap: 0 !important; justify-content: center !important; left: 14px !important; bottom: 18px !important; opacity: 0.92; }
    .fab span { display: none !important; }
  }`,
};

function apply() {
  let left = 0;
  for (const [id, css] of Object.entries(STYLES)) {
    const root = document.getElementById(id)?.shadowRoot;
    if (!root) { left++; continue; }
    if (root.querySelector('style[data-lc-tweak]')) continue;
    const s = document.createElement('style');
    s.setAttribute('data-lc-tweak', '');
    s.textContent = css;
    root.appendChild(s);
  }
  return left;
}

export default function WidgetTweaks() {
  useEffect(() => {
    let tries = 0;
    const t = setInterval(() => { if (apply() === 0 || ++tries > 40) clearInterval(t); }, 500);
    return () => clearInterval(t);
  }, []);
  return null;
}
