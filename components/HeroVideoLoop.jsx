'use client';

import Link from 'next/link';

export default function HeroVideoLoop() {
  return (
    <section className="vhero" id="hero">
      <video
        className="vhero__video"
        src="/videos/hero-ecommerce.mov"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="vhero__overlay"></div>

      <div className="vhero__content container">
        <p className="vhero__eyebrow">Creative Agency · Dubai · UAE · India</p>
        <h1 className="vhero__title">
          Design That <em>Sells</em>
        </h1>
        <p className="vhero__body">
          From product experiences to full-brand campaigns — we build digital work that converts, not just looks good.
        </p>
        <div className="vhero__cta-row">
          <Link href="/contact" className="btn btn--gold btn--lg">Start a Project</Link>
          <Link href="/services" className="btn btn--ghost btn--lg">See Our Work</Link>
        </div>
      </div>

      <div className="vhero__scroll-hint">
        <span>Scroll</span>
        <div className="vhero__scroll-line"></div>
      </div>
    </section>
  );
}
