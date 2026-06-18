"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Button from "@/components/ui/Button";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import paw from "@/assets/images/paw.svg";

interface ActivitiesGallerySectionProps {
  images: string[];
}

const ActivitiesGallerySection: React.FC<ActivitiesGallerySectionProps> = ({
  images,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="custom-container grid grid-cols-1 gap-10 border-y border-neutral-200/60 bg-white py-10 lg:grid-cols-10">
      {/* Desktop Gallery */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="group w-full">
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
            <div className="flex absolute top-[49%] w-full justify-between items-center z-50 px-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
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
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  loading="eager"
                  decoding="async"
                  src={img}
                  alt="activity"
                  className="w-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Dog Section */}
      <div className="col-start-1 lg:col-span-5 lg:col-start-6 space-y-5 lg:space-y-10">
        <img
          loading="eager"
          decoding="async"
          src={paw.src}
          alt="Paw"
          className="w-36"
        />
        <div className="text-lg lg:text-xl">
          <p>No lo dejes solo en casa!</p>
          <p>
            Ademas... traerlo te cuesta <span className="font-semibold">NADA!</span>
          </p>
        </div>

        {/* Mobile Gallery */}
        <div className="lg:col-span-4 flex lg:hidden">
          <div className="group w-full">
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
              <div className="flex absolute top-[49%] w-full justify-between items-center z-50 px-2 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100">
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
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    loading="eager"
                    decoding="async"
                    src={img}
                    alt="activity"
                    className="w-full object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <p className="text-brand-300 text-3xl lg:text-6xl">
          Preparado para explorar con tu mejor amigo?!!!
        </p>
        <p className="text-lg lg:text-2xl">
          Preguntanos sobre las actividades donde puedes llevar a tu perro
        </p>
        <Link href="/contacto">
          <Button
            className="px-4 py-2 text-base lg:text-xl rounded-2xl"
            icon={<GoDotFill />}
          >
            Que puedo hacer con mi perro?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesGallerySection;
