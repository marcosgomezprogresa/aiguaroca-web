"use client";

import React, { ReactNode, useRef, useState } from "react";
import { HiMiniHome } from "react-icons/hi2";
import BreadCrumbs from "./BreadCrumbs";
import { IoShareOutline } from "react-icons/io5";
import Heading from "./Heading";
import Button from "./Button";
import { GoDotFill } from "react-icons/go";
import { FaSignal, FaWhatsapp } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
import { handleCopy } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import FAQ from "./FAQ";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ActivityHeroProps {
  openModal: () => void;
  img?: string;
  imgs?: Array<{ file: string; type: "img" | "vid" }>;
  type?: "img" | "vid";
  title: string | React.ReactNode;
  icon?: string;
  breadCrumsPaths: string[];
  heading: string | React.ReactNode;
  subHeading?: string;
  subTitle?: string;
  des: ReactNode;
  secondDes?: ReactNode;
  activityName: string;
  showSeeMore?: boolean;
  level?: string;
  age?: string;
  duration?: string;
  Prize?: string;
  include?: Array<{ icon: ReactNode; name: string }>;
  faq?: Array<{ ques: string; ans: string[] }>;
  isKid?: boolean;
  priceLabel?: string; // Custom label for the price (e.g., "Contactanos" instead of "Precio")
  beforeSubtitle?: ReactNode; // Content to display before the subtitle
}

