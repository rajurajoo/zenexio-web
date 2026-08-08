export default function ImageSlot({ label, ratio = '16/9', className = '' }) {
  return (
    <div className={'img-slot ' + className} style={{ aspectRatio: ratio }}>
      <div className="img-slot__inner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="img-slot__icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="img-slot__label">{label || 'Add Image Here'}</span>
      </div>
    </div>
  );
}
