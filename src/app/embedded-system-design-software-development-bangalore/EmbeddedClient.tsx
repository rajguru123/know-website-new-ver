
'use client';
import { useState } from 'react';

export default function EmbeddedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);
  const openPopup = () => window.dispatchEvent(new CustomEvent('openPopup'));

  return (
    <>
      {/* ═══ 1. HERO — EMBEDDED SYSTEM DESIGN ═══ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: 72, background: 'linear-gradient(145deg, var(--n950) 0%, #0B2545 50%, #0E3460 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 25% 50%, rgba(0,102,255,.15), transparent 70%), radial-gradient(ellipse 30% 40% at 75% 30%, rgba(0,180,216,.1), transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ position: 'absolute', top: '15%', right: '20%', width: 300, height: 300, background: 'rgba(0,102,255,.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: 250, height: 250, background: 'rgba(0,180,216,.06)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', alignItems: 'center', gap: 60 }} className="emb-hero-flex">
          <div style={{ maxWidth: 620, flex: 1 }}>
            <div className="sl lt fm" style={{ marginBottom: 24 }}>Embedded System Design</div>
            <h1 className="fd" style={{ fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, color: '#fff', marginBottom: 16, letterSpacing: '-.02em' }}>
              Embedded System Design and<br /><span style={{ color: 'var(--tll)' }}>Software Development Services</span>
            </h1>
            <p className="fm" style={{ fontSize: 14, color: 'var(--tll)', marginBottom: 20, letterSpacing: '.02em' }}>
              From hardware design to firmware deployment — we build embedded systems that work in the real world.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--n300)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
              From hardware design to firmware development, our team delivers end-to-end embedded solutions tailored for performance, scalability, and real-world reliability.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 32 }}>
              <button className="btn bp lg" onClick={openPopup}>
                Talk to Our Experts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="btn bw" onClick={openPopup}>Get Free Consultation</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['20+ Years Experience', 'End-to-End Development', 'Hardware + Firmware'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--n300)', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--em)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="emb-hero-visual" style={{ flex: '0 0 480px', position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.08)' }}>
              <picture>
                <source srcSet="/images/banner-embedded-mobile.webp" media="(max-width: 768px)" type="image/webp" />
                <source srcSet="/images/banner-embedded.webp" type="image/webp" />
                <img
                  src="/images/banner-embedded.jpg"
                  alt="Embedded system design and firmware development engineers working with oscilloscope and PCB at Knowx Innovations Bangalore"
                  width={1536}
                  height={1024}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="eager"
                />
              </picture>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,37,69,.6) 0%, transparent 40%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 20, right: 20 }}>
                <div className="fm" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['PCB Design', 'Firmware', 'RTOS', 'Testing'].map((tag) => (
                    <span key={tag} style={{ padding: '4px 10px', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', borderRadius: 4, color: 'rgba(255,255,255,.9)', background: 'rgba(0,102,255,.35)', border: '1px solid rgba(0,102,255,.4)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP + WHO IS THIS FOR ═══ */}
      <div className="sst">
        <div className="sst-in">
          <div><div className="ssv fd">20<span className="a">+</span></div><div className="ssl">Years Experience</div></div>
          <div><div className="ssv fd">100<span className="a">+</span></div><div className="ssl">Embedded Projects</div></div>
          <div><div className="ssv fd">10<span className="a">+</span></div><div className="ssl">Industries Served</div></div>
          <div><div className="ssv fd">100<span className="a">%</span></div><div className="ssl">End-to-End Delivery</div></div>
        </div>
      </div>
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(217,226,236,.5)', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', fontSize: 16, fontWeight: 600, color: 'var(--n700)' }} className="fd">
          Helping OEMs, manufacturers, and enterprises build production-ready embedded systems.
        </p>
      </div>

      {/* ═══ 3. PROBLEM → SOLUTION ═══ */}
      <section className="sec rv">
        <div className="prob-grid-wrap">
          <div>
            <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: '#D97706', background: 'rgba(245,158,11,.08)', padding: '6px 14px', borderRadius: 6, marginBottom: 20, letterSpacing: '.04em' }}>The challenge</div>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--n900)', lineHeight: 1.2, marginBottom: 16 }}>Challenges in embedded system design and firmware development</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Building embedded systems is not just about writing code — it is about creating reliable, efficient, and optimized systems that work seamlessly in real-world environments. Many businesses struggle with integrating hardware with stable firmware, managing power consumption and performance trade-offs, ensuring real-time responsiveness, and handling complex communication protocols like CAN, SPI, and I2C.</p>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>Without the right expertise, these challenges lead to delays, increased costs, and product failures. You need a single engineering partner who owns the entire embedded stack.</p>
          </div>
          <div style={{ background: 'linear-gradient(145deg, var(--n950), #0E2A4A)', borderRadius: 20, padding: 40, color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <h3 className="fd" style={{ fontWeight: 700, fontSize: 20, marginBottom: 12, position: 'relative', color: '#fff' }}>That is exactly what we do</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, position: 'relative' }}>We provide complete embedded system design and firmware development — one team, one process, from concept to production deployment.</p>
            <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
              {[
                'Hardware design + firmware development under one roof',
                'RTOS-based and bare-metal system expertise',
                'Industrial-grade testing, debugging, and validation',
                'Proven track record: 100+ embedded projects across 10+ industries',
              ].map((item) => (
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
      <section className="sec bg-s" id="embedded-services">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our embedded system design and software development services</div>
            <h2 className="fd">End-to-end embedded system design — from schematic to production</h2>
            <p>Every layer of your embedded product, engineered by a single integrated team.</p>
          </div>
          <div className="g3">
            {[
              {
                cls: 'b1',
                title: 'Embedded Hardware Design',
                desc: 'We design efficient and scalable hardware tailored to your product requirements — from microcontroller and component selection to circuit design, PCB layout, and rapid prototyping.',
                tags: ['PCB Design', 'Prototyping', 'Circuit Optimization'],
                icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
              },
              {
                cls: 'b2',
                title: 'Embedded Software & Firmware Development',
                desc: 'We develop high-performance firmware that ensures reliability and real-time operation — including firmware in C/C++, RTOS-based systems, device driver development, and communication protocol implementation.',
                tags: ['C/C++', 'FreeRTOS', 'Zephyr', 'Device Drivers'],
                icon: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M6 6L2 2M18 6l4-4M6 18l-4 4M18 18l4 4" /><path d="M10 10l4 4M14 10l-4 4" /></>,
              },
              {
                cls: 'b3',
                title: 'System Integration & Testing',
                desc: 'We ensure seamless integration between hardware and software for optimal performance — including hardware-software integration, functional and performance testing, debugging, and production validation.',
                tags: ['HW-SW Integration', 'Debugging', 'Validation'],
                icon: <><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" /><path d="M3 9h18M3 15h18" /></>,
              },
              {
                cls: 'b4',
                title: 'Embedded Systems for IoT Enablement',
                desc: 'Embedded systems are the backbone of IoT devices. We build firmware and systems that enable sensor integration, edge processing, and connectivity readiness for IoT platforms.',
                tags: ['Sensors', 'Edge Processing', 'Connectivity'],
                icon: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" strokeDasharray="2 3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></>,
                link: '/iot-product-development-company-bangalore',
              },
            ].map((s, i) => (
              <div className={`sv ${s.cls} rv ${i > 0 ? 'rv-d' + i : ''}`} key={s.title}>
                <div className="svi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{s.icon}</svg></div>
                <h3 className="fd">{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tg fm">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {s.link && (
                  <a href={s.link} className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 13, fontWeight: 600, color: 'var(--ac)', textDecoration: 'none' }}>
                    Explore our IoT development services
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Need embedded system design or firmware development for your product?</p>
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
            <div className="sl fm" style={{ marginBottom: 16 }}>Industries we build embedded systems for</div>
            <h2 className="fd">Embedded system design and firmware solutions across industries</h2>
            <p>Our solutions are designed to meet industry-specific requirements with precision and reliability.</p>
          </div>
          <div className="g5">
            {[
              { title: 'Manufacturing', desc: 'Asset tracking, machine monitoring, predictive maintenance', bg: 'linear-gradient(135deg,#102A43,#243B53)' },
              { title: 'Automotive', desc: 'Control systems, embedded electronics, CAN-based diagnostics', bg: 'linear-gradient(135deg,var(--ac),var(--acd))' },
              { title: 'Energy & Utilities', desc: 'Battery management, power systems, smart metering', bg: 'linear-gradient(135deg,#334E68,#486581)' },
              { title: 'Healthcare Devices', desc: 'Embedded medical electronics, patient monitoring', bg: 'linear-gradient(135deg,var(--td),var(--tl))' },
              { title: 'Consumer Electronics', desc: 'Smart devices, wearables, connected products', bg: 'linear-gradient(135deg,#065F46,#10B981)' },
            ].map((ind, i) => (
              <a href="#" className={`ind rv ${i > 0 ? 'rv-d' + i : ''}`} style={{ background: ind.bg }} key={ind.title}>
                <h3 className="fd">{ind.title}</h3>
                <p>{ind.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. CASE STUDIES ═══ */}
      <section className="sec bg-s" id="embedded-case-studies">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Embedded system design and firmware projects we have delivered</div>
            <h2 className="fd">Real embedded systems. Production-proven results.</h2>
            <p>These are not concepts — every project was designed, developed, and deployed by our engineering team.</p>
          </div>
          <div className="g3">
            {[
              {
                badge: 'Manufacturing',
                badgeCls: 'bl',
                title: 'STM32-Based Asset Tracking System for Manufacturing Company',
                problem: 'A manufacturing client had no real-time visibility into equipment location across their facility, causing operational inefficiencies and delayed maintenance response.',
                solution: 'Developed a robust asset tracking system using STM32 microcontrollers with low-power design, real-time location tracking, and industrial-grade communication protocols.',
                result: 'Real-time equipment tracking with industrial-grade reliability',
                timeline: 'Delivered in 8 weeks',
                tags: ['STM32', 'Low Power', 'Industrial', 'Real-time'],
                img: '/images/stm32-asset-tracking-embedded-system',
                alt: 'STM32-based real-time asset tracking embedded system developed by Knowx Innovations Bangalore',
              },
              {
                badge: 'Industrial OEM',
                badgeCls: 'tl',
                title: 'Embedded System Design and Firmware for Heavy Generators',
                problem: 'An OEM client needed reliable embedded control systems for heavy-duty generators with real-time monitoring and proactive fault detection to eliminate unplanned downtime.',
                solution: 'Designed and developed high-performance firmware for control systems with real-time monitoring, fault detection algorithms, and rugged system design built for harsh industrial environments.',
                result: 'Zero unplanned downtime after deployment',
                timeline: 'Delivered in 14 weeks',
                tags: ['Firmware', 'Control Systems', 'Rugged Design'],
                img: '/images/embedded-control-system-heavy-generator',
                alt: 'Embedded control system and firmware for heavy-duty industrial generators by Knowx Innovations',
              },
              {
                badge: 'Energy',
                badgeCls: 'gn',
                title: 'Firmware for TI-Based Battery Management System',
                problem: 'A UPS company needed advanced firmware for battery health monitoring, safety optimization, and reliable power management across their product line.',
                solution: 'Built firmware for a Texas Instruments-based BMS with real-time battery health monitoring, safety algorithms, performance optimization, and reliable power management for UPS applications.',
                result: 'Optimized battery performance and safety compliance',
                timeline: 'Delivered in 10 weeks',
                tags: ['TI MCU', 'BMS', 'Firmware', 'Power Management'],
                img: '/images/ti-battery-management-system-firmware',
                alt: 'TI-based battery management system firmware development by Knowx Innovations Bangalore',
              },
            ].map((cs, i) => (
              <div className={`cs rv ${i > 0 ? 'rv-d' + i : ''}`} key={cs.title} style={{ textDecoration: 'none' }}>
                <div className="cs-img" style={{ position: 'relative', overflow: 'hidden' }}>
                  <picture>
                    <source srcSet={`${cs.img}.webp`} type="image/webp" />
                    <img src={`${cs.img}.jpg`} alt={cs.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  </picture>
                </div>
                <div className="cs-body">
                  <span className={'cs-bg ' + cs.badgeCls + ' fm'}>{cs.badge}</span>
                  <h3 className="fd" style={{ marginBottom: 16 }}>{cs.title}</h3>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Problem</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.problem}</p></div>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Solution</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.solution}</p></div>
                  <div className="cs-rs"><div className="cs-rl fm">Result</div><div className="cs-rv fd">{cs.result}</div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <span className="fm" style={{ fontSize: 12, fontWeight: 600, color: 'var(--ac)' }}>{cs.timeline}</span>
                  </div>
                  <div className="mt fm">{cs.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Have a similar requirement? Let&apos;s build it.</p>
            <button className="btn bp" onClick={openPopup}>
              Start Your Embedded Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 7. PROCESS TIMELINE ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our embedded system development process</div>
            <h2 className="fd">From requirement to deployment — a transparent 5-step process</h2>
          </div>
          <div className="pg" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { n: '1', title: 'Requirement Analysis', desc: 'We study your use case, define technical specs, and identify the right hardware-firmware architecture.', color: 'var(--ac)' },
              { n: '2', title: 'System Architecture', desc: 'Microcontroller selection, communication protocol design, power management strategy, and system block diagram.', color: 'var(--tl)' },
              { n: '3', title: 'Development', desc: 'Parallel hardware design, firmware coding, device driver development, and protocol implementation.', color: 'var(--ac)' },
              { n: '4', title: 'Testing & Validation', desc: 'Hardware-software integration testing, functional validation, debugging, and performance optimization.', color: 'var(--tl)' },
              { n: '5', title: 'Deploy & Support', desc: 'Production handoff, firmware updates, technical documentation, and ongoing engineering support.', color: 'var(--em)' },
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

      {/* ═══ 8. WHY CHOOSE KNOWX (Retained — same structure as IoT page) ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Why companies choose Knowx</div>
            <h2 className="fd">What makes us different from other embedded system design companies</h2>
          </div>
          <div className="vals">
            {[
              { title: 'Faster development cycles', desc: 'Our integrated hardware-firmware team eliminates coordination delays that plague multi-vendor projects. Average prototype delivery: 6-8 weeks.', bg: 'linear-gradient(135deg,var(--ac),var(--acd))', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
              { title: 'Real product engineering experience', desc: 'We have shipped 100+ embedded products across 10 industries over 20 years. We know what breaks in the field and how to prevent it.', bg: 'linear-gradient(135deg,var(--td),var(--tl))', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></> },
              { title: 'Hardware + firmware under one roof', desc: 'No more coordinating between your PCB designer, firmware vendor, and testing consultant. We own the entire embedded stack — fewer integration surprises.', bg: 'linear-gradient(135deg,#065F46,var(--em))', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></> },
              { title: 'Training + engineering ecosystem', desc: 'Our Product Development Fellowship creates a constant pipeline of trained engineers who understand real-world embedded development — not just classroom theory.', bg: 'linear-gradient(135deg,var(--n800),var(--n700))', icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>, unique: true },
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

      {/* ═══ 9. TECH STACK — CUSTOMIZED FOR EMBEDDED ═══ */}
      <section style={{ padding: '72px 0', background: 'var(--n950)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="sec-in" style={{ position: 'relative' }}>
          <div className="sh rv" style={{ marginBottom: 16 }}>
            <div className="sl lt fm" style={{ marginBottom: 16 }}>Technology stack</div>
            <h2 className="fd" style={{ color: '#fff' }}>Built with industry-standard embedded technologies</h2>
          </div>
          <p className="rv" style={{ fontSize: 15, color: 'var(--n300)', lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
            We use proven microcontrollers, firmware platforms, and communication protocols to build production-ready embedded systems.
          </p>
          {[
            { label: 'Microcontrollers & Processors', pills: ['STM32', 'TI MCU', 'ESP32', 'Arduino', 'Raspberry Pi', 'NXP', 'Microchip'], color: 'blue' },
            { label: 'Firmware & RTOS', pills: ['Embedded C', 'C++', 'FreeRTOS', 'Zephyr', 'Bare Metal', 'Device Drivers', 'RTOS'], color: 'teal' },
            { label: 'Communication Protocols', pills: ['UART', 'SPI', 'I2C', 'CAN', 'Modbus', 'RS-485', 'USB', 'RS-232'], color: 'green' },
            { label: 'Tools & Testing', pills: ['JTAG', 'SWD', 'Oscilloscope', 'Logic Analyzer', 'Git', 'CI/CD', 'Unit Testing'], color: 'purple' },
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
            <h2 className="fd">FAQs on embedded system design and software development</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              { q: 'What is embedded system design and software development?', a: 'Embedded system design and software development involve creating hardware and firmware that work together to perform specific functions within a device. This includes PCB design, microcontroller programming, RTOS integration, device driver development, and communication protocol implementation (UART, SPI, I2C, CAN).' },
              { q: 'How is embedded system development different from IoT development?', a: 'Embedded systems focus on the device itself — hardware and firmware working together for a specific function. IoT adds connectivity and cloud integration to those devices, enabling remote monitoring, data analytics, and over-the-air updates. We offer both services and can help you determine the right approach for your product.' },
              { q: 'What programming languages are used in embedded systems?', a: 'The most common languages are C and C++ for low-level firmware development. Real-time operating systems like FreeRTOS and Zephyr are used for real-time applications. Python is sometimes used for higher-level testing and scripting. We select the right tools based on your specific application requirements.' },
              { q: 'Do you provide end-to-end embedded product development?', a: 'Yes. We offer complete solutions — from hardware design and firmware development to system integration, testing, and production deployment. Our integrated engineering team handles the entire product lifecycle under one roof, eliminating multi-vendor coordination issues.' },
              { q: 'What industries benefit from embedded system design services?', a: 'Industries like manufacturing, automotive, healthcare, energy and utilities, and consumer electronics rely heavily on embedded systems for asset tracking, control systems, medical devices, battery management, power systems, and smart connected products.' },
              { q: 'How long does embedded system development take?', a: 'Timelines vary depending on complexity. A simple firmware project may take 4-6 weeks, while a full embedded product with custom hardware, firmware, and system integration can take 3-6 months. We provide a detailed timeline and milestone plan during the requirement analysis phase.' },
            ].map((faq, i) => (
              <div className={'faq-item rv' + (openFaq === i ? ' open' : '')} key={i}>
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
              <h2 className="fd">Ready to build your embedded product?</h2>
              <p>Let us turn your idea into a reliable, production-ready embedded system. We typically respond within 24 hours.</p>
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

      {/* ═══ COMPLETE RESPONSIVE CSS — ALL BREAKPOINTS ═══ */}
      <style>{`
        /* Base layout for this page */
        .prob-grid-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem; }
        .emb-hero-visual { display: none; }
        @media(min-width:1024px) { .emb-hero-visual { display: block; } }

        /* ── TABLET ≤1024px ── */
        @media(max-width:1024px) {
          .emb-hero-visual { display: none !important; }
          .g3 { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
          .g5 { grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; }
          .pg { grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; }
          .vals { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
          .sst-in { gap: 24px !important; padding: 0 1.5rem !important; }
          .sec-in { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }

        /* ── SMALL TABLET ≤768px ── */
        @media(max-width:768px) {
          .emb-hero-flex { flex-direction: column !important; gap: 32px !important; padding: 0 1.25rem !important; }
          .prob-grid-wrap { grid-template-columns: 1fr !important; gap: 32px !important; padding: 0 1.25rem !important; }
          .g3 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .g5 { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .pg { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .vals { grid-template-columns: 1fr !important; gap: 16px !important; }
          .sst-in { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; padding: 0 1.25rem !important; }
          .sh h2 { font-size: clamp(1.4rem, 5vw, 1.8rem) !important; }
          .faq-item { padding: 16px !important; }
          .faq-q h3 { font-size: 15px !important; }
          .cta-b { padding: 32px 24px !important; }
          .cta-btns { flex-direction: column !important; gap: 12px !important; }
          .cs-img { height: 180px !important; }
          .sec { padding: 48px 0 !important; }
        }

        /* ── MOBILE ≤640px ── */
        @media(max-width:640px) {
          .emb-hero-flex { flex-direction: column !important; padding: 0 1rem !important; }
          .hero-ctas { flex-direction: column !important; width: 100% !important; }
          .hero-ctas a, .hero-ctas button { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .g5 { grid-template-columns: 1fr !important; gap: 10px !important; }
          .ind { min-height: auto !important; padding: 20px !important; }
          .pg { grid-template-columns: 1fr !important; gap: 8px !important; }
          .pc { padding: 16px !important; }
          .sst-in { gap: 12px !important; padding: 0 1rem !important; }
          .ssv { font-size: clamp(1.4rem, 6vw, 1.8rem) !important; }
          .sec-in { padding-left: 1rem !important; padding-right: 1rem !important; }
          .faq-q h3 { font-size: 14px !important; line-height: 1.4 !important; }
          .faq-a p { font-size: 14px !important; }
          .cta-b { padding: 28px 20px !important; border-radius: 16px !important; }
          .cta-b h2 { font-size: clamp(1.3rem, 5vw, 1.6rem) !important; }
          .cta-ph { font-size: 14px !important; }
          .sv { padding: 20px !important; }
          .sv h3 { font-size: 16px !important; }
          .cs-img { height: 160px !important; }
          .cs-body { padding: 16px !important; }
          .val { padding: 20px !important; }
          .sec { padding: 40px 0 !important; }
        }

        /* ── VERY SMALL ≤400px ── */
        @media(max-width:400px) {
          .sst-in { grid-template-columns: 1fr !important; gap: 8px !important; text-align: center !important; }
          .sec-in { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
          .emb-hero-flex h1 { font-size: 1.8rem !important; }
          .cta-b h2 { font-size: 1.2rem !important; }
        }
      `}</style>
    </>
  );
}
