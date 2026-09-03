import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Truck,
  UserRoundCheck,
  Wrench,
} from 'lucide-react';
import { InstagramIcon } from './brand-icons';
import { BookingForm } from './booking-form';
import { HeroForm } from './hero-form';
import { serviceAreas, services } from './service-data';
import { MobileBookingBar, SiteFooter, SiteHeader } from './site-shell';
import { instagramReels, instagramUrl, tiktokUrl } from './social-data';
import { TikTokFeed } from './tiktok-feed';

const faqs = [
  ['Do you bring a moving truck?', 'Yes. Rashad has a moving truck and can bring it for your move. Share the route, timing, and what you are moving so he can confirm the truck and job details with you.'],
  ['What equipment do you bring?', 'Rashad brings a dolly, moving blankets, and a toolbox for basic furniture assembly and disassembly. Tell him about especially large or unusual items when you request a time.'],
  ['Can you drive my U-Haul or rental truck?', 'Driving help may be available for local and long-distance moves. Include the pickup, destination, truck size, and expected route in your request so Rashad can confirm.'],
  ['How much does it cost?', 'Moving labor starts at $50 per hour. Your request helps Rashad understand the job before he confirms availability and an estimated time.'],
  ['Where do you work?', 'Rashad is based in Houston and considers jobs across Greater Houston, including Katy, Cypress, Sugar Land, Pearland, Spring, Humble, and The Woodlands. Send the starting ZIP code and destination so he can confirm travel and availability.'],
  ['How far in advance should I book?', 'Send your request as soon as you have a date. Weekends and the end of the month fill up first in Houston, so a week or more of notice gives you the best chance at your preferred time. Last-minute requests are still worth sending, since schedules do open up.'],
  ['Can you move a single item like a couch or washer?', 'Yes. Single-item jobs are common. Send the item, its rough weight, doorway widths, and how many stairs are involved so Rashad can confirm whether it is a one-person job before the date.'],
  ['Do you help with apartment moves that need an elevator reservation?', 'Yes, and it helps to book the elevator or loading zone with your building first. Share your move-out window and where the truck can park so the time is spent moving instead of waiting.'],
];

