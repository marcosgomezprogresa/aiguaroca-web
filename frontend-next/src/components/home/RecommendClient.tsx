"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ShowcaseActivityCard from "@/components/home/v2/ShowcaseActivityCard";
import homeStyles from "@/components/home/v2/HomeSectionsV2.module.css";
import { activitiesData } from "@/lib/data";
import styles from "./Recommend.module.css";

interface RecommendClientProps {
  excludeLink?: string;
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const RecommendClient = ({ excludeLink }: RecommendClientProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const activities = activitiesData
    .filter((item) => item.link !== "/actividades/rafting")
    .filter((item) => !excludeLink || item.link !== excludeLink);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track || activities.length === 0) return;

    const slides = Array.from(track.children) as HTMLElement[];
    if (slides.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    slides.forEach((slide, index) => {
      slide.classList.toggle(styles.slideActive, index === closestIndex);
    });

    setActiveIndex(closestIndex);
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, [activities.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();

    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  if (activities.length === 0) return null;

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;

    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    if (isMobile) {
      const scrollLeft =
        slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
      return;
    }

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const scrollByDirection = (direction: -1 | 1) => {
    const nextIndex = Math.min(
      activities.length - 1,
      Math.max(0, activeIndex + direction)
    );
    scrollToIndex(nextIndex);
  };

  const progress =
    activities.length <= 1
      ? 100
      : ((activeIndex + 1) / activities.length) * 100;

  return (
    <section
      className={styles.section}
      aria-labelledby="recommend-heading"
    >
      <div className="custom-container">
        <header className={styles.header}>
          <p className={homeStyles.sectionEyebrow}>Más experiencias</p>
          <h2 id="recommend-heading" className={homeStyles.sectionTitleCenter}>
            Recomendaciones top para ti
          </h2>
          <p className={homeStyles.sectionLeadCenter}>
            Actividades seleccionadas para completar el día con más agua, naturaleza
            y aventura en Venta del Moro.
          </p>
        </header>
      </div>

      <div className={styles.carouselShell}>
        <div className={styles.navRow}>
          <p className={styles.counter} aria-live="polite">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span className={styles.counterSep}>/</span>
            {String(activities.length).padStart(2, "0")}
          </p>

          <div className={styles.dots} role="tablist" aria-label="Posición del carrusel">
            {activities.map((item, index) => (
              <button
                key={item.link}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ir a ${item.title.trim()}`}
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>

          <div className={styles.navButtons}>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Actividad anterior"
              disabled={!canScrollPrev}
              onClick={() => scrollByDirection(-1)}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Actividad siguiente"
              disabled={!canScrollNext}
              onClick={() => scrollByDirection(1)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.fadeLeft} aria-hidden />
          <div className={styles.fadeRight} aria-hidden />

          <div
            ref={trackRef}
            className={`recommend-track ${styles.track}`}
            aria-label="Actividades recomendadas"
          >
            {activities.map((item, idx) => (
              <div
                key={item.link}
                className={`recommend-slide ${styles.slide}`}
              >
                <ShowcaseActivityCard
                  title={item.title}
                  des={item.des}
                  level={item.level}
                  age={item.age}
                  duration={item.duration}
                  prize={item.prize}
                  link={item.link}
                  image={item.images[0]}
                  priorityImage={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.progressTrack} aria-hidden>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        <p className={styles.scrollHint} aria-hidden>
          Desliza o usa las flechas para explorar
        </p>
      </div>
    </section>
  );
};

export default RecommendClient;
