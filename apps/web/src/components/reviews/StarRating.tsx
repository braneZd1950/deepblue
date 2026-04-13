type StarRatingProps = {
  value: number;
  onChange?: (rating: number) => void;
  id?: string;
  label?: string;
};

export function StarRating({ value, onChange, id, label = 'Ocjena' }: StarRatingProps) {
  const interactive = typeof onChange === 'function';

  if (!interactive) {
    return (
      <p className="db-stars db-stars--readonly" role="img" aria-label={`${value} od 5 zvjezdica`}>
        <span className="db-stars__inner" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < value ? 'db-stars__on' : 'db-stars__off'}>
              ★
            </span>
          ))}
        </span>
      </p>
    );
  }

  const groupId = id ?? 'review-rating';

  return (
    <div className="db-stars db-stars--input" role="group" aria-labelledby={`${groupId}-legend`}>
      <p id={`${groupId}-legend`} className="db-stars__legend">
        {label}
      </p>
      <div className="db-stars__buttons">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`db-stars__btn${n <= value ? ' db-stars__btn--active' : ''}`}
            aria-label={`Postavi ocjenu na ${n} od 5`}
            onClick={() => onChange(n)}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
