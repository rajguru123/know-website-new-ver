'use client';
import { useState, useCallback } from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';

/* ── Carousel hook ── */
function useCarousel(totalItems: number, id: string) {
  const [pos, setPos] = useState(0);
  const slide = useCallback(
    (dir: number) => {
      const track = document.getElementById(id);
      if (!track || !track.children[0]) return;
      const cw = (track.children[0] as HTMLElement).offsetWidth + 24;
      const w = window.innerWidth;
      const visible = w < 640 ? 1 : w < 1024 ? 2 : 3;
      const max = Math.max(0, totalItems - visible);
      setPos((p) => {
        const next = Math.max(0, Math.min(max, p + dir));
        track.style.transform = `translateX(-${next * cw}px)`;
        return next;
      });
    },
    [totalItems, id]
  );
  return slide;
}

export default function HomeClient() {
  /* Carousels */
  const slideCS = useCarousel(7, 'cs-track');
  const slidePR = useCarousel(8, 'pr-track');

  /* FAQ */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  /* Popup opener (from parent via window) */
  const openPopup = () => {
    const evt = new CustomEvent('openPopup');
    window.dispatchEvent(evt);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-g" />
        <div className="hero-gl" style={{ top: '10%', right: '15%', width: 360, height: 360, background: 'rgba(0,102,255,.08)' }} />
        <div className="hero-gl" style={{ bottom: '10%', left: '10%', width: 280, height: 280, background: 'rgba(0,180,216,.06)', animationDelay: '4s' }} />
        <div className="hero-in">
          <div className="hero-t">
            <div className="sl lt fm" style={{ marginBottom: 28 }}>Product Engineering Company · Since 2005</div>
            <h1 className="fd">Embedded Systems<br /><span className="hl">&amp; IoT Product</span><br />Engineering Company</h1>
            <p className="sub">We design and develop embedded systems, build IoT-enabled products, and take your idea from prototype to production. Hardware, firmware, and AI — under one roof in Bangalore.</p>
            <div className="hero-ctas">
              <button className="btn bp lg" onClick={openPopup}>
                Book a Consultation
                <svg className="arr-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <a href="#case-studies" className="btn bw">View Our Work</a>
            </div>
          </div>
          <div className="hero-v">
            <div className="hc">
              <div className="hc-r">
                <div className="hc-d" style={{ background: 'var(--tl)' }} />
                <div className="hc-l" style={{ background: 'rgba(0,180,216,.3)' }} />
                <span className="fm" style={{ fontSize: 11, color: 'var(--n400)' }}>LIVE METRICS</span>
              </div>
              <div className="hc-b"><div className="hc-bl fm">Projects Completed</div><div className="hc-bv fd">150<span style={{ color: 'var(--tl)' }}>+</span></div></div>
              <div className="hc-b"><div className="hc-bl fm">Active Clients</div><div className="hc-bv fd">50<span style={{ color: 'var(--acl)' }}>+</span></div></div>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'var(--ac)' }} />
                <div style={{ flex: 0.7, height: 4, borderRadius: 2, background: 'var(--tl)', opacity: 0.6 }} />
                <div style={{ flex: 0.4, height: 4, borderRadius: 2, background: 'rgba(255,255,255,.1)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <div className="sst">
        <div className="sst-in">
          <div><div className="ssv fd"><AnimatedCounter target={20} suffix="+" />
          </div><div className="ssl">Years Experience</div></div>
          <div><div className="ssv fd"><AnimatedCounter target={150} suffix="+" /></div><div className="ssl">Projects Delivered</div></div>
          <div><div className="ssv fd"><AnimatedCounter target={50} suffix="+" /></div><div className="ssl">Clients Served</div></div>
          <div><div className="ssv fd"><AnimatedCounter target={10} suffix="+" /></div><div className="ssl">Industry Domains</div></div>
        </div>
      </div>

      {/* ═══ TRUSTED ═══ */}
      <section className="tr">
        <div className="tr-in">
          <span className="tr-lb fm">Trusted across industries</span>
          <div className="tr-logos">
            {[
              { label: 'Automotive', icon: <path d="M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2m-4 0H9" /> },
              { label: 'Medical Devices', icon: <><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" /><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></> },
              { label: 'Industrial', icon: <path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2Z" /> },
              { label: 'Consumer Electronics', icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></> },
              { label: 'Telecom', icon: <path d="M2 12L7 12L10 3L14 21L17 12L22 12" /> },
              { label: 'AgriTech', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, green: true },
            ].map((item) => (
              <div className="tr-i" key={item.label}>
                <div className="tr-ic" style={item.green ? { background: 'rgba(16,185,129,.08)', color: 'var(--em)' } : undefined}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="sec" id="services">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>What we do</div>
            <h2 className="fd">Embedded systems development services that take your product from concept to reality</h2>
            <p>Full-stack product engineering under one roof — hardware, firmware, connectivity, intelligence, and manufacturing.</p>
          </div>
          <div className="g3">
            {[
              { cls: 'b1', title: 'Hardware Design', desc: 'Schematic design, PCB layout, thermal analysis, and signal integrity. Single-layer to complex multi-layer HDI boards.', tags: ['PCB Design', 'Schematic', 'Altium', 'OrCAD'], icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>, delay: '' },
              { cls: 'b2', title: 'Embedded & Firmware', desc: 'RTOS, bare-metal, and Linux-based firmware. BLE, Wi-Fi, CAN, SPI, I2C protocol stacks and driver development.', tags: ['RTOS', 'Embedded Linux', 'BLE', 'CAN'], icon: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M6 6L2 2M18 6l4-4M6 18l-4 4M18 18l4 4M12 6V2M12 22v-4M6 12H2M22 12h-4" /></>, delay: 'rv-d1' },
              { cls: 'b3', title: 'IoT Product Development', desc: 'End-to-end IoT solutions — sensor integration, gateway design, cloud connectivity, dashboards, and remote monitoring.', tags: ['AWS IoT', 'Azure', 'MQTT', 'Sensors'], icon: <><circle cx="12" cy="12" r="10" strokeDasharray="2 4" /><path d="M12 2a3 3 0 00-3 3v4a3 3 0 006 0V5a3 3 0 00-3-3z" /><path d="M5 12a7 7 0 0014 0M8 21h8M12 17v4" /></>, delay: 'rv-d2' },
              { cls: 'b4', title: 'AI & ML Services', desc: 'Edge AI deployment, computer vision, predictive maintenance models, and TinyML for resource-constrained devices.', tags: ['TensorFlow', 'Edge AI', 'TinyML', 'Vision'], icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>, delay: 'rv-d3' },
              { cls: 'b5', title: 'Design to Manufacturing', desc: 'DFM optimization, compliance testing (BIS, CE, IEC), production files, vendor management, and volume manufacturing support.', tags: ['DFM', 'Compliance', 'BIS/CE', 'Production'], icon: <><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2Z" /><path d="M22 8l-5 3.5" /></>, delay: 'rv-d4' },
              { cls: 'b6', title: 'Web & Mobile App Development', desc: 'IoT dashboards, cloud applications, mobile companion apps, and full-stack web platforms for connected products.', tags: ['React', 'Node.js', 'Flutter', 'Cloud'], icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /><circle cx="15" cy="15" r="2" /></>, delay: 'rv-d5' },
            ].map((s) => (
              <div className={`sv ${s.cls} rv ${s.delay}`} key={s.title}>
                <div className="svi">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{s.icon}</svg>
                </div>
                <h3 className="fd">{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tg fm">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="sva">Learn more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>How we work</div>
            <h2 className="fd">From whiteboard sketch to production-ready product</h2>
            <p>Our Design-to-Manufacturing (D2M) process ensures nothing falls through the cracks.</p>
          </div>
          <div className="pg">
            {[
              { n: '01', title: 'Consult', desc: 'We study your requirements, define specifications, and create a technical roadmap with clear milestones.', bg: 'linear-gradient(135deg,#E6F0FF,#D0E4FF)' },
              { n: '02', title: 'Design', desc: 'Schematic design, firmware architecture, PCB layout, and mechanical integration — all reviewed with you.', bg: 'linear-gradient(135deg,#E0F7F0,#C5F0E3)' },
              { n: '03', title: 'Prototype', desc: 'Rapid prototyping, board bring-up, firmware flashing, testing, and iterative refinement until it works perfectly.', bg: 'linear-gradient(135deg,#E6F0FF,#D0E4FF)' },
              { n: '04', title: 'Manufacture', desc: 'DFM optimization, compliance testing (BIS, CE, IEC), production files, and manufacturing support.', bg: 'linear-gradient(135deg,#E0F7F0,#C5F0E3)' },
            ].map((p, i) => (
              <div className={`pc rv ${i > 0 ? `rv-d${i}` : ''}`} key={p.n}>
                <div className="pc-il" style={{ background: p.bg }}>
                  {/* Safari-safe: simple colored box instead of nested SVG */}
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4, fontSize: 48, fontWeight: 800, color: i % 2 === 0 ? 'var(--ac)' : 'var(--tl)' }} className="fd">{p.n}</div>
                </div>
                <div className="pc-n fd fm">{p.n}</div>
                <h3 className="fd">{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="sec" id="industries">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Industries we serve</div>
            <h2 className="fd">Domain expertise across high-impact industries</h2>
            <p>Two decades of building products for demanding environments — where reliability is not optional.</p>
          </div>
          <div className="g5">
            {[
              { title: 'Automotive', desc: 'Telematics, ADAS, CAN bus, EV charging', bg: 'linear-gradient(135deg,#102A43,#243B53)' },
              { title: 'Healthcare', desc: 'Medical devices, patient monitoring, wearables', bg: 'linear-gradient(135deg,var(--ac),var(--acd))' },
              { title: 'Industrial IoT', desc: 'Asset monitoring, predictive maintenance, SCADA', bg: 'linear-gradient(135deg,#334E68,#486581)' },
              { title: 'Smart Devices', desc: 'Home automation, appliances, consumer electronics', bg: 'linear-gradient(135deg,var(--td),var(--tl))' },
              { title: 'Smart AgriTech', desc: 'Precision farming, soil sensors, irrigation IoT', bg: 'linear-gradient(135deg,#065F46,#10B981)' },
            ].map((ind, i) => (
              <a href="#" className={`ind rv ${i > 0 ? `rv-d${i}` : ''}`} style={{ background: ind.bg }} key={ind.title}>
                <h3 className="fd">{ind.title}</h3>
                <p>{ind.desc}</p>
                <div className="ind-a">View solutions →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES CAROUSEL ═══ */}
      <section className="sec bg-s" id="case-studies">
        <div className="sec-in">
          <div className="shr">
            <div className="sh rv" style={{ marginBottom: 0 }}>
              <div className="sl fm" style={{ marginBottom: 16 }}>Proof of work</div>
              <h2 className="fd">Real projects. Real results.</h2>
              <p>Every project below was designed, developed, and deployed by our engineering team.</p>
            </div>
            <a href="#" className="btn bs sm rv">View all case studies →</a>
          </div>
          <div className="crl rv" id="cs-crl">
            <div className="crl-track" id="cs-track">
              {[
                { badge: 'Industrial IoT', badgeCls: 'bl', title: 'Remote Data Acquisition System', result: '40% reduction in downtime', tags: ['IoT', 'Cloud', 'GPRS'], bg: 'linear-gradient(135deg,#0B1A30,#1A3355)' },
                { badge: 'Automotive', badgeCls: 'tl', title: 'GPS Vehicle Tracking & Telematics', result: '25% reduction in fuel costs', tags: ['GPS', 'CAN Bus', 'Dashboard'], bg: 'linear-gradient(135deg,#082B3A,#0B3D52)' },
                { badge: 'AgriTech', badgeCls: 'gn', title: 'Smart Agriculture Monitoring', result: '30% increase in crop yield', tags: ['Sensors', 'Wi-Fi Mesh', 'IoT'], bg: 'linear-gradient(135deg,#0A2218,#133A2A)' },
                { badge: 'Automotive', badgeCls: 'bl', title: 'Vehicle Health Diagnostic OBD', result: 'Edge AI fault prediction', tags: ['OBD-II', 'CAN', 'Edge AI'], bg: 'linear-gradient(135deg,#1A1A2E,#16213E)' },
                { badge: 'Logistics', badgeCls: 'tl', title: 'Asset Tracking System', result: 'BLE + GPS multi-tag tracking', tags: ['BLE', 'GPS', 'Cloud'], bg: 'linear-gradient(135deg,#0E1F38,#1A3355)' },
                { badge: 'Smart City', badgeCls: 'tl', title: 'Smart Water Quality Monitor', result: 'AI contamination alerts', tags: ['pH Sensor', 'Turbidity', 'AI'], bg: 'linear-gradient(135deg,#082B3A,#0B3D52)' },
                { badge: 'Industrial', badgeCls: 'nv', title: 'Predictive Maintenance System', result: 'AI detects failures early', tags: ['Vibration', 'Temp', 'AI'], bg: 'linear-gradient(135deg,#1A1A2E,#2D1B38)' },
              ].map((cs) => (
                <a href="#" className="cs" key={cs.title}>
                  <div className="cs-img" style={{ background: cs.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', textTransform: 'uppercase' as const }} className="fm">{cs.badge}</span>
                  </div>
                  <div className="cs-body">
                    <span className={`cs-bg ${cs.badgeCls} fm`}>{cs.badge}</span>
                    <h3 className="fd">{cs.title}</h3>
                    <div className="cs-rs"><div className="cs-rl fm">Result</div><div className="cs-rv fd">{cs.result}</div></div>
                    <div className="mt fm">{cs.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </a>
              ))}
            </div>
            <button className="crl-btn l" onClick={() => slideCS(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="crl-btn r" onClick={() => slideCS(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS CAROUSEL ═══ */}
      <section className="sec" id="products">
        <div className="sec-in">
          <div className="shr">
            <div className="sh rv" style={{ marginBottom: 0 }}>
              <div className="sl fm" style={{ marginBottom: 16 }}>Our products</div>
              <h2 className="fd">Products we have built and deployed</h2>
              <p>Real-world engineering projects — not concepts. These products are in the field solving real problems.</p>
            </div>
            <a href="#" className="btn bs sm rv">View all products →</a>
          </div>
          <div className="crl rv" id="pr-crl">
            <div className="crl-track" id="pr-track">
              {[
                { title: 'Remote Data Acquisition', desc: 'Cloud-based test & measurement with real-time monitoring.', tags: ['Cloud', 'Wireless', 'Real-time'], bg: 'linear-gradient(145deg,#0E1F38,#1A3355)' },
                { title: 'GPS Vehicle Tracker', desc: 'Fleet tracking with geo-fencing & predictive routing.', tags: ['GPS', 'Geo-fence', 'Analytics'], bg: 'linear-gradient(145deg,#082B3A,#0B3D52)' },
                { title: 'IoT Data Logger', desc: 'GPRS-enabled M2M data logger for industrial use.', tags: ['GPRS', 'M2M', 'Industrial'], bg: 'linear-gradient(145deg,#1A1A2E,#16213E)' },
                { title: 'Smart Irrigation Controller', desc: 'Solar-powered soil monitoring & automated irrigation.', tags: ['Solar', 'Sensors', 'Automation'], bg: 'linear-gradient(145deg,#0A2218,#133A2A)' },
                { title: 'EV Charging Controller', desc: 'OCPP-compliant smart charging with load management.', tags: ['OCPP', 'CAN', 'Smart Grid'], bg: 'linear-gradient(145deg,#0B1A30,#142D4E)' },
                { title: 'Water Quality Monitor', desc: 'Multi-parameter testing with cloud alerts.', tags: ['pH', 'Turbidity', 'IoT'], bg: 'linear-gradient(145deg,#082B3A,#0B3D52)' },
                { title: 'Vibration Analyzer', desc: 'FFT-based analysis for predictive maintenance.', tags: ['FFT', 'Edge AI', 'Industrial'], bg: 'linear-gradient(145deg,#1A1A2E,#2D1B38)' },
                { title: 'BLE Asset Tag', desc: 'Low-power indoor tracking for warehouses.', tags: ['BLE 5.0', 'Low Power', 'Mesh'], bg: 'linear-gradient(145deg,#0E1F38,#1A3355)' },
              ].map((pr) => (
                <div className="prd" key={pr.title}>
                  <div className="prd-img" style={{ background: pr.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,.25)', letterSpacing: '.08em', textTransform: 'uppercase' as const }} className="fm">KNOWX</span>
                  </div>
                  <h3 className="fd">{pr.title}</h3>
                  <p>{pr.desc}</p>
                  <div className="at fm">{pr.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
            <button className="crl-btn l" onClick={() => slidePR(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="crl-btn r" onClick={() => slidePR(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>What people say</div>
            <h2 className="fd">Trusted by engineers, managers, and leaders</h2>
          </div>
          <div className="g3">
            {[
              { badge: '8-year partnership', quote: '"It has been 8 years of association with KNOWX Innovations and we would love to continue. KNOWX has given us up to 100 employees who are the main driver of our growth."', name: 'Client Partner', role: 'Technology Director · Leading IT Firm', init: 'C' },
              { badge: 'Ahead of schedule', quote: '"Their embedded systems knowledge is exceptional and the project delivery was ahead of schedule. The right team to build your product."', name: 'Product Manager', role: 'VP Engineering · Automotive OEM', init: 'P' },
              { badge: 'Industry-ready training', quote: '"Hands-on and interactive training by experts. I recommend Knowx for fresh engineering students looking for real-world exposure."', name: 'Engineering Graduate', role: 'Former Intern · Now at MNC', init: 'E' },
            ].map((t, i) => (
              <div className={`te rv ${i > 0 ? `rv-d${i}` : ''}`} key={t.init}>
                <span className="te-bg fm">{t.badge}</span>
                <div className="te-q">
                  <svg width="28" height="20" viewBox="0 0 24 18" fill="currentColor"><path d="M0 18V8.4C0 3.36 3.12.72 6 0L7.2 2.4C4.8 3.36 3.6 5.28 3.6 7.2H6V18H0ZM12 18V8.4C12 3.36 15.12.72 18 0L19.2 2.4C16.8 3.36 15.6 5.28 15.6 7.2H18V18H12Z" /></svg>
                  <p>{t.quote}</p>
                </div>
                <div className="te-a">
                  <div className="te-av fd">{t.init}</div>
                  <div><div className="te-nm fd">{t.name}</div><div className="te-rl">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAREER FELLOWSHIP ═══ */}
      <section className="career" id="about">
        <h2 className="fd rv">Build the future of your career with Knowx</h2>
        <p className="sub rv rv-d1"><strong>Knowx Product Development Fellowship</strong> — Work on real-world embedded &amp; IoT projects inside a product engineering company.</p>
        <a href="#" className="btn bp lg rv rv-d2">
          Apply Now
          <svg className="arr-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>FAQ</div>
            <h2 className="fd">Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              { q: 'What does an embedded systems and IoT product engineering company do?', a: 'We design and develop hardware, firmware, and IoT solutions, helping businesses take products from concept to production. This includes schematic design, PCB layout, embedded software, cloud connectivity, and manufacturing support.' },
              { q: 'Do you provide end-to-end product development?', a: 'Yes, we handle everything from initial design and prototyping to compliance testing and manufacturing support — our Design-to-Manufacturing (D2M) service covers the complete product lifecycle.' },
              { q: 'What industries do you work with?', a: 'We work across automotive, consumer electronics, industrial IoT, healthcare devices, smart agriculture, and smart home systems.' },
              { q: 'How are your internships different from other institutes?', a: 'Unlike traditional institutes, we provide hands-on experience through live product development and real engineering workflows inside a working product engineering company.' },
              { q: 'Do you offer internships with real project experience?', a: 'Yes, our Knowx Product Development Fellowship includes internships where participants work on actual embedded and IoT projects alongside our engineering team.' },
              { q: 'Can startups work with you for product development?', a: 'Absolutely. We help startups design, prototype, and scale embedded and IoT products efficiently — from initial concept to production-ready hardware.' },
              { q: 'Where is your company located?', a: 'We are based in Vijayanagar, Bangalore, India, serving clients across India and globally.' },
            ].map((faq, i) => (
              <div className={`faq-item rv ${openFaq === i ? 'open' : ''}`} key={i}>
                <div className="faq-q" onClick={() => toggleFaq(i)}>
                  <h3 className="fd">{faq.q}</h3>
                  <div className="ico">+</div>
                </div>
                <div className="faq-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-s" id="contact">
        <div className="sec-in">
          <div className="cta-b rv">
            <div style={{ position: 'absolute', top: -40, right: -40, width: 320, height: 320, background: 'rgba(0,102,255,.12)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 280, height: 280, background: 'rgba(0,180,216,.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'relative' }}>
              <h2 className="fd">Ready to build your next product?</h2>
              <p>From a quick consultation to a full product development engagement — we are here to help you ship.</p>
              <div className="cta-btns">
                <button className="btn bp lg" onClick={openPopup}>
                  Book a Free Consultation
                  <svg className="arr-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <a href="tel:+919886094611" className="cta-ph">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.75.7 2.57a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.82.34 1.69.57 2.57.7A2 2 0 0122 16.92z" /></svg>
                  +91 98860 94611
                </a>
              </div>
              <p className="cta-em">Or write to us at <a href="mailto:bhimsen@knowxindia.com">bhimsen@knowxindia.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
