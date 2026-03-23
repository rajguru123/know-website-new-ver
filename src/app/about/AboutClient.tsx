'use client';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function AboutClient() {
  const openPopup = () => window.dispatchEvent(new CustomEvent('openPopup'));

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-about">
        <div className="hero-about-in">
          <div className="hero-about-text rv">
            <div className="sl fm" style={{ marginBottom: 20 }}>About Knowx Innovations</div>
            <h1 className="fd">
              An Embedded Systems &amp; IoT Product Engineering Company{' '}
              <span className="hl">Built by Engineers, for Engineers</span>
            </h1>
            <p>Since 2005, we have been designing hardware, developing firmware, and building industry-ready engineers — from our base in Bangalore, India.</p>
          </div>
          <div className="hero-about-visual rv rv-d2">
            {/* Safari-safe SVG: no nested SVGs, explicit dimensions */}
            <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="420" height="320" style={{ maxWidth: '100%', height: 'auto' }}>
              <rect x="40" y="30" width="340" height="220" rx="16" fill="#0B1A30" stroke="rgba(0,102,255,.25)" strokeWidth="1.5" />
              <g opacity=".08">
                <line x1="40" y1="70" x2="380" y2="70" stroke="#fff" strokeWidth=".5" />
                <line x1="40" y1="110" x2="380" y2="110" stroke="#fff" strokeWidth=".5" />
                <line x1="40" y1="150" x2="380" y2="150" stroke="#fff" strokeWidth=".5" />
                <line x1="40" y1="190" x2="380" y2="190" stroke="#fff" strokeWidth=".5" />
                <line x1="100" y1="30" x2="100" y2="250" stroke="#fff" strokeWidth=".5" />
                <line x1="160" y1="30" x2="160" y2="250" stroke="#fff" strokeWidth=".5" />
                <line x1="220" y1="30" x2="220" y2="250" stroke="#fff" strokeWidth=".5" />
                <line x1="280" y1="30" x2="280" y2="250" stroke="#fff" strokeWidth=".5" />
                <line x1="340" y1="30" x2="340" y2="250" stroke="#fff" strokeWidth=".5" />
              </g>
              <rect x="150" y="85" width="120" height="80" rx="6" fill="#142D4E" stroke="rgba(0,102,255,.4)" strokeWidth="1.5" />
              <rect x="170" y="105" width="80" height="40" rx="3" fill="rgba(0,102,255,.1)" stroke="rgba(0,102,255,.25)" strokeWidth="1" />
              <text x="210" y="130" textAnchor="middle" fill="rgba(0,102,255,.5)" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600">KNOWX</text>
              {/* Pins */}
              {[170, 190, 210, 230, 250].map((x) => (
                <g key={`pin-${x}`}>
                  <line x1={x} y1="85" x2={x} y2="68" stroke="rgba(0,102,255,.4)" strokeWidth="1.5" />
                  <line x1={x} y1="165" x2={x} y2="182" stroke="rgba(0,102,255,.4)" strokeWidth="1.5" />
                </g>
              ))}
              {/* Traces */}
              <path d="M150 110 L100 110 L100 60 L70 60" stroke="rgba(0,102,255,.3)" strokeWidth="1.5" fill="none" />
              <circle cx="70" cy="60" r="4" fill="rgba(0,102,255,.2)" stroke="rgba(0,102,255,.3)" strokeWidth="1" />
              <path d="M150 140 L80 140 L80 200 L60 200" stroke="rgba(0,180,216,.3)" strokeWidth="1.5" fill="none" />
              <circle cx="60" cy="200" r="4" fill="rgba(0,180,216,.2)" stroke="rgba(0,180,216,.3)" strokeWidth="1" />
              <path d="M270 110 L320 110 L320 55 L360 55" stroke="rgba(0,102,255,.3)" strokeWidth="1.5" fill="none" />
              <circle cx="360" cy="55" r="4" fill="rgba(0,102,255,.2)" stroke="rgba(0,102,255,.3)" strokeWidth="1" />
              <path d="M270 140 L340 140 L340 210 L365 210" stroke="rgba(0,180,216,.3)" strokeWidth="1.5" fill="none" />
              <circle cx="365" cy="210" r="4" fill="rgba(0,180,216,.2)" stroke="rgba(0,180,216,.3)" strokeWidth="1" />
              {/* LEDs */}
              <circle cx="75" cy="230" r="5" fill="#10B981" opacity=".5" />
              <circle cx="95" cy="230" r="5" fill="#F59E0B" opacity=".4" />
              <circle cx="115" cy="230" r="5" fill="#0066FF" opacity=".45" />
              {/* Year badge */}
              <rect x="290" y="190" width="70" height="32" rx="8" fill="rgba(0,102,255,.12)" stroke="rgba(0,102,255,.2)" strokeWidth="1" />
              <text x="325" y="210" textAnchor="middle" fill="rgba(0,102,255,.6)" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700">2005</text>
              <text x="210" y="275" textAnchor="middle" fill="var(--n300)" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing=".1em">EMBEDDED · IoT · AI · HARDWARE · FIRMWARE</text>
            </svg>
          </div>
        </div>
        {/* Stats */}
        <div className="hero-stats rv rv-d1">
          <div className="hs-item"><div className="hs-val fd"><AnimatedCounter target={20} suffix="+" className="a" /></div><div className="hs-label">Years of Engineering Excellence</div></div>
          <div className="hs-item"><div className="hs-val fd"><AnimatedCounter target={150} suffix="+" /></div><div className="hs-label">Products &amp; Projects Delivered</div></div>
          <div className="hs-item"><div className="hs-val fd"><AnimatedCounter target={50} suffix="+" /></div><div className="hs-label">Clients Across India</div></div>
          <div className="hs-item"><div className="hs-val fd"><AnimatedCounter target={10} suffix="+" /></div><div className="hs-label">Industry Domains Served</div></div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sec-head rv"><div className="sl fm" style={{ marginBottom: 16 }}>Our story</div><h2 className="fd">How Knowx started — and why it matters</h2></div>
          <div className="story-grid">
            <div className="rv rv-d1">
              <p>Knowx Innovations was founded in 2005 by <span className="hl-text">Bhimsen</span>, an engineer with a dual background in Electronics Engineering and Computer Science, and hands-on experience working in embedded system design companies.</p>
              <p>Before starting Knowx, Bhimsen ran a computer manufacturing and training company that delivered Microsoft and Red Hat Linux certification programs. That experience gave him a deep understanding of two things — <span className="hl-text">what the industry needs from engineers, and how wide the gap is between academic training and real-world skills.</span></p>
            </div>
            <div className="rv rv-d2">
              <p>This dual insight became the foundation of Knowx: a company that does not just build embedded and IoT products for its clients, but also builds the skilled engineers that the industry desperately needs. From day one, the vision was to serve not just large corporates, but also the SMEs and startups across Bangalore and other metro cities who need reliable product engineering.</p>
              <p>Twenty years later, that vision holds. Knowx has delivered <span className="hl-text">150+ projects across 10+ industries</span>, and our Product Development Fellowship has trained hundreds of engineers who now work across India&apos;s technology ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sec-head rv"><div className="sl fm" style={{ marginBottom: 16 }}>What we do</div><h2 className="fd">End-to-end product engineering under one roof</h2></div>
          <div className="story-grid">
            <div className="rv rv-d1"><p>We are a product engineering company that takes your idea from concept to certified product. Our services span hardware design, embedded firmware development, PCB design, IoT product development, AI &amp; ML integration, and design-to-manufacturing support.</p></div>
            <div className="rv rv-d2"><p>We work with startups who need their first prototype, SMEs who need to scale an existing product, and corporates who need a reliable engineering partner for complex embedded and IoT systems.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sec-head rv"><div className="sl fm" style={{ marginBottom: 16 }}>What drives us</div><h2 className="fd">The principles behind every project we take on</h2></div>
          <div className="vals">
            {[
              { title: 'Engineering-first thinking', desc: 'We are engineers before we are a business. Every decision — from component selection to architecture design — is driven by technical excellence, not shortcuts.', bg: 'linear-gradient(135deg,var(--ac),var(--acd))', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2" /></> },
              { title: 'Real-world delivery', desc: 'We do not build demos. Every product we design is meant for production — tested, certified, and manufactured.', bg: 'linear-gradient(135deg,var(--td),var(--tl))', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
              { title: 'Building engineers, not just products', desc: 'Through our Product Development Fellowship, we train engineers on real-world projects inside a working product company.', bg: 'linear-gradient(135deg,#065F46,var(--em))', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></> },
              { title: 'Accessible expertise', desc: 'Premium engineering should not be reserved for large corporates. We work with SMEs, startups, and first-time hardware founders with the same rigour.', bg: 'linear-gradient(135deg,var(--n800),var(--n700))', icon: <><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></> },
            ].map((v, i) => (
              <div className={`val rv ${i > 0 ? `rv-d${i}` : ''}`} key={v.title}>
                <div className="val-top">
                  <div className="val-ico" style={{ background: v.bg }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{v.icon}</svg>
                  </div>
                  <h3 className="fd">{v.title}</h3>
                </div>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sec-head rv"><div className="sl fm" style={{ marginBottom: 16 }}>Leadership</div><h2 className="fd">The people behind Knowx</h2></div>
          <div className="leaders">
            {[
              { name: 'Bhimsen', title: 'Founder & CEO', img: '/images/bhimsen-founder-ceo-knowx.png', type: 'founder', desc: 'An engineer with dual expertise in Electronics and Computer Science, Bhimsen has over 20 years of experience in embedded systems design and technology training. Before founding Knowx in 2005, he built and ran a computer manufacturing and certification training company. He leads technical strategy, client engagements, and the Product Development Fellowship.' },
              { name: 'Nageshwar Rao C', title: 'Director — Consulting', img: '/images/nageshwar-rao-director-knowx.png', type: 'advisor', desc: 'Director at Asmaitha, a Bangalore-based systems integrator specializing in product engineering of wireless infrastructure and CPE solutions including USB dongles, WiMax-to-WiFi routers, and broadband access devices.' },
              { name: 'Anantha Somayaji', title: 'Director — Consulting', img: '/images/anantha-somayaji-director-knowx.png', type: 'advisor', desc: 'Co-Founder & CEO at Venturebiz Promotions Pvt Ltd. Specializes in building purpose-driven digital solutions for hyperlocal businesses. Brings strategic advisory experience in digital transformation and market scaling.' },
            ].map((l, i) => (
              <div className={`leader ${l.type} rv ${i > 0 ? `rv-d${i}` : ''}`} key={l.name}>
                <div className="leader-header">
                  <img
                    src={l.img}
                    alt={l.name + ' — ' + l.title + ' at Knowx Innovations'}
                    style={{
                      width: 80, height: 80, borderRadius: '50%',
                      objectFit: 'cover', objectPosition: 'top center',
                      margin: '0 auto 18px',
                      display: 'block',
                      border: l.type === 'founder' ? '3px solid var(--ac)' : '3px solid var(--n300)',
                    }}
                  />
                  <h3 className="fd">{l.name}</h3>
                  <span className="leader-title fm">{l.title}</span>
                </div>
                <div className="leader-body"><p>{l.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="sec" style={{ textAlign: 'center' }}>
        <div className="sec-in">
          <div className="sec-head rv" style={{ maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Standards &amp; compliance</div>
            <h2 className="fd">Built to international standards</h2>
            <p>We design and develop products in compliance with national and international technology standards.</p>
          </div>
          <div className="cert-row rv rv-d1">
            {[
              { name: 'BIS', desc: 'Bureau of Indian Standards' },
              { name: 'CE', desc: 'European Conformity' },
              { name: 'IEC', desc: 'Electrotechnical Commission' },
              { name: 'IEEE', desc: 'Electrical & Electronics Engineers' },
              { name: 'IPC', desc: 'Electronics Industry Standards' },
            ].map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-name fd">{c.name}</div>
                <div className="cert-desc fm">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FELLOWSHIP ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="fellowship rv">
            <div className="fellowship-text">
              <div className="sl lt fm" style={{ marginBottom: 16 }}>Training division</div>
              <h2 className="fd">Knowx Product Development Fellowship</h2>
              <p>What makes Knowx unique is that we are not just a product engineering company — we also build the next generation of embedded and IoT engineers. Fellows work alongside our engineering team on actual products.</p>
              <a href="#" className="btn bp">
                Learn more about the Fellowship
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="fellowship-visual" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-sec">
        <div className="sec-in">
          <div className="cta-b rv">
            <div style={{ position: 'absolute', top: -40, right: -40, width: 280, height: 280, background: 'rgba(0,102,255,.12)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 240, height: 240, background: 'rgba(0,180,216,.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'relative' }}>
              <h2 className="fd">Ready to work with us?</h2>
              <p style={{ color: 'var(--n300)' }}>Whether you need a product engineered, a team augmented, or engineers trained — let us talk.</p>
              <div className="cta-btns">
                <button className="btn bp lg" onClick={openPopup}>
                  Book a Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <a href="tel:+919886094611" className="cta-ph">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.75.7 2.57a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.82.34 1.69.57 2.57.7A2 2 0 0122 16.92z" /></svg>
                  +91 98860 94611
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
