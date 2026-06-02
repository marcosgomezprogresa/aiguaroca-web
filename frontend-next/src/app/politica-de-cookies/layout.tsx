import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | AIGUAROCA',
  description:
    'Política de Cookies de AIGUAROCA. Información sobre qué son las cookies, cómo se utilizan, tipos de cookies, y cómo desactivarlas.',
  keywords: ['cookies', 'política de cookies', 'privacidad', 'navegación', 'Google Analytics'],
  alternates: {
    canonical: 'https://www.aiguaroca.com/politica-de-cookies',
  },
};

export default function CookiesPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
