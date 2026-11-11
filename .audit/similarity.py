#!/usr/bin/env python3
"""Near-duplicate content audit for a static site build.

usage: similarity.py <build-dir> <groups.json> <out.json>

groups.json: [[group name, path regex], ...] — pages are compared only with siblings in the same group.
For each page the visible main text (header, nav, footer, scripts removed) is split into 5-word shingles and compared:
  unique_share  share of the page's shingles found on no other page in its group (how much is genuinely its own)
  max_sim       Jaccard similarity with its closest sibling, and which sibling that is
  words         visible words in the main content
Standard library only.
"""
import json, os, re, sys, html, hashlib, collections, random

build, groups_file, out_file = sys.argv[1:4]
groups = [(name, re.compile(rx)) for name, rx in json.load(open(groups_file))]

def page_path(f):
    rel = os.path.relpath(f, build).replace(os.sep, "/")
    if rel == "index.html": return "/"
    if rel.endswith("/index.html"): return "/" + rel[:-11]
    if rel.endswith(".html"): return "/" + rel[:-5]
    return None

def main_text(h):
    m = re.search(r"<main\b[^>]*>(.*)</main>", h, re.S | re.I)
    body = m.group(1) if m else h
    body = re.sub(r"<(script|style|noscript|template|svg|header|footer|nav)\b.*?</\1>", " ", body, flags=re.S | re.I)
    body = re.sub(r"<[^>]+>", " ", body)
    return html.unescape(re.sub(r"\s+", " ", body)).strip()

def shingles(text, k=5):
    w = re.findall(r"[a-z0-9£']+", text.lower())
    return w, {hashlib.blake2b(" ".join(w[i:i + k]).encode(), digest_size=8).hexdigest() for i in range(max(0, len(w) - k + 1))}

pages = {}
for root, _, files in os.walk(build):
    for fn in files:
        if not fn.endswith(".html"): continue
        f = os.path.join(root, fn); p = page_path(f)
        if p is None or "/404" in p: continue
        h = open(f, encoding="utf-8", errors="ignore").read()
        if re.search(r'<meta[^>]+name="robots"[^>]+noindex', h, re.I): continue
        canon = re.search(r'<link rel="canonical" href="https?://[^/]+([^"]*)"', h)
        if canon and canon.group(1).rstrip("/") and canon.group(1).rstrip("/") != p.rstrip("/"): continue  # canonicalised elsewhere
        for name, rx in groups:
            if rx.search(p):
                words, sh = shingles(main_text(h)); pages[p] = (name, len(words), sh); break

report = {}
for name, _ in groups:
    members = {p: v for p, v in pages.items() if v[0] == name}
    if len(members) < 2: continue
    freq = collections.Counter(s for _, _, sh in members.values() for s in sh)
    # inverted index on shingles shared by few pages, to find each page's closest sibling without n² comparisons
    index = collections.defaultdict(list)
    for p, (_, _, sh) in members.items():
        for s in sh:
            if 1 < freq[s] <= 50: index[s].append(p)
    rows = []
    paths = list(members)
    for p, (_, n, sh) in members.items():
        uniq = sum(1 for s in sh if freq[s] == 1) / len(sh) if sh else 0
        cand = collections.Counter(q for s in sh if s in index for q in index[s] if q != p)
        pool = [q for q, _ in cand.most_common(8)] + random.Random(p).sample(paths, min(8, len(paths)))
        best, best_sim = None, 0.0
        for q in set(pool) - {p}:
            o = members[q][2]
            sim = len(sh & o) / len(sh | o) if sh or o else 0
            if sim > best_sim: best, best_sim = q, sim
        rows.append({"path": p, "words": n, "unique_share": round(uniq, 3), "max_sim": round(best_sim, 3), "closest": best})
    rows.sort(key=lambda r: r["unique_share"])
    us = sorted(r["unique_share"] for r in rows)
    report[name] = {"pages": len(rows), "median_unique": us[len(us) // 2], "median_words": sorted(r["words"] for r in rows)[len(rows) // 2],
                    "under_15pct_unique": sum(1 for u in us if u < .15), "under_30pct_unique": sum(1 for u in us if u < .30), "rows": rows}
json.dump(report, open(out_file, "w"), indent=1)
for name, r in report.items():
    print(f"{name:34} pages={r['pages']:5} median unique={r['median_unique']:.0%} median words={r['median_words']:5} <15%={r['under_15pct_unique']:4} <30%={r['under_30pct_unique']:4}")
