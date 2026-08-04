import Link from 'next/link';
import { redirect } from 'next/navigation';
import Reveal from '../../../components/Reveal';
import PageBanner from '../../../components/PageBanner';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../../../lib/blog-posts';
import { buildMetadata } from '../../../lib/seo';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    path: '/blogs/' + post.slug,
    ogType: 'article',
    ogImage: 'https://zenexio.pro/images/blog/' + post.image
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) redirect('/blogs');

  const related = getRelatedPosts(post.slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: 'https://zenexio.pro/images/blog/' + post.image,
    datePublished: post.isoDate,
    author: { '@type': 'Organization', name: 'Zenexio' },
    publisher: {
      '@type': 'Organization',
      name: 'Zenexio',
      logo: { '@type': 'ImageObject', url: 'https://zenexio.pro/images/zen-wordmark.png' }
    },
    mainEntityOfPage: 'https://zenexio.pro/blogs/' + post.slug
  };

  return (
    <>
    <link rel="stylesheet" href="/css/blogs.css" />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageBanner
        label={post.tag}
        className="post-banner"
        title={<h1>{post.title}</h1>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs', href: '/blogs' }, { label: post.title }]}
      >
        <span className="blog-meta">{post.date} &nbsp;&middot;&nbsp; {post.readTime}</span>
      </PageBanner>

      <section className="section post-section">
        <div className="container post-container">

          <Reveal as="figure" className="post-hero-figure">
            <img className="post-hero-img" src={`/images/blog/${post.image}`} alt={post.imageAlt || post.title} />
            <figcaption>{post.imageAlt || post.title}</figcaption>
          </Reveal>

          <Reveal as="article" className="post-body" delay={0.06}>
            <p className="post-lede">{post.excerpt}</p>
            {post.body.map((block, i) =>
              block.h2 ? (
                <h2 key={i}>{block.h2}</h2>
              ) : (
                <p key={i} dangerouslySetInnerHTML={{ __html: block.p }} />
              )
            )}
          </Reveal>

          <Reveal className="post-cta" delay={0.1}>
            <span className="label">Like What You Read?</span>
            <h2>Let&apos;s put these ideas to work for your brand</h2>
            <Link href="/contact" className="btn btn--gold btn--lg">Start a Project</Link>
          </Reveal>

          {related.length > 0 && (
            <Reveal className="post-related" delay={0.14}>
              <h3>More from the blog</h3>
              <div className="blog-grid">
                {related.map((r) => (
                  <article className="blog-card" key={r.slug}>
                    <Link
                      href={`/blogs/${r.slug}`}
                      className="blog-card__img"
                      style={{ background: `linear-gradient(to bottom,rgba(10,8,3,.15),rgba(10,8,3,.6)),url('/images/blog/${r.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                      <span className="blog-tag">{r.tag}</span>
                    </Link>
                    <div className="blog-card__body">
                      <span className="blog-meta">{r.date} &middot; {r.readTime}</span>
                      <h3><Link href={`/blogs/${r.slug}`}>{r.title}</Link></h3>
                      <Link href={`/blogs/${r.slug}`} className="blog-card__link">Read more &rarr;</Link>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal href="/blogs" className="post-back" delay={0.18}>&larr; Back to all articles</Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
