"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiClock, HiSignal, HiUsers } from "react-icons/hi2";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch";

interface ActivityCardProps {
  inRecommend?: boolean;
  inHome?: boolean;
  img: string[];
  title: string;
  des: string;
  level: string;
  age: string;
  duration: string;
  prize: string;
  link: string;
  isKid?: boolean;
  priceLabel?: string;
  priorityImage?: boolean;
}

const getLevelConfig = (level: string) => {
  const normalized = level.toLowerCase();

  if (normalized.includes("avanzado")) {
    return { width: "w-[82%]", bar: "bg-brand-500", text: "text-brand-500" };
  }

  if (normalized.includes("medio")) {
    return { width: "w-[58%]", bar: "bg-brand-300", text: "text-brand-400" };
  }

  return { width: "w-[34%]", bar: "bg-brand-200", text: "text-brand-400" };
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  inRecommend = false,
  inHome = false,
  img,
  title,
  des,
  level,
  age,
  duration,
  prize,
  link,
  isKid = false,
  priceLabel = "Precio",
  priorityImage = false,
}) => {
  const { prefetchRoute } = useRoutePrefetch();
  const primaryImage = img[0];
  const isLocalAsset =
    typeof primaryImage === "string" &&
    primaryImage.startsWith("/api/v1/assets/");
  const titleLimit = inRecommend ? 32 : 48;
  const descriptionLimit = inRecommend ? 88 : 110;
  const displayTitle =
    title.length > titleLimit ? `${title.slice(0, titleLimit).trim()}…` : title;
  const displayDescription =
    des.length > descriptionLimit
      ? `${des.slice(0, descriptionLimit).trim()}…`
      : des;
  const levelConfig = getLevelConfig(level);

  return (
    <article className="group relative flex h-full min-h-[580px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_8px_30px_rgba(0,77,103,0.08)] ring-1 ring-neutral-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,192,252,0.18)] hover:ring-brand-200 sm:min-h-[600px] lg:min-h-[620px]">
      <Link
        href={link}
        className="absolute inset-0 z-20 rounded-[inherit]"
        aria-label={`Ver ${title}`}
        prefetch
        onMouseEnter={() => prefetchRoute(link, { immediate: true })}
        onFocus={() => prefetchRoute(link, { immediate: true })}
        onTouchStart={() => prefetchRoute(link, { immediate: true })}
      />

      {/* Imagen — altura fija */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-56 lg:h-60">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={`${title} - Actividad de aventura en Valencia | Aiguaroca`}
            fill
            sizes={
              inHome
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 560px, 960px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 640px, 1080px"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading={priorityImage ? "eager" : "lazy"}
            priority={priorityImage}
            quality={priorityImage ? 90 : 75}
            unoptimized={isLocalAsset}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-neutral-100" />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
          <span className="rounded-full bg-brand-300 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
            {isKid ? "Familias" : "Aventura"}
          </span>
          <span
            className={`rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide shadow-md backdrop-blur-sm ${levelConfig.text}`}
          >
            {level}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-5 pt-14">
          <h3 className="line-clamp-2 min-h-[3.25rem] text-[1.35rem] font-black leading-[1.15] tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:min-h-[3.5rem] sm:text-[1.5rem] lg:text-[1.65rem]">
            {displayTitle}
          </h3>
        </div>
      </div>

      {/* Acento de marca */}
      <div className="h-1 w-full shrink-0 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500" />

      {/* Cuerpo — alturas fijas por bloque */}
      <div className="flex flex-1 flex-col gap-4 p-4 sm:gap-4 sm:p-5 lg:p-5">
        <p className="line-clamp-2 h-10 shrink-0 text-sm leading-5 text-neutral-600 sm:h-11 sm:text-[15px] sm:leading-[1.375rem]">
          {displayDescription}
        </p>

        <div className="grid h-[5.25rem] shrink-0 grid-cols-3 gap-2 sm:gap-2.5">
          <MetaCell icon={HiSignal} label="Nivel" value={level} />
          <MetaCell icon={HiUsers} label="Edad" value={age} />
          <MetaCell icon={HiClock} label="Duración" value={duration} />
        </div>

        <div className="h-14 shrink-0 rounded-2xl bg-neutral-50 px-4 py-3 ring-1 ring-neutral-100">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Intensidad
            </span>
            <span className={`text-xs font-bold ${levelConfig.text}`}>{level}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white shadow-inner ring-1 ring-neutral-200/80">
            <div className={`h-full rounded-full ${levelConfig.bar} ${levelConfig.width}`} />
          </div>
        </div>

        <div className="mt-auto flex h-[4.75rem] shrink-0 items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 px-4 shadow-[0_8px_24px_rgba(0,123,182,0.35)] sm:px-5">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
              {priceLabel}
            </p>
            <p className="mt-0.5 flex items-baseline gap-1 font-black text-white">
              <span className="text-[1.75rem] leading-none sm:text-3xl">{prize}</span>
              <span className="text-lg font-bold opacity-90">€</span>
            </p>
          </div>

          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
          >
            <HiArrowRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </article>
  );
};

interface MetaCellProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const MetaCell = ({ icon: Icon, label, value }: MetaCellProps) => (
  <div className="flex h-full flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-50 px-1.5 py-2 text-center ring-1 ring-neutral-100 sm:px-2">
    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-brand-500 shadow-sm ring-1 ring-brand-100">
      <Icon className="h-4 w-4" aria-hidden />
    </span>
    <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 sm:text-[10px]">
      {label}
    </p>
    <p className="line-clamp-1 w-full text-[11px] font-semibold leading-tight text-neutral-900 sm:text-xs">
      {value}
    </p>
  </div>
);

export default ActivityCard;
