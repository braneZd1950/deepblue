import { useLocale } from '@/i18n/LocaleContext';
import { privacyLegal } from '@/i18n/legalDocs';
import { LegalArticle } from './LegalArticle';

export function PrivacyPage() {
  const { locale } = useLocale();
  return <LegalArticle doc={privacyLegal[locale]} />;
}
