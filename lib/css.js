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

export function css(str) {
  if (!str) return undefined;
  if (cache.has(str)) return cache.get(str);
  const style = {};
  for (const decl of splitDecls(str)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
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
