"use client";

import Heading from "@/components/ui/Heading";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const MultiActivity = ({ headingText = "Paquetes Multiaventura en Valencia" }: { headingText?: string }) => {
  const cardsArr = [
    {
      img: [
        "/api/v1/assets/singleActivity/img-1.png",
        "/api/v1/assets/singleActivity/img-2.png",
        "/api/v1/assets/singleActivity/img-3.png",
      ],
      title: "Actividades",
      badge: "Todas las actividades",
      link: "/actividades",
    },
    {
      img: [
        "/api/v1/assets/multiActivity/img-1.png",
        "/api/v1/assets/multiActivity/img-2.png",
        "/api/v1/assets/multiActivity/img-3.png",
      ],
      title: "Día Multiaventura",
      badge: "2 Actividades en un dia",
      link: "/dia-multiaventura",
    },
    {
      img: [
        "/api/v1/assets/samena/img-1.png",
        "/api/v1/assets/samena/img-2.png",
        "/api/v1/assets/samena/img-3.png",
      ],
      title: "Fin de semana multiactividad",
      badge: "Alojamiento + Actividades",
      link: "/paquetes-fin-de-semana",
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="custom-container py-12 lg:py-24 space-y-8">
      <div className="sr-reveal">
        <Heading
          className="font-medium text-xl lg:text-2xl"
          text={headingText}
          level={2}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sr-stagger">
        {cardsArr.map((item, index) => (
          <Link href={item.link} key={index} className="space-y-5">
            <div className="rounded-3xl overflow-hidden relative">
              {item.badge && (
                <p
                  className="absolute top-2 left-3 bg-white/80 rounded-lg p-1 font-medium"
                  style={{ zIndex: 10 }}
                >
                  {item.badge}
                </p>
              )}
              <div className="group">
                <Swiper
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  modules={[Navigation]}
                  className="mySwiper relative"
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
                  <div className="flex absolute top-[49%] w-full justify-between items-center z-50 px-2 transition-all duration-500 lg:group-hover:opacity-100 lg:opacity-0 ">
                    <button
                      ref={prevRef}
                      className="swiper-button-next-custom rounded-full z-50 bg-white"
                    >
                      <TiArrowLeft size={25} className="text-gray-600" />
                    </button>
                    <button
                      ref={nextRef}
                      className="swiper-button-next-custom rounded-full z-50 bg-white"
                    >
                      <TiArrowRight size={25} className="text-gray-600" />
                    </button>
                  </div>
                  {item.img.map((img, idx) => (
                    <SwiperSlide key={idx} className="h-full">
                      <Image
                        src={img}
                        alt="activity"
                        width={420}
                        height={240}
                        loading="lazy"
                        quality={50}
                        className="w-full object-cover rounded-2xl h-60"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <p className="font-medium text-xl lg:text-2xl">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MultiActivity;
