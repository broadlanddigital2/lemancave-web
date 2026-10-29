'use client';
import { pageWithAdClick } from './AdClick';
import React, { useState } from 'react';

/**
 * Wraps every enquiry / contact / quote form from the design.
 * Collects all named fields, plus any selected "chip" buttons (aria-pressed="true")
 * grouped by their <fieldset><legend>, and POSTs JSON to /api/enquiry,
 * which forwards it to the booking system / CRM (see app/api/enquiry/route.ts).
 */
export default function EnquiryForm({ formType = 'enquiry', children, ...rest }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    // chip selections (event type, activities, voucher value...)
    form.querySelectorAll('fieldset').forEach((fs) => {
      const legend = fs.querySelector('legend');
      const picked = [...fs.querySelectorAll('button[aria-pressed="true"]')].map((b) => b.textContent.trim());
      if (legend && picked.length) {
        const key = legend.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
        fields[key] = picked.join(', ');
      }
    });
    const payload = {
      formType,
      fields,
      page: typeof window !== 'undefined' ? pageWithAdClick() : '',
      submittedAt: new Date().toISOString(),
    };
    setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error'); setError(err.message || 'Something went wrong');
    }
  }

  return (
    <form {...rest} onSubmit={onSubmit} noValidate={false}>
      {children}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div aria-live="polite" style={{ fontSize: 15, lineHeight: 1.5, minHeight: 0 }}>
        {status === 'sending' && <p style={{ margin: 0, color: '#A1A1AA' }}>Sending…</p>}
        {status === 'sent' && <p style={{ margin: 0, color: '#4ADE80' }}>Thanks — we’ve got your enquiry and will be in touch shortly.</p>}
        {status === 'error' && <p style={{ margin: 0, color: '#ED2835' }}>Sorry, that didn’t send ({error}). Please try again or email bookings@lemancave.co.uk.</p>}
      </div>
    </form>
  );
}
