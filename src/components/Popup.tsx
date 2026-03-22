'use client';

export default function Popup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    onClose();
    (e.target as HTMLFormElement).reset();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`pop-overlay${isOpen ? ' show' : ''}`} onClick={handleOverlayClick}>
      <div className="pop">
        <button className="pop-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <h2 className="fd">Ready to scale your innovation?</h2>
        <p className="sub">Talk to our engineering team — we typically respond within 24 hours.</p>
        <form className="pop-form" onSubmit={handleSubmit}>
          <div className="pop-row">
            <div className="pop-field">
              <label>First Name *</label>
              <input type="text" required placeholder="John" />
            </div>
            <div className="pop-field">
              <label>Last Name *</label>
              <input type="text" required placeholder="Doe" />
            </div>
          </div>
          <div className="pop-row">
            <div className="pop-field">
              <label>Email *</label>
              <input type="email" required placeholder="john@company.com" />
            </div>
            <div className="pop-field">
              <label>Phone / WhatsApp *</label>
              <input type="tel" required placeholder="+91 98860 94611" />
            </div>
          </div>
          <div className="pop-field">
            <label>Company Name</label>
            <input type="text" placeholder="Your company" />
          </div>
          <div className="pop-field">
            <label>Your Message / Project Brief</label>
            <textarea placeholder="Tell us briefly about your project requirements..." />
          </div>
          <button type="submit" className="pop-submit">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
}
