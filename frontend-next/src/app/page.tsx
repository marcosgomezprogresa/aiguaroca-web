import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";
import { Suspense } from "react";

// Import skeletons
import HomeGridGallerySkeleton from "@/components/skeletons/HomeGridGallerySkeleton";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";

// Eager load above-the-fold components
import HomeHero from "@/components/home/HomeHero";
import HomeActivitySection from "@/components/home/HomeActivitySection";

// Async components for streaming (below-the-fold)
import AsyncHomeGridGallery from "@/components/home/AsyncHomeGridGallery";
import AsyncHomeBrandSection from "@/components/home/AsyncHomeBrandSection";
import AsyncLastHeading from "@/components/home/AsyncLastHeading";

import NaturalEnvironmentSection from "@/components/home/NaturalEnvironmentSection";

import AsyncPetSectionHome from "@/components/home/AsyncPetSectionHome";

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

      {/* Above the fold - loads immediately (NO Suspense) */}
      <HomeHero />
      
      <HomeActivitySection />

      {/* Grid Gallery with updated anchor texts */}
      <Suspense fallback={<HomeGridGallerySkeleton />}>
        <AsyncHomeGridGallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncPetSectionHome />
      </Suspense>

      {/* Natural Environment Section with final CTA */}
      <NaturalEnvironmentSection />

      {/* Brand Section with rafting info and links */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AsyncHomeBrandSection />
      </Suspense>


      {/* Last Heading */}
      <Suspense fallback={<SectionSkeleton height="h-40" />}>
        <AsyncLastHeading />
      </Suspense>
    </>
  );
}
