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
  const bookingEmail = process.env.NEXT_PUBLIC_BOOKING_EMAIL ?? '';

  const summary = useMemo(() => [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || 'Not provided'}`,
    `Service: ${form.service}`,
    `Preferred date: ${form.date}`,
    `Starting ZIP: ${form.startZip}`,
    `Destination ZIP: ${form.endZip || 'Same location / not provided'}`,
    `Truck or container: ${form.truck || 'Not provided'}`,
    `Job details: ${form.details || 'None provided'}`,
  ].join('\n'), [form]);

  function update(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (bookingEmail) {
      const subject = encodeURIComponent(`Moving request from ${form.name} — ${form.date}`);
      window.location.href = `mailto:${bookingEmail}?subject=${subject}&body=${encodeURIComponent(summary)}`;
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
        <p className="form-step">Request prepared</p>
        <h3>{bookingEmail ? 'Your email app is opening.' : 'This booking flow is ready to connect.'}</h3>
        <p>{bookingEmail ? 'Send the prepared email to deliver your move details to Rashad.' : 'For this pitch preview, the request is summarized below. Add Rashad’s preferred booking email at launch to route every submission directly to his inbox.'}</p>
        <pre>{summary}</pre>
        <button className="button button-dark" type="button" onClick={copyRequest}>▣ {copied ? 'Copied' : 'Copy request'}</button>
        <button className="form-reset" type="button" onClick={() => { setSubmitted(false); setCopied(false); }}>Edit details</button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <p className="form-step">Move request · about 2 minutes</p>
      <div className="form-grid">
        <label>Full name *<input required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label>
        <label>Mobile number *<input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(713) 555-0123" /></label>
        <label>Email address<input type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" /></label>
        <label>What do you need? *
          <select required value={form.service} onChange={(e) => update('service', e.target.value)}>
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
        <label>Preferred date *<input required type="date" value={form.date} onChange={(e) => update('date', e.target.value)} /></label>
        <label>Starting ZIP code *<input required inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.startZip} onChange={(e) => update('startZip', e.target.value)} placeholder="77002" /></label>
        <label>Destination ZIP<input inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.endZip} onChange={(e) => update('endZip', e.target.value)} placeholder="If different" /></label>
        <label>Truck / container size<input value={form.truck} onChange={(e) => update('truck', e.target.value)} placeholder="Example: 15 ft rental truck" /></label>
        <label className="full-field">Anything Rashad should know?<textarea value={form.details} onChange={(e) => update('details', e.target.value)} placeholder="Stairs, elevator, heavy items, parking distance, furniture to assemble, or timing details…" /></label>
      </div>
      <button className="button button-dark submit-button" type="submit">Prepare my request <ArrowGlyph /></button>
      <p className="form-fineprint">A request does not guarantee availability. Rashad confirms the job directly.</p>
    </form>
  );
}

function ArrowGlyph() {
  return <span aria-hidden="true">↘</span>;
}
