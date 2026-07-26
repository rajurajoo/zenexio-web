'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => setScrolled(window.scrollY > 50);
    tick();
    window.addEventListener('scroll', tick, { passive: true });
    return () => window.removeEventListener('scroll', tick);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      const header = document.getElementById('site-header');
      if (header && !header.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '')} id="site-header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <img src="/images/zen-wordmark.png" alt="Zenexio" className="nav__logo-img" />
        </Link>

        <ul className={'nav__links' + (open ? ' open' : '')} id="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={'nav__link' + (isActive(l.href) ? ' active' : '')}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={'nav__link nav__link--cta' + (pathname.startsWith('/contact') ? ' active' : '')}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className="nav__burger"
          id="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
