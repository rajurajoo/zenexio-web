import Image from 'next/image';

export default function PhotoFrame({ src, alt, ratio = '4/3', className = '', sizes, priority = false }) {
  return (
    <div className={'photo-frame ' + className} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || '(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw'}
        style={{ objectFit: 'cover' }}
        loading={priority ? undefined : 'lazy'}
        priority={priority}
      />
    </div>
  );
}
