import Heading from "../ui/Heading";
import DeferredHeroVideo from "./DeferredHeroVideo";

const HomeHero = () => {
  return ( 
    <>
        <div className="custom-container flex flex-col-reverse sm:grid grid-cols-3">
          <div className="col-span-2 flex items-center">
          <div className="space-y-5 max-w-xl">

          <h1 className="text-sm sm:text-base font-black uppercase tracking-[0.3em] text-black text-center sm:text-left">
            Aventura Valencia
          </h1>

            <Heading
              level={2}
              text="Deportes de Aventura Valencia"
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-gray-900"
            />
            <p className="text-base sm:text-lg text-gray-600 max-w-lg">
              Vive experiencias de multiaventura en Valencia al aire libre, con actividades diseñadas para disfrutar, superar límites y conectar con la naturaleza.
            </p>

            <div className="pt-6">
              <span className="block w-full sm:w-56 lg:w-125 h-1 bg-[#00acec] rounded-full"></span>
            </div>
          </div>
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
