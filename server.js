const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
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

app.get('/',        (req, res) => res.render('home',     { page: 'home',     title: 'Design Beyond Imagination — Zenexio' }));
app.get('/about',   (req, res) => res.render('about',    { page: 'about',    title: 'About Us — Zenexio' }));
app.get('/services',(req, res) => res.render('services', { page: 'services', title: 'Services — Zenexio' }));
app.get('/blogs',   (req, res) => res.render('blogs',    { page: 'blogs',    title: 'Blogs — Zenexio' }));
app.get('/contact', (req, res) => res.render('contact',  { page: 'contact',  title: 'Contact Us — Zenexio', success: false, error: false }));

app.post('/contact', (req, res) => {
  const { name, email, message, service } = req.body;

  if (!name || !email || !message) {
    return res.render('contact', { page: 'contact', title: 'Contact — Zenexio', success: false, error: 'Please fill in all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render('contact', { page: 'contact', title: 'Contact — Zenexio', success: false, error: 'Please enter a valid email address.' });
  }

  const submission = { name, email, message, service: service || 'Not specified', timestamp: new Date().toISOString() };

  try {
    const submissions = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : [];
    submissions.push(submission);
    fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2));
  } catch (e) {
    console.warn('Could not save submission:', e.message);
  }

  console.log('New contact submission:', submission);
  res.render('contact', { page: 'contact', title: 'Contact — Zenexio', success: true, error: false });
});

/* Export for serverless (Netlify / Vercel).
   Only start the HTTP server when run directly with `node server.js`. */
if (require.main === module) {
  app.listen(PORT, () => console.log(`Zenexio running at http://localhost:${PORT}`));
}

module.exports = app;
