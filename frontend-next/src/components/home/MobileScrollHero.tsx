"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import DeferredHeroVideo from "./DeferredHeroVideo";
import HomeHeroText from "./HomeHeroText";

const MobileScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoHeight = useTransform(scrollYProgress, [0, 0.55], ["46vh", "100vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.4], [16, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.75], [0, -220]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.7], [1, 0]);

  if (prefersReducedMotion) {
    return (
      <div className="custom-container flex flex-col-reverse gap-6 py-4">
        <div className="relative h-48 w-full overflow-hidden rounded-2xl">
          <DeferredHeroVideo />
        </div>
        <HomeHeroText align="center" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[175vh] sm:hidden">
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-white">
        <motion.div
          className="absolute inset-x-0 top-0 z-20 overflow-hidden shadow-lg"
          style={{
            height: videoHeight,
            borderBottomLeftRadius: videoRadius,
            borderBottomRightRadius: videoRadius,
          }}
        >
          <DeferredHeroVideo className="rounded-none" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 z-10 px-5"
          style={{
            top: "46vh",
            y: textY,
            opacity: textOpacity,
          }}
        >
          <HomeHeroText align="center" />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileScrollHero;
