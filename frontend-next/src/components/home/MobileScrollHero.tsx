import DeferredHeroVideo from "./DeferredHeroVideo";
import HeroCollapsiblePanel from "./HeroCollapsiblePanel";

const MobileScrollHero = () => {
  return (
    <section className="custom-container flex flex-col gap-4 py-4 sm:hidden">
      <div className="relative h-[52vh] min-h-[280px] w-full overflow-hidden rounded-2xl">
        <DeferredHeroVideo />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
      </div>

      <HeroCollapsiblePanel align="center" />
    </section>
  );
};

export default MobileScrollHero;
