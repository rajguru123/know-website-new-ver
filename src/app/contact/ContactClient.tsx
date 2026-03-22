'use client';

export default function ContactClient() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="contact-hero">
        <div className="contact-hero-in">
          <div className="contact-hero-text rv">
            <div className="sl fm" style={{ marginBottom: 20 }}>Contact us</div>
            <h1 className="fd">Let&apos;s <span className="hl">build something</span> together</h1>
            <p>Have a product idea, a project requirement, or just want to explore how we can help? We typically respond within 24 hours.</p>
          </div>
          <div className="contact-hero-visual rv rv-d2">
            {/* Safari-safe SVG — no nested <svg> elements */}
            <svg viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" width="380" height="280" style={{ maxWidth: '100%', height: 'auto' }}>
              {/* Envelope */}
              <rect x="60" y="40" width="260" height="170" rx="16" fill="var(--n50)" stroke="var(--n200)" strokeWidth="1.5" />
              <path d="M60 56 L190 140 L320 56" stroke="var(--ac)" strokeWidth="1.5" fill="none" opacity=".3" />
              {/* Paper */}
              <rect x="90" y="70" width="200" height="120" rx="8" fill="#fff" stroke="var(--n100)" strokeWidth="1" />
              <rect x="110" y="90" width="100" height="5" rx="2" fill="var(--ac)" opacity=".15" />
              <rect x="110" y="102" width="160" height="4" rx="2" fill="var(--n200)" opacity=".6" />
              <rect x="110" y="112" width="140" height="4" rx="2" fill="var(--n200)" opacity=".5" />
              <rect x="110" y="122" width="120" height="4" rx="2" fill="var(--n200)" opacity=".4" />
              <rect x="110" y="140" width="70" height="24" rx="6" fill="var(--ac)" opacity=".15" />
              <rect x="120" y="148" width="30" height="4" rx="2" fill="var(--ac)" opacity=".4" />
              {/* Icons as circles with text instead of nested SVGs */}
              <circle cx="50" cy="100" r="22" fill="var(--ac50)" stroke="var(--ac)" strokeWidth="1" opacity=".5" />
              <text x="50" y="105" textAnchor="middle" fill="var(--ac)" fontSize="16" opacity=".6">☎</text>
              <circle cx="340" cy="160" r="22" fill="rgba(0,180,216,.1)" stroke="var(--tl)" strokeWidth="1" opacity=".5" />
              <text x="340" y="165" textAnchor="middle" fill="var(--tl)" fontSize="16" opacity=".6">📍</text>
              <circle cx="330" cy="60" r="20" fill="rgba(16,185,129,.08)" stroke="var(--em)" strokeWidth="1" opacity=".5" />
              <text x="330" y="65" textAnchor="middle" fill="var(--em)" fontSize="14" opacity=".6">✉</text>
              <circle cx="70" cy="200" r="20" fill="rgba(37,211,102,.1)" stroke="#25D366" strokeWidth="1" opacity=".5" />
              <text x="70" y="205" textAnchor="middle" fill="#25D366" fontSize="14" opacity=".6">💬</text>
              <circle cx="140" cy="30" r="4" fill="var(--ac)" opacity=".1" />
              <circle cx="280" cy="230" r="5" fill="var(--tl)" opacity=".1" />
              <circle cx="200" cy="240" r="3" fill="var(--em)" opacity=".12" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT GRID ═══ */}
      <section className="contact-sec">
        <div className="contact-grid">
          {/* FORM */}
          <div className="c-form-card rv">
            <h2 className="fd">Send us a message</h2>
            <form className="c-form" onSubmit={handleSubmit}>
              <div className="c-row">
                <div className="c-field"><label>First Name *</label><input type="text" required placeholder="John" /></div>
                <div className="c-field"><label>Last Name *</label><input type="text" required placeholder="Doe" /></div>
              </div>
              <div className="c-row">
                <div className="c-field"><label>Email *</label><input type="email" required placeholder="john@company.com" /></div>
                <div className="c-field"><label>Phone / WhatsApp *</label><input type="tel" required placeholder="+91 98860 94611" /></div>
              </div>
              <div className="c-field"><label>Company Name</label><input type="text" placeholder="Your company" /></div>
              <div className="c-field"><label>Your Message / Project Brief</label><textarea placeholder="Tell us briefly about your project requirements, timeline, and budget range..." /></div>
              <button type="submit" className="c-submit">Send Enquiry</button>
              <p className="c-note">We respect your privacy. Your information will never be shared.</p>
            </form>
          </div>

          {/* DETAILS */}
          <div className="c-details">
            <div className="c-info-block rv rv-d1">
              <div className="c-info-row">
                <div className="c-info-ico" style={{ background: 'linear-gradient(135deg,var(--ac),var(--acd))' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.75.7 2.57a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.82.34 1.69.57 2.57.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <div className="c-info-content"><h4 className="fd">Phone</h4><a href="tel:+919886094611">+91 98860 94611</a></div>
              </div>
              <div className="c-info-divider" />
              <div className="c-info-row">
                <div className="c-info-ico" style={{ background: 'linear-gradient(135deg,var(--td),var(--tl))' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                </div>
                <div className="c-info-content"><h4 className="fd">Email</h4><a href="mailto:bhimsen@knowxindia.com">bhimsen@knowxindia.com</a></div>
              </div>
              <div className="c-info-divider" />
              <div className="c-info-row">
                <div className="c-info-ico" style={{ background: 'linear-gradient(135deg,#1B5E2B,#25D366)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </div>
                <div className="c-info-content"><h4 className="fd">WhatsApp</h4><a href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">Chat on WhatsApp →</a></div>
              </div>
              <div className="c-info-divider" />
              <div className="c-info-row">
                <div className="c-info-ico" style={{ background: 'linear-gradient(135deg,var(--n800),var(--n700))' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="c-info-content"><h4 className="fd">Office Address</h4><p>Knowx Innovations Pvt Ltd<br />Vijayanagar, Bangalore — 560040<br />Karnataka, India</p></div>
              </div>
              <div className="c-info-divider" />
              <div className="c-info-row">
                <div className="c-info-ico" style={{ background: 'linear-gradient(135deg,#065F46,var(--em))' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div className="c-info-content"><h4 className="fd">Working Hours</h4><p>Monday — Saturday: 9:30 AM — 6:30 PM IST<br />Sunday: Closed</p></div>
              </div>
            </div>

            {/* Map */}
            <div className="c-map rv rv-d2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9!2d77.539!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlqYXlhbmFnYXIsIEJhbmdhbG9yZQ!5e0!3m2!1sen!2sin!4v1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Knowx Innovations office location"
              />
            </div>

            {/* WhatsApp strip */}
            <div className="wa-strip rv rv-d3">
              <div className="wa-strip-text">
                <h3 className="fd">Prefer WhatsApp?</h3>
                <p>Chat directly with our engineering team</p>
              </div>
              <a href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="wa-strip-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="bottom-cta">
        <div className="bottom-cta-in rv">
          <h2 className="fd">Prefer a quick call?</h2>
          <p>Speak directly with our engineering team — no sales pitch, just a technical conversation about your project.</p>
          <div className="bottom-btns">
            <a href="tel:+919886094611" className="btn-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.75.7 2.57a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.82.34 1.69.57 2.57.7A2 2 0 0122 16.92z" /></svg>
              Call +91 98860 94611
            </a>
            <a href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-6.556 0-11.891-5.335-11.893-11.893A11.82 11.82 0 018.463 3.488 11.815 11.815 0 0112.05 0C18.605 0 23.94 5.335 23.943 11.892c0 6.558-5.339 11.893-11.893 11.893Z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
