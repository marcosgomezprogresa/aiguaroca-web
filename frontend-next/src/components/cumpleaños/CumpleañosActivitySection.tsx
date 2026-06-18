"use client";

import ActivityCard from "@/components/cards/ActivityCard";
import { activitiesData, allActivitiesData } from "@/lib/data";

interface CumpleañosActivitySectionProps {
  showActivity: string[];
  priceLabel?: string;
}

const CumpleañosActivitySection: React.FC<CumpleañosActivitySectionProps> = ({
  showActivity,
  priceLabel,
}) => {
  const sectionActivities = [...allActivitiesData, ...activitiesData].filter(
    (activity, index, array) =>
      showActivity.includes(activity.title) &&
      array.findIndex((itm) => itm.title === activity.title) === index
  );

  return (
    <div className="custom-container py-20 space-y-16">
      <div className="font-medium sr-reveal">
        <h3 className=" text-xl md:text-4xl  text-neutral-900 mb-2">
          Actividades recomendadas
        </h3>
        <h3 className=" text-xl md:text-4xl  text-neutral-900">
          para Celebraciones
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sr-stagger">
        {sectionActivities.map((itm, idx) => (
          <ActivityCard
            key={idx}
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

export default CumpleañosActivitySection;
