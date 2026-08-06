import Link from 'next/link';
import Reveal from '../../components/Reveal';
import PageBanner from '../../components/PageBanner';
import { groups } from '../../lib/industries';
import { getPostBySlug } from '../../lib/blog-posts';
import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: 'Industries We Serve — Creative & Digital Solutions by Sector | Zenexio',
  description: 'Zenexio\'s guides and services organized by industry — F&B, real estate, health & wellness, professional services, e-commerce, and more, for Dubai, the UAE, and India.',
  keywords: 'creative agency by industry Dubai, web design by industry UAE, branding by sector Dubai, industry-specific marketing agency Dubai',
  path: '/industries'
});

export default function IndustriesPage() {
  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <PageBanner
        label="Industries We Serve"
        title={<h1>Creative &amp; Digital Solutions by Industry</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      >
        <p>Every sector has different customers, different buying triggers, and different design conventions. Here is how we approach the ones we work with most across Dubai, the UAE, and India.</p>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container" style={{ maxWidth: '980px' }}>
          {groups.map((group, gi) => {
            const posts = group.slugs.map((s) => getPostBySlug(s)).filter(Boolean);
            if (posts.length === 0) return null;
            return (
              <Reveal as="div" className="industry-group" delay={gi * 0.04} key={group.title}>
                <h2>{group.title}</h2>
                <p className="industry-group__desc">{group.description}</p>
                <div className="industry-group__links">
                  {posts.map((p) => (
                    <Link href={`/blogs/${p.slug}`} className="industry-link" key={p.slug}>
                      <span>{p.title}</span>
                      <span className="industry-link__arrow">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            );
          })}

          <Reveal className="post-cta" delay={0.3}>
            <span className="label">Don&apos;t See Your Industry?</span>
            <h2>We still probably have a good answer for you</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Start a Project</Link>
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
