import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condiciones generales | AIGUAROCA',
  description:
    'Condiciones generales de AIGUAROCA. Información sobre actividades, precios, condiciones de contratación y cancelación de reservas.',
  keywords: ['condiciones generales', 'términos y condiciones', 'reservas', 'cancelación'],
  alternates: {
    canonical: 'https://www.aiguaroca.com/condiciones-generales',
  },
};

export default function GeneralConditionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
