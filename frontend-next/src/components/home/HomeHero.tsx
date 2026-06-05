import DeferredHeroVideo from "./DeferredHeroVideo";
import HomeHeroText from "./HomeHeroText";
import MobileScrollHero from "./MobileScrollHero";

const HomeHero = () => {
  return (
    <>
      <MobileScrollHero />

      <div className="custom-container hidden sm:grid grid-cols-3">
        <div className="col-span-2 flex items-center">
          <HomeHeroText />
        </div>

        <div className="flex flex-col justify-center items-end gap-8 py-4 lg:py-12">
          <div className="relative h-48 w-full overflow-hidden rounded-2xl lg:h-56">
            <DeferredHeroVideo />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
