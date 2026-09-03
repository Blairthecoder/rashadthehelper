import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowDownRight, ArrowLeft, Check, MapPin } from 'lucide-react';
import { getService, services } from '../../service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from '../../site-shell';

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  const title = `${service.title} in Houston | Rashad the Helper`;
  return {
    title,
    description: service.summary,
    openGraph: { title, description: service.summary, url: `/services/${service.slug}`, images: [] },
    twitter: { title, description: service.summary, images: [] },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <main><SiteHeader />
    <section className="detail-hero"><div><a className="back-link" href="/services"><ArrowLeft size={16} /> All services</a><p className="eyebrow">Service {service.number} · Houston, TX</p><h1>{service.title}</h1><p>{service.intro}</p><a className="button button-primary" href="/#booking">Request This Service <ArrowDownRight size={18} /></a></div><aside><span>Starting rate</span><strong><small>$</small>50</strong><p>per hour · truck & equipment available</p><hr /><p><MapPin size={15} /> Houston & nearby communities</p></aside></section>
    <section className="detail-content section"><div><p className="eyebrow">What is included</p><h2>Useful Help, Clear Scope</h2></div><div className="check-panel">{service.included.map(item => <p key={item}><Check size={17} />{item}</p>)}</div></section>
    <section className="prep-section"><div><p className="eyebrow">Before Rashad arrives</p><h2>A Little Prep Keeps Move Day Moving</h2></div><ol>{service.prepare.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol></section>
    <section className="best-for section"><div><p className="eyebrow">A good fit for</p><h2>{service.shortTitle}</h2></div><div>{service.bestFor.map(item => <span key={item}>{item}</span>)}</div></section>
    <section className="simple-cta"><div><p className="eyebrow">Have the details?</p><h2>Let’s Talk About Your Move</h2></div><div><p>Include the date, ZIP codes, stairs, truck size, and anything unusually heavy.</p><a className="button button-primary" href="/#booking">Check Availability <ArrowDownRight size={18} /></a></div></section>
    <SiteFooter /><MobileBookingBar />
  </main>;
}
