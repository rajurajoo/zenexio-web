'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    eyebrow: 'Creative Agency',
    titleWhite: 'Design',
    titleAccent: 'Beyond',
    body: 'Full-service branding, web, and marketing — built on strategy, delivered with craft.',
    cta: { label: 'Start a Project', href: '/contact' }
  },
  {
    eyebrow: 'Strategy Meets Artistry',
    titleWhite: 'Brands That',
    titleAccent: 'Move',
    body: 'From identity to launch, every project is built on strategy first — design that works as hard as it looks.',
    cta: { label: 'See Our Work', href: '/services' }
  },
  {
    eyebrow: 'Dubai · UAE · India',
    titleWhite: 'Design',
    titleAccent: 'Unbound',
    body: 'Teams that understand Dubai, the UAE, and India natively — 500+ projects delivered across both markets.',
    cta: { label: 'Meet The Team', href: '/about' }
  },
  {
    eyebrow: 'Let’s Talk',
    titleWhite: 'Ready to',
    titleAccent: 'Begin',
    body: 'Transparent pricing, real replies, and work you fully own — every time.',
    cta: { label: 'Get a Quote', href: '/contact' }
  }
];

const SLIDE_DURATION = 6500;

export default function HeroHolo() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((idx) => (idx + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  }

  const slide = SLIDES[active];

  return (
    <section className="holo" id="hero">
      <div className="holo__bg-panels" aria-hidden="true">
        <span className="holo__panel holo__panel--a"></span>
        <span className="holo__panel holo__panel--b"></span>
        <span className="holo__panel holo__panel--c"></span>
      </div>

      {/* left rail */}
      <div className="holo__rail">
        <div className="holo__count">
          <span className="holo__count-label">Slide</span>
          <span className="holo__count-num">{String(active + 1).padStart(2, '0')}</span>
          <span className="holo__count-sep"></span>
          <span className="holo__count-num holo__count-num--dim">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
        <nav className="holo__nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      {/* centerpiece */}
      <div className="holo__orb-wrap" aria-hidden="true">
        <div className="holo__rings">
          <span className="holo__ring holo__ring--1"></span>
          <span className="holo__ring holo__ring--2"></span>
          <span className="holo__ring holo__ring--3"></span>
        </div>
        <div className="holo__orb">
          <span className="holo__orb-core"></span>
          <span className="holo__orb-wire holo__orb-wire--1"></span>
          <span className="holo__orb-wire holo__orb-wire--2"></span>
          <span className="holo__orb-wire holo__orb-wire--3"></span>
        </div>
        <div className="holo__glow"></div>
      </div>

      {/* text */}
      <div className="holo__content">
        <p className="holo__eyebrow">{slide.eyebrow}</p>
        <h1 className="holo__title">
          {slide.titleWhite}<br />
          <em>{slide.titleAccent}</em>
        </h1>
        <p className="holo__body">{slide.body}</p>
        <Link href={slide.cta.href} className="holo__cta">{slide.cta.label}</Link>
      </div>

      <div className="holo__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={'holo__dot' + (i === active ? ' active' : '')}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="holo__corner holo__corner--left">
        <span>Creative<br />Agency</span>
      </div>
      <div className="holo__corner holo__corner--right">
        <Link href="/services">Our Work</Link>
      </div>
    </section>
  );
}
