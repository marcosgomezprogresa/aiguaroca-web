import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";
import { seoUtils } from "@/lib/seoUtils";

export const metadata: Metadata = getSEOConfig("/actividades/rafting").metadata;

export default function RaftingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { structuredData } = getSEOConfig("/actividades/rafting");

  // Generate breadcrumb JSON-LD
  const breadcrumbSchema = seoUtils.generateBreadcrumbJsonLd([
    { name: 'Inicio', url: 'https://www.aiguaroca.com/' },
    { name: 'Actividades', url: 'https://www.aiguaroca.com/actividades' },
    { name: 'Rafting', url: 'https://www.aiguaroca.com/actividades/rafting' }
  ]);

  return (
    <>
      {structuredData && (
        <Script
          id="rafting-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      <Script
        id="rafting-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
