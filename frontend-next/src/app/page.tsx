import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";
import { Suspense } from "react";

import HomeGridGallerySkeleton from "@/components/skeletons/HomeGridGallerySkeleton";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";

import HomeHero from "@/components/home/HomeHero";
import HomeActivitySection from "@/components/home/HomeActivitySection";
import AsyncHomeGridGallery from "@/components/home/AsyncHomeGridGallery";
import AsyncPetSectionHome from "@/components/home/AsyncPetSectionHome";
import NaturalEnvironmentSection from "@/components/home/NaturalEnvironmentSection";
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

      <HomeHero />
      <HomeActivitySection />

      <Suspense fallback={<HomeGridGallerySkeleton />}>
        <AsyncHomeGridGallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncPetSectionHome />
      </Suspense>

      <NaturalEnvironmentSection />

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncHomeBrandSection />
      </Suspense>
    </>
  );
}
