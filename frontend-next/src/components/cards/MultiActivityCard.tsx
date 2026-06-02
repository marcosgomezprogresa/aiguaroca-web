"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { FaClock } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface MultiActivityCardProps {
  img: string;
  heading: string;
  prize: string;
  icon?: React.ReactNode;
  iconLabel?: string;
  buttonText?: string;
  openModal: () => void;
}

const MultiActivityCard: React.FC<MultiActivityCardProps> = ({
  img,
  heading,
  prize,
  icon = <FaClock className="text-brand-300" />,
  iconLabel = "Dia entero",
  buttonText = "Contáctanos para reservar",
  openModal,
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Image */}
      <img
        loading="eager"
        decoding="async"
        src={img}
        alt={heading}
        className="w-full h-auto rounded-3xl object-cover"
      />

      {/* Duration Badge */}
      <div className="bg-brand-300/8 text-brand-500 rounded-xl w-fit align-center gap-2 py-1.5 px-3">
        {icon}
        <p>{iconLabel}</p>
      </div>

      {/* Heading */}
      <p className="text-neutral-900 text-xl lg:text-2xl font-medium">
        {heading}
      </p>

      {/* Price */}
      <p className="text-lg lg:text-xl font-semibold">{prize}</p>

      {/* Button */}
      <Button
        onClick={openModal}
        className="lg:text-lg gap-2 p-3"
        icon={<GoDotFill />}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default MultiActivityCard;
