import type { Metadata } from 'next';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = { title: 'Moving Services | Rashad the Helper', description: 'Explore Houston moving help with a moving truck, dolly, blankets, toolkit, loading, unloading, heavy lifting, and furniture assembly.' };

export default function ServicesPage() {
  return <main><SiteHeader />
    <section className="page-banner">
      <div>
        <p className="eyebrow">Houston moving help</p>
        <h1>The Help <em>Your Move Needs</em></h1>
        <p>Rashad provides a moving truck, practical help, a dolly, moving blankets, a toolkit, and a straight answer about the job.</p>
        <a className="button button-primary" href="/#booking">Request a Move <ArrowDownRight size={18} /></a>
      </div>
      <div className="banner-panel">
        <div><strong>$50 / Hour</strong><span>Straightforward moving labor, quoted before the date</span></div>
        <div><strong>Truck &amp; Equipment</strong><span>Moving truck, dolly, blankets, and a toolbox</span></div>
        <div><strong>Greater Houston</strong><span>Katy and Cypress out to Pearland and The Woodlands</span></div>
        <a className="button button-outline" href="tel:+15042098175">Call 504-209-8175</a>
      </div>
    </section>
    <section className="section service-directory"><div className="directory-intro"><p className="eyebrow">Services at a glance</p><h2>Pick a Starting Point</h2><p>Not sure which one fits? Describe the full job in your request and Rashad can help sort it out.</p></div>
      <div className="directory-list">{services.map(service => <article key={service.slug}><div><span>{service.number}</span><h2>{service.title}</h2></div><p>{service.summary}</p><ul>{service.bestFor.map(item => <li key={item}><Check size={15} /> {item}</li>)}</ul><a href={`/services/${service.slug}`}>Service details <ArrowUpRight size={18} /></a></article>)}</div>
    </section>
    <section className="simple-cta"><div><p className="eyebrow">Straight-up pricing</p><h2>Starting at $50/Hour</h2></div><div><p>Truck and moving equipment are available. Your move date is booked only after Rashad confirms the job directly.</p><a className="button button-primary" href="/#booking">Check Availability <ArrowDownRight size={18} /></a></div></section>
    <SiteFooter /><MobileBookingBar />
  </main>;
}
