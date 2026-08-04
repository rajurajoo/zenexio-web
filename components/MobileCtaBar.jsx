'use client';

const WHATSAPP_NUMBER = '971503848523';
const MESSAGE = encodeURIComponent("Hi Zenexio, I'd like to get a quote for a project.");

function track(label) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { form_type: label });
  }
}

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <a href="tel:+971503848523" className="mobile-cta-bar__item" onClick={() => track('mobile_bar_call')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        Call
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener"
        className="mobile-cta-bar__item"
        onClick={() => track('mobile_bar_whatsapp')}
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.45 1.32 4.93L2 22l5.25-1.38A9.93 9.93 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.87 14.16c-.25.71-1.47 1.36-2.02 1.44-.52.08-1.17.11-1.89-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.9-4.26-5.05-4.46-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.61.85 2.1.92 2.25.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.42 1.49.32.15.51.13.7-.08.2-.21.83-.96 1.05-1.29.22-.32.44-.27.73-.16.3.11 1.89.89 2.21 1.05.32.16.53.24.61.37.08.14.08.78-.17 1.5z" /></svg>
        WhatsApp
      </a>
      <a href="/contact" className="mobile-cta-bar__item mobile-cta-bar__item--gold" onClick={() => track('mobile_bar_quote')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
        Free Quote
      </a>
    </div>
  );
}
