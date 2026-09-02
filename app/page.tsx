import { ArrowDownRight, ArrowUpRight, Check, MapPin, Play } from 'lucide-react';
import { BookingForm } from './booking-form';
import { serviceAreas, services } from './service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from './site-shell';

const faqs = [
  ['Do you bring a moving truck?', 'No. This is a labor-only service, so you provide the rental truck, trailer, container, or storage unit. Rashad brings the moving help and equipment listed here.'],
  ['What equipment do you bring?', 'Rashad brings a dolly, moving blankets, and a toolbox for basic furniture assembly and disassembly. Tell him about especially large or unusual items when you request a time.'],
  ['Can you drive my U-Haul or rental truck?', 'Driving help may be available for local and long-distance moves. Include the pickup, destination, truck size, and expected route in your request so Rashad can confirm.'],
  ['How much does it cost?', 'Moving labor is $50 per hour. Your request helps Rashad understand the job before he confirms availability and an estimated time.'],
  ['Where do you work?', 'Rashad is based in Houston and considers jobs across Greater Houston. Send the starting ZIP code and destination so he can confirm travel and availability.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'MovingCompany', name: 'Rashad the Helper',
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
          <p className="eyebrow"><MapPin size={15} /> Houston moving labor</p>
          <h1>You bring<br />the truck.<br /><em>I bring the help.</em></h1>
          <p className="hero-lede">One independent helper for the heavy work—loading, unloading, furniture, and rental-truck driving.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">Check availability <ArrowDownRight size={19} /></a>
            <a className="button button-ghost" href="/services">See every service <ArrowUpRight size={18} /></a>
          </div>
          <ul className="quick-trust" aria-label="Service benefits">
            <li><Check size={16} /> Dolly</li><li><Check size={16} /> Moving blankets</li><li><Check size={16} /> Basic tools</li>
          </ul>
        </div>
        <div className="hero-visual">
          <img src="/og.png" alt="Rashad the Helper beside a moving truck" />
          <div className="rate-stamp"><span>Labor only</span><strong><small>$</small>50</strong><span>per hour</span></div>
          <p className="visual-caption"><b>Move-day help without the moving-company runaround.</b><span>Houston, TX</span></p>
        </div>
      </section>

      <section className="quote-ribbon" aria-label="Quick service summary">
        <div><p>Need moving help?</p><h2>Share the date, ZIP codes, stairs, and truck size.</h2></div>
        <a className="button button-light" href="#booking">Start a request <ArrowDownRight size={18} /></a>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading"><div><p className="eyebrow">Moving services</p><h2>Choose the<br />help you need.</h2></div><p>Whole apartment or one heavy item, your request goes straight to Rashad. Open a service to see what is included and how to prepare.</p></div>
        <div className="service-rows">
          {services.map((service) => (
            <a className="service-row" href={`/services/${service.slug}`} key={service.slug}>
              <span className="service-number">{service.number}</span><h3>{service.shortTitle}</h3><p>{service.summary}</p><ArrowUpRight size={24} />
            </a>
          ))}
        </div>
        <a className="text-link section-link" href="/services">Compare all services <ArrowDownRight size={18} /></a>
      </section>

      <section className="work-section" id="how-it-works">
        <div className="work-copy"><p className="eyebrow">How it works</p><h2>Three steps.<br />Then we move.</h2><p className="body-copy">No call-center handoffs. Share the useful details once, then Rashad confirms the job directly.</p><a href="#booking" className="text-link">Tell me about your move <ArrowDownRight size={18} /></a></div>
        <ol className="steps">
          <li><span>1</span><div><h3>Send the details</h3><p>Date, ZIP codes, stairs, truck size, and what needs lifting.</p></div></li>
          <li><span>2</span><div><h3>Get confirmation</h3><p>Rashad reviews the job and follows up directly about availability.</p></div></li>
          <li><span>3</span><div><h3>Be ready to move</h3><p>Have the truck and items ready. Rashad arrives with his dolly, blankets, and tools.</p></div></li>
        </ol>
      </section>

      <section className="area-section">
        <div className="area-copy"><p className="eyebrow"><MapPin size={15} /> Greater Houston</p><h2>Based in Houston.<br />Ready to go where the move is.</h2><p>Ask about availability in Houston and nearby communities. Starting and destination ZIP codes help confirm travel before move day.</p><a className="button button-dark" href="/service-areas">Explore service areas <ArrowUpRight size={18} /></a></div>
        <div className="area-list">{serviceAreas.map((area, index) => <span key={area}><b>{String(index + 1).padStart(2, '0')}</b>{area}</span>)}</div>
      </section>

      <section className="proof-section">
        <div className="photo-frame"><img src="/og.png" alt="Rashad the Helper moving service preview" /></div>
        <div className="proof-copy"><span className="proof-tag">Straight from social</span><blockquote>“You rent the truck, and I’ll help you move.”</blockquote><p>See the same straightforward helper Houstonians found on social—then send the details when you are ready.</p><div className="social-links"><a href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer"><Play size={15} /> Instagram ↗</a><a href="https://www.tiktok.com/@rashadthehelper" target="_blank" rel="noreferrer">TikTok ↗</a></div></div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-intro"><p className="eyebrow">Request a time</p><h2>Tell me<br />about your move.</h2><p>Complete the details once. Rashad gets a clean summary so he can respond with availability.</p><ul><li><Check size={16} /> No payment required to request</li><li><Check size={16} /> Your date is not booked until confirmed</li><li><Check size={16} /> $50/hour labor-only rate</li></ul></div>
        <BookingForm />
      </section>

      <section className="section faq-section" id="faq"><div className="section-heading split-heading"><div><p className="eyebrow">Good to know</p><h2>Before you book.</h2></div><p>Clear answers make move day easier. If your question is not here, include it in the request.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></section>

      <section className="location-cta"><p className="eyebrow"><MapPin size={15} /> Houston based</p><h2>Need a hand<br />with your move?</h2><p>Tell Rashad what, when, and where. He’ll confirm the rest.</p><a className="button button-primary" href="#booking">Request Rashad <ArrowDownRight size={19} /></a></section>
      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}
