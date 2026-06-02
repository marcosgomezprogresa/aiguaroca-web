"use client";

import React from "react";
import MultiActivityCard from "@/components/cards/MultiActivityCard";
import multiAct1 from "@/assets/images/multi-act-1.svg";
import multiAct2 from "@/assets/images/multi-act-2.svg";
import multiAct3 from "@/assets/images/multi-act-3.svg";
import multiAct4 from "@/assets/images/multi-act-4.svg";
import multiAct5 from "@/assets/images/multi-act-5.svg";

interface MultiAdventurePack {
  img: string;
  heading: string;
  prize: string;
}

interface MultiAdventureSectionProps {
  openModal: () => void;
}

const MultiAdventureSection: React.FC<MultiAdventureSectionProps> = ({
  openModal,
}) => {
  const packs: MultiAdventurePack[] = [
    {
      img: multiAct1.src,
      heading: "Rafting + Circuito Multiaventura",
      prize: "Por Persona 70€",
    },
    {
      img: multiAct2.src,
      heading: "Circuito Multiaventura + Paintball",
      prize: "Por Persona 65€",
    },
    {
      img: multiAct3.src,
      heading: "Kayak + Circuito Multiaventura",
      prize: "Por Persona 70€",
    },
    {
      img: multiAct4.src,
      heading: "Canoa-Raft + Circuito Multiaventura",
      prize: "Por Persona 70€",
    },
    {
      img: multiAct5.src,
      heading: "Kayak Travesia + Paintball",
      prize: "Por Persona 65€",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-20">
      {packs.map((pack, index) => (
        <MultiActivityCard
          key={index}
          img={pack.img}
          heading={pack.heading}
          prize={pack.prize}
          openModal={openModal}
          buttonText="Contáctanos para reservar"
          iconLabel="Dia entero"
        />
      ))}
    </div>
  );
};

export default MultiAdventureSection;
