import type { Metadata } from 'next';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = { title: 'Moving Services | Rashad the Helper', description: 'Explore Houston moving labor for truck loading, unloading, heavy lifting, furniture assembly, and rental-truck driving.' };

export default function ServicesPage() {
  return <main><SiteHeader />
    <section className="page-banner"><p className="eyebrow">Houston moving help</p><h1>The help<br /><em>your move needs.</em></h1><p>Rashad provides a moving truck, practical help, a dolly, moving blankets, a toolkit, and a straight answer about the job.</p><a className="button button-primary" href="/#booking">Request a move <ArrowDownRight size={18} /></a></section>
    <section className="section service-directory"><div className="directory-intro"><p className="eyebrow">Services at a glance</p><h2>Pick a starting point.</h2><p>Not sure which one fits? Describe the full job in your request and Rashad can help sort it out.</p></div>
      <div className="directory-list">{services.map(service => <article key={service.slug}><div><span>{service.number}</span><h2>{service.title}</h2></div><p>{service.summary}</p><ul>{service.bestFor.map(item => <li key={item}><Check size={15} /> {item}</li>)}</ul><a href={`/services/${service.slug}`}>Service details <ArrowUpRight size={18} /></a></article>)}</div>
    </section>
    <section className="simple-cta"><div><p className="eyebrow">Straight-up pricing</p><h2>Starting at<br />$50/hour.</h2></div><div><p>Truck and moving equipment are available. Your move date is booked only after Rashad confirms the job directly.</p><a className="button button-primary" href="/#booking">Check availability <ArrowDownRight size={18} /></a></div></section>
    <SiteFooter /><MobileBookingBar />
  </main>;
}
