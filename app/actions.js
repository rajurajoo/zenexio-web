'use server';

import fs from 'fs';
import path from 'path';

const isServerless = !!(process.env.NETLIFY || process.env.LAMBDA_TASK_ROOT || process.env.VERCEL);
const dataDir = isServerless ? '/tmp' : path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'submissions.json');

function ensureDataFile() {
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
  } catch (e) {
    console.warn('Data file init skipped:', e.message);
  }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(prevState, formData) {
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();
  const service = (formData.get('service') || '').toString().trim();

  if (!name || !email) {
    return { success: false, error: 'Please fill in all required fields.' };
  }
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const submission = {
    name,
    email,
    message: message || 'No message provided — quick quote request.',
    service: service || 'Not specified',
    timestamp: new Date().toISOString()
  };

  try {
    ensureDataFile();
    const submissions = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : [];
    submissions.push(submission);
    fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2));
  } catch (e) {
    console.warn('Could not save submission:', e.message);
  }

  console.log('New contact submission:', submission);
  return { success: true, error: null };
}
