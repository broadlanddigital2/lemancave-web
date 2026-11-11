import re,sys,html,os,collections,random,glob
build=sys.argv[1]; pattern=sys.argv[2]; n=int(sys.argv[3]) if len(sys.argv)>3 else 60
files=[f for f in glob.glob(build+'/**/index.html',recursive=True) if re.search(pattern,'/'+os.path.relpath(f,build)[:-11])]
random.seed(2); files=random.sample(files,min(n,len(files)))
def secs(h):
    m=re.search(r"<main\b[^>]*>(.*)</main>",h,re.S); b=m.group(1) if m else h
    b=re.sub(r"<(script|style|svg|template)\b.*?</\1>"," ",b,flags=re.S)
    out=[]
    for s in re.findall(r"<section\b[^>]*>.*?</section>",b,re.S):
        cls=(re.search(r'class="([^"]*)"',s) or [None,''])[1].split()[0] if re.search(r'class="([^"]*)"',s) else ''
        h2=re.search(r"<h2[^>]*>(.*?)</h2>",s,re.S); t=html.unescape(re.sub(r"<[^>]+>"," ",s)); t=re.sub(r"\s+"," ",t).strip()
        out.append((cls, re.sub(r"<[^>]+>","",h2.group(1)).strip()[:40] if h2 else '', t))
    return out
docs=[secs(open(f,encoding='utf8').read()) for f in files]
# per section class: avg words and share of sentences shared by >50% of sampled pages
sent=collections.Counter()
for d in docs:
    seen=set()
    for c,h,t in d:
        for s in re.split(r"(?<=[.!?])\s+",t):
            k=re.sub(r"[^a-z ]","",s.lower()).strip()
            if len(k)>25 and k not in seen: seen.add(k); sent[k]+=1
stats=collections.defaultdict(lambda:[0,0,0,''])
for d in docs:
    for c,h,t in d:
        w=len(t.split()); sh=sum(len(s.split()) for s in re.split(r"(?<=[.!?])\s+",t) if sent[re.sub(r"[^a-z ]","",s.lower()).strip()]>len(docs)*.5)
        st=stats[c]; st[0]+=1; st[1]+=w; st[2]+=sh; st[3]=st[3] or h
tot=sum(v[1] for v in stats.values())
for c,(k,w,sh,h) in sorted(stats.items(),key=lambda x:-x[1][1]):
    print(f"{c[:38]:38} {h[:34]:34} avg {w//k:5}w  shared {sh*100//max(w,1):3}%  ({w*100//tot}% of page)")
