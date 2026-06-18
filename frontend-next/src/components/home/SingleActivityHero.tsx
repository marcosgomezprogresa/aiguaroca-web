"use client";

import React, { useRef } from "react";
import { HiMiniHome } from "react-icons/hi2";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { IoShareOutline } from "react-icons/io5";
import Heading from "@/components/ui/Heading";
import { handleCopy } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface SingleActivityHeroProps {
  imgs: string[];
  breadCrumsPaths: string[];
  heading: string;
  title: string;
}

const SingleActivityHero: React.FC<SingleActivityHeroProps> = ({
  imgs,
  breadCrumsPaths,
  heading,
  title,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="custom-container py-10 space-y-10">
      {/* Desktop Grid Layout */}
      <div className="w-full hidden lg:grid relative h-[50dvh] lg:h-[80dvh] 2xl:h-[600px] grid-cols-12 gap-2 lg:gap-5">
        {imgs[0] && (
          <Image
            src={imgs[0]}
            alt="activity"
            width={900}
            height={600}
            priority
            quality={70}
            className="col-span-12 lg:col-span-8 h-full object-cover rounded-xl lg:rounded-3xl"
          />
        )}
        <div className="col-span-12 h-full lg:col-span-4 grid grid-cols-2 lg:grid-cols-none grid-rows-none lg:grid-rows-2 gap-2 lg:gap-5">
          {imgs[1] && (
            <Image
              src={imgs[1]}
              alt="activity"
              width={420}
              height={280}
              loading="lazy"
              quality={50}
              className="h-full object-cover rounded-xl lg:rounded-3xl"
            />
          )}
          {imgs[2] && (
            <Image
              src={imgs[2]}
              alt="activity"
              width={420}
              height={280}
              loading="lazy"
              quality={50}
              className="h-full object-cover rounded-xl lg:rounded-3xl"
            />
          )}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="w-full md:hidden relative h-[50dvh] overflow-hidden">
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
              return `<span class="bg-white w-min text-xs opacity-80 px-2 py-1 rounded-md">${current} of ${total}</span>`;
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
          <div className="flex absolute top-[48%] w-full justify-between items-center z-50 px-2">
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
          {imgs.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={item}
                alt="activity"
                width={720}
                height={480}
                loading={idx === 0 ? "eager" : "lazy"}
                quality={50}
                className="h-full object-cover rounded-xl lg:rounded-3xl"
              />
            </SwiperSlide>
          ))}
          <div className={"pagination-container bg-white"}></div>
        </Swiper>
      </div>

      {/* Breadcrumbs and Share */}
      <div className="space-between">
        <BreadCrumbs
          className="text-neutral-900 font-medium text-xs lg:text-lg"
          startIcon={<HiMiniHome />}
          pages={breadCrumsPaths}
        />
        <div
          onClick={() => handleCopy(window.location.href)}
          className="text-neutral-800 text-lg lg:text-xl align-center gap-2 lg:gap-5 cursor-pointer"
        >
          <IoShareOutline size={26} />
          <p className="underline">Compartir</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 sr-reveal">
        <Heading className="font-medium" text={heading} />
        <p className="text-2xl lg:text-4xl font-semibold text-brand-300">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SingleActivityHero;
