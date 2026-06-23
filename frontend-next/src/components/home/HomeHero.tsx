import DeferredHeroVideo from "./DeferredHeroVideo";
import HomeHeroText from "./HomeHeroText";

const HomeHero = () => {
  return (
    <div className="custom-container flex flex-col-reverse gap-4 py-4 sm:grid sm:grid-cols-3 sm:gap-0">
      <div className="col-span-2 flex items-center">
        <HomeHeroText />
      </div>

      <div className="flex flex-col justify-center items-end gap-8 py-4 lg:py-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl lg:rounded-3xl sm:max-w-md">
          <DeferredHeroVideo className="rounded-2xl lg:rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
