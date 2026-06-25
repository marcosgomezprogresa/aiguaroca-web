import DeferredHeroVideo from "./DeferredHeroVideo";
import HomeHeroText from "./HomeHeroText";

const HomeHero = () => {
  return (
    <>
      <div className="custom-container flex flex-col gap-4 py-4 sm:hidden">
        <h1 className="text-center text-sm font-black uppercase tracking-[0.3em] text-black">
          Aventura Valencia
        </h1>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <DeferredHeroVideo className="rounded-2xl" />
        </div>

        <HomeHeroText hideEyebrow className="w-full" />
      </div>

      <div className="custom-container hidden py-4 sm:grid sm:grid-cols-3 sm:gap-0">
        <div className="col-span-2 flex w-full items-center">
          <HomeHeroText className="w-full" />
        </div>

        <div className="flex flex-col items-end justify-center gap-8 py-4 lg:py-12">
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl lg:rounded-3xl">
            <DeferredHeroVideo className="rounded-2xl lg:rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
