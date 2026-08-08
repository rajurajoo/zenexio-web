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

      <div className="chero__inner container">
        <span className="chero__script">Design Beyond Imagination</span>
        <h1 className="chero__title">
          We craft brands that<br />
          <em>move people</em> &amp; grow revenue
        </h1>
        <p className="chero__body">
          Zenexio is a full-service creative agency in Dubai, UAE &amp; India — graphic design, web development, digital marketing, and brand strategy under one roof.
        </p>
        <div className="chero__cta-row">
          <Link href="/contact" className="chero__btn chero__btn--solid">Start a Project</Link>
          <Link href="/services" className="chero__btn chero__btn--ghost">
            See Our Work
            <span className="chero__btn-icon">→</span>
          </Link>
        </div>
      </div>

      <a href="#intro" className="chero__scroll-hint" aria-label="Scroll to content">
        <span>Scroll</span>
        <div className="chero__scroll-line"></div>
      </a>
    </section>
  );
}
