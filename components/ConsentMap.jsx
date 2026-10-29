'use client';
import { useEffect, useState } from 'react';
import { readConsent } from './CookieConsent';

// A Google Maps embed that only loads once the visitor allows maps in the cookie banner, or clicks "Show map" (that
// shows it on this page only). Inserted by the converter (add_consent_maps) in place of the design's <iframe>.
export default function ConsentMap({ title, src, style, loading, referrerPolicy }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const check = () => { if (readConsent()?.maps) setShow(true); };
    check();
    window.addEventListener('lc:consent', check);
    return () => window.removeEventListener('lc:consent', check);
  }, []);
  if (show) return <iframe title={title} src={src} style={style} loading={loading} referrerPolicy={referrerPolicy} />;
  const q = (() => { try { return new URL(src).searchParams.get('q') || 'Le Man Cave, Norwich NR6 7BW'; } catch { return 'Le Man Cave, Norwich NR6 7BW'; } })();
  return (
    <div className="lc-map-off" style={{ ...style, filter: 'none' }} role="group" aria-label={title}>
      <p>The map loads from Google Maps, which sets its own cookies.</p>
      <div>
        <button type="button" onClick={() => setShow(true)}>Show map</button>
        <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q)} target="_blank" rel="noopener">Open in Google Maps</a>
      </div>
    </div>
  );
}
