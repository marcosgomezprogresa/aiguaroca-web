import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidad | AIGUAROCA',
  description:
    'Política de privacidad de AIGUAROCA. Información sobre protección de datos, cumplimiento GDPR y LOPD, derechos del cliente.',
  keywords: ['privacidad', 'protección de datos', 'LOPD', 'RGPD', 'política de privacidad'],
  alternates: {
    canonical: 'https://www.aiguaroca.com/politica-de-privacidad',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
