"use client";

import React, { useRef, useState } from "react";
import { HiMiniHome } from "react-icons/hi2";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { IoShareOutline } from "react-icons/io5";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { GoDotFill } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { handleCopy } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface MultiWeekendHeroProps {
  openModal: () => void;
  imgs: string[];
  breadCrumsPaths: string[];
  heading: string;
  packName: string;
  des: React.ReactNode;
  showSeeMore?: boolean;
}

const MultiWeekendHero: React.FC<MultiWeekendHeroProps> = ({
  openModal,
  imgs,
  breadCrumsPaths,
  heading,
  packName,
  des,
  showSeeMore = false,
}) => {
  const [showMore, setShowMore] = useState(showSeeMore);
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8 text-lg lg:text-xl max-w-2xl">
          <Heading className="font-medium" text={heading} />
          {des}
          {showMore && (
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-white shadow border border-neutral-100 text-brand-300 px-3 py-1.5"
            >
              {showMore ? "Leer menos" : "Leer mas"}
            </Button>
          )}
        </div>
        <div className="col-span-1 hidden lg:flex items-start justify-end">
          <div className="w-full max-w-md border border-neutral-200 p-10 shadow-lg rounded-2xl space-y-7">
            <Button
              className="bg-neutral-200 text-neutral-950 text-xl 2xl:text-3xl w-full p-3 font-medium"
            >
              <p>Precios por persona</p>
            </Button>
            <div className="space-y-14 text-base 2xl:text-xl">
              <div className="space-between items-start text-neutral-800 border-b-2 border-neutral-200 pb-6">
                <p className="font-medium">Pack</p>
                <p className="font-light max-w-48">{packName}</p>
              </div>
              <div className="space-y-7">
                <Button
                  onClick={openModal}
                  icon={<GoDotFill />}
                  className="w-full p-3 gap-2"
                >
                  Contáctanos para reservar
                </Button>
                <a
                  href="https://wa.me/+34649047282"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                >
                  <Button
                    icon={<FaWhatsapp size={28} color="#25D366" />}
                    className="w-full text-neutral-950 bg-neutral-200 p-3 gap-2"
                  >
                    Contáctanos por Whatsapp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiWeekendHero;
