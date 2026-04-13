import { useEffect, useState } from 'react';
import type { GalleryItem, Review } from '@salon/shared';
import { loadGallery, loadReviews } from '@/services/api';
import { loadLocalReviews, mergeReviews } from '@/lib/localReviews';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { StarRating } from '@/components/reviews/StarRating';

function sortByDateDesc(a: Review, b: Review) {
  return b.date.localeCompare(a.date);
}

export function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const local = loadLocalReviews();
    void Promise.all([loadGallery(), loadReviews()]).then(([g, r]) => {
      setItems(g);
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
          Pregled atmosfere i usluga (demo slike). Ispod možete ostaviti ocjenu i tekstualnu recenziju — idealno za
          prezentaciju klijentu.
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
