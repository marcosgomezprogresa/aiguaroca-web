"use client";

import ActivityCard from "@/components/cards/ActivityCard";
import { activitiesData, allActivitiesData } from "@/lib/data";

interface ActivitySectionProps {
  showActivity: string[];
  priceLabel?: string; // Optional custom label for price
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ 
  showActivity, 
  priceLabel 
}) => {
  const sectionActivities = [...allActivitiesData, ...activitiesData].filter(
    (activity, index, array) =>
      showActivity.includes(activity.title) &&
      array.findIndex((itm) => itm.title === activity.title) === index
  );

  return (
    <div className="custom-container py-20 space-y-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
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

export default ActivitySection;
