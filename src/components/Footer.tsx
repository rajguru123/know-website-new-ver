import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-m">
        <div className="ft-b">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div
              className="fd"
              style={{
                width: 42, height: 42, borderRadius: 11,
                background: 'linear-gradient(135deg, var(--ac), var(--tl))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 19,
              }}
            >
              K
            </div>
            <div>
              <div className="fd" style={{ fontWeight: 800, fontSize: 18, color: '#fff', lineHeight: 1.2 }}>KNOWX</div>
              <div className="fm" style={{ fontSize: 10, color: 'var(--n400)', letterSpacing: '.15em', textTransform: 'uppercase' as const }}>
                Innovations Pvt Ltd
              </div>
            </div>
          </div>
          <p>
            Bangalore-based product engineering company specializing in embedded systems, IoT, and AI.
            End-to-end engineering solutions since 2005.
          </p>
          <div className="ft-ci">
            <a href="tel:+919886094611">+91 98860 94611</a>
            <a href="mailto:bhimsen@knowxindia.com">bhimsen@knowxindia.com</a>
            <p style={{ color: 'var(--n400)', fontSize: 13, marginTop: 8 }}>
              Vijayanagar, Bangalore, Karnataka, India
            </p>
          </div>
        </div>
        <div className="ft-c">
          <h4 className="fd">Services</h4>
          <ul>
            <li><a href="#">Hardware Design</a></li>
            <li><a href="#">Embedded Systems</a></li>
            <li><a href="#">Firmware Dev</a></li>
            <li><a href="#">IoT Product Dev</a></li>
            <li><a href="#">PCB Design</a></li>
            <li><a href="#">AI &amp; ML</a></li>
            <li><a href="#">Design to Mfg</a></li>
            <li><a href="#">Web &amp; Mobile</a></li>
          </ul>
        </div>
        <div className="ft-c">
          <h4 className="fd">Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="ft-c">
          <h4 className="fd">Industries</h4>
          <ul>
            <li><a href="#">Automotive</a></li>
            <li><a href="#">Healthcare</a></li>
            <li><a href="#">Industrial IoT</a></li>
            <li><a href="#">Smart Devices</a></li>
            <li><a href="#">Smart AgriTech</a></li>
          </ul>
          <h4 className="fd" style={{ marginTop: 24 }}>Certifications</h4>
          <div className="certs-f fm">
            <span className="cert-f">BIS</span>
            <span className="cert-f">CE</span>
            <span className="cert-f">IEC</span>
            <span className="cert-f">IEEE</span>
            <span className="cert-f">IPC</span>
          </div>
        </div>
      </div>
      <div className="ft-ac">
        <div className="ft-ac-in">
          <div className="ac-i">
            <div className="ac-d" />
            <span>
              <strong style={{ color: 'var(--tl)' }}>Knowx Product Development Fellowship</strong>
              {' — Industry training in AI, IoT, Embedded Systems & Web Dev'}
            </span>
          </div>
          <a href="#" className="ac-l">Learn more →</a>
        </div>
      </div>
      <div className="ft-bt">
        <div className="ft-bt-in">
          <p>© 2026 Knowx Innovations Pvt Ltd. All rights reserved.</p>
          <p>Product Engineering Company · Since 2005 · Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}
