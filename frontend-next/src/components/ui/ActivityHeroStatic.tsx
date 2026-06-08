import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniHome } from "react-icons/hi2";
import FAQ from "./FAQ";
import ActivityHeroTop from "./ActivityHeroTop";
import ReadMoreBlock from "./ReadMoreBlock";
import ActivityBookingPanel from "./ActivityBookingPanel";
import { getActivityBookingHref } from "@/lib/booking";
import styles from "./ActivityDetail.module.css";

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

function getIntensityClass(level?: string) {
  const normalized = (level ?? "").toLowerCase();
  if (normalized.includes("avanzado") || normalized.includes("experto")) {
    return styles.intensityHigh;
  }
  if (normalized.includes("medio") || normalized.includes("adaptable")) {
    return styles.intensityMid;
  }
  return styles.intensityLow;
}

function getHeroTitle(title: string | ReactNode) {
  if (typeof title === "string") return title.trim();
  return null;
}

function getHeroSubtitle(
  subHeading: string | undefined,
  heading: string | ReactNode,
  title: string | ReactNode
) {
  if (subHeading) return subHeading;
  if (typeof heading === "string") {
    const titleStr = typeof title === "string" ? title.trim() : "";
    if (heading.trim() !== titleStr) return heading.trim();
  }
  return null;
}

const ActivityHeroStatic = ({
  img,
  imgs,
  type = "img",
  title,
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
  const imageArray = imgs || (img ? [{ file: img, type }] : []);
  const primaryMedia = imageArray[0];
  const secondaryMedia = imageArray.slice(1);
  const heroTitle = getHeroTitle(title) ?? activityName;
  const heroSubtitle = getHeroSubtitle(subHeading, heading, title);
  const isLocalAsset = (src: string) => src.startsWith("/api/v1/assets/");
  const rawPrice = isKid ? "30" : Prize;
  const displayPrice = rawPrice?.replace(/€/g, "").trim();
  const pricePrefix = priceLabel === "Precio" ? "Desde" : priceLabel;
  const bookingHref = getActivityBookingHref(activityName);

  return (
    <>
      <section className={styles.hero} aria-label={activityName}>
        <div className={styles.heroMedia}>
          {primaryMedia?.type === "vid" ? (
            <video
              src={primaryMedia.file}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={styles.heroVideo}
              aria-hidden
            />
          ) : primaryMedia ? (
            <Image
              src={primaryMedia.file}
              alt={heroTitle}
              fill
              priority
              sizes="100vw"
              quality={95}
              className={styles.heroImage}
              unoptimized={isLocalAsset(primaryMedia.file)}
            />
          ) : null}
        </div>

        <div className={styles.heroOverlay} aria-hidden />

        <ActivityHeroTop
          topClassName={styles.heroTop}
          breadcrumbClassName={styles.heroBreadcrumbs}
          shareClassName={styles.heroShare}
          startIcon={<HiMiniHome className="text-white/80" />}
          pages={breadCrumsPaths}
        />

        <div className={styles.heroContent}>
          {subHeading && (
            <p className={styles.heroEyebrow}>{subHeading}</p>
          )}
          <h1 className={styles.heroTitle}>{heroTitle}</h1>
          {heroSubtitle && (
            <p className={styles.heroSubtitle}>{heroSubtitle}</p>
          )}
          <div className={styles.heroActions}>
            <Link
              href={bookingHref}
              className={styles.heroCta}
              prefetch
            >
              Reservar
              {displayPrice ? ` · ${pricePrefix} ${displayPrice}` : ""}
            </Link>
            <Link
              href="https://wa.me/34649047282"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {(level || age || duration || Prize) && (
        <section className={styles.stats} aria-label="Datos de la actividad">
          <div className="custom-container">
            <div className={styles.statsGrid}>
              {level && (
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Nivel</span>
                  <span className={styles.statValue}>{level}</span>
                  <div className={styles.intensityTrack}>
                    <div
                      className={`${styles.intensityBar} ${getIntensityClass(level)}`}
                    />
                  </div>
                </div>
              )}
              {age && (
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Edad</span>
                  <span className={styles.statValue}>{age}</span>
                </div>
              )}
              {duration && (
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Duración</span>
                  <span className={styles.statValue}>{duration}</span>
                </div>
              )}
              {Prize && (
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>
                    {priceLabel === "Precio" ? "Desde" : priceLabel}
                  </span>
                  <span className={styles.statPrice}>{Prize}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {secondaryMedia.length > 0 && (
        <section className={styles.gallery} aria-label="Galería">
          <div className="custom-container">
            <div className={styles.galleryGrid}>
              {secondaryMedia.map((item, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <Image
                    src={item.file}
                    alt={`${activityName} — imagen ${idx + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.galleryImage}
                    loading="lazy"
                    quality={90}
                    unoptimized={isLocalAsset(item.file)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className={styles.body}>
        <div className="custom-container">
          <div className={styles.bodyInner}>
            {include && include.length > 0 && (
              <section aria-label="Material incluido">
                <p className={styles.sectionEyebrow}>Incluido</p>
                <h2 className={styles.sectionHeading}>Material técnico incluido</h2>
                <div className={styles.includeGrid}>
                  {include.map((item, idx) => (
                    <div key={idx} className={styles.includeItem}>
                      <span className={styles.includeIcon}>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {beforeSubtitle && (
              <section className={styles.beforeSubtitle}>{beforeSubtitle}</section>
            )}
          </div>

          {faq && faq.length > 0 && (
            <section className={styles.infoSection} aria-label="Información y reserva">
              <div className={styles.infoGrid}>
                <div className={styles.faqColumn}>
                  <h2 className={styles.faqTitle}>Información sobre la actividad</h2>
                  <FAQ data={faq} />
                </div>
                <ActivityBookingPanel
                  activityName={activityName}
                  displayPrice={displayPrice}
                  pricePrefix={pricePrefix}
                  bookingHref={bookingHref}
                />
              </div>
            </section>
          )}

          <div className={styles.bodyInner}>
            <section aria-label="Descripción">
              {subTitle && (
                <p className={styles.sectionEyebrow}>{subTitle}</p>
              )}
              {typeof title === "string" && subTitle && (
                <h2 className={styles.sectionHeading}>{title}</h2>
              )}
              <div className={styles.descriptionBlock}>
                {des}
                {showSeeMore ? (
                  <ReadMoreBlock initialCollapsed={showSeeMore}>
                    {secondDes}
                  </ReadMoreBlock>
                ) : (
                  secondDes
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityHeroStatic;
