import Link from 'next/link';
import Reveal from '../../components/Reveal';
import PageBanner from '../../components/PageBanner';
import { getAllPosts } from '../../lib/blog-posts';
import { seo, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: seo.blogs.title,
  description: seo.blogs.description,
  keywords: seo.blogs.keywords,
  path: '/blogs'
});

export default function BlogsPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
    <link rel="stylesheet" href="/css/blogs.min.css" />
    <main>
      <PageBanner
        label="Our Blog"
        title={<h1>Insights &amp; Ideas</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]}
      >
        <p>Thoughts on design, technology, and the craft of building great brands. Looking for something specific? Browse by <Link href="/industries">industry</Link>.</p>
      </PageBanner>

      <section className="blogs-section section">
        <div className="container">

          <Reveal as="article" className="blog-featured">
            <Link href={`/blogs/${featured.slug}`} className="blog-featured__img" aria-label={featured.title}>
              <div
                className="blog-featured__img-inner"
                style={{ background: `linear-gradient(to bottom,rgba(10,8,3,.15),rgba(10,8,3,.6)),url('/images/blog/${featured.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <span className="blog-tag">{featured.tag}</span>
              </div>
            </Link>
            <div className="blog-featured__body">
              <span className="blog-meta">{featured.date} &nbsp;&middot;&nbsp; {featured.readTime}</span>
              <h2><Link href={`/blogs/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.excerpt}</p>
              <Link href={`/blogs/${featured.slug}`} className="btn btn--gold">Read Article<span className="sr-only">: {featured.title}</span></Link>
            </div>
          </Reveal>

          <div className="blog-grid">
            {rest.map((p, i) => (
              <Reveal as="article" className="blog-card" delay={i * 0.06 + 0.06} key={p.slug}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className="blog-card__img"
                  aria-label={p.title}
                  style={{ background: `linear-gradient(to bottom,rgba(10,8,3,.15),rgba(10,8,3,.6)),url('/images/blog/${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <span className="blog-tag">{p.tag}</span>
                </Link>
                <div className="blog-card__body">
                  <span className="blog-meta">{p.date} &middot; {p.readTime}</span>
                  <h3><Link href={`/blogs/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                  <Link href={`/blogs/${p.slug}`} className="blog-card__link">Read more<span className="sr-only">: {p.title}</span> &rarr;</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
  );
}
