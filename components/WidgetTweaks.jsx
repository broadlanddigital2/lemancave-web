'use client';
import { useEffect } from 'react';

// The CRM widgets draw inside their own shadow DOM, which page CSS can't reach, so this adds a style sheet inside
// each one once it appears. Google reviews block: brand colours and type everywhere.
// Phones: the CRM's floating Search button (bottom left) and "Need help?" chat launcher (bottom right) shrink to small
// round icons so they don't sit over page text, and the chat's pop-up teaser stays hidden (the launcher still opens
// the chat, and "Search the site" is in the mobile menu). Loaded once from app/layout.tsx.
const STYLES = {
  'rcg-enquiry-bot': `@media (max-width: 760px) {
    .ao-launcher { width: 52px !important; height: 52px !important; min-width: 0 !important; padding: 0 !important;
      font-size: 0 !important; gap: 0 !important; justify-content: center !important; right: 14px !important; bottom: 14px !important; }
    .ao-launcher > :not(.ao-launcher-mark) { display: none !important; }
    .ao-launcher-mark { font-size: 18px !important; margin: 0 !important; }
    .ao-teaser { display: none !important; }
  }`,
  // Google reviews block: brand colours and heading type on every screen size
  'crm-google-reviews': `.wrap { --bg: #0F0F12; --card: #131316; --line: #27272A; --muted: #A1A1AA; border-top: 1px solid #1F1F23; }
    h2 { font-family: 'Big Shoulders Display', sans-serif !important; font-weight: 900 !important; text-transform: uppercase; letter-spacing: 0 !important; line-height: 0.95 !important; }
    .score b { font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; }
    .eyebrow { font-family: 'JetBrains Mono', monospace; font-weight: 500; color: #ED2835; }
    .btn { border-radius: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
    .card { border-radius: 8px; }
    @media (max-width: 760px) { .in { padding: 0 20px; } .head { gap: 16px; } .score { width: 100%; } }`,
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
    // Keep checking: the reviews block is re-created on some page changes, and widgets load at different times.
    const t = setInterval(apply, 1000);
    apply();
    return () => clearInterval(t);
  }, []);
  return null;
}
