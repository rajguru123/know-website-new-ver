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
  const slideCS = useCarousel(7, 'cs-track');
  const slidePR = useCarousel(8, 'pr-track');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);
  const openPopup = () => window.dispatchEvent(new CustomEvent('openPopup'));

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
          <div><div className="ssv fd"><AnimatedCounter target={20} suffix="+" /></div><div className="ssl">Years Experience</div></div>
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

      {/* ═══ PROCESS — RESTORED SVG ILLUSTRATIONS ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>How we work</div>
            <h2 className="fd">From whiteboard sketch to production-ready product</h2>
            <p>Our Design-to-Manufacturing (D2M) process ensures nothing falls through the cracks.</p>
          </div>
          <div className="pg">
            {/* 01 — Consult */}
            <div className="pc rv">
              <div className="pc-il" style={{ background: 'linear-gradient(135deg,#E6F0FF,#D0E4FF)' }}>
                <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <rect x="55" y="14" width="90" height="60" rx="4" fill="#fff" stroke="#0066FF" strokeWidth="1.5"/>
                  <line x1="68" y1="30" x2="130" y2="30" stroke="#BCCCDC" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="40" x2="118" y2="40" stroke="#BCCCDC" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="50" x2="105" y2="50" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="60" x2="95" y2="60" stroke="#BCCCDC" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="100" y1="74" x2="100" y2="90" stroke="#627D98" strokeWidth="2"/>
                  <line x1="80" y1="90" x2="120" y2="90" stroke="#627D98" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="38" cy="75" r="7" fill="#0066FF" opacity=".2"/>
                  <circle cx="38" cy="65" r="5" fill="#0066FF" opacity=".3"/>
                  <circle cx="162" cy="75" r="7" fill="#0066FF" opacity=".2"/>
                  <circle cx="162" cy="65" r="5" fill="#0066FF" opacity=".3"/>
                </svg>
              </div>
              <div className="pc-n fd fm">01</div><h3 className="fd">Consult</h3><p>We study your requirements, define specifications, and create a technical roadmap with clear milestones.</p>
            </div>

            {/* 02 — Design */}
            <div className="pc rv rv-d1">
              <div className="pc-il" style={{ background: 'linear-gradient(135deg,#E0F7F0,#C5F0E3)' }}>
                <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <rect x="35" y="16" width="130" height="88" rx="6" fill="#fff" stroke="#00B4D8" strokeWidth="1.5"/>
                  <rect x="82" y="46" width="36" height="28" rx="3" fill="none" stroke="#00B4D8" strokeWidth="1.5"/>
                  <rect x="90" y="54" width="20" height="12" rx="1" fill="#00B4D8" opacity=".15"/>
                  <line x1="90" y1="46" x2="90" y2="38" stroke="#00B4D8" strokeWidth="1.2"/>
                  <line x1="100" y1="46" x2="100" y2="38" stroke="#00B4D8" strokeWidth="1.2"/>
                  <line x1="110" y1="46" x2="110" y2="38" stroke="#00B4D8" strokeWidth="1.2"/>
                  <line x1="90" y1="74" x2="90" y2="82" stroke="#00B4D8" strokeWidth="1.2"/>
                  <line x1="100" y1="74" x2="100" y2="82" stroke="#00B4D8" strokeWidth="1.2"/>
                  <line x1="110" y1="74" x2="110" y2="82" stroke="#00B4D8" strokeWidth="1.2"/>
                  <path d="M82 55L60 55L60 35L50 35" stroke="#00B4D8" strokeWidth="1.2" fill="none"/>
                  <path d="M118 65L140 65L140 85L155 85" stroke="#00B4D8" strokeWidth="1.2" fill="none"/>
                  <circle cx="50" cy="35" r="3" fill="#00B4D8" opacity=".3"/>
                  <circle cx="155" cy="85" r="3" fill="#00B4D8" opacity=".3"/>
                </svg>
              </div>
              <div className="pc-n fd fm">02</div><h3 className="fd">Design</h3><p>Schematic design, firmware architecture, PCB layout, and mechanical integration — all reviewed with you.</p>
            </div>

            {/* 03 — Prototype */}
            <div className="pc rv rv-d2">
              <div className="pc-il" style={{ background: 'linear-gradient(135deg,#E6F0FF,#D0E4FF)' }}>
                <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <rect x="40" y="25" width="120" height="75" rx="6" fill="rgba(11,110,79,.12)" stroke="#0066FF" strokeWidth="1.5"/>
                  <path d="M55 50H80V65H110" stroke="#0066FF" strokeWidth="1.5" fill="none" opacity=".5"/>
                  <rect x="58" y="42" width="18" height="12" rx="2" fill="#0066FF" opacity=".25"/>
                  <rect x="105" y="55" width="22" height="14" rx="2" fill="#0066FF" opacity=".2"/>
                  <circle cx="145" cy="45" r="6" fill="none" stroke="#0066FF" strokeWidth="1.2"/>
                  <circle cx="145" cy="45" r="2" fill="#0066FF" opacity=".4"/>
                  <circle cx="55" cy="35" r="3" fill="#10B981" opacity=".6"/>
                  <circle cx="65" cy="35" r="3" fill="#F59E0B" opacity=".5"/>
                </svg>
              </div>
              <div className="pc-n fd fm">03</div><h3 className="fd">Prototype</h3><p>Rapid prototyping, board bring-up, firmware flashing, testing, and iterative refinement until it works perfectly.</p>
            </div>

            {/* 04 — Manufacture */}
            <div className="pc rv rv-d3">
              <div className="pc-il" style={{ background: 'linear-gradient(135deg,#E0F7F0,#C5F0E3)' }}>
                <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <rect x="30" y="40" width="60" height="55" rx="3" fill="#fff" stroke="#0096B7" strokeWidth="1.5"/>
                  <rect x="40" y="50" width="12" height="12" rx="1" fill="#00B4D8" opacity=".15" stroke="#00B4D8" strokeWidth=".8"/>
                  <rect x="60" y="50" width="12" height="12" rx="1" fill="#00B4D8" opacity=".15" stroke="#00B4D8" strokeWidth=".8"/>
                  <rect x="48" y="72" width="16" height="23" rx="2" fill="#00B4D8" opacity=".12" stroke="#00B4D8" strokeWidth="1"/>
                  <line x1="95" y1="88" x2="175" y2="88" stroke="#627D98" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="88" r="4" fill="none" stroke="#627D98" strokeWidth="1.2"/>
                  <circle cx="170" cy="88" r="4" fill="none" stroke="#627D98" strokeWidth="1.2"/>
                  <rect x="115" y="78" width="14" height="10" rx="2" fill="#00B4D8" opacity=".25" stroke="#00B4D8" strokeWidth=".8"/>
                  <rect x="138" y="78" width="14" height="10" rx="2" fill="#00B4D8" opacity=".25" stroke="#00B4D8" strokeWidth=".8"/>
                  <circle cx="160" cy="50" r="14" fill="#10B981" opacity=".12" stroke="#10B981" strokeWidth="1.2"/>
                  <path d="M153 50L158 55L168 44" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="pc-n fd fm">04</div><h3 className="fd">Manufacture</h3><p>DFM optimization, compliance testing (BIS, CE, IEC), production files, and manufacturing support.</p>
            </div>
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

      {/* ═══ CASE STUDIES CAROUSEL — WITH REAL IMAGES ═══ */}
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
                { badge: 'Industrial IoT', badgeCls: 'bl', title: 'Remote Data Acquisition System', result: '40% reduction in downtime', tags: ['IoT', 'Cloud', 'GPRS'], img: '/images/remote-data-acquisition-system-iot.jpg', alt: 'IoT remote data acquisition system for industrial monitoring by Knowx Innovations' },
                { badge: 'Automotive', badgeCls: 'tl', title: 'GPS Vehicle Tracking & Telematics', result: '25% reduction in fuel costs', tags: ['GPS', 'CAN Bus', 'Dashboard'], img: '/images/gps-vehicle-tracking-telematics-iot.png', alt: 'GPS vehicle tracking and telematics IoT system by Knowx Innovations' },
                { badge: 'AgriTech', badgeCls: 'gn', title: 'Smart Agriculture Monitoring', result: '30% increase in crop yield', tags: ['Sensors', 'Wi-Fi Mesh', 'IoT'], img: '/images/smart-agriculture-monitoring-iot.jpg', alt: 'Smart agriculture IoT monitoring system for precision farming by Knowx Innovations' },
                { badge: 'Automotive', badgeCls: 'bl', title: 'Vehicle Health Diagnostic OBD', result: 'Edge AI fault prediction', tags: ['OBD-II', 'CAN', 'Edge AI'], img: '/images/vehicle-health-diagnostics-obd.png', alt: 'Vehicle health diagnostics OBD system with Edge AI by Knowx Innovations' },
                { badge: 'Logistics', badgeCls: 'tl', title: 'Asset Tracking System', result: 'BLE + GPS multi-tag tracking', tags: ['BLE', 'GPS', 'Cloud'], img: '/images/ble-asset-tracking-system.jpg', alt: 'BLE based asset tracking system for logistics by Knowx Innovations' },
                { badge: 'Smart City', badgeCls: 'tl', title: 'Smart Water Quality Monitor', result: 'AI contamination alerts', tags: ['pH Sensor', 'Turbidity', 'AI'], img: '/images/iot-water-quality-monitoring-system.png', alt: 'IoT water quality monitoring system with AI alerts by Knowx Innovations' },
                { badge: 'Industrial', badgeCls: 'nv', title: 'Predictive Maintenance System', result: 'AI detects failures early', tags: ['Vibration', 'Temp', 'AI'], img: '/images/iot-predictive-maintenance-system.png', alt: 'IoT predictive maintenance system for industry machines by Knowx Innovations' },
              ].map((cs) => (
                <a href="#" className="cs" key={cs.title}>
                  <div className="cs-img" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={cs.img}
                      alt={cs.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
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

      {/* ═══ PRODUCTS CAROUSEL — RESTORED SVG GRAPHICS ═══ */}
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
              {/* Product 1 — Remote Data Acquisition */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#0E1F38,#1A3355)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <rect x="55" y="25" width="90" height="60" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(0,102,255,.4)" strokeWidth="1.2"/>
                    <rect x="63" y="33" width="55" height="28" rx="3" fill="rgba(0,102,255,.1)" stroke="rgba(0,102,255,.3)" strokeWidth=".8"/>
                    <path d="M68 52L78 46L88 50L98 40L108 44L113 38" stroke="#0066FF" strokeWidth="1.5" fill="none" opacity=".7"/>
                    <circle cx="68" cy="72" r="3" fill="#10B981" opacity=".6"/><circle cx="80" cy="72" r="3" fill="#F59E0B" opacity=".5"/>
                    <line x1="130" y1="25" x2="140" y2="10" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="140" cy="8" r="2.5" fill="#0066FF" opacity=".6"/>
                  </svg>
                </div>
                <h3 className="fd">Remote Data Acquisition</h3><p>Cloud-based test &amp; measurement with real-time monitoring.</p>
                <div className="at fm"><span>Cloud</span><span>Wireless</span><span>Real-time</span></div>
              </div>

              {/* Product 2 — GPS Vehicle Tracker */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#082B3A,#0B3D52)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <path d="M25 90Q60 40 100 60Q140 80 175 30" stroke="rgba(0,180,216,.25)" strokeWidth="1.5" fill="none" strokeDasharray="5 4"/>
                    <rect x="88" y="52" width="16" height="10" rx="3" fill="#00B4D8" opacity=".5"/>
                    <circle cx="96" cy="46" r="12" fill="none" stroke="#00B4D8" strokeWidth=".8" opacity=".3"/>
                    <path d="M148 35Q148 25 155 25Q162 25 162 35L155 45Z" fill="#F59E0B" opacity=".5"/>
                  </svg>
                </div>
                <h3 className="fd">GPS Vehicle Tracker</h3><p>Fleet tracking with geo-fencing &amp; predictive routing.</p>
                <div className="at fm"><span>GPS</span><span>Geo-fence</span><span>Analytics</span></div>
              </div>

              {/* Product 3 — IoT Data Logger */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#1A1A2E,#16213E)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <rect x="60" y="30" width="80" height="55" rx="5" fill="rgba(255,255,255,.05)" stroke="rgba(102,126,234,.35)" strokeWidth="1.2"/>
                    <rect x="70" y="38" width="48" height="22" rx="2" fill="rgba(102,126,234,.08)"/>
                    <rect x="74" y="48" width="6" height="8" rx="1" fill="rgba(102,126,234,.4)"/>
                    <rect x="83" y="44" width="6" height="12" rx="1" fill="rgba(102,126,234,.5)"/>
                    <rect x="92" y="46" width="6" height="10" rx="1" fill="rgba(102,126,234,.35)"/>
                    <rect x="101" y="42" width="6" height="14" rx="1" fill="rgba(102,126,234,.6)"/>
                    <circle cx="75" cy="72" r="2.5" fill="#10B981" opacity=".6"/><circle cx="84" cy="72" r="2.5" fill="#F59E0B" opacity=".5"/>
                    <line x1="125" y1="30" x2="135" y2="15" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="fd">IoT Data Logger</h3><p>GPRS-enabled M2M data logger for industrial use.</p>
                <div className="at fm"><span>GPRS</span><span>M2M</span><span>Industrial</span></div>
              </div>

              {/* Product 4 — Smart Irrigation */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#0A2218,#133A2A)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <path d="M40 110L40 50Q150 10 260 50L260 110Z" fill="rgba(16,185,129,.08)" stroke="rgba(16,185,129,.3)" strokeWidth="1" transform="scale(0.7) translate(15,15)"/>
                    <circle cx="70" cy="65" r="8" fill="#10B981" opacity=".25"/>
                    <line x1="70" y1="95" x2="70" y2="73" stroke="#10B981" strokeWidth="2"/>
                    <circle cx="130" cy="60" r="10" fill="#10B981" opacity=".3"/>
                    <line x1="130" y1="95" x2="130" y2="70" stroke="#10B981" strokeWidth="2"/>
                    <rect x="90" y="75" width="12" height="16" rx="2" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.25)" strokeWidth=".8"/>
                    <circle cx="96" cy="80" r="2" fill="#F59E0B" opacity=".7"/>
                  </svg>
                </div>
                <h3 className="fd">Smart Irrigation Controller</h3><p>Solar-powered soil monitoring &amp; automated irrigation.</p>
                <div className="at fm"><span>Solar</span><span>Sensors</span><span>Automation</span></div>
              </div>

              {/* Product 5 — EV Charging */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#0B1A30,#142D4E)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <rect x="60" y="20" width="80" height="80" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(0,102,255,.3)" strokeWidth="1"/>
                    <path d="M95 40L85 65H100L90 90" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="100" cy="60" r="30" fill="none" stroke="rgba(0,102,255,.15)" strokeWidth="1" strokeDasharray="4 4"/>
                    <rect x="145" y="50" width="20" height="30" rx="3" fill="rgba(0,102,255,.1)" stroke="rgba(0,102,255,.25)" strokeWidth=".8"/>
                    <rect x="150" y="58" width="10" height="4" rx="1" fill="#10B981" opacity=".5"/>
                    <rect x="150" y="65" width="7" height="4" rx="1" fill="#F59E0B" opacity=".4"/>
                  </svg>
                </div>
                <h3 className="fd">EV Charging Controller</h3><p>OCPP-compliant smart charging with load management.</p>
                <div className="at fm"><span>OCPP</span><span>CAN</span><span>Smart Grid</span></div>
              </div>

              {/* Product 6 — Water Quality */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#082B3A,#0B3D52)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <path d="M40 120Q80 40 150 70Q220 100 260 30" stroke="rgba(0,180,216,.15)" strokeWidth="40" fill="none" strokeLinecap="round" transform="scale(0.72) translate(10,10)"/>
                    <circle cx="80" cy="55" r="15" fill="none" stroke="rgba(0,180,216,.3)" strokeWidth="1"/>
                    <circle cx="80" cy="55" r="5" fill="#00B4D8" opacity=".4"/>
                    <circle cx="140" cy="60" r="15" fill="none" stroke="rgba(0,180,216,.3)" strokeWidth="1"/>
                    <circle cx="140" cy="60" r="5" fill="#F59E0B" opacity=".4"/>
                    <path d="M95 52L125 57" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="4 4"/>
                  </svg>
                </div>
                <h3 className="fd">Water Quality Monitor</h3><p>Multi-parameter testing with cloud alerts.</p>
                <div className="at fm"><span>pH</span><span>Turbidity</span><span>IoT</span></div>
              </div>

              {/* Product 7 — Vibration Analyzer */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#1A1A2E,#2D1B38)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <rect x="50" y="30" width="100" height="60" rx="6" fill="rgba(255,255,255,.04)" stroke="rgba(168,85,247,.3)" strokeWidth="1"/>
                    <path d="M60 60Q70 35 80 55Q90 75 100 50Q110 25 120 55Q130 85 140 60" stroke="#A855F7" strokeWidth="2" fill="none" opacity=".6"/>
                    <circle cx="60" cy="60" r="3" fill="#A855F7" opacity=".4"/>
                    <circle cx="140" cy="60" r="3" fill="#10B981" opacity=".4"/>
                    <rect x="155" y="40" width="25" height="40" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(168,85,247,.2)" strokeWidth=".8"/>
                    <rect x="160" y="50" width="6" height="8" rx="1" fill="#A855F7" opacity=".3"/>
                    <rect x="168" y="46" width="6" height="12" rx="1" fill="#A855F7" opacity=".4"/>
                  </svg>
                </div>
                <h3 className="fd">Vibration Analyzer</h3><p>FFT-based analysis for predictive maintenance.</p>
                <div className="at fm"><span>FFT</span><span>Edge AI</span><span>Industrial</span></div>
              </div>

              {/* Product 8 — BLE Asset Tag */}
              <div className="prd">
                <div className="prd-img" style={{ background: 'linear-gradient(145deg,#0E1F38,#1A3355)' }}>
                  <svg viewBox="0 0 200 120" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <circle cx="100" cy="55" r="6" fill="#0066FF" opacity=".5"/>
                    <circle cx="100" cy="55" r="18" fill="none" stroke="rgba(0,102,255,.2)" strokeWidth="1" strokeDasharray="4 4"/>
                    <circle cx="100" cy="55" r="32" fill="none" stroke="rgba(0,102,255,.12)" strokeWidth="1" strokeDasharray="4 4"/>
                    <circle cx="60" cy="40" r="4" fill="#00B4D8" opacity=".4"/>
                    <circle cx="145" cy="70" r="4" fill="#F59E0B" opacity=".4"/>
                    <circle cx="80" cy="85" r="4" fill="#10B981" opacity=".4"/>
                    <path d="M64 40L82 48" stroke="rgba(0,180,216,.2)" strokeWidth="1" strokeDasharray="3 3"/>
                    <path d="M118 62L141 68" stroke="rgba(245,158,11,.2)" strokeWidth="1" strokeDasharray="3 3"/>
                    <path d="M84 82L92 72" stroke="rgba(16,185,129,.2)" strokeWidth="1" strokeDasharray="3 3"/>
                  </svg>
                </div>
                <h3 className="fd">BLE Asset Tag</h3><p>Low-power indoor tracking for warehouses.</p>
                <div className="at fm"><span>BLE 5.0</span><span>Low Power</span><span>Mesh</span></div>
              </div>
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
