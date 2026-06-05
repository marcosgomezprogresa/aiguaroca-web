"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DeferredHeroVideoProps {
  className?: string;
}

const DeferredHeroVideo = ({ className = "" }: DeferredHeroVideoProps) => {
  const mediaClassName = `object-cover ${className}`.trim();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const loadVideo = () => setShouldLoadVideo(true);
    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadVideo, { timeout: 2500 });
        return;
      }
      loadVideo();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (shouldLoadVideo) {
    return (
      <video
        poster="/api/v1/assets/poster.png"
        src="/api/v1/videos/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{ pointerEvents: "none" }}
        className={`absolute inset-0 h-full w-full ${mediaClassName}`}
        preload="none"
      />
    );
  }

  return (
    <Image
      src="/api/v1/assets/poster.png"
      alt="Aiguaroca Aventura"
      fill
      priority
      quality={75}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={mediaClassName}
      unoptimized
    />
  );
};

export default DeferredHeroVideo;
