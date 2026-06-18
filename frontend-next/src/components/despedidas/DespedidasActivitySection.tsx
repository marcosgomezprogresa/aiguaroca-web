"use client";

import ActivityCard from "@/components/cards/ActivityCard";
import { activitiesData, allActivitiesData } from "@/lib/data";

interface DespedidasActivitySectionProps {
  showActivity: string[];
  priceLabel?: string; // Optional custom label for price
}

const DespedidasActivitySection: React.FC<DespedidasActivitySectionProps> = ({
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
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-2">
          Actividades recomendadas
        </h3>
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
          para Despedidas
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

export default DespedidasActivitySection;
