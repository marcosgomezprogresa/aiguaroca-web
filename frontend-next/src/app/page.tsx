import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";
import { Suspense } from "react";

import HomeGridGallerySkeleton from "@/components/skeletons/HomeGridGallerySkeleton";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";

import HomeHeroV2 from "@/components/home/v2/HomeHeroV2";
import HomeHighlightsBar from "@/components/home/v2/HomeHighlightsBar";
import HomeActivitySectionV2 from "@/components/home/v2/HomeActivitySectionV2";
import AsyncHomeAudienceGalleryV2 from "@/components/home/v2/AsyncHomeAudienceGalleryV2";
import AsyncPetSectionHome from "@/components/home/AsyncPetSectionHome";
import AsyncHomeBrandSection from "@/components/home/AsyncHomeBrandSection";

export const metadata: Metadata = getSEOConfig("/").metadata;

export default function HomePage() {
  const { structuredData } = getSEOConfig("/");

  return (
    <>
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          strategy="afterInteractive"
        />
      )}

      <HomeHeroV2 />
      <HomeHighlightsBar />
      <HomeActivitySectionV2 />

      <Suspense fallback={<HomeGridGallerySkeleton />}>
        <AsyncHomeAudienceGalleryV2 />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncPetSectionHome />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncHomeBrandSection />
      </Suspense>

    </>
  );
}
