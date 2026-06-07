"use client";

import DeferredHeroVideo from "./DeferredHeroVideo";
import HomeHeroText from "./HomeHeroText";
import HeroCollapsiblePanel from "./HeroCollapsiblePanel";

const HomeHero = () => {
  return (
    <>
      <section className="custom-container flex flex-col gap-4 py-4 sm:hidden">
        <div className="relative aspect-video min-h-[200px] w-full overflow-hidden rounded-2xl bg-neutral-100">
          <DeferredHeroVideo className="rounded-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
        </div>

        <HeroCollapsiblePanel align="center" />
      </section>

      <div className="custom-container hidden sm:grid grid-cols-3">
        <div className="col-span-2 flex items-center">
          <HomeHeroText />
        </div>

        <div className="flex flex-col justify-center items-end gap-8 py-4 lg:py-12">
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl lg:rounded-3xl">
            <DeferredHeroVideo className="rounded-2xl lg:rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
