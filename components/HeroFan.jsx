'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    eyebrow: 'Creative Agency',
    titleLine1: 'Design',
    titleLine2: 'Beyond',
    body: 'Full-service branding, web, and marketing — built on strategy, delivered with craft.',
    cta: { label: 'Explore', href: '/contact' }
  },
  {
    eyebrow: 'Strategy Meets Artistry',
    titleLine1: 'Brands That',
    titleLine2: 'Move',
    body: 'From identity to launch, every project is built on strategy first — design that works as hard as it looks.',
    cta: { label: 'Explore', href: '/services' }
  },
  {
    eyebrow: 'Dubai · UAE · India',
    titleLine1: 'Design',
    titleLine2: 'Unbound',
    body: 'Teams that understand Dubai, the UAE, and India natively — 1000+ projects delivered across both markets.',
    cta: { label: 'Explore', href: '/about' }
  },
  {
    eyebrow: 'Let’s Talk',
    titleLine1: 'Ready To',
    titleLine2: 'Begin',
    body: 'Transparent pricing, real replies, and work you fully own — every time.',
    cta: { label: 'Explore', href: '/contact' }
  }
];

const PETAL_COUNT = 9;
const SLIDE_DURATION = 6500;

export default function HeroFan() {
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
    <section className="fan-hero" id="hero">
      <div className="fan-wrap" aria-hidden="true">
        {Array.from({ length: PETAL_COUNT }).map((_, i) => (
          <span
            key={i}
            className="fan-petal"
            style={{
              transform: `rotate(${i * 8 - (PETAL_COUNT * 8) / 2}deg)`,
              zIndex: PETAL_COUNT - i,
              opacity: 0.94 - i * 0.02
            }}
          ></span>
        ))}
      </div>

      <div className="fan-content container">
        <p className="fan-eyebrow">{slide.eyebrow}</p>
        <h1 className="fan-title">
          {slide.titleLine1}<br />{slide.titleLine2}
        </h1>
        <p className="fan-body">{slide.body}</p>
        <Link href={slide.cta.href} className="fan-cta">{slide.cta.label}</Link>
      </div>

      <div className="fan-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={'fan-dot' + (i === active ? ' active' : '')}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