const serviceIcons = [Truck, PackageCheck, ShieldCheck, Wrench, Route];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MovingCompany',
        '@id': '#business',
        name: 'Rashad the Helper',
        description: 'Houston moving help with a moving truck, dolly, blankets, toolkit, loading, unloading, heavy lifting and furniture assembly.',
        telephone: '+1-504-209-8175',
        areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area })),
        address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
        priceRange: '$50 per hour',
        sameAs: [instagramUrl, tiktokUrl],
        makesOffer: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.summary },
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '50', priceCurrency: 'USD', unitCode: 'HUR' },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Owner-operated in Greater Houston</p>
          <h1>Houston Moving Help, Handled by Rashad</h1>
          <p className="hero-lede">Loading, unloading, heavy lifting, furniture assembly, and rental-truck driving — $50 an hour with the truck and equipment included in the plan.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+15042098175"><Phone size={17} /> Call or text: 504-209-8175</a>
            <a className="hero-social" href={instagramUrl} target="_blank" rel="noreferrer">13K+ following the work <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-stats">
            <div><strong>$50 / hour</strong><span>Straightforward labor rate</span></div>
            <div><strong>Truck &amp; equipment</strong><span>Dolly, blankets, toolkit</span></div>
            <div><strong>Greater Houston</strong><span>Katy to The Woodlands</span></div>
          </div>
        </div>
        <HeroForm />
      </section>

      <section className="reel-band" id="latest">
        <div className="reel-head">
          <div>
            <p className="eyebrow">Straight from the job</p>
            <h2>See the Work Before You Book</h2>
          </div>
          <div className="reel-head-side">
            <p>Thousands of people follow Rashad&apos;s moves. Swipe through recent jobs, real trucks, and real furniture.</p>
            <div className="reel-follow">
              <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon size={17} /> Follow on Instagram</a>
              <a className="button button-ghost" href={tiktokUrl} target="_blank" rel="noreferrer">Watch on TikTok <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="reel-grid">
          {instagramReels.slice(0, 4).map((code, index) => (
            <div className="reel-card" key={code}>
              <iframe
                src={`https://www.instagram.com/reel/${code}/embed/`}
                title={`Instagram post ${index + 1} from Rashad the Helper`}
                loading="lazy"
                scrolling="no"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
        <div className="reel-footer">
          <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon size={18} /> See every post on Instagram</a>
        </div>
      </section>

      <section className="answers-section">
        <div className="answers-grid">
          <article>
            <span className="answer-icon money"><CircleDollarSign size={26} /></span>
            <div>
              <h2>How Much Will My Move Cost?</h2>
              <p>Moving labor starts at $50 per hour. A one-bedroom load-out usually runs two to three hours. You get the scope confirmed before the date, not a surprise number on move day.</p>
              <a className="text-link" href="#details">See what jobs cost <ArrowRight size={17} /></a>
            </div>
          </article>
          <article>
            <span className="answer-icon truck"><Truck size={26} /></span>
            <div>
              <h2>What Does Rashad Bring?</h2>
              <p>A moving truck, a dolly, moving blankets, and a toolbox for basic furniture. If you already have a truck or a container, he works with what you have instead.</p>
              <a className="text-link" href="/services">Compare services <ArrowRight size={17} /></a>
            </div>
          </article>
          <article>
            <span className="answer-icon box"><PackageCheck size={26} /></span>
            <div>
              <h2>What Kinds of Moves?</h2>
              <p>Apartments and homes, storage units and PODS, single heavy items like appliances and safes, furniture assembly, and rental-truck loading or driving.</p>
              <a className="text-link" href="/services">See every service <ArrowRight size={17} /></a>
            </div>
          </article>
          <article>
            <span className="answer-icon calendar"><CalendarDays size={26} /></span>
            <div>
              <h2>How Do I Book a Date?</h2>
              <p>Send your date, both ZIP codes, and what needs moving. Rashad reviews it himself and confirms availability directly — nothing is booked until he says so.</p>
              <a className="text-link" href="#booking">Request a time <ArrowRight size={17} /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">How Rashad can help</p><h2>Choose the Help Your Move Needs</h2></div>
          <p>From one heavy item to a full rental truck, start with the service that sounds closest. You can explain the whole job in your request.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <a className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span className="service-card-top"><span className="service-icon"><Icon size={22} /></span><small>{service.number}</small></span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="service-card-tags">{service.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
                <span className="service-card-link">See what is included <ArrowRight size={17} /></span>
              </a>
            );
          })}
        </div>
        <p className="service-grid-note">Not sure which one fits? Describe the job in your own words when you <a href="#booking">request a time</a> and Rashad will tell you what it takes.</p>
      </section>

      <section className="confidence-section">
        <div className="confidence-intro">
          <p className="eyebrow">Plan with confidence</p>
          <h2>Know What to Expect Before Move Day</h2>
          <p>Clear responsibilities make the day easier. Rashad confirms the scope with you directly before the job.</p>
          <a href="#booking" className="text-link">Ask about your move <ArrowRight size={18} /></a>
        </div>
        <div className="expectation-card included-card">
          <span className="expectation-icon"><Check size={20} /></span>
          <h3>Rashad Provides</h3>
          <ul><li>A moving truck</li><li>Hands-on moving help</li><li>A dolly and moving blankets</li><li>A toolkit for simple furniture</li></ul>
        </div>
        <div className="expectation-card customer-card">
          <span className="expectation-icon"><Truck size={20} /></span>
          <h3>Have Ready</h3>
          <ul><li>Sealed and labeled boxes</li><li>Clear walkways for carrying</li><li>Parking and access details</li><li>Notice of unusually heavy items</li></ul>
        </div>
      </section>

      <section className="work-section" id="how-it-works">
        <div className="work-copy">
          <p className="eyebrow">Simple from the start</p>
          <h2>Three Steps to a Smoother Move</h2>
          <p className="body-copy">Share the useful details once. Rashad reviews the job and follows up directly.</p>
          <a href="#booking" className="button button-light">Start your request <ArrowDownRight size={18} /></a>
        </div>
        <ol className="steps">
          <li><span>1</span><div><h3>Tell Us About the Move</h3><p>Date, ZIP codes, stairs, truck size, and what needs lifting.</p></div></li>
          <li><span>2</span><div><h3>Get a Direct Response</h3><p>Rashad reviews the details and confirms availability and scope.</p></div></li>
          <li><span>3</span><div><h3>Get Moving</h3><p>Have your items ready. Rashad arrives with the moving truck and agreed equipment.</p></div></li>
        </ol>
      </section>

      <section className="section explainer-section" id="details">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Houston moving help, explained</p><h2>What Hiring Rashad Actually Looks Like</h2></div>
          <p>Most moving quotes hide the details until the truck shows up. Here is how the common jobs work, what they cost, and what changes the timeline.</p>
        </div>
        <div className="explainer-grid">
          <article>
            <h3>Apartment and High-Rise Moves</h3>
            <p>Apartment moves in Houston live or die on access. Elevator reservations, loading-zone rules, and long carries from the dock add real time to the job, so Rashad asks for your building&apos;s move-out window and parking situation up front. Third-floor walk-ups in Midtown and elevator buildings downtown get planned differently, and the hourly rate stays the same either way.</p>
          </article>
          <article>
            <h3>Storage Units, PODS, and Containers</h3>
            <p>Loading a storage unit or portable container is about stacking discipline, not speed. Rashad loads heavy furniture low and tight, uses moving blankets between surfaces, and leaves an aisle if you will need to reach items later. Storage clean-outs work the same way in reverse, with the truck available when items are moving to a new address.</p>
          </article>
          <article>
            <h3>Appliances and Heavy Single Items</h3>
            <p>Not every job is a full move. Plenty of calls are one washer, one sleeper sofa, or a gun safe that needs to reach a second floor. Send the item, its rough weight, the doorway widths, and how many stairs are involved — that is enough for Rashad to confirm whether it is a one-person job or needs a second set of hands.</p>
          </article>
          <article>
            <h3>Rental Trucks and Long-Distance Routes</h3>
            <p>If you have already reserved a U-Haul, Penske, or Budget truck, Rashad can load it, unload it at the other end, or drive it when that is arranged ahead of time. Rental agreements have to permit an additional driver, so send the rental company, truck size, and full route with your request and he will confirm what is possible before you commit to the date.</p>
          </article>
        </div>
        <div className="explainer-note">
          <p><strong>What moving labor costs in Houston.</strong> Rashad&apos;s rate starts at $50 per hour for moving labor. A studio or one-bedroom load-out typically runs two to three hours, a two-bedroom apartment three to five, and a full house is quoted after he sees the details. Stairs, long carries, packing that is not finished, and heavy specialty items are the four things that most often stretch a job past the estimate — which is exactly why the scope gets confirmed before move day rather than after.</p>
        </div>
      </section>

      <section className="area-section">
        <div className="area-copy">
          <p className="eyebrow"><MapPin size={15} /> Greater Houston</p>
          <h2>Local Help for Moves Across the Houston Area</h2>
          <p>Rashad is based in Houston and works jobs from Katy and Cypress out to Pearland, Sugar Land, Spring, Humble, and The Woodlands. Send your starting and destination ZIP codes and he will confirm travel and availability before you make plans around the date.</p>
          <div className="area-list">{serviceAreas.map((area) => <span key={area}><MapPin size={15} />{area}</span>)}</div>
          <a className="button button-dark" href="/service-areas">Check service areas <ArrowRight size={18} /></a>
        </div>
        <div className="area-map">
          <iframe
            src="https://www.google.com/maps?q=Houston,+Texas&output=embed"
            title="Map of the Greater Houston service area"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="why-section">
        <div className="why-heading">
          <p className="eyebrow">Why hire Rashad</p>
          <h2>More Than an Extra Set of Hands</h2>
          <p>The person who reviews your request is the person who shows up for your move. Here is what that gets you.</p>
        </div>
        <ol className="why-grid">
          <li>
            <span className="why-number">1</span>
            <UserRoundCheck size={30} />
            <h3>One Point of Contact</h3>
            <p>No dispatch chain and no call-center handoff. You talk to Rashad about your job, before and on move day.</p>
          </li>
          <li>
            <span className="why-number">2</span>
            <MessageCircle size={30} />
            <h3>Scope Confirmed First</h3>
            <p>Availability, hours, and what the job involves get settled before your date, so nothing gets renegotiated at the curb.</p>
          </li>
          <li>
            <span className="why-number">3</span>
            <CircleDollarSign size={30} />
            <h3>A Straight Hourly Rate</h3>
            <p>$50 an hour for moving labor. No packages to decode, no per-item pricing, no fuel surcharge invented on arrival.</p>
          </li>
          <li>
            <span className="why-number">4</span>
            <Truck size={30} />
            <h3>Truck and Gear Included</h3>
            <p>Moving truck, dolly, moving blankets, and a toolbox come with the job when your move needs them.</p>
          </li>
          <li>
            <span className="why-number">5</span>
            <ShieldCheck size={30} />
            <h3>Careful With Your Things</h3>
            <p>Blankets between surfaces, heavy pieces loaded low and tight, and walkways kept clear while the work is happening.</p>
          </li>
          <li>
            <span className="why-number">6</span>
            <MapPin size={30} />
            <h3>Houston Local</h3>
            <p>He knows the apartment complexes, the loading-zone rules, and which hours turn a short crosstown run into a long one.</p>
          </li>
        </ol>
        <div className="why-actions">
          <a className="button button-primary" href="#booking">Request a time <ArrowDownRight size={18} /></a>
          <a className="button button-ghost" href="tel:+15042098175"><Phone size={17} /> Call 504-209-8175</a>
        </div>
      </section>

      <section className="social-section" id="tiktok">
        <div className="social-heading">
          <p className="eyebrow">Latest on TikTok</p>
          <h2>Meet the Helper</h2>
          <p>Moving days, truck runs, and practical tips straight from Rashad. His newest TikTok videos load here automatically.</p>
          <a className="button button-dark" href={tiktokUrl} target="_blank" rel="noreferrer">Follow @rashadthehelper <ArrowUpRight size={18} /></a>
        </div>
        <TikTokFeed />
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-intro">
          <p className="eyebrow">Request a time</p>
          <h2>Tell Rashad About Your Move</h2>
          <p>The more useful detail you share now, the easier it is to confirm the job and prepare for move day.</p>
          <div className="move-plan" aria-label="What to include in your request">
            <div className="move-plan-heading"><span>Your Move Plan</span><strong>Start With the Basics</strong></div>
            <ul>
              <li><CalendarDays size={20} /><div><strong>Your date</strong><span>Preferred day and time</span></div></li>
              <li><MapPin size={20} /><div><strong>Your route</strong><span>Starting and destination ZIPs</span></div></li>
              <li><Truck size={20} /><div><strong>Your setup</strong><span>Truck needs, stairs, and access</span></div></li>
              <li><PackageCheck size={20} /><div><strong>Your items</strong><span>Furniture and anything extra heavy</span></div></li>
            </ul>
            <div className="move-plan-footer"><Clock3 size={18} /><p><strong>About 2 Minutes</strong><span>to prepare your request</span></p></div>
          </div>
          <ul className="booking-notes"><li><Check size={16} /> No payment required to request</li><li><Check size={16} /> Your date is booked only after confirmation</li><li><Check size={16} /> Labor starts at $50 per hour</li></ul>
        </div>
        <BookingForm />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading split-heading"><div><p className="eyebrow">Frequently asked questions</p><h2>Helpful Answers Before You Book</h2></div><p>If your situation is different, include the question with your move details and Rashad can confirm what is possible.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="location-cta">
        <div>
          <p className="eyebrow"><MapPin size={15} /> Houston moving help</p>
          <h2>Have a Move Coming Up?</h2>
          <p>Send the date, route, access details, and what needs moving. Rashad will take it from there.</p>
        </div>
        <div className="location-cta-actions">
          <a className="button button-primary" href="tel:+15042098175"><Phone size={17} /> Call 504-209-8175</a>
          <a className="button button-outline" href="#booking">Request availability <ArrowDownRight size={18} /></a>
        </div>
      </section>
      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}
