'use client';

import { useActionState } from 'react';
import { submitContactForm } from '../app/actions';

const initialState = { success: false, error: null };

const SERVICE_OPTIONS = ['Graphic Design', 'Web Development', 'Digital Marketing', 'Brand Strategy'];

export default function ContactForm({ variant = 'full' }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const idPrefix = variant === 'full' ? '' : 'qq-';

  if (state.success) {
    return (
      <div className="form-success">
        <div className="form-success__check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3>Message received!</h3>
        <p>We&apos;ll be in touch within one business day.</p>
        {variant === 'full' && (
          <a href="/contact" className="btn btn--outline btn--sm" style={{ marginTop: '1.5rem' }}>Send another</a>
        )}
      </div>
    );
  }

  return (
    <form className={variant === 'full' ? 'contact-form' : 'quick-quote__form'} action={formAction}>
      {state.error && (
        <div className="form-err-banner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          {state.error}
        </div>
      )}

      {variant === 'full' ? (
        <div className="form-row">
          <div className="form-group">
            <label className="form-lbl" htmlFor="name">Full Name <span className="form-req">*</span></label>
            <input type="text" id="name" name="name" className="form-ctrl" placeholder="Jane Smith" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label className="form-lbl" htmlFor="email">Email <span className="form-req">*</span></label>
            <input type="email" id="email" name="email" className="form-ctrl" placeholder="jane@company.com" required autoComplete="email" />
          </div>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label className="form-lbl" htmlFor="qq-name">Full Name <span className="form-req">*</span></label>
            <input type="text" id="qq-name" name="name" className="form-ctrl" placeholder="Jane Smith" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label className="form-lbl" htmlFor="qq-email">Email <span className="form-req">*</span></label>
            <input type="email" id="qq-email" name="email" className="form-ctrl" placeholder="jane@company.com" required autoComplete="email" />
          </div>
        </>
      )}

      <div className="form-group">
        <label className="form-lbl" htmlFor={idPrefix + 'service'}>Service of Interest</label>
        <div className="sel-wrap">
          <select id={idPrefix + 'service'} name="service" className="form-ctrl">
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            {variant === 'full' && <option>Multiple Services</option>}
            <option>Not sure yet</option>
          </select>
          <svg className="sel-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>

      {variant === 'full' && (
        <div className="form-group">
          <label className="form-lbl" htmlFor="message">Your Message <span className="form-req">*</span></label>
          <textarea id="message" name="message" className="form-ctrl form-ta" rows={5} placeholder="Tell us about your project, timeline, and goals…" required></textarea>
        </div>
      )}

      <button type="submit" className="btn btn--gold btn--lg" disabled={pending} style={{ width: '100%', justifyContent: 'center' }}>
        {pending ? 'Sending…' : variant === 'full' ? <>Send Message &nbsp;→</> : <>Get a Free Quote &nbsp;→</>}
      </button>

      {variant === 'full' && (
        <div className="trust-strip">
          <span><strong>500+</strong> Projects</span>
          <span className="trust-sep">·</span>
          <span><strong>98%</strong> Retention</span>
          <span className="trust-sep">·</span>
          <span>Reply within 1 business day</span>
        </div>
      )}
    </form>
  );
}
