import {
  ArrowDownRight,
  Check,
  MapPin,
  Play,
} from 'lucide-react';
import { BookingForm } from './booking-form';

const services = [
  {
    number: '01',
    title: 'Load your truck',
    text: 'Smart, careful loading for rental trucks, trailers, PODS, and storage containers.',
  },
  {
    number: '02',
    title: 'Unload & place',
    text: 'Boxes and furniture carried in and placed where you want them — not left at the door.',
  },
  {
    number: '03',
    title: 'Lift the heavy stuff',
    text: 'An extra set of hands for couches, mattresses, appliances, and room-to-room moves.',
  },
  {
    number: '04',
    title: 'Build it back',
    text: 'Basic furniture disassembly and reassembly with a toolbox brought to the job.',
  },
  {
    number: '05',
    title: 'Help drive',
    text: 'Local or long-distance rental truck driving support when agreed to before move day.',
  },
];

const faqs = [
  ['Do you bring a moving truck?', 'No. This is a labor-only service, so you provide the rental truck, trailer, container, or storage unit. Rashad brings the moving help and equipment listed here.'],
  ['What equipment do you bring?', 'Rashad brings a dolly, moving blankets, and a toolbox for basic furniture assembly and disassembly. Tell him about especially large or unusual items when you request a time.'],
  ['Can you drive my U-Haul or rental truck?', 'Yes, driving help may be available for local and long-distance moves. Include the pickup, destination, truck size, and expected route in your request so Rashad can confirm.'],
  ['How much does it cost?', 'Moving labor is $50 per hour. Your request helps Rashad understand the job before he confirms availability and an estimated time.'],
  ['Where do you work?', 'Rashad is based in Houston, Texas. Send the starting ZIP code and destination with your request so he can confirm travel and availability.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Rashad the Helper',
    description: 'Independent moving labor in Houston for loading, unloading, heavy lifting, furniture assembly and rental truck driving.',
    areaServed: { '@type': 'City', name: 'Houston' },
    address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
    priceRange: '$50 per hour',
    sameAs: [
      'https://www.instagram.com/rashadthehelper/',
      'https://www.tiktok.com/@rashadthehelper',
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rashad the Helper, home">
          <span className="brand-mark">RH</span>
          <span>Rashad the Helper</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="#booking" className="nav-cta">Book Rashad</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><MapPin size={15} /> Houston, Texas</p>
          <h1>You bring the truck.<br /><em>I bring the help.</em></h1>
          <p className="hero-lede">
            Honest, independent moving labor for loading, unloading, heavy lifting,
            furniture setup, and driving your rental truck.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              Check availability <ArrowDownRight size={19} />
            </a>
            <a className="button button-ghost" href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer">
              <Play size={18} /> Watch Rashad work
            </a>
          </div>
          <ul className="quick-trust" aria-label="Service benefits">
            <li><Check size={16} /> Dolly included</li>
            <li><Check size={16} /> Tools included</li>
            <li><Check size={16} /> Moving blankets included</li>
          </ul>
        </div>

        <div className="hero-card" aria-label="Rashad's hourly rate">
          <p className="card-kicker">Straight-up pricing</p>
          <div className="rate"><span>$</span>50</div>
          <p className="rate-unit">per hour · labor only</p>
          <div className="rule" />
          <p className="card-note">No truck included. You rent it — Rashad can load it, unload it, and even help drive it.</p>
          <span className="availability"><i /> Request your move date</span>
        </div>
      </section>

      <section className="service-ticker" aria-label="Available services">
        <span>Loading</span><b>↗</b><span>Unloading</span><b>↗</b><span>Heavy lifting</span><b>↗</b><span>Assembly</span><b>↗</b><span>Truck driving</span>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Moving labor in Houston</p>
            <h2>What do you<br />need help with?</h2>
          </div>
          <p>Moving a whole apartment or just one heavy piece? Tell Rashad the job. He’ll tell you if he can help.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
          <a className="service-card service-card-cta" href="#booking">
            <span>06</span>
            <h3>Something else?</h3>
            <p>Describe the job and ask. Straight answers, no runaround.</p>
            <strong>Start a request <ArrowDownRight size={18} /></strong>
          </a>
        </div>
      </section>

      <section className="work-section" id="how-it-works">
        <div className="work-copy">
          <p className="eyebrow">How it works</p>
          <h2>Three steps.<br />Then we move.</h2>
          <p className="body-copy">No call-center handoffs. Your booking request goes straight to Rashad with the details he needs to check the job.</p>
          <a href="#booking" className="text-link">Tell me about your move <ArrowDownRight size={18} /></a>
        </div>
        <ol className="steps">
          <li><span>1</span><div><h3>Send the details</h3><p>Date, ZIP codes, stairs, truck size, and what needs lifting.</p></div></li>
          <li><span>2</span><div><h3>Get confirmation</h3><p>Rashad reviews the request and follows up directly to confirm availability.</p></div></li>
          <li><span>3</span><div><h3>Be ready to move</h3><p>Have the truck and items ready. Rashad arrives with his dolly, blankets, and tools.</p></div></li>
        </ol>
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <span className="proof-tag">Straight from social</span>
          <blockquote>“I’m Rashad the Helper. You rent the truck, and I’ll help you move.”</blockquote>
          <p>The same straightforward helper Houstonians found on social media — now with a faster way to request a job.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.tiktok.com/@rashadthehelper" target="_blank" rel="noreferrer">TikTok ↗</a>
          </div>
        </div>
        <div className="photo-frame">
          <img src="/og.png" alt="Rashad the Helper moving service preview with a helper beside a rental truck" />
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-intro">
          <p className="eyebrow">Request a time</p>
          <h2>Tell me<br />about your move.</h2>
          <p>Complete the details once. Rashad gets a clean summary so he can respond with availability.</p>
          <ul>
            <li><Check size={16} /> No payment required to request</li>
            <li><Check size={16} /> Your date is not booked until confirmed</li>
            <li><Check size={16} /> $50/hour labor-only rate</li>
          </ul>
        </div>
        <BookingForm />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Good to know</p><h2>Before you book.</h2></div>
          <p>Clear answers make move day easier. If your question is not here, include it in the request.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>0{index + 1}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="location-cta">
        <p className="eyebrow"><MapPin size={15} /> Houston based</p>
        <h2>Need a hand<br />with your move?</h2>
        <a className="button button-primary" href="#booking">Request Rashad <ArrowDownRight size={19} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">RH</span><span>Rashad the Helper</span></a>
        <p>Independent moving labor · Houston, Texas</p>
        <div><a href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@rashadthehelper" target="_blank" rel="noreferrer">TikTok</a></div>
      </footer>
    </main>
  );
}
