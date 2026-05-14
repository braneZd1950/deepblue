import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import type { Review } from '@salon/shared';
import { saveLocalReview } from '@/lib/localReviews';
import { StarRating } from './StarRating';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/i18n/LocaleContext';

type ReviewFormProps = {
  onAdded: (review: Review) => void;
};

const REVIEW_TEXT_MAX = 400;
const REVIEW_TEXT_MIN = 8;

export function ReviewForm({ onAdded }: ReviewFormProps) {
  const { L } = useLocale();
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
    const name = author.trim() || L.reviewForm.guestDefault;
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

  const hint = L.reviewForm.messageHint
    .replace('{{min}}', String(REVIEW_TEXT_MIN))
    .replace('{{max}}', String(REVIEW_TEXT_MAX));

  return (
    <section className="db-review-form" aria-labelledby="review-form-title">
      <h2 id="review-form-title" className="db-review-form__title">
        {L.reviewForm.title}
      </h2>
      <p className="db-review-form__hint">{L.reviewForm.hint}</p>
      <form className="db-form db-review-form__form" onSubmit={onSubmit}>
        <StarRating value={rating} onChange={setRating} id="new-review-rating" />
        <label className="db-field">
          <span>{L.reviewForm.nameLabel}</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={L.reviewForm.namePh}
            maxLength={80}
            autoComplete="name"
          />
        </label>
        <div className="db-review-form__message">
          <div className="db-review-form__message-head">
            <label htmlFor={textAreaId} className="db-review-form__message-label">
              {L.reviewForm.messageLabel}
            </label>
            <p id={textHintId} className="db-review-form__message-hint">
              {hint}
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
            placeholder={L.reviewForm.messagePh}
          />
          <p
            id={textCounterId}
            className={`db-review-form__counter${text.length >= 360 ? ' db-review-form__counter--warn' : ''}`}
            aria-live="polite"
          >
            {text.length} / {REVIEW_TEXT_MAX}
          </p>
        </div>
        {sent && <p className="db-form__msg">{L.reviewForm.thankYou}</p>}
        <Button type="submit" variant="accent">
          {L.reviewForm.submit}
        </Button>
      </form>
    </section>
  );
}
