import Reveal from './Reveal';

export default function PageBanner({ label, title, children, className = '' }) {
  return (
    <section className={'page-banner ' + className}>
      <div className="page-banner__bg"></div>
      <div className="page-banner__orb" aria-hidden="true">
        <span className="page-banner__ring"></span>
        <span className="page-banner__core"></span>
      </div>
      <div className="container">
        <Reveal className="page-banner__content">
          <span className="page-banner__rule" aria-hidden="true"></span>
          <span className="label">{label}</span>
          {title}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
