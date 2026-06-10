import ShowcaseActivityCard from "@/components/home/v2/ShowcaseActivityCard";
import homeStyles from "@/components/home/v2/HomeSectionsV2.module.css";
import { activitiesData, allActivitiesData } from "@/lib/data";
import styles from "./ActivitySection.module.css";

interface ActivitySectionProps {
  showActivity: string[];
  priceLabel?: string;
}

const ActivitySection = ({
  showActivity,
  priceLabel = "Desde",
}: ActivitySectionProps) => {
  const sectionActivities = [...allActivitiesData, ...activitiesData].filter(
    (activity, index, array) =>
      showActivity.includes(activity.title) &&
      array.findIndex((itm) => itm.title === activity.title) === index
  );

  return (
    <section className={homeStyles.sectionBlock} aria-label="Actividades relacionadas">
      <div className="custom-container">
        <div className={styles.grid}>
          {sectionActivities.map((itm, idx) => (
            <ShowcaseActivityCard
              key={itm.link}
              title={itm.title}
              level={itm.level}
              age={itm.age}
              duration={itm.duration}
              prize={itm.prize}
              link={itm.link}
              image={itm.images[0]}
              priorityImage={idx < 2}
              priceLabel={priceLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
