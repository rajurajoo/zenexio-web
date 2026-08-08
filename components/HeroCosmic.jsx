import Image from 'next/image';
import Link from 'next/link';

export default function HeroCosmic() {
  return (
    <section className="chero" id="hero">
      <div
        className="chero__bg"
        style={{ backgroundImage: "url('/images/hero-cosmic-sunset.webp')" }}
        aria-hidden="true"
      />
      <div className="chero__overlay" aria-hidden="true" />
      <div className="chero__stars" aria-hidden="true" />

      <div className="chero__inner chero__inner--split container">
        <div className="chero__copy">
          <span className="chero__script-wrap">
            <span className="chero__script">Design Beyond Imagination</span>
            <svg className="chero__script-swash" viewBox="0 0 220 20" fill="none" aria-hidden="true">
              <path d="M2 12c30-14 60-14 90-4s70 10 126-6" stroke="url(#swash-grad)" strokeWidth="2.4" strokeLinecap="round" />
              <defs>
                <linearGradient id="swash-grad" x1="0" y1="0" x2="220" y2="0">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                  <stop offset="50%" stopColor="#e9c6ff" />
                  <stop offset="100%" stopColor="#a84fd6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <h1 className="chero__title chero__title--left">
            Zenexio — <em>The&nbsp;Best</em><br />
            Creative Agency<br />
            in Dubai, UAE
          </h1>
          <p className="chero__body chero__body--left">
            Zenexio is a full-service creative agency in Dubai, UAE &amp; India — graphic design, web development, digital marketing, and brand strategy under one roof.
          </p>
          <div className="chero__cta-row chero__cta-row--left">
            <Link href="/contact" className="chero__btn chero__btn--solid">Start a Project</Link>
            <Link href="/services" className="chero__btn chero__btn--ghost">
              See Our Work
              <span className="chero__btn-icon">→</span>
            </Link>
          </div>
          <div className="chero__stats">
            <div><strong>1000+</strong><span>Projects</span></div>
            <div><strong>7+</strong><span>Years</span></div>
            <div><strong>98%</strong><span>Retention</span></div>
          </div>
        </div>

        <div className="chero__figure">
          <div className="chero__figure-glow" aria-hidden="true"></div>
          <Image
            src="/images/hero-model-neon.png"
            alt="Creative portrait lit in Zenexio's signature purple and cyan neon tones"
            width={1333}
            height={2000}
            priority
            className="chero__figure-img"
          />
          <div className="chero__badge chero__badge--top">
            <span className="chero__badge-dot"></span>
            Available for Projects
          </div>
          <div className="chero__badge chero__badge--bottom">
            <strong>7+</strong> Years Crafting Bold Brands
          </div>
        </div>
      </div>

      <a href="#intro" className="chero__scroll-hint" aria-label="Scroll to content">
        <span>Scroll</span>
        <div className="chero__scroll-line"></div>
      </a>
    </section>
  );
}
