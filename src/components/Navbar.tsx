'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ onOpenPopup }: { onOpenPopup: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMob = () => setMobOpen(false);

  const isHome = pathname === '/';
  const isAbout = pathname === '/about' || pathname === '/about/';
  const isContact = pathname === '/contact' || pathname === '/contact/';

  const navLinks = isHome
    ? [
        { href: '#services', label: 'Services' },
        { href: '#industries', label: 'Industries' },
        { href: '#products', label: 'Products' },
        { href: '#case-studies', label: 'Case Studies' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' },
      ]
    : [
        { href: '/#services', label: 'Services' },
        { href: '/#industries', label: 'Industries' },
        { href: '/#products', label: 'Products' },
        { href: '/#case-studies', label: 'Case Studies' },
        { href: '/about', label: 'About', active: isAbout },
        { href: '/contact', label: 'Contact', active: isContact },
      ];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-in">
          <Link href="/" className="nav-logo">
            <div className="logo-m fd">K</div>
            <div className="logo-t fd">
              <span>KNOWX</span>
              <span className="fm">Innovations</span>
            </div>
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={link.active ? 'act' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-r">
            <a href="tel:+919886094611" className="nav-ph fm">+91 98860 94611</a>
            {isContact ? (
              <a href="tel:+919886094611" className="btn bp sm">Call Now</a>
            ) : (
              <button
                className="btn bp sm"
                onClick={(e) => { e.preventDefault(); onOpenPopup(); }}
              >
                Book Consultation
              </button>
            )}
          </div>
          <button
            className="mob-btn"
            onClick={() => setMobOpen(!mobOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--n800)" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`mob-menu${mobOpen ? ' show' : ''}`} id="mobmenu">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} onClick={closeMob}>
            {link.label}
          </Link>
        ))}
        {isContact ? null : (
          <button
            className="btn bp"
            style={{ marginTop: 8, justifyContent: 'center' }}
            onClick={() => { closeMob(); onOpenPopup(); }}
          >
            Book Consultation
          </button>
        )}
      </div>
    </>
  );
}
