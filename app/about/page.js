import Link from 'next/link';
import Reveal from '../../components/Reveal';
import PageBanner from '../../components/PageBanner';
import { seo, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: seo.about.title,
  description: seo.about.description,
  keywords: seo.about.keywords,
  path: '/about'
});

const values = [
  ['Radical Transparency', 'Hard conversations early beat crises late. We say what we see, always.'],
  ['Curiosity Without Ceiling', 'We stay genuinely curious — about your industry, new tools, better ways to solve old problems.'],
  ['Ownership Culture', 'Every person owns their piece fully. No blame-shifting, no "that\'s not my job."'],
  ['Long-Term Thinking', 'We optimise for your success over years. The best outcomes take root slowly.']
];

export default function AboutPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/about.css" />
    <main>
      <PageBanner
        label="Who We Are"
        title={<h1>Built on Curiosity,<br />Driven by Craft</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      >
        <p>We&apos;re not just an agency — we&apos;re creative partners invested in your long-term success.</p>
      </PageBanner>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <Reveal>
              <span className="label">Our Story</span>
              <h2>Started small. Stayed intentional.</h2>
              <p>Zenexio was founded in 2017 by three restless creatives who believed most agencies had it backwards — prioritising flashy pitches over genuine partnership, and output over impact.</p>
              <p>We started in a shared workspace with three laptops and an unwavering belief: that truly great creative work happens when strategy, design, and technology speak the same language.</p>
              <p>Seven years later, we&apos;ve delivered 1000+ projects for clients across Dubai, UAE and India — and beyond. But our approach hasn&apos;t changed — every client gets our full attention, honest counsel, and work we&apos;re proud of.</p>
            </Reveal>
            <Reveal className="story-stat-block" delay={0.12}>
              <div className="sstat"><span className="sstat__num">2017</span><span className="sstat__lbl">Founded</span></div>
              <div className="sstat"><span className="sstat__num">1000+</span><span className="sstat__lbl">Projects</span></div>
              <div className="sstat"><span className="sstat__num">2</span><span className="sstat__lbl">Countries</span></div>
              <div className="sstat"><span className="sstat__num">98%</span><span className="sstat__lbl">Retention</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--sand" id="mission">
        <div className="container">
          <Reveal className="mission-block">
            <span className="label">Our Mission</span>
            <blockquote>&quot;To build creative work that doesn&apos;t just look good — but works hard, solves real problems, and leaves a lasting impression on every person it reaches.&quot;</blockquote>
            <div className="mission-pillars">
              <div className="mission-pillar"><h4>Authenticity</h4><p>We only take on work we can do exceptionally. No stretched capacities, no recycled templates.</p></div>
              <div className="mission-pillar"><h4>Mastery</h4><p>Constant learning is non-negotiable. We invest in our craft because great work demands it.</p></div>
              <div className="mission-pillar"><h4>Impact</h4><p>We measure our worth by your results — not deliverable counts or invoice totals.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section--sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="label">What We Stand For</span>
            <h2>Values we live by</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal as="div" className="value-card" delay={i * 0.07} key={v[0]}>
                <span className="value-card__gem">◆</span>
                <div><h4>{v[0]}</h4><p>{v[1]}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="home-cta__inner">
            <span className="label">Work With Us</span>
            <h2>We&apos;d love to hear about your project</h2>
            <Link href="/contact" className="btn btn--gold btn--lg" style={{ marginTop: '1rem' }}>Say Hello</Link>
            <div className="trust-strip">
              <span><strong>1000+</strong> Projects Delivered</span>
              <span className="trust-sep">·</span>
              <span><strong>98%</strong> Client Retention</span>
              <span className="trust-sep">·</span>
              <span>Dubai, UAE &amp; India</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
