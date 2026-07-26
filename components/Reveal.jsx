'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Reveal({ as: Tag = 'div', href, delay = 0, className = '', style = {}, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { setInView(true); obs.unobserve(entry.target); }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const combinedClassName = 'reveal' + (inView ? ' in' : '') + (className ? ' ' + className : '');
  const combinedStyle = { ...style, '--d': typeof delay === 'number' ? `${delay}s` : delay };

  if (href) {
    return (
      <Link href={href} ref={ref} className={combinedClassName} style={combinedStyle} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Tag ref={ref} className={combinedClassName} style={combinedStyle} {...rest}>
      {children}
    </Tag>
  );
}
