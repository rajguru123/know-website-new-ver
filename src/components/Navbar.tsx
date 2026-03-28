'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const servicePages = [
  { href: '/iot-product-development-company-bangalore', label: 'IoT Product Development' },
  { href: '/embedded-system-design-software-development-bangalore', label: 'Embedded System Design' },
  { href: '/#services', label: 'AI & ML Services' },
  { href: '/#services', label: 'Hardware Design' },
  { href: '/#services', label: 'Design to Manufacturing' },
  { href: '/#services', label: 'Web & Mobile App Development' },
];

export default function Navbar({ onOpenPopup }: { onOpenPopup: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to top + close menus on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobOpen(false);
    setServicesOpen(false);
    setMobServicesOpen(false);

    // Re-trigger scroll reveal animations
    document.querySelectorAll('.rv').forEach((el) => el.classList.remove('vis'));
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll('.rv:not(.vis)').forEach((el) => observer.observe(el));
    }, 50);
  }, [pathname]);

  const closeMob = () => {
    setMobOpen(false);
    setMobServicesOpen(false);
  };

  const isHome = pathname === '/';
  const isAbout = pathname === '/about' || pathname === '/about/';
  const isContact = pathname === '/contact' || pathname === '/contact/';
  const isIoT = pathname.includes('iot-product-development');
  const isEmbedded = pathname.includes('embedded-system-design');
  const isService = isIoT || isEmbedded;

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
            {/* Services dropdown */}
            <div className="nav-dd" ref={dropdownRef}>
              <button
                className={`nav-dd-btn${isService ? ' act' : ''}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 4, transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div
                className={`nav-dd-menu${servicesOpen ? ' show' : ''}`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicePages.map((sp) => (
                  <Link
                    key={sp.label}
                    href={sp.href}
                    className={pathname === sp.href ? 'act' : ''}
                    onClick={() => setServicesOpen(false)}
                  >
                    {sp.label}
                    {sp.href.startsWith('/') && !sp.href.includes('#') && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', opacity: 0.4 }}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className={isAbout ? 'act' : ''}>About</Link>
            <Link href={isHome ? '#industries' : '/#industries'}>Industries</Link>
            <Link href={isHome ? '#products' : '/#products'}>Products</Link>
            <Link href={isHome ? '#case-studies' : '/#case-studies'}>Case Studies</Link>
            <Link href="/contact" className={isContact ? 'act' : ''}>Contact</Link>
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

      {/* Mobile menu */}
      <div className={`mob-menu${mobOpen ? ' show' : ''}`} id="mobmenu">
        {/* Services collapsible */}
        <button
          className="mob-svc-toggle"
          onClick={() => setMobServicesOpen(!mobServicesOpen)}
        >
          Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.2s', transform: mobServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        {mobServicesOpen && (
          <div className="mob-svc-list">
            {servicePages.map((sp) => (
              <Link key={sp.label} href={sp.href} onClick={closeMob}>
                {sp.label}
              </Link>
            ))}
          </div>
        )}

        <Link href="/about" onClick={closeMob}>About</Link>
        <Link href={isHome ? '#industries' : '/#industries'} onClick={closeMob}>Industries</Link>
        <Link href={isHome ? '#products' : '/#products'} onClick={closeMob}>Products</Link>
        <Link href={isHome ? '#case-studies' : '/#case-studies'} onClick={closeMob}>Case Studies</Link>
        <Link href="/contact" onClick={closeMob}>Contact</Link>
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

      {/* Dropdown + mobile services CSS */}
      <style>{`
        /* Desktop dropdown */
        .nav-dd { position: relative; }
        .nav-dd-btn {
          display: flex; align-items: center; font-size: 14px; font-weight: 500;
          color: var(--n700); padding: 8px 14px; border-radius: 8px; border: none;
          background: transparent; cursor: pointer; transition: all 0.15s;
          font-family: inherit;
        }
        .nav-dd-btn:hover, .nav-dd-btn.act { color: var(--ac); background: rgba(0,102,255,.06); }
        .nav-dd-menu {
          position: absolute; top: calc(100% + 8px); left: 0; min-width: 280px;
          background: #fff; border-radius: 12px; padding: 8px;
          box-shadow: 0 12px 40px rgba(10,22,40,.12), 0 0 0 1px rgba(217,226,236,.5);
          opacity: 0; visibility: hidden; transform: translateY(-8px);
          transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
          z-index: 1001;
        }
        .nav-dd-menu.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .nav-dd-menu a {
          display: flex; align-items: center; padding: 10px 14px; border-radius: 8px;
          font-size: 14px; font-weight: 500; color: var(--n700); text-decoration: none;
          transition: all 0.15s; gap: 8px;
        }
        .nav-dd-menu a:hover { background: rgba(0,102,255,.06); color: var(--ac); }
        .nav-dd-menu a.act { color: var(--ac); background: rgba(0,102,255,.06); }

        /* Mobile services toggle */
        .mob-svc-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 12px 20px; font-size: 15px; font-weight: 500;
          color: var(--n800); background: transparent; border: none;
          cursor: pointer; font-family: inherit; text-align: left;
        }
        .mob-svc-toggle:hover { background: var(--n50); }
        .mob-svc-list {
          display: flex; flex-direction: column; padding: 0 0 8px 16px;
          border-left: 2px solid rgba(0,102,255,.15); margin-left: 20px;
        }
        .mob-svc-list a {
          padding: 8px 16px !important; font-size: 14px !important;
          color: var(--n600) !important; border-radius: 6px;
        }
        .mob-svc-list a:hover { background: rgba(0,102,255,.06) !important; color: var(--ac) !important; }
      `}</style>
    </>
  );
}
