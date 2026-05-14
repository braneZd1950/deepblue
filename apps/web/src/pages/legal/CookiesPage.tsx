import { useLocale } from '@/i18n/LocaleContext';
import { cookiesLegal } from '@/i18n/legalDocs';
import { LegalArticle } from './LegalArticle';

export function CookiesPage() {
  const { locale } = useLocale();
  return <LegalArticle doc={cookiesLegal[locale]} />;
}
