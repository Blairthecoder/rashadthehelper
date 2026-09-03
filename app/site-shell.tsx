import { ArrowUpRight, MapPin, Menu } from 'lucide-react';

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div><span><MapPin size={13} /> Houston & nearby communities</span><span>Labor only · starting at $50/hour</span></div>
        <p>Independent moving help, confirmed directly</p>
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Rashad the Helper, home">
          <span className="brand-mark">RH</span>
          <span>Rashad the Helper</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/services">Services</a>
          <a href="/service-areas">Service areas</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#latest">Latest posts</a>
          <a href="/#faq">FAQ</a>
          <a href="/#booking" className="nav-cta">Check availability</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} /><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            <a href="/services">Services</a>
            <a href="/service-areas">Service areas</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#latest">Latest posts</a>
            <a href="/#faq">FAQ</a>
            <a href="/#booking">Check availability <ArrowUpRight size={17} /></a>
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
        <a className="brand footer-brand" href="/"><span className="brand-mark">RH</span><span>Rashad the Helper</span></a>
        <p>Practical, independent moving labor for homes and apartments across Greater Houston.</p>
        <a className="footer-cta" href="/#booking">Check availability <ArrowUpRight size={17} /></a>
      </div>
      <div className="footer-column"><h2>Services</h2><a href="/services/truck-loading">Truck loading</a><a href="/services/unloading">Unloading</a><a href="/services/heavy-lifting">Heavy lifting</a><a href="/services/furniture-assembly">Furniture assembly</a><a href="/services/rental-truck-driving">Truck driving</a></div>
      <div className="footer-column"><h2>Explore</h2><a href="/service-areas">Service areas</a><a href="/#how-it-works">How it works</a><a href="/#latest">Latest posts</a><a href="/#faq">Common questions</a><a href="https://www.instagram.com/rashadthehelper/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@rashadthehelper" target="_blank" rel="noreferrer">TikTok ↗</a></div>
      <div className="footer-bottom"><span>Houston, Texas</span><span>© {new Date().getFullYear()} Rashad the Helper</span><span>$50/hour · labor only</span></div>
    </footer>
  );
}

export function MobileBookingBar() {
  return <aside className="mobile-booking-bar" aria-label="Quick booking"><div><strong>Need moving help?</strong><span>Starting at $50/hour</span></div><a href="/#booking">Check availability</a></aside>;
}
