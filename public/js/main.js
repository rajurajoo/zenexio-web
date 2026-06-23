(function () {
  'use strict';

  /* nav scroll */
  const header = document.getElementById('site-header');
  if (header) {
    const tick = () => header.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* mobile nav */
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open');
      document.body.style.overflow = open ? '' : 'hidden';
    });
    links.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded','false');
      links.classList.remove('open');
      document.body.style.overflow = '';
    }));
    document.addEventListener('click', e => {
      if (!header.contains(e.target) && links.classList.contains('open')) {
        toggle.setAttribute('aria-expanded','false');
        links.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* smooth hash scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    });
  });

  /* contact form validation */
  const form = document.getElementById('contact-form');
  if (form) {
    const required = form.querySelectorAll('[required]');
    required.forEach(f => {
      f.addEventListener('blur', () => validate(f));
      f.addEventListener('input', () => { if (f.classList.contains('is-invalid')) validate(f); });
    });
    form.addEventListener('submit', e => {
      let ok = true;
      required.forEach(f => { if (!validate(f)) ok = false; });
      if (!ok) { e.preventDefault(); form.querySelector('.is-invalid')?.focus(); }
    });
  }

  function validate(f) {
    const v = f.value.trim();
    const err = !v ? 'Required.' : (f.type==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) ? 'Valid email required.' : '';
    let msg = f.parentElement.querySelector('.field-error');
    if (err) {
      f.classList.add('is-invalid');
      if (!msg) { msg = document.createElement('span'); msg.className='field-error'; f.parentElement.appendChild(msg); }
      msg.textContent = err;
    } else {
      f.classList.remove('is-invalid');
      if (msg) msg.remove();
    }
    return !err;
  }

})();
