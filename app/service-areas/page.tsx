import type { Metadata } from 'next';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { serviceAreas } from '../service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = { title: 'Houston Service Areas | Rashad the Helper', description: 'Request moving labor in Houston and nearby Greater Houston communities. Travel and availability are confirmed by ZIP code.' };

export default function ServiceAreasPage() {
  return <main><SiteHeader />
    <section className="page-banner area-banner"><p className="eyebrow"><MapPin size={15} /> Service areas</p><h1>Houston based.<br /><em>Greater Houston ready.</em></h1><p>Rashad considers moving jobs across the metro area. Send both ZIP codes so travel, timing, and availability can be confirmed before the date.</p><a className="button button-primary" href="/#booking">Check your ZIP code <ArrowDownRight size={18} /></a></section>
    <section className="section area-directory"><div className="directory-intro"><p className="eyebrow">Common service areas</p><h2>Near Houston?<br />Start here.</h2><p>This list is a guide, not a hard boundary. Ask about your starting point and destination.</p></div><div className="area-cards">{serviceAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, '0')}</span><h2>{area}</h2><p>Availability confirmed by date, ZIP code, and job details.</p></article>)}</div></section>
    <section className="route-note"><div><p className="eyebrow">What to send</p><h2>Two ZIP codes make<br />a better moving plan.</h2></div><ul><li>Starting address or ZIP code</li><li>Destination address or ZIP code</li><li>Parking, stairs, or elevator details</li><li>Your preferred move date and time</li></ul></section>
    <section className="simple-cta"><div><p className="eyebrow">Not listed?</p><h2>Send the route.<br />Get a straight answer.</h2></div><div><p>Nearby and longer-distance requests are considered individually.</p><a className="button button-primary" href="/#booking">Ask about your move <ArrowDownRight size={18} /></a></div></section>
    <SiteFooter /><MobileBookingBar />
  </main>;
}
