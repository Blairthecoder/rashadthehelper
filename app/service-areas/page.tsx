import type { Metadata } from 'next';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { serviceAreas } from '../service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = { title: 'Houston Service Areas | Rashad the Helper', description: 'Request moving labor in Houston and nearby Greater Houston communities. Travel and availability are confirmed by ZIP code.' };

export default function ServiceAreasPage() {
  return <main><SiteHeader />
    <section className="page-banner area-banner">
      <div>
        <p className="eyebrow"><MapPin size={15} /> Service areas</p>
        <h1>Houston Based, <em>Greater Houston Ready</em></h1>
        <p>Rashad considers moving jobs across the metro area. Send both ZIP codes so travel, timing, and availability can be confirmed before the date.</p>
        <a className="button button-primary" href="/#booking">Check Your ZIP Code <ArrowDownRight size={18} /></a>
      </div>
      <div className="banner-panel">
        <div><strong>Send Two ZIP Codes</strong><span>Starting and destination, so travel time is priced honestly</span></div>
        <div><strong>Nearby Towns Count</strong><span>The list is a guide, not a hard boundary — just ask</span></div>
        <div><strong>Confirmed Before the Date</strong><span>Nothing is booked until Rashad says yes to the route</span></div>
        <a className="button button-outline" href="tel:+15042098175">Call 504-209-8175</a>
      </div>
    </section>
    <section className="section area-directory"><div className="directory-intro"><p className="eyebrow">Common service areas</p><h2>Near Houston? Start Here</h2><p>This list is a guide, not a hard boundary. Ask about your starting point and destination.</p></div><div className="area-cards">{serviceAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, '0')}</span><h2>{area}</h2><p>Availability confirmed by date, ZIP code, and job details.</p></article>)}</div></section>
    <section className="route-note"><div><p className="eyebrow">What to send</p><h2>Two ZIP Codes Make a Better Moving Plan</h2></div><ul><li>Starting address or ZIP code</li><li>Destination address or ZIP code</li><li>Parking, stairs, or elevator details</li><li>Your preferred move date and time</li></ul></section>
    <section className="simple-cta"><div><p className="eyebrow">Not listed?</p><h2>Send the Route, Get a Straight Answer</h2></div><div><p>Nearby and longer-distance requests are considered individually.</p><a className="button button-primary" href="/#booking">Ask About Your Move <ArrowDownRight size={18} /></a></div></section>
    <SiteFooter /><MobileBookingBar />
  </main>;
}
