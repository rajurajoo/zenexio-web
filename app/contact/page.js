import Reveal from '../../components/Reveal';
import ContactForm from '../../components/ContactForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import ImageSlot from '../../components/ImageSlot';
import { seo, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: seo.contact.title,
  description: seo.contact.description,
  keywords: seo.contact.keywords,
  path: '/contact'
});

export default function ContactPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/contact.css" />
    <main>
      <section className="contact-wrap">
        <div className="contact-wrap__glow"></div>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="contact-grid">

            <Reveal>
              <span className="label">Let&apos;s Talk</span>
              <h1 className="contact-info__title">Start your next big project with us</h1>
              <p className="contact-info__sub">Tell us what you&apos;re building and we&apos;ll get back within one business day. No pressure — just a real conversation.</p>

              <div className="c-details">
                <div className="c-detail">
                  <div className="c-detail__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                  <div><span className="c-detail__lbl">Email</span><a href="mailto:info@zenexio.pro" className="c-detail__val">info@zenexio.pro</a></div>
                </div>
                <div className="c-detail">
                  <div className="c-detail__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                  <div><span className="c-detail__lbl">Phone</span><a href="tel:+971503848523" className="c-detail__val">+971 503 848523</a></div>
                </div>
                <div className="c-detail">
                  <div className="c-detail__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                  <div><span className="c-detail__lbl">Locations</span><span className="c-detail__val">Dubai, UAE &amp; India</span></div>
                </div>
              </div>

              <div className="c-avail">
                <div className="c-avail__dot"></div>
                <span>Accepting new projects — Q3 2026</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <ImageSlot label="Office Photo" ratio="4/3" />
              </div>
            </Reveal>

            <Reveal className="form-card" delay={0.14}>
              <ContactForm variant="full" />
            </Reveal>

          </div>

          <Reveal className="contact-map" delay={0.2}>
            <iframe
              title="Zenexio location — Dubai, UAE"
              src="https://www.google.com/maps?q=Dubai,+United+Arab+Emirates&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
