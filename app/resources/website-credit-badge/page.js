import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import PageBanner from '../../../components/PageBanner';
import BadgeCopyBlock from '../../../components/BadgeCopyBlock';
import { buildMetadata } from '../../../lib/seo';

export const metadata = buildMetadata({
  title: 'Free "Website by Zenexio" Credit Badge Snippet | Zenexio',
  description: 'A free, copy-paste footer credit badge for any site — self-contained inline HTML that works regardless of your CSS framework.',
  keywords: 'website credit badge, designed by badge snippet, footer credit html, agency credit link',
  path: '/resources/website-credit-badge'
});

export default function BadgePage() {
  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <PageBanner
        label="Free Snippet"
        className="post-banner"
        title={<h1>Free Website Credit Badge</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Website Credit Badge' }]}
      >
        <p>A tiny, self-contained footer credit snippet — copy the code, paste it into your site&apos;s footer, done.</p>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container">
          <Reveal as="article" className="post-body">
            <p className="post-lede">We built this for our own client sites, but it&apos;s free for anyone to use — freelancers, agencies, or hobby developers who want a clean, unobtrusive credit line without pulling in a font, a framework, or extra CSS.</p>

            <h2>Preview &amp; Code</h2>
            <BadgeCopyBlock />

            <h2>Why It&apos;s Built This Way</h2>
            <ul className="check-list">
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Fully inline styles — no external CSS or font dependency, so it renders identically on any site.</span>
              </li>
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Small footprint — a single <code>div</code>, safe to drop straight into any footer.</span>
              </li>
              <li className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Swap the link, text, and colors to credit yourself or your own agency — the markup is yours to reuse.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="post-cta" delay={0.1}>
            <span className="label">Need A Site Built?</span>
            <h2>Let Zenexio design and build it for you</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Get a Free Quote</Link>
            <div className="trust-strip">
              <span><strong>1000+</strong> Projects Delivered</span>
              <span className="trust-sep">·</span>
              <span><strong>98%</strong> Client Retention</span>
              <span className="trust-sep">·</span>
              <span>Dubai, UAE &amp; India</span>
            </div>
          </Reveal>

          <Reveal href="/resources/design-pricing-guide-dubai-india" className="post-back" delay={0.16}>Also free: our Design &amp; Website Pricing Guide &rarr;</Reveal>
          <Reveal href="/blogs" className="post-back" delay={0.18}>&larr; Back to the blog</Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
