const express = require('express');
const path = require('path');
const fs = require('fs');
const { getAllPosts, getPostBySlug, getRelatedPosts } = require('./blog-posts');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

/* When esbuild bundles this file into netlify/functions/app.js,
   __dirname becomes /var/task/netlify/functions — not the project root.
   LAMBDA_TASK_ROOT points to /var/task, which IS the project root. */
const projectRoot = process.env.LAMBDA_TASK_ROOT || __dirname;
app.set('views', path.join(projectRoot, 'views'));
app.use(express.static(path.join(projectRoot, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* On Netlify/serverless the project filesystem is read-only;
   use /tmp for writable storage. Locally use data/ folder.   */
const isServerless = !!(process.env.NETLIFY || process.env.LAMBDA_TASK_ROOT || process.env.VERCEL);
const dataDir  = isServerless ? '/tmp' : path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'submissions.json');

try {
  if (!fs.existsSync(dataDir))  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
} catch (e) {
  console.warn('Data file init skipped:', e.message);
}

const seo = {
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

app.get('/',        (req, res) => res.render('home',     { page: 'home',     title: seo.home.title,     description: seo.home.description,     keywords: seo.home.keywords }));
app.get('/about',   (req, res) => res.render('about',    { page: 'about',    title: seo.about.title,    description: seo.about.description,    keywords: seo.about.keywords }));
app.get('/services',(req, res) => res.render('services', { page: 'services', title: seo.services.title, description: seo.services.description, keywords: seo.services.keywords }));
app.get('/blogs',   (req, res) => res.render('blogs',    { page: 'blogs',    title: seo.blogs.title,    description: seo.blogs.description,    keywords: seo.blogs.keywords, posts: getAllPosts() }));

app.get('/blogs/:slug', (req, res) => {
  const post = getPostBySlug(req.params.slug);
  if (!post) return res.redirect('/blogs');
  res.render('blog-post', {
    page: 'blogs',
    post,
    related: getRelatedPosts(post.slug, 3),
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    canonicalPath: '/blogs/' + post.slug,
    ogType: 'article',
    ogImage: 'https://www.zenexio.pro/images/blog/' + post.image
  });
});

app.get('/contact', (req, res) => res.render('contact',  { page: 'contact',  title: seo.contact.title,  description: seo.contact.description,  keywords: seo.contact.keywords, success: false, error: false }));

app.post('/contact', (req, res) => {
  const { name, email, message, service } = req.body;

  if (!name || !email) {
    return res.render('contact', { page: 'contact', title: seo.contact.title, description: seo.contact.description, keywords: seo.contact.keywords, success: false, error: 'Please fill in all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render('contact', { page: 'contact', title: seo.contact.title, description: seo.contact.description, keywords: seo.contact.keywords, success: false, error: 'Please enter a valid email address.' });
  }

  const submission = { name, email, message: message || 'No message provided — quick quote request.', service: service || 'Not specified', timestamp: new Date().toISOString() };

  try {
    const submissions = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : [];
    submissions.push(submission);
    fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2));
  } catch (e) {
    console.warn('Could not save submission:', e.message);
  }

  console.log('New contact submission:', submission);
  res.render('contact', { page: 'contact', title: seo.contact.title, description: seo.contact.description, keywords: seo.contact.keywords, success: true, error: false });
});

/* Export for serverless (Netlify / Vercel).
   Only start the HTTP server when run directly with `node server.js`. */
if (require.main === module) {
  app.listen(PORT, () => console.log(`Zenexio running at http://localhost:${PORT}`));
}

module.exports = app;
