"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSignal } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch";
import { getActivityBookingHref } from "@/lib/booking";
import styles from "./ActivityCard.module.css";

interface ActivityCardProps {
  inRecommend?: boolean;
  inHome?: boolean;
  img: string[];
  title: string;
  des?: string;
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
    return { width: "w-[82%]", bar: "bg-brand-500" };
  }

  if (normalized.includes("medio")) {
    return { width: "w-[58%]", bar: "bg-brand-400" };
  }

  return { width: "w-[34%]", bar: "bg-brand-300" };
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
  des = "",
  level,
  age,
  duration,
  prize,
  link,
  isKid = false,
  priorityImage = false,
}) => {
  const { prefetchRoute } = useRoutePrefetch();
  const [priceTapped, setPriceTapped] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const primaryImage = img[0];
  const isLocalAsset =
    typeof primaryImage === "string" &&
    primaryImage.startsWith("/api/v1/assets/");

  const displayTitle = inHome ? title.trim() : formatSeoTitle(title);
  const bookingHref = getActivityBookingHref(title);
  const levelConfig = getLevelConfig(level);
  const formattedAge = formatMetaValue(age);
  const formattedDuration = formatMetaValue(duration);

  const prefetchActivity = () => prefetchRoute(link, { immediate: true });
  const prefetchBooking = () => prefetchRoute(bookingHref, { immediate: true });

  const handlePriceTouchStart = () => {
    prefetchBooking();
    setPriceTapped(true);
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    tapTimerRef.current = setTimeout(() => setPriceTapped(false), 480);
  };

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,77,103,0.12)]">
      <Link
        href={link}
        className="relative block w-full shrink-0 overflow-hidden bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
        aria-label={`Ver detalles de ${displayTitle}`}
        prefetch
        onMouseEnter={prefetchActivity}
        onFocus={prefetchActivity}
        onTouchStart={prefetchActivity}
      >
        <div
          className={`relative w-full overflow-hidden ${
            inRecommend ? "aspect-[4/3]" : "aspect-[5/4] sm:aspect-[4/3]"
          }`}
        >
          {primaryImage ? (
            <Image
              src={primaryImage}
              alt={`${displayTitle} - Actividad de aventura en Valencia | Aiguaroca`}
              fill
              sizes={
                inHome
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  : inRecommend
                    ? "(max-width: 640px) 85vw, 360px"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              }
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading={priorityImage ? "eager" : "lazy"}
              priority={priorityImage}
              quality={95}
              unoptimized={isLocalAsset}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-neutral-100" />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-4">
        <div className="space-y-2">
          {isKid && (
            <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 ring-1 ring-brand-100">
              Familias
            </span>
          )}

          <h2 className="min-w-0" title={displayTitle}>
            <Link
              href={link}
              className="block text-lg font-bold leading-tight tracking-tight text-neutral-900 transition-colors duration-300 hover:text-brand-600 focus-visible:outline-none focus-visible:text-brand-600 sm:text-xl"
              prefetch
              onMouseEnter={prefetchActivity}
              onFocus={prefetchActivity}
            >
              {displayTitle}
            </Link>
          </h2>
        </div>

        {!inHome && des && (
          <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500">
            {des}
          </p>
        )}

        <div className={styles.metaSection}>
          <div className={styles.metaRow}>
            <FaSignal className={styles.metaIcon} aria-hidden />
            <span className={styles.metaLabel}>Nivel</span>
            <div className={styles.levelTrack}>
              <div
                className={`${styles.levelFill} ${levelConfig.bar} ${levelConfig.width}`}
              />
            </div>
            <span className={styles.metaValue}>{level}</span>
          </div>

          <div className={styles.metaRow}>
            <RiUser3Fill className={styles.metaIcon} aria-hidden />
            <span className={styles.metaLabel}>Edad</span>
            <span className={styles.metaValue}>{formattedAge}</span>
          </div>

          <div className={styles.metaFooter}>
            <div className={`${styles.metaRow} ${styles.metaRowInline}`}>
              <BsClockFill className={styles.metaIcon} aria-hidden />
              <span className={styles.metaLabel}>Duración</span>
              <span className={styles.metaValue}>{formattedDuration}</span>
            </div>

            <Link
              href={bookingHref}
              className={`${styles.priceBadge} ${priceTapped ? styles.priceBadgeTapped : ""}`}
              aria-label={`Reservar ${title.trim()} desde ${prize} euros`}
              prefetch
              onMouseEnter={prefetchBooking}
              onFocus={prefetchBooking}
              onTouchStart={handlePriceTouchStart}
            >
              <span className={styles.priceAmount}>{prize}</span>
              <span className={styles.priceCurrency}>€</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ActivityCard;
