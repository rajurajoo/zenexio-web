import Reveal from './Reveal';

export default function PageBanner({ label, title, children, className = '' }) {
  return (
    <section className={'page-banner ' + className}>
      <div className="page-banner__bg"></div>
      <div className="container">
        <Reveal className="page-banner__content">
          <span className="label">{label}</span>
          {title}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
