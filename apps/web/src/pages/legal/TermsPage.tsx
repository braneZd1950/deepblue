import { useLocale } from '@/i18n/LocaleContext';
import { termsLegal } from '@/i18n/legalDocs';
import { LegalArticle } from './LegalArticle';

export function TermsPage() {
  const { locale } = useLocale();
  return <LegalArticle doc={termsLegal[locale]} />;
}
