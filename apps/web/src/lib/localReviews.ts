import type { Review } from '@salon/shared';

const STORAGE_KEY = 'deepblue_demo_reviews';

function isReview(x: unknown): x is Review {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.id === 'string' &&
    typeof o.author === 'string' &&
    typeof o.text === 'string' &&
    typeof o.date === 'string' &&
    typeof o.rating === 'number' &&
    o.rating >= 1 &&
    o.rating <= 5
  );
}

export function loadLocalReviews(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isReview);
  } catch {
    return [];
  }
}

export function saveLocalReview(review: Review): void {
  const next = [review, ...loadLocalReviews()];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function mergeReviews(remote: Review[], local: Review[]): Review[] {
  const seen = new Set<string>();
  const out: Review[] = [];
  for (const r of [...local, ...remote]) {
    if (seen.has(r.id)) continue;
    seen.add(r.id);
    out.push(r);
  }
  return out;
}
