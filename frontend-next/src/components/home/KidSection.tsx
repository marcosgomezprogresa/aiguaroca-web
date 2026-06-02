"use client";

import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

import kids from "@/assets/images/kids.svg";
import text from "@/assets/images/KIDS-TEXT.svg";
import paw from "@/assets/images/paw.svg";

const KidSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  const img = [
    "/api/v1/assets/carousal/carousal-1.png",
    "/api/v1/assets/carousal/carousal-2.png",
    "/api/v1/assets/carousal/carousal-3.png",
    "/api/v1/assets/carousal/carousal-4.png",
  ];

  return (
    <>
      <div className="custom-container py-10 lg:py-20 bg-[#E8F7FF] space-y-14 rounded-t-3xl">
        <div className="space-y-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-10">
            <div className="col-span-1 lg:col-span-4 space-y-5 lg:space-y-9">
              <Image src={kids} alt="Kids" className="w-24 lg:w-32" width={128} height={128} />
              <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-52">
                <img
                  src="/api/v1/assets/Logo.png"
                  alt="Logo"
                  className="w-48 lg:w-72"
                />
                <Image src={text} alt="Text" className="w-20 lg:w-28 -mb-7" width={112} height={112} />
              </div>
              <div className="mx-auto lg:hidden relative w-full h-56 rounded-2xl">
                <video
                  src="/api/v1/videos/kids.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  style={{ pointerEvents: "none" }}
                  onClick={(e) => e.preventDefault()}
                  className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
                />
              </div>
              <p className="font-semibold text-xl text-center lg:text-left">
                😍 AVENTURAS PARA PEQUES 😍
              </p>
              <p className="text-lg font-medium text-brand-300 text-center lg:text-left">
                Los nenes solo quieren DIVERSION!
              </p>
              <p className="text-base lg:text-xl text-neutral-600">
                Hemos crecido jugando y practicando deportes al aire libre.
                ¿Porque no llevar las nuevas generaciónes por el mismo camino?!
                Adaptamos las actividades mas divertidas y emocionantes para
                vuestros hijos mas pequeños. Si tenéis nenes con 4 años o mas,
                ya pueden realizar algunas de nuestras super actividades!
              </p>
            </div>
            <div className="col-span-1 lg:col-span-5 lg:col-start-6 hidden lg:flex items-center">
              <video
                src="/api/v1/videos/kids.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                style={{ pointerEvents: "none" }}
                onClick={(e) => e.preventDefault()}
                className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
              />
            </div>
          </div>
          <Link href="/aiguaroca-kids">
            <button className="button px-2 gap-2 py-2 text-xl rounded-2xl inline-flex items-center">
              <GoDotFill />
              Descubre mas
            </button>
          </Link>
        </div>
      </div>
      <div className="custom-container py-10 lg:py-20 space-y-14 bg-[#FFF9ED] rounded-b-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-10">
          <div className="lg:col-span-4 hidden lg:block">
            <div className="group w-full relative">
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
                {img.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt="activity"
                      className="w-full h-64 lg:h-96 object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 lg:col-start-6 space-y-5 lg:space-y-10">
            <Image src={paw} alt="Paw" className="w-24 lg:w-36" width={144} height={144} />
            <div className="text-base lg:text-xl">
              <p>No lo dejes solo en casa!</p>
              <p>
                Ademas... traerlo te cuesta{" "}
                <span className="font-semibold">NADA!</span>{" "}
              </p>
            </div>
            <div className="lg:hidden relative">
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
                  <div className="flex absolute top-[49%] w-full justify-between items-center z-50 px-2">
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
                  {img.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt="activity"
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <p className="text-base lg:text-xl text-neutral-600">
              Tu mascota puede acompañarte en cualquiera de nuestras
              actividades: Rafting, Kayak, Canoas, Hidrobob o Barrancos. Traelo
              y disfrutareis ambos una buena aventura al aire libre! Muchos de
              los clientes vienen acompañados con sus amigos de cuatro patas y
              se lo pasan en grande! Será un día diferente e inolvidable!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KidSection;
