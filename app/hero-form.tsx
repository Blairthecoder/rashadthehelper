'use client';

import { FormEvent, useState } from 'react';

type QuickState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  startZip: string;
  endZip: string;
};

const initial: QuickState = { name: '', phone: '', email: '', service: '', date: '', startZip: '', endZip: '' };

/**
 * Short above-the-fold version of the booking form. It posts the same
 * `move-request` Netlify form as the full one, so both land in one inbox.
 */
export function HeroForm() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update(name: keyof QuickState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');

    const body = new URLSearchParams({
      'form-name': 'move-request',
      subject: `Quick request from ${form.name} — ${form.date}`,
      details: 'Sent from the homepage quick request form.',
      ...form,
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setState('sent');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="hero-form hero-form-done" role="status">
        <span className="success-icon" aria-hidden="true">✓</span>
        <h2>Got It — Thanks {form.name.split(' ')[0]}</h2>
        <p>Rashad reviews every request himself and will reach out about availability. Your date is not held until he confirms it.</p>
        <a className="button button-dark" href="#booking">Add the full move details</a>
      </div>
    );
  }

  return (
    <form className="hero-form" name="move-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="move-request" />
      <p className="honeypot-field" aria-hidden="true"><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="hero-form-head">
        <strong>Check Your Move Date</strong>
        <span>Takes About a Minute</span>
      </div>
      <div className="hero-form-grid">
        <label>Name<input required name="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label>
        <label>Mobile<input required name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(713) 555-0123" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" /></label>
        <label>Move Date<input required name="date" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} /></label>
        <label>What Do You Need?
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
        <label>Starting ZIP<input required name="startZip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.startZip} onChange={(e) => update('startZip', e.target.value)} placeholder="77002" /></label>
        <label>Destination ZIP<input name="endZip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={form.endZip} onChange={(e) => update('endZip', e.target.value)} placeholder="If different" /></label>
      </div>
      {state === 'error' && <p className="hero-form-error">That did not send. Call or text Rashad at 504-209-8175 and he will get you on the calendar.</p>}
      <button className="button button-primary hero-form-submit" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Check availability'}
      </button>
      <p className="hero-form-note">No payment now. Rashad confirms the job before your date is booked.</p>
    </form>
  );
}
