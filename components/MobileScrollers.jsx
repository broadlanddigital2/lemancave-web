'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Phones: card grids become sideways swipe rows (CSS in app/globals.css, "Mobile tidy"). This adds the left and right
// arrow buttons under each row and keeps them in step with the scroll position. The CSS selector below must match the
// one in globals.css. Desktop is untouched. Loaded once from app/layout.tsx.
export const ROW = ':is(div[style*="grid-template-columns"]:has(> :nth-child(3)):is(:has(> a), :has(> article), :has(> div img), :has(> figure img)), .lc-hscroll):not(header *, footer :not(.lc-hscroll), .lc-gal, .lc-gallery, .lc-gallery *, .lc-noscroll, [style*="minmax(min("])';

function arrow(dir) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'lc-hs-btn';
  b.setAttribute('aria-label', dir < 0 ? 'Scroll left' : 'Scroll right');
  b.innerHTML = dir < 0 ? '&larr;' : '&rarr;';
  return b;
}

function enhance(row) {
  if (row.dataset.lcHs) return;
  row.dataset.lcHs = '1';
  const nav = document.createElement('div');
  nav.className = 'lc-hs-nav';
  const count = document.createElement('span');
  count.className = 'lc-hs-count';
  const prev = arrow(-1), next = arrow(1);
  nav.append(count, prev, next);
  row.after(nav);
  const items = () => [...row.children];
  const step = () => (items()[0]?.getBoundingClientRect().width || row.clientWidth) + 12;
  const update = () => {
    const max = row.scrollWidth - row.clientWidth - 2;
    prev.disabled = row.scrollLeft <= 2;
    next.disabled = row.scrollLeft >= max;
    const i = Math.min(items().length, Math.round(row.scrollLeft / step()) + 1);
    count.textContent = `${String(i).padStart(2, '0')} / ${String(items().length).padStart(2, '0')}`;
    nav.hidden = max <= 0;
  };
  prev.addEventListener('click', () => row.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => row.scrollBy({ left: step(), behavior: 'smooth' }));
  row.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

export default function MobileScrollers() {
  const pathname = usePathname();
  useEffect(() => {
    let rows;
    try { rows = document.querySelectorAll(ROW); } catch { return; } // browsers without :has() keep stacked cards
    rows.forEach(enhance);
  }, [pathname]);
  return null;
}
