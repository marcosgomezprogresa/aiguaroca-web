"use client";

import Link from "next/link";
import Image from "next/image";
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
    return { width: "w-[82%]", bar: "bg-brand-500", text: "text-brand-600" };
  }

  if (normalized.includes("medio")) {
    return { width: "w-[58%]", bar: "bg-brand-400", text: "text-brand-500" };
  }

  return { width: "w-[34%]", bar: "bg-brand-300", text: "text-brand-500" };
};

function formatSeoTitle(title: string) {
  const clean = title.trim().replace(/\s+/g, " ");
  if (/venta del moro/i.test(clean)) return clean;
  return `${clean} en Venta del Moro`;
}

function formatMetaValue(value: string) {
  return value.trim().replace(/\s{2,}/g, " ");
}

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
  priceLabel = "Desde",
  priorityImage = false,
}) => {
  const { prefetchRoute } = useRoutePrefetch();
  const primaryImage = img[0];
  const isLocalAsset =
    typeof primaryImage === "string" &&
    primaryImage.startsWith("/api/v1/assets/");

  const seoTitle = formatSeoTitle(title);
  const descriptionLimit = inRecommend ? 96 : 120;
  const displayDescription =
    des.length > descriptionLimit
      ? `${des.slice(0, descriptionLimit).trim()}…`
      : des;

  const levelConfig = getLevelConfig(level);

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,77,103,0.1)]">
      <Link
        href={link}
        className="absolute inset-0 z-20 rounded-[inherit]"
        aria-label={`Ver ${seoTitle}`}
        prefetch
        onMouseEnter={() => prefetchRoute(link, { immediate: true })}
        onFocus={() => prefetchRoute(link, { immediate: true })}
        onTouchStart={() => prefetchRoute(link, { immediate: true })}
      />

      <div
        className={`relative w-full shrink-0 overflow-hidden bg-neutral-100 ${
          inRecommend ? "h-56 sm:h-60" : "h-60 sm:h-64 lg:h-[17.5rem]"
        }`}
      >
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={`${seoTitle} - Actividad de aventura en Valencia | Aiguaroca`}
            fill
            sizes={
              inHome
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 560px, 960px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 640px, 1080px"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading={priorityImage ? "eager" : "lazy"}
            priority={priorityImage}
            quality={priorityImage ? 90 : 75}
            unoptimized={isLocalAsset}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-neutral-100" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="space-y-2">
          {isKid && (
            <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 ring-1 ring-brand-100">
              Familias
            </span>
          )}

          <h2
            className="truncate text-lg font-bold leading-tight tracking-tight text-neutral-900 sm:text-xl"
            title={seoTitle}
          >
            {seoTitle}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MetaItem label="Nivel" value={level} />
          <MetaItem label="Edad" value={formatMetaValue(age)} />
          <MetaItem label="Duración" value={formatMetaValue(duration)} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
            <span>Intensidad</span>
            <span className={`normal-case tracking-normal ${levelConfig.text}`}>
              {level}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <div
              className={`h-full rounded-full transition-all duration-500 ${levelConfig.bar} ${levelConfig.width}`}
            />
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500">
          {displayDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-neutral-100 pt-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              {priceLabel}
            </p>
            <p className="mt-0.5 flex items-baseline gap-0.5 text-neutral-900">
              <span className="text-2xl font-bold leading-none">{prize}</span>
              <span className="text-base font-semibold text-neutral-500">€</span>
            </p>
          </div>

          <span
            aria-hidden
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors duration-300 group-hover:text-brand-500"
          >
            Ver actividad
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

interface MetaItemProps {
  label: string;
  value: string;
}

const MetaItem = ({ label, value }: MetaItemProps) => (
  <div className="rounded-xl bg-neutral-50 px-2 py-2.5 text-center ring-1 ring-neutral-100/80">
    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
      {label}
    </p>
    <p className="mt-1 line-clamp-1 text-xs font-semibold text-neutral-800">
      {value}
    </p>
  </div>
);

export default ActivityCard;
