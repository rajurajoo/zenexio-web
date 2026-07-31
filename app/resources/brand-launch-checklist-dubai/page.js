import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import PageBanner from '../../../components/PageBanner';
import { seo, checklist } from '../../../lib/resource-checklist';
import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  path: '/resources/brand-launch-checklist-dubai'
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Brand & Website Launch Checklist for Dubai, UAE & India Startups',
  description: seo.description,
  datePublished: '2026-07-07T00:00:00.000Z',
  author: { '@type': 'Organization', name: 'Zenexio' },
  publisher: {
    '@type': 'Organization',
    name: 'Zenexio',
    logo: { '@type': 'ImageObject', url: 'https://www.zenexio.pro/images/zen-wordmark.png' }
  },
  mainEntityOfPage: 'https://www.zenexio.pro/resources/brand-launch-checklist-dubai'
};

export default function ChecklistPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageBanner
        label="Free Resource"
        className="post-banner"
        title={<h1>The Complete Brand &amp; Website Launch Checklist for Dubai, UAE &amp; India Startups</h1>}
      >
        <p>A practical, no-fluff checklist covering brand foundations, visual identity, website launch, business basics, marketing, and SEO — built for founders launching in the UAE or India.</p>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container">
          <Reveal as="article" className="post-body">
            <p className="post-lede">Bookmark this page, share it with your co-founder, or link to it from your own resource list — it&apos;s free to use. Every item below is something we&apos;ve seen founders skip, then have to fix later at a higher cost than doing it right the first time.</p>

            {checklist.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                {section.intro && <p>{section.intro}</p>}
                <ul className="check-list">
                  {section.items.map((item, i) => (
                    <li className="check-item" key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2>A Note on Business &amp; Legal Basics</h2>
            <p>The checklist above covers what we know well — brand, design, web, and marketing. For trade licenses, free zone vs. mainland registration, and other UAE or India business-formation specifics, always confirm current requirements with a licensed corporate services provider or legal advisor, since rules and costs vary by emirate, free zone, and business activity.</p>
          </Reveal>

          <Reveal className="post-cta" delay={0.1}>
            <span className="label">Ready to Launch?</span>
            <h2>Let Zenexio handle the brand, website, and marketing side</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Get a Free Quote</Link>
            <div className="trust-strip">
              <span><strong>500+</strong> Projects Delivered</span>
              <span className="trust-sep">·</span>
              <span><strong>98%</strong> Client Retention</span>
              <span className="trust-sep">·</span>
              <span>Dubai, UAE &amp; India</span>
            </div>
          </Reveal>

          <Reveal href="/resources/design-pricing-guide-dubai-india" className="post-back" delay={0.16}>Also free: our Design &amp; Website Pricing Guide for Dubai &amp; India &rarr;</Reveal>
          <Reveal href="/blogs" className="post-back" delay={0.18}>&larr; Back to the blog</Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
