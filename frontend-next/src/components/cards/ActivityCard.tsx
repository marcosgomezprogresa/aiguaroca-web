"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch";
import { getActivityBookingHref } from "@/lib/booking";
import styles from "./ActivityCard.module.css";

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
  const [priceTapped, setPriceTapped] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const primaryImage = img[0];
  const isLocalAsset =
    typeof primaryImage === "string" &&
    primaryImage.startsWith("/api/v1/assets/");

  const seoTitle = formatSeoTitle(title);
  const bookingHref = getActivityBookingHref(title);
  const descriptionLimit = inRecommend ? 96 : 120;
  const displayDescription =
    des.length > descriptionLimit
      ? `${des.slice(0, descriptionLimit).trim()}…`
      : des;

  const levelConfig = getLevelConfig(level);

  const prefetchActivity = () => prefetchRoute(link, { immediate: true });
  const prefetchBooking = () => prefetchRoute(bookingHref, { immediate: true });

  const handlePriceTouchStart = () => {
    prefetchBooking();
    setPriceTapped(true);
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    tapTimerRef.current = setTimeout(() => setPriceTapped(false), 480);
  };

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,77,103,0.1)]">
      <Link
        href={link}
        className="relative block w-full shrink-0 overflow-hidden bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
        aria-label={`Ver detalles de ${seoTitle}`}
        prefetch
        onMouseEnter={prefetchActivity}
        onFocus={prefetchActivity}
        onTouchStart={prefetchActivity}
      >
        <div
          className={`relative w-full ${
            inRecommend ? "h-60 sm:h-64" : "h-64 sm:h-72 lg:h-[19rem]"
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
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="space-y-2">
          {isKid && (
            <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 ring-1 ring-brand-100">
              Familias
            </span>
          )}

          <h2 className="min-w-0" title={seoTitle}>
            <Link
              href={link}
              className="block truncate text-lg font-bold leading-tight tracking-tight text-neutral-900 transition-colors duration-300 hover:text-brand-600 focus-visible:outline-none focus-visible:text-brand-600 sm:text-xl"
              prefetch
              onMouseEnter={prefetchActivity}
              onFocus={prefetchActivity}
            >
              {seoTitle}
            </Link>
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

        <div className="mt-auto border-t border-neutral-100 pt-4">
          <Link
            href={bookingHref}
            className={`${styles.priceCta} ${priceTapped ? styles.priceTapped : ""}`}
            aria-label={`Reservar ${title.trim()} desde ${prize} euros`}
            prefetch
            onMouseEnter={prefetchBooking}
            onFocus={prefetchBooking}
            onTouchStart={handlePriceTouchStart}
          >
            <span className={styles.pulseRing} aria-hidden />
            <span className={styles.shine} aria-hidden />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              {priceLabel}
            </span>
            <span className={styles.priceRow}>
              <span className={styles.priceAmount}>{prize}</span>
              <span className={styles.priceCurrency}>€</span>
            </span>
            <span className={styles.reserveHint}>
              Reservar ahora
              <svg
                className={styles.reserveIcon}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
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
