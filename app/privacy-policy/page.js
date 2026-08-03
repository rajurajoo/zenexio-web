import Reveal from '../../components/Reveal';
import PageBanner from '../../components/PageBanner';
import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Zenexio',
  description: 'How Zenexio collects, uses, and protects your information when you visit zenexio.pro or contact us.',
  keywords: 'Zenexio privacy policy, data protection, cookie policy',
  path: '/privacy-policy'
});

export default function PrivacyPolicyPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <PageBanner
        label="Legal"
        className="post-banner"
        title={<h1>Privacy Policy</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      >
        <p>Last updated: August 2, 2026</p>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container">
          <Reveal as="article" className="post-body">
            <p className="post-lede">This page explains what information Zenexio collects when you visit zenexio.pro or contact us, how we use it, and the choices you have.</p>

            <h2>Information We Collect</h2>
            <p>When you submit our contact or quick-quote form, we collect the information you provide directly — your name, email address, the service you&apos;re interested in, and any message you include. We use this solely to respond to your inquiry and, if you become a client, to deliver the project you&apos;ve engaged us for.</p>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>

            <h2>Analytics &amp; Cookies</h2>
            <p>We use Google Analytics 4 to understand how visitors use our website — which pages are popular, how people navigate the site, and general traffic patterns. Google Analytics uses cookies (small text files stored on your device) to do this. The data collected is aggregated and does not personally identify you unless you have separately submitted a form to us.</p>
            <p>You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>, or by adjusting your browser&apos;s cookie settings to block third-party cookies.</p>

            <h2>How We Use Your Information</h2>
            <ul className="check-list">
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>To respond to inquiries submitted through our contact or quote forms.</span>
              </li>
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>To deliver, manage, and communicate about projects for clients who engage us.</span>
              </li>
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>To understand aggregate website traffic and improve our content and user experience.</span>
              </li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We use the following third-party services, each with their own privacy practices: Google Analytics (website analytics), Netlify (website hosting), and WhatsApp/Meta (if you contact us via WhatsApp click-to-chat links). We recommend reviewing their respective privacy policies for details on how they handle data.</p>

            <h2>Data Retention</h2>
            <p>Contact form submissions are retained only as long as necessary to respond to your inquiry or, for active clients, for the duration of our working relationship and a reasonable period afterward for record-keeping. You may request deletion of your information at any time by emailing us.</p>

            <h2>Your Rights</h2>
            <p>You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at <a href="mailto:info@zenexio.pro">info@zenexio.pro</a>. We will respond within a reasonable timeframe.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. The &quot;last updated&quot; date at the top of this page reflects the most recent revision.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this privacy policy or how we handle your information, reach out at <a href="mailto:info@zenexio.pro">info@zenexio.pro</a> or <a href="tel:+971503848523">+971 503 848523</a>.</p>
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
