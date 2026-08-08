import Link from 'next/link';

export default function HeroCosmic() {
  return (
    <section className="chero" id="hero">
      <div
        className="chero__bg"
        style={{ backgroundImage: "url('/images/hero-lone-tree-lake.svg')" }}
        aria-hidden="true"
      />
      <div className="chero__overlay" aria-hidden="true" />

      <div className="chero__inner container">
        <h1 className="chero__title chero__title--simple">DESIGN BEYOND IMAGINATION</h1>
        <Link href="/contact" className="chero__btn chero__btn--solid">Start a Project</Link>
      </div>

      <a href="#intro" className="chero__scroll-hint" aria-label="Scroll to content">
        <span>Scroll</span>
        <div className="chero__scroll-line"></div>
      </a>
    </section>
  );
}
