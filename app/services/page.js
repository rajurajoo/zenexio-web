import Link from 'next/link';
import Reveal from '../../components/Reveal';
import PageBanner from '../../components/PageBanner';
import ContactForm from '../../components/ContactForm';
import PhotoFrame from '../../components/PhotoFrame';
import { seo, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: seo.services.title,
  description: seo.services.description,
  keywords: seo.services.keywords,
  path: '/services'
});

const SERVICE_NAMES = [
  'Graphic Design',
  'Company Profile Design',
  'Web Development',
  'E-Commerce Development',
  'CRM Portal Development',
  'Digital Marketing',
  'SEO',
  'Brand Strategy',
  'Brand Naming',
  'Package Design',
  'Motion Design'
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SERVICE_NAMES.map((name, i) => ({
    '@type': 'Service',
    position: i + 1,
    name,
    provider: { '@id': 'https://zenexio.pro/#organization' },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'India' }
    ]
  }))
};

const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: { '@type': 'Answer', text: 'A brand identity project typically takes 2-4 weeks, a business website 3-6 weeks, and an e-commerce build 6-10 weeks — exact timelines depend on scope and how quickly feedback is provided.' }
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing digital marketing retainers?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. SEO, social media management, and paid advertising are all available as monthly retainers alongside one-off project work.' }
    },
    {
      '@type': 'Question',
      name: 'Can Zenexio handle design, web, and marketing together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — that is our core model. Handling brand, web, and marketing under one team avoids the disconnects that happen when separate vendors hand off work to each other.' }
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we serve clients across the UAE and India, and can work with clients elsewhere remotely.' }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/services.min.css" />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }} />
      <PageBanner
        label="What We Offer"
        title={<h1>Services Built for Modern Brands</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      >
        <p>Three core disciplines. One unified team. Unlimited potential for your brand&apos;s growth.</p>
      </PageBanner>

      {/* Work Samples */}
      <section className="section">
        <div className="container">
          <div className="snapshots-grid">
            <Reveal delay={0.05}><PhotoFrame src="/images/graphic-design-branding-exhibition-dubai.png" alt="Graphic design and branding exhibition work by Zenexio, Dubai" ratio="4/3" /></Reveal>
            <Reveal delay={0.1}><PhotoFrame src="/images/ecommerce-website-design-portfolio-dubai.png" alt="E-commerce website design portfolio by Zenexio, Dubai" ratio="4/3" /></Reveal>
            <Reveal delay={0.15}><PhotoFrame src="/images/seo-search-optimization-services-dubai.png" alt="SEO and search optimization services by Zenexio, Dubai" ratio="4/3" /></Reveal>
            <Reveal delay={0.2}><PhotoFrame src="/images/brand-identity-creative-concept-art-dubai.png" alt="Brand identity creative concept art by Zenexio, Dubai" ratio="4/3" /></Reveal>
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="service-block section" id="design">
        <div className="container">
          <div className="svc-grid">
            <Reveal className="svc-text">
              <span className="label">01 — Graphic Design</span>
              <h2>Visuals that stop the scroll and stick in memory</h2>
              <p>Great design is the difference between being noticed and being remembered. Our design team blends strategic thinking with artistic craft to create visuals that are unmistakably yours.</p>
              <p>Whether you need a brand built from the ground up or a refresh that breathes new life into an existing identity, we deliver work that resonates across every touchpoint.</p>
              <Link href="/contact" className="btn btn--gold">Get a Design Quote</Link>
            </Reveal>
            <Reveal className="svc-feats" delay={0.12}>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <div><h4>Brand Identity &amp; Logo</h4><p>Complete visual systems — logo, palette, typography, and brand guidelines that work everywhere.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                <div><h4>Company Profile &amp; Marketing Collateral</h4><p>Company profile design, brochures, presentations, and social templates — consistent and premium at every touchpoint.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
                <div><h4>UI / UX Design</h4><p>User-centered interface design backed by research and tested for clarity and delight.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.914L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" /></svg></div>
                <div><h4>Motion &amp; Animation</h4><p>Animated logos, explainer videos, and motion graphics that bring your brand story to life.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="service-block service-block--alt section" id="web">
        <div className="container">
          <div className="svc-grid svc-grid--rev">
            <Reveal className="svc-text">
              <span className="label">02 — Web Development</span>
              <h2>Websites that perform as good as they look</h2>
              <p>We build websites and web applications with a focus on speed, accessibility, and scalability. Every line of code is purposeful — no bloat, no shortcuts.</p>
              <p>From marketing sites to complex e-commerce platforms, we use the right technology for the job and ensure every project is built to grow with you.</p>
              <Link href="/contact" className="btn btn--gold">Start Your Build</Link>
            </Reveal>
            <Reveal className="svc-feats" delay={0.12}>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
                <div><h4>Custom Website Development</h4><p>Bespoke websites built from scratch — no page-builder limitations, full flexibility.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></div>
                <div><h4>E-Commerce Solutions</h4><p>Seamless shopping experiences with secure payments and conversion-optimised flows.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg></div>
                <div><h4>CMS Integration</h4><p>Headless CMS solutions and custom admin panels that make content updates effortless.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                <div><h4>Performance &amp; Security</h4><p>Core Web Vitals optimisation, HTTPS, regular audits — fast and secure by design.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CRM Portal Development */}
      <section className="service-block section" id="crm">
        <div className="container">
          <div className="svc-grid">
            <Reveal className="svc-text">
              <span className="label">03 — CRM Portal Development</span>
              <h2>Best-price CRM systems built around how you actually sell</h2>
              <p>Off-the-shelf CRM subscriptions charge per seat, forever, and rarely fit your exact sales process. We build custom CRM portals — owned outright, no recurring licence fees, and shaped around your real pipeline from day one.</p>
              <p>Real estate, clinics and salons, e-commerce, or general B2B — every CRM we build includes WhatsApp integration, role-based access, and full data ownership at launch.</p>
              <Link href="/contact" className="btn btn--gold">Get a CRM Quote</Link>
            </Reveal>
            <Reveal className="svc-feats" delay={0.12}>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 4v5" /><circle cx="13" cy="14" r="2" /></svg></div>
                <div><h4>Custom CRM Portals</h4><p>Fully-owned CRM systems built around your actual sales process — no per-seat licence fees.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.45 1.32 4.93L2 22l5.25-1.38A9.93 9.93 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.87 14.16c-.25.71-1.47 1.36-2.02 1.44-.52.08-1.17.11-1.89-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.9-4.26-5.05-4.46-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.61.85 2.1.92 2.25.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.42 1.49.32.15.51.13.7-.08.2-.21.83-.96 1.05-1.29.22-.32.44-.27.73-.16.3.11 1.89.89 2.21 1.05.32.16.53.24.61.37.08.14.08.78-.17 1.5z" /></svg></div>
                <div><h4>WhatsApp CRM Integration</h4><p>WhatsApp Business API built into your pipeline — shared inbox, lead tracking, and automated follow-up.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /></svg></div>
                <div><h4>Role-Based Access</h4><p>Sales reps, managers, and admins each see exactly what they need — nothing more, nothing less.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                <div><h4>Pipeline &amp; Reporting</h4><p>Live pipeline value, conversion rates, and activity dashboards — no manual spreadsheet digging.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="service-block service-block--alt section" id="marketing">
        <div className="container">
          <div className="svc-grid svc-grid--rev">
            <Reveal className="svc-text">
              <span className="label">04 — Digital Marketing</span>
              <h2>Data-driven growth that actually works</h2>
              <p>Marketing without measurement is guessing. We build campaigns anchored in data and tuned for performance — continuously optimised to maximise your return.</p>
              <p>From search to social, paid to organic, we connect you with the right audiences at the right time with the right message.</p>
              <Link href="/contact" className="btn btn--gold">Grow My Brand</Link>
            </Reveal>
            <Reveal className="svc-feats" delay={0.12}>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
                <div><h4>SEO &amp; Content Strategy</h4><p>Technical SEO and content that ranks — driving qualified organic traffic to your site.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
                <div><h4>Paid Advertising (PPC)</h4><p>Google and Meta campaigns built for maximum ROAS — precise targeting, continuous A/B testing.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></div>
                <div><h4>Social Media Management</h4><p>Platform-native content strategy, community management, and analytics reporting.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                <div><h4>Analytics &amp; Reporting</h4><p>Custom dashboards and monthly reviews so you always know exactly what&apos;s working.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Strategy */}
      <section className="service-block section" id="branding">
        <div className="container">
          <div className="svc-grid">
            <Reveal className="svc-text">
              <span className="label">05 — Brand Strategy</span>
              <h2>Identity systems that speak your truth</h2>
              <p>A brand is more than a logo — it&apos;s a promise. We help you define, articulate, and express that promise with consistency and conviction across every channel.</p>
              <Link href="/contact" className="btn btn--gold">Build My Brand</Link>
            </Reveal>
            <Reveal className="svc-feats" delay={0.12}>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <div><h4>Brand Positioning</h4><p>Defining your unique space in the market — what you stand for and who you&apos;re for.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                <div><h4>Brand Voice &amp; Messaging</h4><p>Tone, language, and messaging frameworks that make your brand unmistakable in copy.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                <div><h4>Brand Guidelines</h4><p>Comprehensive documentation ensuring your brand stays consistent across every team and touchpoint.</p></div>
              </div>
              <div className="feat-item">
                <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg></div>
                <div><h4>Brand Naming &amp; Package Design</h4><p>Naming strategy and product/retail packaging design that stands out on shelf and on screen.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">How We Work</span>
            <h2>Our process, your peace of mind</h2>
          </Reveal>
          <div className="process-row">
            <Reveal as="div" className="proc-step" delay={0.05}><div className="proc-num">01</div><h3>Discover</h3><p>Goals, audience, competitive landscape — before a single line is drawn.</p></Reveal>
            <div className="proc-conn"></div>
            <Reveal as="div" className="proc-step" delay={0.1}><div className="proc-num">02</div><h3>Strategise</h3><p>A clear roadmap with milestones, deliverables, and agreed success metrics.</p></Reveal>
            <div className="proc-conn"></div>
            <Reveal as="div" className="proc-step" delay={0.15}><div className="proc-num">03</div><h3>Create</h3><p>Designing, building, refining — with your feedback at every checkpoint.</p></Reveal>
            <div className="proc-conn"></div>
            <Reveal as="div" className="proc-step" delay={0.2}><div className="proc-num">04</div><h3>Launch &amp; Grow</h3><p>We ship, measure, and iterate. Launch is the beginning, not the end.</p></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Common Questions</span>
            <h2>Before you reach out</h2>
          </Reveal>
          <div className="faq-list">
            <Reveal as="details" className="faq-item" delay={0.02}>
              <summary>How long does a typical project take?</summary>
              <p>A brand identity project typically takes 2-4 weeks, a business website 3-6 weeks, and an e-commerce build 6-10 weeks — exact timelines depend on scope and how quickly feedback is provided.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.06}>
              <summary>Do you offer ongoing digital marketing retainers?</summary>
              <p>Yes. SEO, social media management, and paid advertising are all available as monthly retainers alongside one-off project work.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.1}>
              <summary>Can Zenexio handle design, web, and marketing together?</summary>
              <p>Yes — that is our core model. Handling brand, web, and marketing under one team avoids the disconnects that happen when separate vendors hand off work to each other.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.14}>
              <summary>Do you work with businesses outside Dubai?</summary>
              <p>Yes, we serve clients across the UAE and India, and can work with clients elsewhere remotely.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="quick-quote">
            <div className="quick-quote__text">
              <span className="label">Let&apos;s get started</span>
              <h2>Which service does your brand need most?</h2>
              <p>Tell us your name, email, and what you need — we&apos;ll follow up within one business day with next steps. No long forms, no pressure.</p>
              <div className="trust-strip" style={{ justifyContent: 'flex-start' }}>
                <span><strong>1000+</strong> Projects Delivered</span>
                <span className="trust-sep">·</span>
                <span><strong>98%</strong> Client Retention</span>
                <span className="trust-sep">·</span>
                <span>Dubai, UAE &amp; India</span>
              </div>
            </div>
            <ContactForm variant="quick" />
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
