import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  ShieldCheck,
  Truck,
  UserRoundCheck,
  Wrench,
} from 'lucide-react';
import { BookingForm } from './booking-form';
import { serviceAreas, services } from './service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from './site-shell';

const faqs = [
  ['Do you bring a moving truck?', 'No. This is a labor-only service, so you provide the rental truck, trailer, container, or storage unit. Rashad brings the moving help and equipment listed here.'],
  ['What equipment do you bring?', 'Rashad brings a dolly, moving blankets, and a toolbox for basic furniture assembly and disassembly. Tell him about especially large or unusual items when you request a time.'],
  ['Can you drive my U-Haul or rental truck?', 'Driving help may be available for local and long-distance moves. Include the pickup, destination, truck size, and expected route in your request so Rashad can confirm.'],
  ['How much does it cost?', 'Moving labor starts at $50 per hour. Your request helps Rashad understand the job before he confirms availability and an estimated time.'],
  ['Where do you work?', 'Rashad is based in Houston and considers jobs across Greater Houston. Send the starting ZIP code and destination so he can confirm travel and availability.'],
];

const serviceIcons = [Truck, PackageCheck, ShieldCheck, Wrench, Route];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Rashad the Helper',
    description: 'Independent moving labor in Houston for loading, unloading, heavy lifting, furniture assembly and rental truck driving.',
    areaServed: { '@type': 'City', name: 'Houston' },
    address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
    priceRange: '$50 per hour',
    sameAs: ['https://www.instagram.com/rashadthehelper/', 'https://www.tiktok.com/@rashadthehelper'],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><MapPin size={15} /> Local moving help in Greater Houston</p>
          <h1>Moving help<br />without the<br /><em>guesswork.</em></h1>
          <p className="hero-lede">Tell Rashad what you are moving, where it is going, and when you need help. You will get a direct answer—no call center and no confusing packages.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">Request your move <ArrowDownRight size={19} /></a>
            <a className="button button-ghost" href="/services">View services <ArrowUpRight size={18} /></a>
          </div>
          <ul className="quick-trust" aria-label="Service benefits">
            <li><Check size={16} /> $50 per hour</li>
            <li><Check size={16} /> Equipment included</li>
            <li><Check size={16} /> Direct confirmation</li>
          </ul>
        </div>
        <div className="move-plan" aria-label="What to include in your request">
          <div className="move-plan-heading"><span>Your move plan</span><strong>Start with the basics</strong></div>
          <ul>
            <li><CalendarDays size={21} /><div><strong>Your date</strong><span>Preferred day and time</span></div></li>
            <li><MapPin size={21} /><div><strong>Your route</strong><span>Starting and destination ZIPs</span></div></li>
            <li><Truck size={21} /><div><strong>Your setup</strong><span>Truck size, stairs, and access</span></div></li>
            <li><PackageCheck size={21} /><div><strong>Your items</strong><span>Furniture and anything extra heavy</span></div></li>
          </ul>
          <div className="move-plan-footer"><Clock3 size={18} /><p><strong>About 2 minutes</strong><span>to prepare your request</span></p><a href="#booking" aria-label="Start your moving request"><ArrowDownRight size={20} /></a></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service summary">
        <div><CircleDollarSign size={21} /><span><strong>$50/hour</strong><small>straightforward labor rate</small></span></div>
        <div><Truck size={21} /><span><strong>Labor only</strong><small>you provide the truck</small></span></div>
        <div><Wrench size={21} /><span><strong>Useful gear</strong><small>dolly, blankets, and tools</small></span></div>
        <div><MapPin size={21} /><span><strong>Houston based</strong><small>nearby areas considered</small></span></div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">How Rashad can help</p><h2>Choose the help<br />your move needs.</h2></div>
          <p>From one heavy item to a full rental truck, start with the service that sounds closest. You can explain the whole job in your request.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <a className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span className="service-card-top"><span className="service-icon"><Icon size={22} /></span><small>{service.number}</small></span>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <span className="service-card-link">See what is included <ArrowRight size={17} /></span>
              </a>
            );
          })}
        </div>
        <a className="text-link section-link" href="/services">Compare every service <ArrowRight size={18} /></a>
      </section>

      <section className="confidence-section">
        <div className="confidence-intro">
          <p className="eyebrow">Plan with confidence</p>
          <h2>Know what to expect before move day.</h2>
          <p>Clear responsibilities make the day easier. Rashad confirms the scope with you directly before the job.</p>
          <a href="#booking" className="text-link">Ask about your move <ArrowRight size={18} /></a>
        </div>
        <div className="expectation-card included-card">
          <span className="expectation-icon"><Check size={20} /></span>
          <h3>Rashad brings</h3>
          <ul><li>Hands-on moving labor</li><li>A dolly and moving blankets</li><li>Basic tools for simple furniture</li><li>Direct job confirmation</li></ul>
        </div>
        <div className="expectation-card customer-card">
          <span className="expectation-icon"><Truck size={20} /></span>
          <h3>You provide</h3>
          <ul><li>The truck, trailer, or container</li><li>Sealed boxes and clear walkways</li><li>Parking and access details</li><li>Notice of unusually heavy items</li></ul>
        </div>
      </section>

      <section className="work-section" id="how-it-works">
        <div className="work-copy">
          <p className="eyebrow">Simple from the start</p>
          <h2>Three steps to a smoother move.</h2>
          <p className="body-copy">Share the useful details once. Rashad reviews the job and follows up directly.</p>
          <a href="#booking" className="button button-light">Start your request <ArrowDownRight size={18} /></a>
        </div>
        <ol className="steps">
          <li><span>1</span><div><h3>Tell us about the move</h3><p>Date, ZIP codes, stairs, truck size, and what needs lifting.</p></div></li>
          <li><span>2</span><div><h3>Get a direct response</h3><p>Rashad reviews the details and confirms availability and scope.</p></div></li>
          <li><span>3</span><div><h3>Get moving</h3><p>Have the truck and items ready. Rashad arrives with the agreed equipment.</p></div></li>
        </ol>
      </section>

      <section className="area-section">
        <div className="area-copy">
          <p className="eyebrow"><MapPin size={15} /> Greater Houston</p>
          <h2>Local help for moves across the Houston area.</h2>
          <p>Send your starting and destination ZIP codes. Rashad will confirm travel and availability before you make plans around the date.</p>
          <a className="button button-dark" href="/service-areas">Check service areas <ArrowRight size={18} /></a>
        </div>
        <div className="area-list">{serviceAreas.map((area) => <span key={area}><MapPin size={15} />{area}</span>)}</div>
      </section>

      <section className="direct-section section">
        <div className="direct-copy">
          <p className="eyebrow">Personal, straightforward service</p>
          <h2>The person who reviews your request is the person helping with your move.</h2>
          <p>No dispatch chain or call-center handoff. Send the details, ask your questions, and get a clear answer directly from Rashad.</p>
          <div className="social-links"><a href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a><a href="https://www.tiktok.com/@rashadthehelper" target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="direct-points">
          <div><UserRoundCheck size={23} /><span><strong>One point of contact</strong><small>Talk directly with Rashad about your job.</small></span></div>
          <div><MessageCircle size={23} /><span><strong>Clear communication</strong><small>Get the scope and availability confirmed first.</small></span></div>
          <div><ShieldCheck size={23} /><span><strong>No surprise package</strong><small>Know the hourly labor rate and what you provide.</small></span></div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-intro">
          <p className="eyebrow">Request a time</p>
          <h2>Tell Rashad about your move.</h2>
          <p>The more useful detail you share now, the easier it is to confirm the job and prepare for move day.</p>
          <ul><li><Check size={16} /> No payment required to request</li><li><Check size={16} /> Your date is booked only after confirmation</li><li><Check size={16} /> Labor starts at $50 per hour</li></ul>
        </div>
        <BookingForm />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading split-heading"><div><p className="eyebrow">Frequently asked questions</p><h2>Helpful answers before you book.</h2></div><p>If your situation is different, include the question with your move details and Rashad can confirm what is possible.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="location-cta">
        <p className="eyebrow"><MapPin size={15} /> Houston moving help</p>
        <h2>Have a move coming up?</h2>
        <p>Send the date, route, truck size, and what needs moving. Rashad will take it from there.</p>
        <a className="button button-primary" href="#booking">Request availability <ArrowDownRight size={19} /></a>
      </section>
      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}
