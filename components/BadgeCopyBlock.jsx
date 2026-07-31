'use client';

import { useState } from 'react';

const SNIPPET = `<div style="text-align:center;padding:14px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:12px;color:#8a94a3;">
  Website by
  <a href="https://www.zenexio.pro" target="_blank" rel="noopener"
     style="color:#3f8fe0;text-decoration:none;font-weight:600;">
    Zenexio
  </a>
  — Creative Agency in Dubai, UAE &amp; India
</div>`;

export default function BadgeCopyBlock() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(SNIPPET).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="badge-block">
      <div className="badge-block__preview" aria-hidden="true">
        <div style={{ textAlign: 'center', padding: '14px 0', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif', fontSize: '12px', color: '#8a94a3' }}>
          Website by{' '}
          <a href="https://www.zenexio.pro" target="_blank" rel="noopener" style={{ color: '#3f8fe0', textDecoration: 'none', fontWeight: 600 }}>
            Zenexio
          </a>
          {' '}— Creative Agency in Dubai, UAE &amp; India
        </div>
      </div>
      <div className="badge-block__code-wrap">
        <pre className="badge-block__code"><code>{SNIPPET}</code></pre>
        <button type="button" className="badge-block__copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
}
