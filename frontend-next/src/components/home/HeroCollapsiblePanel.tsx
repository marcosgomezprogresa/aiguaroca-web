"use client";

import { useEffect, useId, useState } from "react";
import HomeHeroText from "./HomeHeroText";
import styles from "./HeroCollapsiblePanel.module.css";

interface HeroCollapsiblePanelProps {
  align?: "center" | "left";
}

const HeroCollapsiblePanel = ({ align = "center" }: HeroCollapsiblePanelProps) => {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setOpen(true);
    }
  }, []);

  return (
    <div className={styles.panel}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.triggerLabel}>
          <span className={styles.triggerEyebrow}>Multiaventura Valencia</span>
          <span className={styles.triggerTitle}>
            {open ? "Ocultar información" : "Descubre la experiencia"}
          </span>
        </span>
        <span
          className={`${styles.iconWrap} ${open ? styles.iconOpen : ""}`}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5.5L7 9.5L11 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={contentId}
        className={`${styles.content} ${open ? styles.contentOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.contentInner}>
          <div className={styles.contentBody}>
            <HomeHeroText align={align} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCollapsiblePanel;
