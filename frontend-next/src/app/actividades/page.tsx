import { Metadata } from 'next';
import Script from 'next/script';
import { getSEOConfig } from '@/lib/seoConfig';
import ActivitiesPageClient from './client';

// Export metadata for SEO
export const metadata: Metadata = getSEOConfig('/actividades').metadata;

export default function ActivitiesPage() {
  const seoData = getSEOConfig('/actividades');

  return (
    <>
      {/* JSON-LD Structured Data */}
      {seoData.structuredData && (
        <Script
          id="actividades-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData),
          }}
        />
      )}

      <ActivitiesPageClient />
    </>
  );
}
