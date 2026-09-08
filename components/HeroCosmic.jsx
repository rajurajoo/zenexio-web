import Image from 'next/image';
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
        <span className="chero__eyebrow">Design Beyond Imagination</span>

        <div className="chero__card">
          <div className="chero__card-thumb">
            <Image src="/images/blog/graphic-design-branding-exhibition-dubai.png" alt="Zenexio brand identity work" fill sizes="120px" style={{ objectFit: 'cover' }} />
          </div>
          <div className="chero__card-body">
            <p>Full-service creative agency</p>
            <Link href="/contact" className="chero__card-btn">
              Let&rsquo;s talk
              <span className="chero__card-dot" aria-hidden="true"></span>
            </Link>
          </div>
        </div>

        <h1 className="chero__title chero__title--left">
          Creative work built<br />
          to move your<br />
          business forward
        </h1>

        <div className="chero__foot">
          <p className="chero__foot-copy">Brand identity, web development, and digital marketing for ambitious businesses across Dubai, the UAE &amp; India.</p>
          <Link href="/contact" className="chero__btn chero__btn--solid">
            Start your project
            <span className="chero__btn-arrow" aria-hidden="true">&#8599;</span>
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
