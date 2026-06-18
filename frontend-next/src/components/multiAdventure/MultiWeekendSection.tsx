"use client";

import React from "react";
import MultiActivityCard from "@/components/cards/MultiActivityCard";
import { TiHome } from "react-icons/ti";
import weekAct2 from "@/assets/images/week-act-2.svg";
import weekAct3 from "@/assets/images/week-act-3.svg";
import weekAct4 from "@/assets/images/week-act-4.svg";

interface MultiWeekendPack {
  img: string;
  label: string;
  heading: string;
  prize: string;
}

interface MultiWeekendSectionProps {
  openModal: () => void;
}

const MultiWeekendSection: React.FC<MultiWeekendSectionProps> = ({
  openModal,
}) => {
  const packs: MultiWeekendPack[] = [
    {
      img: "/api/v1/assets/samena/img-1.png",
      label: "1 Noche",
      heading: "1 Noche + 2 Actividades",
      prize: "Desde 100€",
    },
    {
      img: weekAct2.src,
      label: "2 Noches",
      heading: "2 Noches + 2 Actividades",
      prize: "Desde 125€",
    },
    {
      img: weekAct3.src,
      label: "2 Noches",
      heading: "2 Noches + 3 Actividades",
      prize: "Desde 165€",
    },
    {
      img: weekAct4.src,
      label: "2 Noches",
      heading: "2 Noches + 4 Actividades",
      prize: "Desde 180€",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-20 sr-stagger">
      {packs.map((pack, index) => (
        <MultiActivityCard
          key={index}
          img={pack.img}
          heading={pack.heading}
          prize={pack.prize}
          icon={<TiHome className="text-xl" />}
          iconLabel={pack.label}
          buttonText="Contactanos para mas info"
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default MultiWeekendSection;
