'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    type: 'video',
    src: '/images/video-hero.mov',
    align: 'left',
    eyebrow: 'Creative Agency',
    titleLine1: 'Design Beyond',
    titleEm: 'Imagination',
    body: null,
    cta: { label: 'Start a Project', href: '/contact' }
  },
  {
    type: 'image',
    src: '/images/hero-slide-2.webp',
    align: 'right',
    eyebrow: 'Strategy Meets Artistry',
    titleLine1: 'Brands That',
    titleEm: 'Move People',
    body: 'From brand identity to launch, every project is built on strategy first — design that works as hard as it looks.',
    cta: { label: 'See Our Work', href: '/services' }
  },
  {
    type: 'image',
    src: '/images/hero-slide-3.webp',
    align: 'left',
    eyebrow: 'Dubai · UAE · India',
    titleLine1: 'Design Without',
    titleEm: 'Borders',
    body: 'Teams that understand Dubai, the UAE, and India natively — 500+ projects delivered across both markets.',
    cta: { label: 'Meet The Team', href: '/about' }
  }
];

const SLIDE_DURATION = 7000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (SLIDES[active].type === 'video') {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [active]);

  function goTo(i) {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((idx) => (idx + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  }

  return (
    <section className="hero" id="hero">
      {SLIDES.map((slide, i) => (
        <div className={'hero__slide' + (i === active ? ' active' : '')} key={i}>
          {slide.type === 'video' ? (
            <video ref={i === active ? videoRef : null} className="hero__video" muted loop playsInline autoPlay>
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img className="hero__video" src={slide.src} alt="" />
          )}
        </div>
      ))}
      <div className="hero__overlay"></div>

      <div className="hero__inner container">
        {SLIDES.map((slide, i) => (
          <div
            className={'hero__title-wrap' + (i === active ? ' active' : '') + (slide.align === 'right' ? ' hero__title-wrap--right' : '')}
            key={i}
          >
            <p className="hero__eyebrow">{slide.eyebrow}</p>
            <h1 className="hero__title">
              {slide.titleLine1}<br /><em>{slide.titleEm}</em>
            </h1>
            {slide.body && <p className="hero__body">{slide.body}</p>}
            <div className="hero__cta-wrap">
              <Link href={slide.cta.href} className="btn btn--gold hero__cta">{slide.cta.label}</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={'hero__dot' + (i === active ? ' active' : '')}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
