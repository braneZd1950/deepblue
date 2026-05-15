import { useEffect, useMemo, useState } from 'react';
import type { GalleryItem, Review } from '@salon/shared';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';
import { loadReviews } from '@/services/api';
import { loadLocalReviews, mergeReviews } from '@/lib/localReviews';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { StarRating } from '@/components/reviews/StarRating';
import { useLocale } from '@/i18n/LocaleContext';
import imgDeepBlue from '@/assets/images/DEEP BLUE.jpg';
import imgMadero1 from '@/assets/images/MADEROTERAPIJA 1.jpg';
import imgMadero2 from '@/assets/images/MADEROTERAPIJA 2.jpeg';
import imgLice from '@/assets/images/MADEROTERAPIJA LICA 1.jpeg';
import imgUzv from '@/assets/images/ULTRAZVUK LICA.jpeg';
import imgWax from '@/assets/images/ITALWAX VRUĆI VOSAK NOGE.jpg';

function sortByDateDesc(a: Review, b: Review) {
  return b.date.localeCompare(a.date);
}

const curatedGalleryItems: GalleryItem[] = [
  {
    id: 'l-1',
    title: 'DEEP BLUE salon',
    imageUrl: imgDeepBlue,
    caption: 'Interijer salona DEEP BLUE u Zadru.',
  },
  {
    id: 'l-2',
    title: 'Maderoterapija',
    imageUrl: imgMadero1,
    caption: 'Body shaping tretmani i anticelulitni protokoli.',
  },
  {
    id: 'l-3',
    title: 'Maderoterapija — detalj',
    imageUrl: imgMadero2,
    caption: 'Profesionalan pristup i individualna prilagodba tretmana.',
  },
  {
    id: 'l-4',
    title: 'Maderoterapija lica',
    imageUrl: imgLice,
    caption: 'Tretmani lica za tonus, cirkulaciju i svjez izgled koze.',
  },
  {
    id: 'l-5',
    title: 'Ultrazvuk lica',
    imageUrl: imgUzv,
    caption: 'Njega lica ultrazvukom i dubinska njega koze.',
  },
  {
    id: 'l-6',
    title: 'Depilacija Italwax',
    imageUrl: imgWax,
    caption: 'Depilacija nogu uz profesionalne Italwax proizvode.',
  },
];

function waSortKey(path: string): number {
  const m = path.match(/WA(\d+)/i);
  return m ? parseInt(m[1], 10) : 0;
}

function deepBlueGalItems(): GalleryItem[] {
  const modules = import.meta.glob<string>(
    ['../assets/images/deepBlueGal/*.jpg', '!../assets/images/deepBlueGal/IMG-20260509-WA0046.jpg'],
    { eager: true, import: 'default' },
  );

  return Object.entries(modules)
    .sort((a, b) => waSortKey(a[0]) - waSortKey(b[0]))
    .map(([path, url]) => {
      const wa = path.match(/WA(\d+)/i)?.[1] ?? path;
      return {
        id: `dbg-wa-${wa}`,
        title: 'Galerija',
        caption: '',
        imageUrl: url,
      };
    });
}

const localGalleryItems: GalleryItem[] = [...curatedGalleryItems, ...deepBlueGalItems()];

const showGalleryReviews = !import.meta.env.PROD;

export function GalleryPage() {
  const { L } = useLocale();
  const [items] = useState<GalleryItem[]>(localGalleryItems);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const imageUrls = useMemo(() => items.map((g) => g.imageUrl), [items]);

  useEffect(() => {
    if (!showGalleryReviews) return;
    const local = loadLocalReviews();
    void loadReviews().then((r) => {
      setReviews(mergeReviews(r, local).sort(sortByDateDesc));
    });
  }, [showGalleryReviews]);

  const onReviewAdded = (r: Review) => {
    setReviews((prev) => mergeReviews(prev, [r]).sort(sortByDateDesc));
  };

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">{L.gallery.title}</h1>
        <p className="db-page__lead">
          {showGalleryReviews ? L.gallery.leadDev : L.gallery.leadProd}
        </p>
      </header>

      <div className="db-gallery">
        {items.map((g, i) => (
          <button
            key={g.id}
            type="button"
            className="db-gallery__item"
            aria-label={L.gallery.openImage}
            onClick={() => setLightboxIndex(i)}
          >
            <img src={g.imageUrl} alt={L.gallery.imageAlt} loading="lazy" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={imageUrls}
          index={lightboxIndex}
          alt={L.gallery.imageAlt}
          closeLabel={L.gallery.lightboxClose}
          prevLabel={L.gallery.lightboxPrev}
          nextLabel={L.gallery.lightboxNext}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}

      {showGalleryReviews && (
        <section className="db-reviews" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="db-reviews__title">
            {L.gallery.reviews}
          </h2>

          <ReviewForm onAdded={onReviewAdded} />

          <div className="db-reviews__grid">
            {reviews.map((r) => (
              <blockquote key={r.id} className="db-review">
                <StarRating value={r.rating} />
                <p className="db-review__text">“{r.text}”</p>
                <footer>
                  — {r.author}, {r.date}
                  {r.id.startsWith('demo-') && <span className="db-review__badge"> {L.gallery.demoBadge}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
