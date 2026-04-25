import { useEffect, useState } from 'react';
import type { GalleryItem, Review } from '@salon/shared';
import { loadReviews } from '@/services/api';
import { loadLocalReviews, mergeReviews } from '@/lib/localReviews';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { StarRating } from '@/components/reviews/StarRating';
import imgDeepBlue from '@/assets/images/DEEP BLUE.jpg';
import imgMadero1 from '@/assets/images/MADEROTERAPIJA 1.jpg';
import imgMadero2 from '@/assets/images/MADEROTERAPIJA 2.jpeg';
import imgLice from '@/assets/images/MADEROTERAPIJA LICA 1.jpeg';
import imgUzv from '@/assets/images/ULTRAZVUK LICA.jpeg';
import imgWax from '@/assets/images/ITALWAX VRUĆI VOSAK NOGE.jpg';

function sortByDateDesc(a: Review, b: Review) {
  return b.date.localeCompare(a.date);
}

const localGalleryItems: GalleryItem[] = [
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

export function GalleryPage() {
  const [items] = useState<GalleryItem[]>(localGalleryItems);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const local = loadLocalReviews();
    void loadReviews().then((r) => {
      setReviews(mergeReviews(r, local).sort(sortByDateDesc));
    });
  }, []);

  const onReviewAdded = (r: Review) => {
    setReviews((prev) => mergeReviews(prev, [r]).sort(sortByDateDesc));
  };

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">Galerija</h1>
        <p className="db-page__lead">
          Pregled stvarnih fotografija salona i tretmana. Ispod mozete ostaviti ocjenu i tekstualnu recenziju.
        </p>
      </header>

      <div className="db-gallery">
        {items.map((g) => (
          <figure key={g.id} className="db-gallery__item">
            <img src={g.imageUrl} alt={g.title} loading="lazy" />
            <figcaption>
              <strong>{g.title}</strong>
              <span>{g.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="db-reviews" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="db-reviews__title">
          Recenzije
        </h2>

        <ReviewForm onAdded={onReviewAdded} />

        <div className="db-reviews__grid">
          {reviews.map((r) => (
            <blockquote key={r.id} className="db-review">
              <StarRating value={r.rating} />
              <p className="db-review__text">“{r.text}”</p>
              <footer>
                — {r.author}, {r.date}
                {r.id.startsWith('demo-') && (
                  <span className="db-review__badge"> Vaša (demo)</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
