"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

import familiasicon from "@/assets/images/familias-icon.svg";
import viajesescolaresicon from "@/assets/images/viajes-escolares-icon.svg";
import equiposdeportivosicon from "@/assets/images/equipos-deportivos-icon.svg";
import empresasicon from "@/assets/images/empresas-icon.svg";
import cumpleanosicon from "@/assets/images/cumpleanos-icon.svg";
import despedidasdesolterosicon from "@/assets/images/despedidas-de-solteros-icon.svg";

const ActivitySlider = () => {
  const gridImageData = [
    {
      name: "Familias",
      link: "/familias",
      image: "/api/v1/assets/grid/grid-1.png",
      icon: familiasicon,
    },
    {
      name: "Viajes Escolares",
      link: "/escolares",
      image: "/api/v1/assets/grid/grid-2.png",
      icon: viajesescolaresicon,
    },
    {
      name: "Equipos Deportivos",
      link: "/equipos-deportivos",
      image: "/api/v1/assets/grid/grid-3.png",
      icon: equiposdeportivosicon,
    },
    {
      name: "Empresas",
      link: "/empresas",
      image: "/api/v1/assets/grid/grid-4.png",
      icon: empresasicon,
    },
    {
      name: "Cumpleaños",
      link: "/cumpleanos",
      image: "/api/v1/assets/grid/grid-5.png",
      icon: cumpleanosicon,
    },
    {
      name: "Despedidas de Solteros",
      link: "/despedidas",
      image: "/api/v1/assets/grid/grid-6.png",
      icon: despedidasdesolterosicon,
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <div className="custom-container hidden lg:flex mb-10 lg:mb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          type: "custom",
          renderCustom: (_swiper, current, total) => {
            return `<span class="custom-pagination bg-white w-min text-sm opacity-80 px-2 py-1 rounded-md">${current} of ${total}</span>`;
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper relative group"
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            // @ts-expect-error Swiper navigation refs are assigned after init.
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper navigation refs are assigned after init.
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {/* Custom Navigation Buttons */}
        <div className="flex absolute top-[48%] w-full justify-between items-center z-50 px-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <button
            ref={prevRef}
            className="swiper-button-next-custom rounded-full z-50 bg-white"
          >
            <TiArrowLeft size={28} className="text-gray-600" />
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom rounded-full z-50 bg-white"
          >
            <TiArrowRight size={28} className="text-gray-600" />
          </button>
        </div>
        {gridImageData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleNavigation(item.link)}
              className="w-full relative rounded-4xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            >
              <div className="grid-image-overlay" />
              <div className="w-full h-[65dvh] lg:h-[80dvh] 2xl:h-[65dvh] text-white p-5 relative z-10 text-6xl">
                <div className="align-center gap-4">
                  <div className="center w-20 h-20 flex-none">
                    <Image src={item.icon} alt={item.name} width={80} height={80} />
                  </div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="pagination-container bg-white"></div>
      </Swiper>
    </div>
  );
};

export default ActivitySlider;
