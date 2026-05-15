import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type GalleryLightboxProps = {
  images: string[];
  index: number;
  alt: string;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function GalleryLightbox({
  images,
  index,
  alt,
  closeLabel,
  prevLabel,
  nextLabel,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const count = images.length;
  const safeIndex = count > 0 ? ((index % count) + count) % count : 0;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((safeIndex - 1 + count) % count);
      if (e.key === 'ArrowRight') onIndexChange((safeIndex + 1) % count);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onIndexChange, safeIndex, count]);

  if (count === 0) return null;

  const goPrev = () => onIndexChange((safeIndex - 1 + count) % count);
  const goNext = () => onIndexChange((safeIndex + 1) % count);

  return createPortal(
    <div className="db-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button type="button" className="db-lightbox__close" onClick={onClose} aria-label={closeLabel}>
        ×
      </button>
      {count > 1 && (
        <button
          type="button"
          className="db-lightbox__nav db-lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label={prevLabel}
        >
          ‹
        </button>
      )}
      <div className="db-lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <img src={images[safeIndex]} alt={alt} className="db-lightbox__img" />
        {count > 1 && (
          <p className="db-lightbox__counter" aria-live="polite">
            {safeIndex + 1} / {count}
          </p>
        )}
      </div>
      {count > 1 && (
        <button
          type="button"
          className="db-lightbox__nav db-lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label={nextLabel}
        >
          ›
        </button>
      )}
    </div>,
    document.body,
  );
}
