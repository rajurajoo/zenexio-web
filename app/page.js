import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import HeroCosmic from '../components/HeroCosmic';
import PhotoFrame from '../components/PhotoFrame';
import { seo, buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  title: seo.home.title,
  description: seo.home.description,
  keywords: seo.home.keywords,
  path: '/'
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Zenexio offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio offers graphic design, web development, digital marketing, brand strategy, and motion design as a full-service creative agency.' }
    },
    {
      '@type': 'Question',
      name: 'Where is Zenexio located and who do they serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio is based in Dubai, UAE, with a delivery team in India, and serves clients across the UAE and India.' }
    },
    {
      '@type': 'Question',
      name: 'How much do Zenexio’s services cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every project starts with a discovery conversation and a transparent, scoped quote — pricing depends on scope, so the fastest way to get an accurate number is to request a quote at zenexio.pro/contact.' }
    },
    {
      '@type': 'Question',
      name: 'How fast does Zenexio respond to inquiries?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio replies to every inquiry within one business day.' }
    },
    {
      '@type': 'Question',
      name: 'Do clients own their design and code files?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Zenexio provides fully editable source files and complete usage rights to clients on every project.' }
    }
  ]
};

export default function HomePage() {
  return (
    <>
    <link rel="stylesheet" href="/css/home.min.css" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
    <main>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <HeroCosmic />

      {/* ═══ INTRO ═══ */}
      <section className="intro section" id="intro">
        <div className="container">
          <Reveal as="div" className="statement">
            <span className="statement__eyebrow">Creative Agency · Dubai · UAE · India</span>
            <h1 className="statement__title">Design That <em>Sells</em></h1>
            <p className="statement__body">From product experiences to full-brand campaigns — we build digital work that converts, not just looks good.</p>
            <div className="statement__cta-row">
              <Link href="/contact" className="btn btn--gold btn--lg">Start a Project</Link>
              <Link href="/services" className="btn btn--ghost btn--lg">See Our Work</Link>
            </div>
          </Reveal>

          <div className="intro__grid">
            <Reveal className="intro__text">
              <span className="label">Who We Are</span>
              <h2>We craft digital worlds that move people</h2>
              <p>Zenexio is a full-service creative agency where strategy meets artistry. We navigate every project with unwavering vision — finding beauty and purpose in every pixel, every line of code, every campaign.</p>
              <Link href="/about" className="btn btn--gold">Discover Our Story</Link>
            </Reveal>
            <Reveal className="intro__cards" delay={0.12}>
              <div className="icard"><span className="icard__num">1000+</span><span className="icard__label">Projects Delivered</span></div>
              <div className="icard"><span className="icard__num">7+</span><span className="icard__label">Years of Craft</span></div>
              <div className="icard"><span className="icard__num">98%</span><span className="icard__label">Client Retention</span></div>
              <div className="icard"><span className="icard__num">40+</span><span className="icard__label">Industries Served</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WORKING PROCESS ═══ */}
      <section className="process section" id="process">
        <div className="container">
          <Reveal as="div" className="process__head">
            <span className="chero__script process__script">Working Process</span>
            <h2 className="process__title">Our simple process for<br />creating great work</h2>
          </Reveal>

          <div className="process__timeline">
            <Reveal as="div" className="process__step process__step--active" delay={0.05}>
              <div className="process__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" /></svg>
              </div>
              <div className="process__dot"></div>
              <div className="process__copy">
                <h3>Discovery &amp; Strategy</h3>
                <p>Understanding your goals, audience, and market before any design or code begins.</p>
              </div>
            </Reveal>

            <Reveal as="div" className="process__step" delay={0.1}>
              <div className="process__copy process__copy--left">
                <h3>Concept &amp; Planning</h3>
                <p>Mapping the structure, messaging, and creative direction the project will follow.</p>
              </div>
              <div className="process__dot"></div>
              <div className="process__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
              </div>
            </Reveal>

            <Reveal as="div" className="process__step" delay={0.15}>
              <div className="process__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
              </div>
              <div className="process__dot"></div>
              <div className="process__copy">
                <h3>Design &amp; Build</h3>
                <p>Bringing the concept to life with real design, development, and content — reviewed with you at every stage.</p>
              </div>
            </Reveal>

            <Reveal as="div" className="process__step" delay={0.2}>
              <div className="process__copy process__copy--left">
                <h3>Launch &amp; Handoff</h3>
                <p>Testing, refining, and shipping — with full ownership of every file handed straight to you.</p>
              </div>
              <div className="process__dot"></div>
              <div className="process__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="why-us section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Why Businesses Choose Zenexio</span>
            <h2>No vague quotes. No slow replies. No surprises.</h2>
          </Reveal>
          <div className="why-grid">
            <Reveal as="div" className="why-card" delay={0.05}>
              <div className="why-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20M7 15h4" /></svg></div>
              <h3>Transparent, Scoped Pricing</h3>
              <p>Every quote follows a real discovery conversation — you know exactly what&apos;s included before you commit.</p>
            </Reveal>
            <Reveal as="div" className="why-card" delay={0.1}>
              <div className="why-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <h3>Reply Within 1 Business Day</h3>
              <p>Every inquiry gets a real, considered response — not an autoresponder and a week of silence.</p>
            </Reveal>
            <Reveal as="div" className="why-card" delay={0.15}>
              <div className="why-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg></div>
              <h3>You Own Everything</h3>
              <p>Fully editable source files and complete usage rights, always — no holding your own brand assets hostage.</p>
            </Reveal>
            <Reveal as="div" className="why-card" delay={0.2}>
              <div className="why-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <h3>Dubai, UAE &amp; India Coverage</h3>
              <p>Teams that understand both markets natively — not a single-region shop guessing at your audience.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="services-preview section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">What We Do</span>
            <h2>Services that shape brands</h2>
          </Reveal>
          <div className="sp-grid">
            <Reveal href="/services#design" className="sp-card" delay={0.05}>
              <div className="sp-card__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6h36v36H6z" strokeLinejoin="round" /><circle cx="18" cy="18" r="5" /><path d="M6 32l10-10 8 8 6-6 12 12" strokeLinejoin="round" /></svg></div>
              <h3>Graphic Design</h3><p>Visuals that stop the scroll and embed themselves in memory.</p>
              <span className="sp-card__arrow">→</span>
            </Reveal>
            <Reveal href="/services#web" className="sp-card sp-card--featured" delay={0.1}>
              <div className="sp-card__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="4" y="8" width="40" height="28" rx="3" /><path d="M16 44h16M24 36v8" strokeLinecap="round" /><path d="M14 20l5 5-5 5M22 28h8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Web Development</h3><p>Fast, beautiful, accessible websites that perform as good as they look.</p>
              <span className="sp-card__arrow">→</span>
            </Reveal>
            <Reveal href="/services#marketing" className="sp-card" delay={0.15}>
              <div className="sp-card__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 6C13.954 6 6 13.954 6 24s7.954 18 18 18" strokeLinecap="round" /><path d="M36 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /><path d="M42 12H30" strokeLinecap="round" /></svg></div>
              <h3>Digital Marketing</h3><p>Data-driven campaigns that reach the right people at the right moment.</p>
              <span className="sp-card__arrow">→</span>
            </Reveal>
            <Reveal href="/services#branding" className="sp-card" delay={0.2}>
              <div className="sp-card__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="24,4 29,17 43,17 32,26 36,40 24,31 12,40 16,26 5,17 19,17" /></svg></div>
              <h3>Brand Strategy</h3><p>Identity systems that speak your truth — clearly, consistently, powerfully.</p>
              <span className="sp-card__arrow">→</span>
            </Reveal>
          </div>
          <Reveal delay={0.25} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn--outline">View All Services</Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="gallery section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Selected Work</span>
            <h2>A closer look at our craft</h2>
          </Reveal>
          <div className="gallery-grid">
            <Reveal as="figure" className="gallery-item gallery-item--tall" delay={0.05}>
              <Image src="/images/blog/branding.webp" alt="Brand identity design by Zenexio, creative agency in Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>Brand Identity</figcaption>
            </Reveal>
            <Reveal as="figure" className="gallery-item" delay={0.1}>
              <Image src="/images/blog/design.webp" alt="Graphic design work by Zenexio, Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>Graphic Design</figcaption>
            </Reveal>
            <Reveal as="figure" className="gallery-item" delay={0.15}>
              <Image src="/images/blog/webdev.webp" alt="Web development project by Zenexio, Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>Web Development</figcaption>
            </Reveal>
            <Reveal as="figure" className="gallery-item" delay={0.2}>
              <Image src="/images/blog/marketing.webp" alt="Digital marketing campaign by Zenexio, Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>Digital Marketing</figcaption>
            </Reveal>
            <Reveal as="figure" className="gallery-item gallery-item--tall" delay={0.25}>
              <Image src="/images/blog/strategy.webp" alt="Brand strategy work by Zenexio, Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>Brand Strategy</figcaption>
            </Reveal>
            <Reveal as="figure" className="gallery-item" delay={0.3}>
              <Image src="/images/blog/headless.webp" alt="E-commerce web development by Zenexio, Dubai" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <figcaption>E-Commerce</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CLIENT WORK SNAPSHOTS (image placeholders) ═══ */}
      <section className="snapshots section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Client Work</span>
            <h2>Real projects, real results</h2>
          </Reveal>
          <div className="snapshots-grid">
            <Reveal delay={0.05}><PhotoFrame src="/images/ecommerce-website-design-portfolio-dubai.png" alt="E-commerce website design portfolio by Zenexio, Dubai" ratio="4/3" /></Reveal>
            <Reveal delay={0.1}><PhotoFrame src="/images/website-design-mockup-laptop-dubai.png" alt="Website design mockup on laptop by Zenexio, Dubai" ratio="4/3" /></Reveal>
            <Reveal delay={0.15}><PhotoFrame src="/images/responsive-website-design-mockup-dubai.png" alt="Responsive website design mockup for Dubai business by Zenexio" ratio="4/3" /></Reveal>
            <Reveal delay={0.2}><PhotoFrame src="/images/seo-search-optimization-services-dubai.png" alt="SEO and search optimization services by Zenexio, Dubai" ratio="4/3" /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ STUDIO / TEAM STRIP (image placeholders) ═══ */}
      <section className="studio-strip section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Behind The Work</span>
            <h2>Our studio &amp; the people behind it</h2>
          </Reveal>
          <div className="studio-strip-grid">
            <Reveal delay={0.05}><PhotoFrame src="/images/zenexio-creative-studio-office-dubai.png" alt="Zenexio creative studio office in Dubai" ratio="1/1" /></Reveal>
            <Reveal delay={0.1}><PhotoFrame src="/images/creative-team-collaboration-meeting-dubai.png" alt="Creative team collaboration meeting at Zenexio, Dubai" ratio="1/1" /></Reveal>
            <Reveal delay={0.15}><PhotoFrame src="/images/web-designer-at-work-dubai-agency.png" alt="Web designer at work at Zenexio, a Dubai creative agency" ratio="1/1" /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ VIDEOS ═══ */}
      <section className="videos section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">In Motion</span>
            <h2>See how we bring brands to life</h2>
          </Reveal>
          <div className="video-grid">
            <Reveal as="div" className="video-card" delay={0.05}>
              <video src="/videos/hero-ecommerce.mov" autoPlay muted loop playsInline preload="metadata" />
              <div className="video-card__label">Product Storytelling</div>
            </Reveal>
            <Reveal as="div" className="video-card" delay={0.12}>
              <video src="/images/video-hero.mov" autoPlay muted loop playsInline preload="metadata" />
              <div className="video-card__label">Brand Motion Design</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, i) => (
            ['Graphic Design', 'Web Development', 'Brand Identity', 'Digital Marketing', 'Motion Design', 'UI / UX', 'SEO Strategy', 'E-Commerce']
              .flatMap((label, j) => [
                <span key={`${i}-${j}-l`}>{label}</span>,
                <span key={`${i}-${j}-s`} className="sep">✦</span>
              ])
          ))}
        </div>
      </div>

      {/* ═══ FAQ ═══ */}
      <section className="faq section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">Frequently Asked</span>
            <h2>Questions, answered plainly</h2>
          </Reveal>
          <div className="faq-list">
            <Reveal as="details" className="faq-item" delay={0.02}>
              <summary>What services does Zenexio offer?</summary>
              <p>Zenexio offers graphic design, web development, digital marketing, brand strategy, and motion design as a full-service creative agency.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.06}>
              <summary>Where is Zenexio located and who do they serve?</summary>
              <p>Zenexio is based in Dubai, UAE, with a delivery team in India, and serves clients across the UAE and India.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.1}>
              <summary>How much do Zenexio&apos;s services cost?</summary>
              <p>Every project starts with a discovery conversation and a transparent, scoped quote — pricing depends on scope, so the fastest way to get an accurate number is to request a quote on our <Link href="/contact">contact page</Link>.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.14}>
              <summary>How fast does Zenexio respond to inquiries?</summary>
              <p>Zenexio replies to every inquiry within one business day.</p>
            </Reveal>
            <Reveal as="details" className="faq-item" delay={0.18}>
              <summary>Do clients own their design and code files?</summary>
              <p>Yes. Zenexio provides fully editable source files and complete usage rights to clients on every project.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="home-cta section">
        <div className="container">
          <Reveal className="home-cta__inner">
            <span className="label">Ready?</span>
            <h2>Let&apos;s build something extraordinary together</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Start a Project</Link>
            <div className="trust-strip">
              <span><strong>1000+</strong> Projects Delivered</span>
              <span className="trust-sep">·</span>
              <span><strong>98%</strong> Client Retention</span>
              <span className="trust-sep">·</span>
              <span>Dubai, UAE &amp; India</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    </>
  );
}
