'use client';
import { useState } from 'react';

export default function IoTClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);
  const openPopup = () => window.dispatchEvent(new CustomEvent('openPopup'));

  return (
    <>
      {/* ═══ 1. HERO — STRONGER DIFFERENTIATION ═══ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: 72, background: 'linear-gradient(145deg, var(--n950) 0%, #0B2545 50%, #0E3460 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 25% 50%, rgba(0,102,255,.15), transparent 70%), radial-gradient(ellipse 30% 40% at 75% 30%, rgba(0,180,216,.1), transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ position: 'absolute', top: '15%', right: '20%', width: 300, height: 300, background: 'rgba(0,102,255,.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: 250, height: 250, background: 'rgba(0,180,216,.06)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', alignItems: 'center', gap: 60 }} className="iot-hero-flex">
          <div style={{ maxWidth: 620, flex: 1 }}>
            <div className="sl lt fm" style={{ marginBottom: 24 }}>IoT Product Development</div>
            <h1 className="fd" style={{ fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, color: '#fff', marginBottom: 16, letterSpacing: '-.02em' }}>
              IoT Product Development<br /><span style={{ color: 'var(--tll)' }}>Company in Bangalore</span>
            </h1>
            {/* CHANGE 1: Stronger differentiation line */}
            <p className="fm" style={{ fontSize: 14, color: 'var(--tll)', marginBottom: 20, letterSpacing: '.02em' }}>
              From prototype to production — we build real IoT products, not just PoCs.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--n300)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
              We design and develop scalable IoT products — from hardware and embedded firmware to cloud platforms and analytics — helping startups and enterprises bring connected products to life.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 32 }}>
              <button className="btn bp lg" onClick={openPopup}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="btn bw" onClick={openPopup}>Book Free Consultation</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['20+ Years Experience', 'End-to-End Development', 'Hardware + Cloud'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--n300)', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--em)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="iot-hero-visual" style={{ flex: '0 0 380px' }}>
            <svg viewBox="0 0 380 340" fill="none" width="380" height="340" style={{ maxWidth: '100%', height: 'auto' }}>
              <circle cx="190" cy="170" r="45" fill="rgba(0,102,255,.15)" stroke="rgba(0,102,255,.4)" strokeWidth="1.5" />
              <circle cx="190" cy="170" r="28" fill="rgba(0,102,255,.1)" stroke="rgba(0,102,255,.3)" strokeWidth="1" />
              <text x="190" y="165" textAnchor="middle" fill="rgba(0,102,255,.6)" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">IoT</text>
              <text x="190" y="180" textAnchor="middle" fill="rgba(0,102,255,.5)" fontFamily="JetBrains Mono, monospace" fontSize="8">GATEWAY</text>
              <circle cx="190" cy="170" r="110" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="190" cy="170" r="155" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="95" cy="100" r="18" fill="rgba(0,180,216,.15)" stroke="rgba(0,180,216,.3)" strokeWidth="1" />
              <text x="95" y="104" textAnchor="middle" fill="rgba(0,180,216,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">SENSOR</text>
              <circle cx="285" cy="100" r="18" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1" />
              <text x="285" y="104" textAnchor="middle" fill="rgba(16,185,129,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">DEVICE</text>
              <circle cx="80" cy="240" r="18" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.3)" strokeWidth="1" />
              <text x="80" y="244" textAnchor="middle" fill="rgba(245,158,11,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">EDGE</text>
              <circle cx="300" cy="240" r="18" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.3)" strokeWidth="1" />
              <text x="300" y="244" textAnchor="middle" fill="rgba(99,102,241,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">CLOUD</text>
              <line x1="113" y1="108" x2="162" y2="152" stroke="rgba(0,180,216,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="267" y1="108" x2="218" y2="152" stroke="rgba(16,185,129,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="97" y1="228" x2="168" y2="188" stroke="rgba(245,158,11,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="283" y1="228" x2="212" y2="188" stroke="rgba(99,102,241,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="190" y="320" textAnchor="middle" fill="rgba(255,255,255,.25)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing=".12em">HARDWARE · FIRMWARE · CLOUD · AI</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP + WHO IS THIS FOR ═══ */}
      <div className="sst">
        <div className="sst-in">
          <div><div className="ssv fd">20<span className="a">+</span></div><div className="ssl">Years Experience</div></div>
          <div><div className="ssv fd">50<span className="a">+</span></div><div className="ssl">IoT Products Built</div></div>
          <div><div className="ssv fd">10<span className="a">+</span></div><div className="ssl">Industries Served</div></div>
          <div><div className="ssv fd">100<span className="a">%</span></div><div className="ssl">End-to-End Delivery</div></div>
        </div>
      </div>
      {/* CHANGE 2: Who is this for */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(217,226,236,.5)', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', fontSize: 16, fontWeight: 600, color: 'var(--n700)' }} className="fd">
          Helping startups, OEMs, and enterprises build scalable connected products.
        </p>
      </div>

      {/* ═══ 3. PROBLEM → SOLUTION ═══ */}
      <section className="sec rv">
        <div className="sec-in prob-grid-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: '#D97706', background: 'rgba(245,158,11,.08)', padding: '6px 14px', borderRadius: 6, marginBottom: 20, letterSpacing: '.04em' }}>The challenge</div>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--n900)', lineHeight: 1.2, marginBottom: 16 }}>Struggling to turn your IoT idea into a working product?</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Many companies face the same roadblocks: delays in hardware-firmware integration, difficulty scaling prototypes to production, and the cost of managing separate hardware, software, and cloud vendors.</p>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>You need a single engineering partner who owns the entire stack — from the sensor to the dashboard.</p>
          </div>
          <div style={{ background: 'linear-gradient(145deg, var(--n950), #0E2A4A)', borderRadius: 20, padding: 40, color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <h3 className="fd" style={{ fontWeight: 700, fontSize: 20, marginBottom: 12, position: 'relative', color: '#fff' }}>That is exactly what we do</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, position: 'relative' }}>We provide complete IoT product development — one team, one process, from concept validation to production deployment.</p>
            <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
              {['Hardware design + embedded firmware under one roof', 'Cloud integration with real-time monitoring', 'Faster time-to-market, reduced risk', 'Proven track record across 10+ industries'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.5 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--em)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICES ═══ */}
      <section className="sec bg-s" id="iot-services">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our IoT development services</div>
            <h2 className="fd">End-to-end IoT product development — from sensor to cloud</h2>
            <p>Every layer of the IoT stack, engineered by a single integrated team.</p>
          </div>
          <div className="g3">
            {[
              { cls: 'b1', title: 'IoT Hardware Design & Prototyping', desc: 'Custom hardware designed for your specific IoT application — from sensor selection to multi-layer PCB layout and rapid prototyping.', tags: ['PCB Design', 'Sensors', 'Prototyping'], icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2" /></> },
              { cls: 'b2', title: 'Embedded Firmware Development', desc: 'Reliable, efficient firmware for seamless device operation — bare-metal, RTOS-based, and Linux-based systems with optimized power management.', tags: ['Embedded C', 'FreeRTOS', 'Zephyr'], icon: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M6 6L2 2M18 6l4-4M6 18l-4 4M18 18l4 4" /></> },
              { cls: 'b3', title: 'IoT Cloud Integration', desc: 'Connect your devices to scalable cloud platforms with secure data pipelines, real-time processing, and remote device management.', tags: ['AWS IoT', 'Azure IoT', 'MQTT'], icon: <><circle cx="12" cy="12" r="10" strokeDasharray="2 4" /><path d="M12 2a3 3 0 00-3 3v4a3 3 0 006 0V5a3 3 0 00-3-3z" /><path d="M5 12a7 7 0 0014 0" /></> },
              { cls: 'b4', title: 'Mobile & Web Applications', desc: 'Intuitive dashboards and companion apps that give your users real-time visibility, remote control, and actionable insights from their IoT devices.', tags: ['Dashboards', 'Analytics', 'Real-time'], icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></> },
              { cls: 'b5', title: 'AI & Data Analytics Integration', desc: 'Enhance your IoT solution with edge AI, predictive analytics, and automated decision-making — turning raw sensor data into business intelligence.', tags: ['Edge AI', 'Predictive', 'TinyML'], icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></> },
            ].map((s, i) => (
              <div className={`sv ${s.cls} rv ${i > 0 ? 'rv-d' + i : ''}`} key={s.title}>
                <div className="svi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{s.icon}</svg></div>
                <h3 className="fd">{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tg fm">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          {/* CHANGE 3a: Mid-page CTA after services */}
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Need any of these services for your IoT product?</p>
            <button className="btn bp" onClick={openPopup}>
              Talk to Our Engineers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 5. INDUSTRIES ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Industries we build IoT products for</div>
            <h2 className="fd">IoT solutions engineered for demanding environments</h2>
          </div>
          <div className="g5">
            {[
              { title: 'Industrial IoT', desc: 'Machine monitoring, predictive maintenance', bg: 'linear-gradient(135deg,#102A43,#243B53)' },
              { title: 'Automotive', desc: 'Telematics, fleet tracking, EV systems', bg: 'linear-gradient(135deg,var(--ac),var(--acd))' },
              { title: 'Healthcare', desc: 'Patient monitoring, medical devices', bg: 'linear-gradient(135deg,#334E68,#486581)' },
              { title: 'Smart Cities', desc: 'Water quality, infrastructure monitoring', bg: 'linear-gradient(135deg,var(--td),var(--tl))' },
              { title: 'Consumer IoT', desc: 'Home automation, wearables', bg: 'linear-gradient(135deg,#065F46,#10B981)' },
            ].map((ind, i) => (
              <a href="#" className={`ind rv ${i > 0 ? 'rv-d' + i : ''}`} style={{ background: ind.bg }} key={ind.title}>
                <h3 className="fd">{ind.title}</h3>
                <p>{ind.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. CASE STUDIES — WITH TIMELINE ═══ */}
      <section className="sec bg-s" id="iot-case-studies">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>IoT projects we have delivered</div>
            <h2 className="fd">Real IoT products. Measurable results.</h2>
            <p>These are not concepts — every project was designed, developed, and deployed by our team.</p>
          </div>
          <div className="g3">
            {[
              { badge: 'Industrial IoT', badgeCls: 'bl', title: 'Smart Industrial Monitoring System', problem: 'Manual monitoring caused delayed fault detection and unplanned downtime across multiple factory units.', solution: 'IoT-enabled sensors with GPRS connectivity, real-time cloud dashboard, and automated alert system.', result: '40% reduction in downtime', timeline: 'Delivered in 10 weeks', tags: ['IoT', 'Cloud', 'GPRS', 'Dashboard'], img: '/images/remote-data-acquisition-system-iot.jpg', alt: 'IoT remote data acquisition system for industrial monitoring by Knowx Innovations' },
              { badge: 'Automotive', badgeCls: 'tl', title: 'IoT-Based Vehicle Tracking System', problem: 'Fleet operators had no real-time visibility into vehicle location, fuel consumption, or driver behaviour.', solution: 'GPS + CAN bus telematics device with geo-fencing, live tracking dashboard, and predictive routing.', result: '25% reduction in fuel costs', timeline: 'Delivered in 12 weeks', tags: ['GPS', 'CAN Bus', 'Telematics'], img: '/images/gps-vehicle-tracking-telematics-iot.png', alt: 'GPS vehicle tracking and telematics IoT system by Knowx Innovations' },
              { badge: 'Smart City', badgeCls: 'gn', title: 'Water Quality Monitoring Solution', problem: 'Municipal water bodies lacked continuous monitoring, leading to delayed contamination response.', solution: 'Multi-parameter IoT sensor buoy with pH, turbidity, and dissolved oxygen sensors connected to an AI-powered cloud platform.', result: 'Real-time AI contamination alerts', timeline: 'Delivered in 14 weeks', tags: ['pH Sensor', 'Turbidity', 'AI'], img: '/images/iot-water-quality-monitoring-system.png', alt: 'IoT water quality monitoring system with AI alerts by Knowx Innovations' },
            ].map((cs, i) => (
              <div className={`cs rv ${i > 0 ? 'rv-d' + i : ''}`} key={cs.title} style={{ textDecoration: 'none' }}>
                <div className="cs-img" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={cs.img} alt={cs.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                </div>
                <div className="cs-body">
                  <span className={'cs-bg ' + cs.badgeCls + ' fm'}>{cs.badge}</span>
                  <h3 className="fd" style={{ marginBottom: 16 }}>{cs.title}</h3>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Problem</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.problem}</p></div>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Solution</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.solution}</p></div>
                  <div className="cs-rs"><div className="cs-rl fm">Result</div><div className="cs-rv fd">{cs.result}</div></div>
                  {/* CHANGE 4: Timeline added */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <span className="fm" style={{ fontSize: 12, fontWeight: 600, color: 'var(--ac)' }}>{cs.timeline}</span>
                  </div>
                  <div className="mt fm">{cs.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          {/* CHANGE 3b: Mid-page CTA after case studies */}
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Have a similar requirement? Let&apos;s build it.</p>
            <button className="btn bp" onClick={openPopup}>
              Start Your IoT Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 7. PROCESS TIMELINE ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our IoT development process</div>
            <h2 className="fd">From requirement to deployment — a transparent 5-step process</h2>
          </div>
          <div className="pg" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { n: '1', title: 'Requirement Analysis', desc: 'We study your use case, define technical specs, and identify the right architecture.', color: 'var(--ac)' },
              { n: '2', title: 'System Architecture', desc: 'Hardware selection, protocols, cloud strategy, and security framework.', color: 'var(--tl)' },
              { n: '3', title: 'Development', desc: 'Parallel hardware design, firmware coding, cloud setup, and app development.', color: 'var(--ac)' },
              { n: '4', title: 'Testing & Validation', desc: 'End-to-end testing, field trials, compliance, and performance optimization.', color: 'var(--tl)' },
              { n: '5', title: 'Deploy & Support', desc: 'Production rollout, OTA updates, monitoring, and ongoing support.', color: 'var(--em)' },
            ].map((step) => (
              <div className="pc rv" key={step.n} style={{ textAlign: 'center', padding: 24 }}>
                <div className="fd fm" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#fff', background: step.color, margin: '0 auto 16px' }}>{step.n}</div>
                <h3 className="fd" style={{ fontWeight: 700, fontSize: 15, color: 'var(--n900)', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--n600)', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. WHY CHOOSE KNOWX ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Why companies choose Knowx</div>
            <h2 className="fd">What makes us different from other IoT development companies</h2>
          </div>
          <div className="vals">
            {[
              { title: 'Faster development cycles', desc: 'Our integrated hardware-firmware-cloud team eliminates coordination delays that plague multi-vendor projects. Average prototype delivery: 6-8 weeks.', bg: 'linear-gradient(135deg,var(--ac),var(--acd))', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
              { title: 'Real product engineering experience', desc: 'We have shipped 50+ IoT products across 10 industries over 20 years. We know what breaks in the field and how to prevent it.', bg: 'linear-gradient(135deg,var(--td),var(--tl))', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></> },
              { title: 'Hardware + software under one roof', desc: 'No more coordinating between your PCB designer, firmware vendor, and cloud consultant. We own the entire stack — fewer integration surprises.', bg: 'linear-gradient(135deg,#065F46,var(--em))', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></> },
              { title: 'Training + engineering ecosystem', desc: 'Our Product Development Fellowship creates a constant pipeline of trained engineers who understand real-world IoT development — not just classroom theory.', bg: 'linear-gradient(135deg,var(--n800),var(--n700))', icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>, unique: true },
            ].map((v, i) => (
              <div className={'val rv' + (i > 0 ? ' rv-d' + i : '')} key={v.title}>
                <div className="val-top">
                  <div className="val-ico" style={{ background: v.bg }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">{v.icon}</svg>
                  </div>
                  <h3 className="fd">{v.title}</h3>
                </div>
                <p>{v.desc}</p>
                {v.unique && (
                  <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 12, fontWeight: 600, color: 'var(--ac)', background: 'var(--ac50)', padding: '4px 12px', borderRadius: 6 }}>Unique to Knowx</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. TECH STACK — WITH INTRO LINE ═══ */}
      <section style={{ padding: '72px 0', background: 'var(--n950)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="sec-in" style={{ position: 'relative' }}>
          <div className="sh rv" style={{ marginBottom: 16 }}>
            <div className="sl lt fm" style={{ marginBottom: 16 }}>Technology stack</div>
            <h2 className="fd" style={{ color: '#fff' }}>Built with industry-standard IoT technologies</h2>
          </div>
          {/* CHANGE 5: Authority intro line */}
          <p className="rv" style={{ fontSize: 15, color: 'var(--n300)', lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
            We use proven hardware platforms, communication protocols, and cloud technologies to build production-ready IoT systems.
          </p>
          {[
            { label: 'Microcontrollers & Processors', pills: ['ESP32', 'ESP8266', 'STM32', 'TI MCU', 'Raspberry Pi', 'NXP', 'Microchip'], color: 'blue' },
            { label: 'Firmware & RTOS', pills: ['Embedded C', 'C++', 'FreeRTOS', 'Zephyr', 'Bare Metal', 'Device Drivers'], color: 'teal' },
            { label: 'Connectivity & Protocols', pills: ['Wi-Fi', 'BLE', 'LoRa', 'Zigbee', 'Thread', 'NB-IoT', 'LTE-M', 'MQTT'], color: 'green' },
            { label: 'Cloud & Application', pills: ['AWS IoT', 'Azure IoT', 'Python', 'Node.js', 'React', 'Flutter'], color: 'purple' },
          ].map((group, i) => (
            <div className={'rv' + (i > 0 ? ' rv-d' + i : '')} key={group.label} style={{ marginBottom: 28 }}>
              <div className="fm" style={{ fontSize: 11, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>{group.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.pills.map((pill) => (
                  <span key={pill} className="fm" style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, borderRadius: 8, color: 'rgba(255,255,255,.85)', border: '1px solid rgba(255,255,255,.12)', transition: 'all .2s', background: group.color === 'blue' ? 'rgba(0,102,255,.12)' : group.color === 'teal' ? 'rgba(0,180,216,.12)' : group.color === 'green' ? 'rgba(16,185,129,.12)' : 'rgba(99,102,241,.12)', borderColor: group.color === 'blue' ? 'rgba(0,102,255,.25)' : group.color === 'teal' ? 'rgba(0,180,216,.25)' : group.color === 'green' ? 'rgba(16,185,129,.25)' : 'rgba(99,102,241,.25)' }}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Frequently asked questions</div>
            <h2 className="fd">Common questions about IoT product development</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              { q: 'What is IoT product development?', a: 'IoT product development involves designing connected devices that collect, process, and transmit data using embedded systems, wireless connectivity, and cloud platforms. It covers everything from hardware design and sensor selection to firmware development, cloud integration, and user-facing applications.' },
              { q: 'How long does it take to develop an IoT product?', a: 'Most IoT products take between 3 to 9 months from concept to deployment. A simple sensor device may take 3 months, while a full industrial IoT system with cloud analytics and mobile applications can take 6-9 months. We provide a detailed timeline during the requirement analysis phase.' },
              { q: 'Do you support startups with IoT product development?', a: 'Yes. We work closely with startups to develop prototypes, validate concepts, and scale products efficiently. Our end-to-end approach means you do not need to manage multiple vendors — we handle hardware, firmware, cloud, and applications.' },
              { q: 'What technologies do you use for IoT development?', a: 'We use microcontrollers like ESP32, STM32, and Raspberry Pi. Our firmware stack includes Embedded C, FreeRTOS, and Zephyr. For connectivity we support Wi-Fi, BLE, LoRa, Zigbee, NB-IoT, and LTE-M. Cloud platforms include AWS IoT and Azure IoT.' },
              { q: 'Can you help with both hardware and software?', a: 'Yes. We provide complete end-to-end IoT product development — from PCB design and embedded firmware to cloud platforms and mobile applications. Everything is developed under one roof by an integrated engineering team.' },
              { q: 'Do you provide post-deployment support?', a: 'Yes. We offer ongoing maintenance, OTA firmware updates, cloud infrastructure management, and scaling support. We can also help with product iterations and feature additions after the initial deployment.' },
            ].map((faq, i) => (
              <div className={'faq-item' + (openFaq === i ? ' open' : '')} key={i}>
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

      {/* ═══ 11. FINAL CTA ═══ */}
      <section className="cta-s">
        <div className="sec-in">
          <div className="cta-b rv">
            <div style={{ position: 'absolute', top: -40, right: -40, width: 300, height: 300, background: 'rgba(0,102,255,.12)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 260, height: 260, background: 'rgba(0,180,216,.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'relative' }}>
              <h2 className="fd">Ready to build your IoT product?</h2>
              <p>Let us turn your idea into a scalable, production-ready connected product. We typically respond within 24 hours.</p>
              <div className="cta-btns">
                <button className="btn bp lg" onClick={openPopup}>
                  Start Your Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <a href="tel:+919886094611" className="cta-ph">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.75.7 2.57a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.82.34 1.69.57 2.57.7A2 2 0 0122 16.92z" /></svg>
                  +91 98860 94611
                </a>
              </div>
              <p className="cta-em">Or write to us at <a href="mailto:bhimsen@knowxindia.com">bhimsen@knowxindia.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive overrides for this page */}
      <style>{`
        .prob-grid-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem; }
        .iot-hero-visual { display: none; }
        @media(min-width:1024px) { .iot-hero-visual { display: block; } }
        @media(max-width:768px) {
          .prob-grid-wrap { grid-template-columns: 1fr !important; gap: 32px !important; }
          .iot-hero-flex { flex-direction: column !important; gap: 32px !important; }
        }
        @media(max-width:640px) {
          .iot-hero-flex { flex-direction: column !important; }
          .hero-ctas { flex-direction: column !important; width: 100%; }
          .hero-ctas a, .hero-ctas button { width: 100%; justify-content: center; text-align: center; }
        }
      `}</style>
    </>
  );
}
