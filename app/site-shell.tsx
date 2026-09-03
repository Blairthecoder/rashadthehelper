import { ArrowUpRight, Instagram, MapPin, Menu, Phone } from 'lucide-react';
import { instagramUrl, tiktokUrl } from './social-data';

export function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06V9.7a5.69 5.69 0 0 0-.77-.05A5.65 5.65 0 1 0 15.54 15V8.99a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div><span><MapPin size={13} /> Serving Greater Houston, TX</span><span>Moving truck &amp; equipment available</span></div>
        <div className="utility-contact">
          <a className="utility-phone" href="tel:+15042098175"><Phone size={13} /> Call or Text 504-209-8175</a>
          <span className="utility-social">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Rashad the Helper on Instagram"><Instagram size={15} /></a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="Rashad the Helper on TikTok"><TikTokIcon /></a>
          </span>
        </div>
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Rashad the Helper, home">
          <span className="brand-text"><strong>Rashad the Helper</strong><small>Houston moving help</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/service-areas">Areas We Serve</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#latest">Latest</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="/#booking">Request a Time</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} /><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            <a href="/services">Services</a>
            <a href="/service-areas">Areas we serve</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#latest">Latest posts</a>
            <a href="/#faq">FAQ</a>
            <a href="tel:+15042098175">Call 504-209-8175</a>
            <a href="/#booking">Request a time <ArrowUpRight size={17} /></a>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <a className="brand footer-brand" href="/">
          <span className="brand-text"><strong>Rashad the Helper</strong><small>Houston moving help</small></span>
        </a>
        <p>Moving help with a truck, dolly, blankets, and toolkit for homes and apartments across Greater Houston.</p>
        <a className="footer-cta" href="/#booking">Request a time <ArrowUpRight size={17} /></a>
        <a className="footer-phone" href="tel:+15042098175"><Phone size={15} /> 504-209-8175</a>
      </div>
      <div className="footer-column"><h2>Services</h2><a href="/services/truck-loading">Moving truck &amp; loading</a><a href="/services/unloading">Unloading</a><a href="/services/heavy-lifting">Heavy lifting</a><a href="/services/furniture-assembly">Furniture assembly</a><a href="/services/rental-truck-driving">Truck driving</a></div>
      <div className="footer-column"><h2>Explore</h2><a href="/service-areas">Areas we serve</a><a href="/#how-it-works">How it works</a><a href="/#latest">Latest posts</a><a href="/#faq">Common questions</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={tiktokUrl} target="_blank" rel="noreferrer">TikTok ↗</a></div>
      <div className="footer-bottom"><span>Houston, Texas</span><span>© {new Date().getFullYear()} Rashad the Helper</span><span>Truck &amp; moving equipment available</span></div>
    </footer>
  );
}

export function MobileBookingBar() {
  return (
    <aside className="mobile-booking-bar" aria-label="Quick booking">
      <a className="mobile-call" href="tel:+15042098175"><Phone size={16} /> Call Rashad</a>
      <a className="mobile-book" href="/#booking">Request a time</a>
    </aside>
  );
}
