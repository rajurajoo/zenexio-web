'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('zenexio-cookie-ack')) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem('zenexio-cookie-ack', '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label="Cookie notice">
      <p>
        We use cookies to analyze site traffic via Google Analytics. By continuing to browse, you agree to our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <button type="button" className="cookie-notice__btn" onClick={dismiss}>Got it</button>
    </div>
  );
}
