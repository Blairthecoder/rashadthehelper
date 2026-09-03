'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  startZip: string;
  endZip: string;
  truck: string;
  details: string;
};

const initial: FormState = {
  name: '', phone: '', email: '', service: '', date: '', startZip: '', endZip: '', truck: '', details: '',
};

export function BookingForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const summary = useMemo(() => [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || 'Not provided'}`,
    `Service: ${form.service}`,
    `Preferred date: ${form.date}`,
    `Starting ZIP: ${form.startZip}`,
    `Destination ZIP: ${form.endZip || 'Same location / not provided'}`,
    `Truck needs: ${form.truck || 'Use Rashad’s moving truck'}`,
    `Job details: ${form.details || 'None provided'}`,
  ].join('\n'), [form]);

  function update(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    const body = new URLSearchParams({
      'form-name': 'move-request',
      subject: `Move request from ${form.name} — ${form.date}`,
      ...form,
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Your request could not be sent just now. Copy the details below and send them to Rashad through Instagram or TikTok.');
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  async function copyRequest() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  }

  if (submitted) {
    return (
      <div className="booking-form success-panel" role="status">
        <span className="success-icon" aria-hidden="true">✓</span>
        <p className="form-step">{error ? 'Keep your request handy' : 'Request received'}</p>
        <h3>{error ? 'We saved your details below.' : 'Thanks—your move details are on their way.'}</h3>
        <p>{error || 'Rashad will review the job and respond directly about availability. Your date is not booked until he confirms it with you.'}</p>
        {error && <pre>{summary}</pre>}
        {error && <button className="button button-dark" type="button" onClick={copyRequest}>▣ {copied ? 'Copied' : 'Copy request'}</button>}
        <button className="form-reset" type="button" onClick={() => { setSubmitted(false); setCopied(false); }}>Edit details</button>
      </div>
    );
  }

  return (
    <form className="booking-form" name="move-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="move-request" />
      <input type="hidden" name="subject" value={`Move request from ${form.name || 'website visitor'}`} />
      <p className="honeypot-field" aria-hidden="true"><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <p className="form-step">Move request · about 2 minutes</p>
      <div className="form-grid">
        <label>Full name *<input required name="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label>
        <label>Mobile number *<input required name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(713) 555-0123" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" /></label>
        <label>What do you need? *
          <select required name="service" value={form.service} onChange={(e) => update('service', e.target.value)}>
            <option value="" disabled>Choose a service</option>
            <option value="Loading help">Loading help</option>
            <option value="Unloading help">Unloading help</option>
            <option value="Loading and unloading">Loading and unloading</option>
            <option value="Heavy lifting / in-home move">Heavy lifting / in-home move</option>
            <option value="Furniture assembly">Furniture assembly</option>
            <option value="Rental truck driving">Rental truck driving</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>Preferred date *<input required name="date" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} /></label>
        <label>Starting ZIP code *<input required name="startZip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.startZip} onChange={(e) => update('startZip', e.target.value)} placeholder="77002" /></label>
        <label>Destination ZIP<input name="endZip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.endZip} onChange={(e) => update('endZip', e.target.value)} placeholder="If different" /></label>
        <label>Truck needs<input name="truck" value={form.truck} onChange={(e) => update('truck', e.target.value)} placeholder="Use Rashad’s truck or describe yours" /></label>
        <label className="full-field">Anything Rashad should know?<textarea name="details" value={form.details} onChange={(e) => update('details', e.target.value)} placeholder="Stairs, elevator, heavy items, parking distance, furniture to assemble, or timing details…" /></label>
      </div>
      <button className="button button-dark submit-button" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send my move details'} <ArrowGlyph /></button>
      <p className="form-fineprint">A request does not guarantee availability. Rashad confirms the job directly.</p>
    </form>
  );
}

function ArrowGlyph() {
  return <span aria-hidden="true">↘</span>;
}
