import { ReactNode } from "react";
import Image from "next/image";
import { HiMiniHome } from "react-icons/hi2";
import { FaSignal } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
import Heading from "./Heading";
import FAQ from "./FAQ";
import BreadCrumbs from "./BreadCrumbs";
import ShareButton from "./ShareButton";
import ReadMoreBlock from "./ReadMoreBlock";
import ActivityBookingActions from "./ActivityBookingActions";

interface ActivityHeroStaticProps {
  img?: string;
  imgs?: Array<{ file: string; type: "img" | "vid" }>;
  type?: "img" | "vid";
  title: string | ReactNode;
  icon?: string;
  breadCrumsPaths: string[];
  heading: string | ReactNode;
  subHeading?: string;
  subTitle?: string;
  des: ReactNode;
  secondDes?: ReactNode;
  activityName: string;
  modalTitle: string;
  showSeeMore?: boolean;
  level?: string;
  age?: string;
  duration?: string;
  Prize?: string;
  include?: Array<{ icon: ReactNode; name: string }>;
  faq?: Array<{ ques: string; ans: string[] }>;
  isKid?: boolean;
  priceLabel?: string;
  beforeSubtitle?: ReactNode;
  modalVariant?: "default" | "activity";
}

const ActivityHeroStatic = ({
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
  modalTitle,
  showSeeMore = false,
  level,
  age,
  duration,
  Prize,
  include,
  subTitle,
  faq,
  isKid = false,
  priceLabel = "Precio",
  beforeSubtitle = null,
  modalVariant = "default",
}: ActivityHeroStaticProps) => {
  const isSingleImageMode = img && !imgs;
  const imageArray = imgs || (img ? [{ file: img, type }] : []);

  return (
    <div className="custom-container relative space-y-10 py-8 lg:py-12">
      {isSingleImageMode && (
        <div className="relative h-[45dvh] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 lg:h-[80dvh] 2xl:h-[700px]">
          {type === "vid" ? (
            <video
              src={img}
              preload="none"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={img}
              alt={typeof title === "string" ? title : activityName}
              fill
              priority
              quality={70}
              sizes="100vw"
              className="object-cover"
            />
          )}
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

      {!isSingleImageMode && (
        <div className="relative h-[50dvh] w-full overflow-hidden rounded-[2rem] md:grid md:grid-cols-12 md:gap-2 lg:h-[85dvh] lg:gap-5 2xl:h-[550px]">
          {imageArray[0]?.type === "vid" ? (
            <div className="h-full w-full rounded-xl lg:col-span-8 lg:rounded-3xl">
              <video
                src={imageArray[0].file}
                preload="none"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
              />
            </div>
          ) : (
            imageArray[0] && (
              <div className="relative h-full w-full overflow-hidden rounded-xl md:col-span-12 lg:col-span-8 lg:rounded-3xl">
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
            )
          )}
          <div className="hidden gap-2 md:col-span-12 md:grid md:grid-cols-2 lg:col-span-4 lg:grid-cols-none lg:grid-rows-2 lg:gap-5">
            {imageArray[1] && (
              <Image
                loading="lazy"
                src={imageArray[1].file}
                alt={`${activityName} - imagen secundaria`}
                width={560}
                height={360}
                quality={50}
                className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
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
                className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
              />
            )}
          </div>
        </div>
      )}

      <div className="space-between gap-5 rounded-3xl border border-neutral-100 bg-white p-4 shadow-sm">
        <BreadCrumbs
          className="text-neutral-900 font-medium text-xs lg:text-lg"
          startIcon={<HiMiniHome />}
          pages={breadCrumsPaths}
        />
        <ShareButton />
      </div>

      {(level || age || duration) && (
        <div className="grid gap-3 text-sm lg:grid-cols-3 lg:text-lg">
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

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-2 space-y-8 lg:text-lg max-w-5xl">
          {subHeading && <p className="font-medium text-brand-300">{subHeading}</p>}
          {typeof heading === "string" ? (
            <Heading className="font-medium" text={heading} />
          ) : (
            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 leading-tight">
              {heading}
            </div>
          )}

          {include && include.length > 0 && (
            <div className="space-y-4">
              <p className="text-brand-300 font-medium">Material técnico incluido</p>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                {include.map((item, idx) => (
                  <div key={idx} className="align-center w-fit gap-3 text-lg lg:text-2xl text-brand-500">
                    <div className="w-11 h-11 bg-brand-300/50 rounded-full overflow-hidden center">
                      {item.icon}
                    </div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {faq && faq.length > 0 && (
            <div className="space-y-8 w-full max-w-xl">
              <p className="font-medium text-2xl lg:text-4xl">Información sobre la actividad</p>
              <FAQ data={faq} />
            </div>
          )}

          {beforeSubtitle && <div className="pt-5 w-full">{beforeSubtitle}</div>}

          <div className="space-y-5 pt-5 w-full">
            {subTitle && <h2 className="text-brand-300 font-medium">{subTitle}</h2>}
            <p className="text-xl lg:text-3xl font-medium text-neutral-900">{title}</p>
            {des}
            {showSeeMore ? (
              <ReadMoreBlock initialCollapsed={showSeeMore}>{secondDes}</ReadMoreBlock>
            ) : (
              secondDes
            )}
          </div>
        </div>

        <ActivityBookingActions
          activityName={activityName}
          activityPrize={Prize}
          modalTitle={modalTitle}
          priceLabel={priceLabel}
          isKid={isKid}
          modalVariant={modalVariant}
        />
      </div>
    </div>
  );
};

export default ActivityHeroStatic;
