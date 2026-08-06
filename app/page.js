import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import HeroVideoLoop from '../components/HeroVideoLoop';
import { seo, buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({
  title: seo.home.title,
  description: seo.home.description,
  keywords: seo.home.keywords,
  path: '/'
});

export default function HomePage() {
  return (
    <>
    <link rel="stylesheet" href="/css/home.css" />
    <main>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <HeroVideoLoop />

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
              <div className="icard"><span className="icard__num">500+</span><span className="icard__label">Projects Delivered</span></div>
              <div className="icard"><span className="icard__num">7+</span><span className="icard__label">Years of Craft</span></div>
              <div className="icard"><span className="icard__num">98%</span><span className="icard__label">Client Retention</span></div>
              <div className="icard"><span className="icard__num">40+</span><span className="icard__label">Industries Served</span></div>
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
              <span><strong>500+</strong> Projects Delivered</span>
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
