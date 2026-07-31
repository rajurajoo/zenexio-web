'use client';

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

      <a href="#intro" className="vhero__scroll-hint" aria-label="Scroll to content">
        <span>Scroll</span>
        <div className="vhero__scroll-line"></div>
      </a>
    </section>
  );
}
