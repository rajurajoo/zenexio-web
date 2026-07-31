import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import PageBanner from '../../../components/PageBanner';
import { seo, categories, factors } from '../../../lib/pricing-guide';
import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  path: '/resources/design-pricing-guide-dubai-india'
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Graphic Design & Website Pricing Guide 2026: Dubai, UAE & India Benchmarks',
  description: seo.description,
  datePublished: '2026-07-31T00:00:00.000Z',
  author: { '@type': 'Organization', name: 'Zenexio' },
  publisher: {
    '@type': 'Organization',
    name: 'Zenexio',
    logo: { '@type': 'ImageObject', url: 'https://www.zenexio.pro/images/zen-wordmark.png' }
  },
  mainEntityOfPage: 'https://www.zenexio.pro/resources/design-pricing-guide-dubai-india'
};

export default function PricingGuidePage() {
  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageBanner
        label="Free Resource · 2026"
        className="post-banner"
        title={<h1>Graphic Design &amp; Website Pricing Guide: Dubai, UAE &amp; India Benchmarks</h1>}
      >
        <p>Real market price ranges for logos, branding, websites, e-commerce, and marketing retainers — so you can budget with confidence before you talk to any agency.</p>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container">
          <Reveal as="article" className="post-body">
            <p className="post-lede">These are broad market ranges we&apos;ve observed across the Dubai/UAE and India design and web industry in 2026, not a rate card for Zenexio specifically. Feel free to link to this page or reference these figures in your own articles — just credit Zenexio as the source.</p>

            {categories.map((cat) => (
              <div key={cat.title}>
                <h2>{cat.title}</h2>
                <div className="price-table-wrap">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>UAE (AED)</th>
                        <th>India (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.rows.map((row) => (
                        <tr key={row.item}>
                          <td>{row.item}</td>
                          <td>{row.uae}</td>
                          <td>{row.india}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <h2>What Actually Moves the Price</h2>
            <ul className="check-list">
              {factors.map((f, i) => (
                <li className="check-item" key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h2>A Note on Accuracy</h2>
            <p>These ranges are directional estimates based on typical market rates as of 2026 and will vary by agency reputation, project complexity, and negotiation. Always request a scoped, written quote before committing to a project.</p>
          </Reveal>

          <Reveal className="post-cta" delay={0.1}>
            <span className="label">Want An Exact Number?</span>
            <h2>Get a free, scoped quote from Zenexio</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Get a Free Quote</Link>
            <div className="trust-strip">
              <span><strong>500+</strong> Projects Delivered</span>
              <span className="trust-sep">·</span>
              <span><strong>98%</strong> Client Retention</span>
              <span className="trust-sep">·</span>
              <span>Dubai, UAE &amp; India</span>
            </div>
          </Reveal>

          <Reveal href="/resources/brand-launch-checklist-dubai" className="post-back" delay={0.14}>Also free: our Brand &amp; Website Launch Checklist for Dubai &amp; India &rarr;</Reveal>
          <Reveal href="/resources/website-credit-badge" className="post-back" delay={0.16}>Also free: our Website Credit Badge snippet &rarr;</Reveal>
          <Reveal href="/blogs" className="post-back" delay={0.18}>&larr; Back to the blog</Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
