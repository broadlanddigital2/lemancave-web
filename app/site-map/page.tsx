import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import { SITEMAP } from '../../lib/sitemap-data';

export const metadata: Metadata = { title: 'Site map', description: 'Every page on the LeMan Cave website.', alternates: { canonical: '/site-map' } };

export default function SiteMapPage() {
  return (
    <div style={{ fontFamily: "'Barlow', system-ui, sans-serif", color: '#E4E4E7', background: '#09090B', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #1F1F23' }}>
        <div className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', height: 92, display: 'flex', alignItems: 'center' }}>
          <Link href="/" aria-label="LeMan Cave home"><img src="/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg" alt="LeMan Cave" style={{ height: 80, width: 'auto', display: 'block' }} /></Link>
        </div>
      </header>
      <main className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '80px 40px 100px' }}>
        <h1 style={{ margin: '0 0 48px', fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.9, color: '#fff', textTransform: 'uppercase' }}>Site map</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 40 }}>
          {SITEMAP.map((g) => (
            <section key={g.title}>
              <h2 style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.14em', color: '#ED2835', textTransform: 'uppercase' }}>{g.title}</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {g.items.map((i) => (<li key={i.href}><Link href={i.href} style={{ color: '#E4E4E7', textDecoration: 'none', fontSize: 16 }}>{i.label}</Link></li>))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
