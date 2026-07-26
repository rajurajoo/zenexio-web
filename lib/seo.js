/* ═══════════════════════════════════════════════════
   ZENEXIO — PAGE-LEVEL SEO METADATA
═══════════════════════════════════════════════════ */

export const seo = {
  home: {
    title: 'Zenexio — Creative Agency in Dubai, UAE & India | Graphic Design, Web Development & Digital Marketing',
    description: 'Zenexio is a creative agency in Dubai, UAE and India crafting brand identity, web development, and digital marketing that helps ambitious brands stand out and grow. 500+ projects delivered. Design beyond imagination.',
    keywords: 'creative agency Dubai, creative agency UAE, creative agency India, branding agency Dubai, graphic design agency Dubai, web development company Dubai, digital marketing agency Dubai, digital marketing agency UAE, brand identity design Dubai, logo design services Dubai, UI UX design agency Dubai, website design company UAE, SEO agency Dubai, social media marketing agency Dubai, creative agency near me, Zenexio'
  },
  about: {
    title: 'About Us — Creative Agency in Dubai, UAE & India | Zenexio',
    description: 'Founded in 2017, Zenexio is a creative partner for brands across Dubai, UAE and India — blending strategy, design, and technology. 500+ projects delivered with a 98% client retention rate.',
    keywords: 'about Zenexio, creative agency Dubai, creative agency India, branding studio Dubai, digital agency UAE, design agency India, full-service creative agency Dubai, creative agency story'
  },
  services: {
    title: 'Services — Graphic Design, Web Development & Digital Marketing in Dubai & India | Zenexio',
    description: 'Explore Zenexio\'s services in Dubai, UAE and India: graphic design, custom web development, e-commerce, digital marketing, SEO, paid advertising, social media, and brand strategy for modern brands.',
    keywords: 'graphic design services Dubai, web development services Dubai, custom website development UAE, e-commerce development Dubai, digital marketing services Dubai, SEO services Dubai, SEO company India, PPC advertising Dubai, social media management Dubai, brand strategy services UAE, logo and brand identity design Dubai, UI UX design services India'
  },
  blogs: {
    title: 'Blog — Design, Web Development & Marketing Insights | Zenexio',
    description: 'Insights and ideas on design, technology, digital marketing, and the craft of building great brands in Dubai, the UAE, India, and beyond.',
    keywords: 'design blog Dubai, web development blog, digital marketing blog Dubai, branding insights, UI UX articles, SEO tips Dubai, creative agency insights, marketing agency Dubai blog'
  },
  contact: {
    title: 'Contact Us — Creative Agency in Dubai, UAE & India | Zenexio',
    description: 'Ready to start your next project? Contact Zenexio, a creative agency serving Dubai, UAE and India, for graphic design, web development, and digital marketing — we reply within one business day.',
    keywords: 'contact creative agency Dubai, hire web developer Dubai, hire graphic designer India, request a quote design agency UAE, contact Zenexio, get a free consultation Dubai, creative agency contact India'
  }
};

const SITE_URL = 'https://www.zenexio.pro';
const DEFAULT_OG_IMAGE = SITE_URL + '/images/zen-wordmark.png';

/**
 * Build a Next.js Metadata object consistent with the site's previous
 * EJS-based <head> (canonical, Open Graph, Twitter Card).
 */
export function buildMetadata({ title, description, keywords, path, ogType, ogImage }) {
  const url = SITE_URL + path;
  const image = ogImage || DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Zenexio' }],
    alternates: { canonical: url },
    openGraph: {
      type: ogType || 'website',
      siteName: 'Zenexio',
      title,
      description,
      url,
      images: [{ url: image }],
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export const SITE = { url: SITE_URL, ogImage: DEFAULT_OG_IMAGE };
