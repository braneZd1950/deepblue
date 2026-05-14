import { useLocale } from '@/i18n/LocaleContext';

export function LanguageToggle() {
  const { locale, setLocale, L } = useLocale();
  const isEn = locale === 'en';

  function toggle() {
    setLocale(isEn ? 'hr' : 'en');
  }

  return (
    <div className="db-lang" title={L.lang.aria}>
      <span className="db-lang__label" aria-hidden="true">
        {L.lang.hr}
      </span>
      <button
        type="button"
        className="db-lang__switch"
        role="switch"
        aria-checked={isEn}
        aria-label={L.lang.aria}
        onClick={toggle}
      >
        <span className="db-lang__track">
          <span className={`db-lang__thumb${isEn ? ' db-lang__thumb--en' : ''}`} />
        </span>
      </button>
      <span className="db-lang__label" aria-hidden="true">
        {L.lang.en}
      </span>
    </div>
  );
}
