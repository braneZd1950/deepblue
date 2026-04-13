import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';

export type CustomSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  value: string;
  options: CustomSelectOption[];
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
};

function nextEnabledIndex(options: CustomSelectOption[], from: number, dir: 1 | -1): number {
  const n = options.length;
  if (n === 0) return 0;
  let i = from;
  for (let k = 0; k < n; k++) {
    i = (i + dir + n) % n;
    if (!options[i]?.disabled) return i;
  }
  return from;
}

export function CustomSelect({
  label,
  value,
  options,
  onChange,
  required,
  placeholder = 'Odaberite…',
}: Props) {
  const baseId = useId();
  const listId = `${baseId}-list`;
  const labelId = `${baseId}-label`;
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  const syncHighlight = useCallback(() => {
    const idx = options.findIndex((o) => o.value === value && !o.disabled);
    if (idx >= 0) setHighlight(idx);
    else {
      const first = options.findIndex((o) => !o.disabled);
      setHighlight(first >= 0 ? first : 0);
    }
  }, [options, value]);

  useEffect(() => {
    if (!open) return;
    syncHighlight();
  }, [open, syncHighlight]);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  function pick(v: string) {
    onChange(v);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onBtnKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
    }
    if (!open) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => nextEnabledIndex(options, h, 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => nextEnabledIndex(options, h, -1));
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const o = options[highlight];
      if (o && !o.disabled) pick(o.value);
    }
    if (e.key === 'Home') {
      e.preventDefault();
      const first = options.findIndex((o) => !o.disabled);
      if (first >= 0) setHighlight(first);
    }
    if (e.key === 'End') {
      e.preventDefault();
      let last = -1;
      for (let i = options.length - 1; i >= 0; i--) {
        if (!options[i].disabled) {
          last = i;
          break;
        }
      }
      if (last >= 0) setHighlight(last);
    }
  }

  return (
    <div ref={rootRef} className={`db-custom-select${open ? ' db-custom-select--open' : ''}`}>
      <label htmlFor={baseId} id={labelId} className="db-custom-select__label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <button
        ref={btnRef}
        type="button"
        id={baseId}
        className="db-custom-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        aria-required={required || undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onBtnKeyDown}
      >
        <span className={selected ? 'db-custom-select__value' : 'db-custom-select__value db-custom-select__value--placeholder'}>
          {display}
        </span>
        <span className="db-custom-select__chevron" aria-hidden />
      </button>

      {open && (
        <ul id={listId} className="db-custom-select__list" role="listbox" aria-labelledby={labelId}>
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled || undefined}
              className={`db-custom-select__option${opt.value === value ? ' db-custom-select__option--selected' : ''}${opt.disabled ? ' db-custom-select__option--disabled' : ''}${i === highlight ? ' db-custom-select__option--highlight' : ''}`}
              onMouseEnter={() => !opt.disabled && setHighlight(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => !opt.disabled && pick(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* Za HTML5 validaciju obrasca */}
      <select
        className="db-custom-select__native"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
      >
        {required ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
