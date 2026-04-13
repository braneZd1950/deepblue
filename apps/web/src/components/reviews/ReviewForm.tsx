import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import type { Review } from '@salon/shared';
import { saveLocalReview } from '@/lib/localReviews';
import { StarRating } from './StarRating';
import { Button } from '@/components/ui/Button';

type ReviewFormProps = {
  onAdded: (review: Review) => void;
};

/** Uobičajena gornja granica za kratke korisničke recenzije (npr. kao kod Google / booking portala). */
const REVIEW_TEXT_MAX = 400;
const REVIEW_TEXT_MIN = 8;

export function ReviewForm({ onAdded }: ReviewFormProps) {
  const textAreaId = useId();
  const textHintId = useId();
  const textCounterId = useId();
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    const name = author.trim() || 'Gost';
    if (trimmed.length < REVIEW_TEXT_MIN || trimmed.length > REVIEW_TEXT_MAX) return;

    const review: Review = {
      id: `demo-${Date.now()}`,
      author: name,
      rating,
      text: trimmed,
      date: new Date().toISOString().slice(0, 10),
    };
    saveLocalReview(review);
    onAdded(review);
    setAuthor('');
    setText('');
    setRating(5);
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="db-review-form" aria-labelledby="review-form-title">
      <h2 id="review-form-title" className="db-review-form__title">
        Vaša recenzija
      </h2>
      <p className="db-review-form__hint">
        U demo modu recenzija se sprema u vaš preglednik (localStorage) i prikazuje se zajedno s ostalim
        recenzijama. U produkciji bi se slala na server.
      </p>
      <form className="db-form db-review-form__form" onSubmit={onSubmit}>
        <StarRating value={rating} onChange={setRating} id="new-review-rating" />
        <label className="db-field">
          <span>Ime ili inicijali</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="npr. Ana M."
            maxLength={80}
            autoComplete="name"
          />
        </label>
        <div className="db-review-form__message">
          <div className="db-review-form__message-head">
            <label htmlFor={textAreaId} className="db-review-form__message-label">
              Vaše iskustvo
            </label>
            <p id={textHintId} className="db-review-form__message-hint">
              Napišite nekoliko rečenica — što vas je posebno impresioniralo? Duljina{' '}
              <strong>
                {REVIEW_TEXT_MIN}–{REVIEW_TEXT_MAX} znakova
              </strong>{' '}
              (razmak se broji).
            </p>
          </div>
          <textarea
            id={textAreaId}
            className="db-review-form__textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            minLength={REVIEW_TEXT_MIN}
            maxLength={REVIEW_TEXT_MAX}
            rows={6}
            aria-describedby={`${textHintId} ${textCounterId}`}
            placeholder="Primjer: Njega je bila pažljiva, ambijent opuštajući, osoblje strpljivo i profesionalno…"
          />
          <p
            id={textCounterId}
            className={`db-review-form__counter${text.length >= 360 ? ' db-review-form__counter--warn' : ''}`}
            aria-live="polite"
          >
            {text.length} / {REVIEW_TEXT_MAX}
          </p>
        </div>
        {sent && <p className="db-form__msg">Hvala — recenzija je dodana.</p>}
        <Button type="submit" variant="accent">
          Objavi recenziju
        </Button>
      </form>
    </section>
  );
}
