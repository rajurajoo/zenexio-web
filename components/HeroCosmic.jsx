import Link from 'next/link';

export default function HeroCosmic() {
  return (
    <section className="chero" id="hero">
      <div
        className="chero__bg"
        style={{ backgroundImage: "url('/images/zenexio-design-beyond-imagination-hero-dubai.webp')" }}
        aria-hidden="true"
      />
      <div className="chero__overlay" aria-hidden="true" />

      <div className="chero__inner container">
        <p className="chero__title chero__title--simple">DESIGN BEYOND IMAGINATION</p>
        <Link href="/contact" className="chero__btn chero__btn--solid">Start a Project</Link>
      </div>

      <a href="#intro" className="chero__scroll-hint" aria-label="Scroll to content">
        <span>Scroll</span>
        <div className="chero__scroll-line"></div>
      </a>
    </section>
  );
}
