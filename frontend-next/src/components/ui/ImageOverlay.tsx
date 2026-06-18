"use client";

import React from "react";
import Button from "./Button";
import { GoDotFill } from "react-icons/go";

interface ImageOverlayProps {
  img: string;
  title: string | React.ReactNode;
  para1: string | React.ReactNode;
  para2: string | React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  img,
  title,
  para1,
  para2,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="custom-container relative h-[60dvh] lg:h-[70dvh] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden my-20"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 custom-container text-center space-y-6 lg:space-y-10 sr-reveal">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          {title}
        </h2>
        <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
          {para1}
          <br />
          {para2}
        </p>
        <Button
          onClick={onButtonClick}
          icon={<GoDotFill />}
          className="bg-white text-black text-lg lg:text-xl p-3 lg:p-4 gap-2 rounded-xl lg:rounded-2xl inline-flex"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ImageOverlay;
