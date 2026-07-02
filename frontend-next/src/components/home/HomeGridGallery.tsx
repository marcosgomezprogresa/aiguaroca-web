import GridImage from "@/components/ui/GridImage";

const HomeGridGallery = () => {
  return (
      <div className="w-full mt-12 lg:mt-34">
      <div className="custom-container mb-8 lg:mb-12 text-center space-y-3 lg:space-y-4">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
    Actividades de aventura para todos los públicos
  </h2>

   <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
    Nuestras actividades están diseñadas para adaptarse a distintos grupos y edades.
    Solo tienes que elegir con quién vienes y nosotros nos encargamos del resto.
   </p>
    </div>


    <div className="custom-container h-auto lg:h-[85dvh] 2xl:h-[680px] grid grid-cols-1 lg:grid-cols-12 gap-x-3 gap-y-6 lg:gap-x-5 lg:gap-y-6 my-10">
      {/* Row 1 */}
      <GridImage
        name="Aventura para empresas"
        link="/empresas"
        image="/api/v1/assets/grid/grid-4.png"
        className="col-span-1 lg:col-span-4 aspect-[16/9] lg:aspect-auto"
      />
      <GridImage
        name=" Aventura con niños"
        link="/aiguaroca-kids"
        className="col-span-1 lg:col-span-4 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/grid/grid-2.png"
      />
      <GridImage
        name="Aventura en familia"
        link="/familias"
        className="col-span-1 lg:col-span-4 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/grid/grid-1.png"
      />
      {/* Row 2 */}
      <GridImage
        name="Aventura para equipos deportivos"
        link="/equipos-deportivos"
        className="col-span-1 lg:col-span-3 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/grid/grid-3.png"
      />
      <GridImage
        name="Despedidas de solter@s"
        link="/despedidas"
        className="col-span-1 lg:col-span-3 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/grid/grid-6.png"
      />
      <GridImage
        name="Cumpleaños de aventura"
        link="/cumpleanos"
        className="col-span-1 lg:col-span-3 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/grid/grid-5.png"
      />
      <GridImage
        name="Aventura para grupos escolares"
        link="/escolares"
        className="col-span-1 lg:col-span-3 aspect-[16/9] lg:aspect-auto"
        image="/api/v1/assets/posters/escolares.png"
      />
    </div></div>
  );
};

export default HomeGridGallery;