const ActivityHero: React.FC<ActivityHeroProps> = ({
  openModal,
  img,
  imgs,
  type = "img",
  title,
  icon,
  breadCrumsPaths,
  heading,
  subHeading,
  des,
  secondDes = null,
  activityName,
  showSeeMore = false,
  level,
  age,
  duration,
  Prize,
  include,
  subTitle,
  faq,
  isKid = false,
  priceLabel = "Precio", // Default to "Precio"
  beforeSubtitle = null,
}) => {
  const [showMore, setShowMore] = useState(showSeeMore);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const activityPrize = isKid ? "30" : Prize;

  // Determine if single image mode (like Rafting) or multi-image mode (like Kayak)
  const isSingleImageMode = img && !imgs;
  const imageArray = imgs || (img ? [{ file: img, type: type as "img" | "vid" }] : []);
  const titleText = typeof title === "string" ? title : activityName;

  return (
    <div className="custom-container relative space-y-10 py-8 lg:py-12">
      {/* Single Image/Video Mode - Full Width with Title Overlay (for Rafting page) */}
      {isSingleImageMode && (
        <>
          {type === "vid" ? (
            <div className="relative h-[45dvh] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 lg:h-[80dvh] 2xl:h-[700px]">
              <video
                src={img}
                preload="none"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                style={{ pointerEvents: "none" }}
                onClick={(e) => e.preventDefault()}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="align-center relative z-10 h-full w-full items-end gap-3 px-5 pb-6 text-3xl font-black text-white lg:gap-5 lg:px-10 lg:pb-10 lg:text-6xl">
                {icon && (
                  <Image
                    src={icon}
                    alt="icon"
                    width={80}
                    height={80}
                    priority
                    className="w-10 lg:w-20 h-10 lg:h-20 flex-none"
                  />
                )}
                <p>{title}</p>
              </div>
            </div>
          ) : (
            <div className="relative h-[45dvh] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 lg:h-[80dvh] 2xl:h-[700px]">
              <Image
                src={img}
                alt={typeof title === "string" ? title : activityName}
                fill
                priority
                quality={70}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="align-center relative z-10 h-full w-full items-end gap-3 px-5 pb-6 text-3xl font-black text-white lg:gap-5 lg:px-10 lg:pb-10 lg:text-6xl">
                {icon && (
                  <Image
                    src={icon}
                    alt="icon"
                    width={80}
                    height={80}
                    priority
                    className="w-10 lg:w-20 h-10 lg:h-20 flex-none"
                  />
                )}
                <p>{title}</p>
              </div>
            </div>
          )}
        </>
      )}

      {/* Multi-Image Mode - Grid Layout (for Kayak and other activity pages) */}
      {!isSingleImageMode && (
        <>
          {/* Desktop Gallery - Grid Layout */}
          <div className="relative hidden h-[50dvh] w-full overflow-hidden rounded-[2rem] md:grid grid-cols-12 gap-2 lg:h-[85dvh] lg:gap-5 2xl:h-[550px]">
        {imageArray[0]?.type === "vid" ? (
          <div className="col-span-12 lg:col-span-8 h-full rounded-xl lg:rounded-3xl w-full">
            <video
              src={imageArray[0].file}
              preload="none"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              style={{ pointerEvents: "none" }}
              onClick={(e) => e.preventDefault()}
              className="h-full object-cover rounded-xl lg:rounded-3xl"
            />
          </div>
        ) : (
          <div className="col-span-12 lg:col-span-8 h-full rounded-xl lg:rounded-3xl w-full overflow-hidden">
            <Image
              src={imageArray[0].file}
              alt={`${activityName} - imagen principal`}
              fill
              priority
              quality={70}
              sizes="(max-width: 1024px) 100vw, 67vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="col-span-12 grid grid-cols-2 gap-2 lg:col-span-4 lg:grid-cols-none lg:grid-rows-2 lg:gap-5">
          {imageArray[1] && (
            <Image
              loading="lazy"
              src={imageArray[1].file}
              alt={`${activityName} - imagen secundaria`}
              width={560}
              height={360}
              quality={50}
              className="h-full object-cover rounded-xl lg:rounded-3xl"
            />
          )}
          {imageArray[2] && (
            <Image
              loading="lazy"
              src={imageArray[2].file}
              alt={`${activityName} - detalle`}
              width={560}
              height={360}
              quality={50}
              className="h-full object-cover rounded-xl lg:rounded-3xl"
            />
          )}
        </div>
      </div>

          {/* Mobile Gallery - Swiper */}
          <div className="relative h-[50dvh] w-full overflow-hidden rounded-[2rem] md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            type: "custom",
            renderCustom: (_swiper: SwiperType, current: number, total: number) => {
              return `<span class="bg-white w-min text-xs opacity-80 px-2 py-1 rounded-md">${current} of ${total}</span>`;
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper relative group"
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
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
          {imageArray.map((item, idx) => (
            <SwiperSlide key={idx}>
              {item.type === "vid" ? (
                <video
                  src={item.file}
                  preload="none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  style={{ pointerEvents: "none" }}
                  onClick={(e) => e.preventDefault()}
                  className="h-full object-cover rounded-xl lg:rounded-3xl"
                />
              ) : (
                <Image
                  loading={idx === 0 ? "eager" : "lazy"}
                  src={item.file}
                  alt={`${titleText} - imagen ${idx + 1}`}
                  width={720}
                  height={480}
                  quality={idx === 0 ? 70 : 50}
                  className="h-full object-cover rounded-xl lg:rounded-3xl"
                />
              )}
            </SwiperSlide>
          ))}
          <div className={"pagination-container bg-white"}></div>
        </Swiper>
          </div>
        </>
      )}

      {/* Breadcrumbs and Share */}
      <div className="space-between gap-5 rounded-3xl border border-neutral-100 bg-white p-4 shadow-sm">
        <BreadCrumbs
          className="text-neutral-900 font-medium text-xs lg:text-lg"
          startIcon={<HiMiniHome />}
          pages={breadCrumsPaths}
        />
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              handleCopy(window.location.href);
            }
          }}
          className="text-neutral-800 text-base lg:text-xl align-center gap-2 lg:gap-5 cursor-pointer"
        >
          <IoShareOutline />
          <p className="underline">Compartir</p>
        </button>
      </div>

      {/* Activity Details (Level, Age, Duration) */}
      {(level || age || duration) && (
        <div className="grid gap-3 text-sm lg:grid-cols-3 lg:text-lg sr-stagger">
          {level && (
            <div className="align-center gap-4 rounded-2xl bg-brand-100 px-4 py-3">
              <FaSignal className="text-brand-500" />
              <div className="align-center gap-4">
                <p className="font-semibold">Nivel</p>
                <div className="relative w-20 h-2 rounded-full bg-white ring-1 ring-black/10">
                  <div className="absolute top-0 w-[55%] h-full bg-brand-300 rounded-full" />
                </div>
                <p className="text-neutral-800 text-nowrap">{level}</p>
              </div>
            </div>
          )}
          {age && (
            <div className="align-center gap-4 rounded-2xl bg-brand-100 px-4 py-3">
              <RiUser3Fill className="text-brand-500" />
              <div className="align-center gap-4">
                <p className="font-semibold">Edad</p>
                <p className="text-neutral-800 text-nowrap">{age}</p>
              </div>
            </div>
          )}
          {duration && (
            <div className="w-full rounded-2xl bg-brand-100 px-4 py-3">
              <div className="align-center gap-4">
                <BsClockFill className="text-brand-500" />
                <div className="align-center gap-4">
                  <p className="font-semibold">Duracion</p>
                  <p className="text-neutral-800">{duration}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sr-reveal">
        <div className="col-span-2 space-y-8 lg:text-lg max-w-5xl">
          {subHeading && (
            <p className="font-medium text-brand-300">{subHeading}</p>
          )}
          {typeof heading === 'string' ? (
            <Heading className="font-medium" text={heading} />
          ) : (
            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 leading-tight">
              {heading}
            </div>
          )}

          {/* FAQ Section */}
          {faq && faq.length > 0 && (
            <div className="space-y-8 w-full max-w-xl">
              <p className="font-medium text-2xl lg:text-4xl">
                Información sobre la actividad
              </p>
              <FAQ data={faq} />
            </div>
          )}

          {/* Content before subtitle */}
          {beforeSubtitle && (
            <div className="pt-5 w-full">
              {beforeSubtitle}
            </div>
          )}

          {/* Activity Description */}
          <div className="space-y-5 pt-5 w-full">
            {subTitle && <h2 className="text-brand-300 font-medium">{subTitle}</h2>}
            <p className="text-xl lg:text-3xl font-medium text-neutral-900">
              {title}
            </p>
            {des}
            {!showMore && secondDes}
          </div>

          {showSeeMore && (
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-white shadow border border-neutral-100 text-brand-300 px-3 py-1.5"
            >
              {!showMore ? "Leer menos" : "Leer mas"}
            </Button>
          )}
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-between border-t border-neutral-100 bg-white/95 p-5 text-black shadow-2xl backdrop-blur lg:hidden">
          <p className="text-xl font-black">{priceLabel} {activityPrize}</p>
          <Button
            icon={<GoDotFill />}
            onClick={openModal}
            className="w-fit p-3 gap-2"
          >
            Reservar
          </Button>
        </div>

        {/* Desktop Sidebar */}
        <div className="col-span-1 hidden lg:flex items-start justify-end">
          <div className="sticky top-8 w-full max-w-md space-y-7 rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-2xl shadow-black/10">
            <Button className="bg-brand-300 text-neutral-950 text-xl 2xl:text-3xl w-full p-4 font-black">
              <p>{priceLabel} {activityPrize}</p>
            </Button>
            <div className="space-y-14 text-base 2xl:text-xl">
              <div className="space-between items-start text-neutral-800 border-b-2 border-neutral-200 pb-6">
                <p className="font-medium">Actividad</p>
                <p className="font-light max-w-48">{activityName}</p>
              </div>
              <div className="space-y-7">
                <Button
                  icon={<GoDotFill />}
                  onClick={openModal}
                  className="w-full p-4 gap-2"
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
                    className="w-full text-neutral-950 bg-neutral-100 p-4 gap-2"
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

export default ActivityHero;
