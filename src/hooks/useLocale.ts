import { locales } from '@/i18n';
import { useRouter } from 'next/router';

export function useLocale() {
  const router = useRouter();
  const defaultLocale = 'en'; // Defina o locale padrão, caso não encontre nenhum

  // Extraia o locale do asPath
  const locale = router.asPath.split('/')[1];

  // Verifique se o locale extraído é válido
  if (locales.includes(locale)) {
    return locale;
  }

  return defaultLocale;
}
