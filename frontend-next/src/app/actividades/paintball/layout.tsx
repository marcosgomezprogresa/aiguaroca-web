import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";

export const metadata: Metadata = getSEOConfig("/actividades/paintball").metadata;

export default function PaintballLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { structuredData } = getSEOConfig("/actividades/paintball");

  return (
    <>
      {structuredData && (
        <Script
          id="paintball-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      {children}
    </>
  );
}

