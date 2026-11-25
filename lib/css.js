// Converts the design's inline CSS strings into React style objects (cached).
const cache = new Map();

function splitDecls(str) {
  const out = [];
  let depth = 0, quote = null, cur = '';
  for (const ch of str) {
    if (quote) { if (ch === quote) quote = null; cur += ch; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

// Large spacing and display type scale down on phones: padding, margin and gap of 48px or more, min-heights of 300px
// or more, font sizes of 40px or more (including the smallest size in a clamp()) and, more gently, of 28-39px are multiplied by CSS variables
// that are 1 on desktop and smaller under 760px (app/globals.css, "Mobile tidy"). Desktop renders exactly as designed.
const SPACING = /^(padding|margin|gap|row-gap|column-gap)(-(top|bottom|left|right))?$/;
const scale = (value, min, v) => value.replace(/(^|[\s(,])(\d+(?:\.\d+)?)px/g, (m, pre, n) =>
  Number(n) >= min ? `${pre}calc(${n}px * var(${v}, 1))` : m);

function scaled(prop, value) {
  if (value.includes('var(--lc-')) return value;
  if (SPACING.test(prop)) return scale(value, 48, '--lc-sp');
  if (prop === 'min-height') return scale(value, 300, '--lc-mh');
  if (prop === 'font-size') {
    const c = value.match(/^clamp\(\s*(\d+(?:\.\d+)?)px\s*,(.*)\)$/);
    if (c) return Number(c[1]) >= 40 ? `clamp(calc(${c[1]}px * var(--lc-fs, 1)),${c[2]})` : value;
    const big = scale(value, 40, '--lc-fs');
    return big !== value ? big : scale(value, 28, '--lc-fm');
  }
  return value;
}

export function css(str) {
  if (!str) return undefined;
  if (cache.has(str)) return cache.get(str);
  const style = {};
  for (const decl of splitDecls(str)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = scaled(decl.slice(0, i).trim(), decl.slice(i + 1).trim());
    if (!prop || !value) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/^-(webkit|moz|ms)-/, (m, v) => v.charAt(0).toUpperCase() + v.slice(1) + '-')
            .replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    style[key] = value;
  }
  cache.set(str, style);
  return style;
}
