import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";

export const metadata: Metadata = getSEOConfig("/actividades/kayak-en-aguas-bravas").metadata;

export default function KayakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { structuredData } = getSEOConfig("/actividades/kayak-en-aguas-bravas");

  return (
    <>
      {structuredData && (
        <Script
          id="kayak-structured-data"
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
