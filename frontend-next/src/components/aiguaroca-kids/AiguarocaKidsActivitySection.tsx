"use client";

import ActivityCard from "@/components/cards/ActivityCard";
import { activitiesData } from "@/lib/data";

interface AiguarocaKidsActivitySectionProps {
  showActivity: string[];
  priceLabel?: string; // Optional custom label for price
}

const AiguarocaKidsActivitySection: React.FC<AiguarocaKidsActivitySectionProps> = ({
  showActivity,
  priceLabel,
}) => {
  // Create a copy of activities and set special pricing for kids
  const filteredActivities = activitiesData
    .filter((itm) => showActivity.includes(itm.title))
    .map((itm) => ({ ...itm, prize: "30" }));

  return (
    <div className="custom-container py-20 space-y-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 lg:text-start items-center">
        <div className="font-medium flex flex-col items-center lg:items-start gap-2">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
            Actividades recomendadas
          </h3>
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
            para los mas peques
          </h3>
        </div>
        <p className="text-brand-300 text-center text-base">
          PRECIOS PARA NIÑOS
          <br /> HASTA 14 AÑOS
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredActivities.map((itm, idx) => (
          <ActivityCard
            key={idx}
            isKid={true}
            title={itm.title}
            des={itm.des}
            level={itm.level}
            age={itm.age}
            duration={itm.duration}
            prize={itm.prize}
            link={itm.link}
            img={itm.images}
            priceLabel={priceLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default AiguarocaKidsActivitySection;
