'use client';
import React, { useEffect, useRef } from 'react';

// Where the blog goes on the /blog shell page (inserted by scripts/convert_design.py for <div data-crm-blog="slot">).
// The worker (worker/crm-blog.js) puts the CRM blog list or post into this div and also into window.__crmBlog; when
// React takes over the page it would empty the div, so this puts the blog (and its page title) back.
export default function BlogSlot() {
  const ref = useRef(null);
  useEffect(() => {
    const d = typeof window !== 'undefined' ? window.__crmBlog : null;
    if (!d || !ref.current) return;
    if (!ref.current.innerHTML.trim()) ref.current.innerHTML = d.html;
    if (d.title && document.title !== d.title) document.title = d.title;
  }, []);
  return <div ref={ref} data-crm-blog="slot" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '' }} />;
}
