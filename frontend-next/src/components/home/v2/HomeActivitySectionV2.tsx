import { activitiesData } from "@/lib/data";
import ShowcaseActivityCard from "./ShowcaseActivityCard";
import styles from "./HomeSectionsV2.module.css";

const HomeActivitySectionV2 = () => {
  const activities = activitiesData.filter(
    (item) => item.link !== "/actividades/rafting"
  );

  return (
    <section
      id="actividades"
      className={styles.sectionBlock}
      aria-labelledby="home-activities-heading"
    >
      <div className="custom-container">
        <header className="text-center">
          <p className={styles.sectionEyebrow}>Experiencias Aiguaroca</p>
          <h2 id="home-activities-heading" className={styles.sectionTitleCenter}>
            Actividades que definen tu día de aventura
          </h2>
          <p className={styles.sectionLeadCenter}>
            Elige tu experiencia. Cada actividad está diseñada para conectar con
            la naturaleza, superar retos y disfrutar al máximo en Valencia.
          </p>
        </header>

        <div className={`${styles.activityGrid} ${styles.activityGridFeatured}`}>
          {activities.map((item, idx) => (
            <ShowcaseActivityCard
              key={item.link}
              title={item.title}
              des={item.des}
              level={item.level}
              age={item.age}
              duration={item.duration}
              prize={item.prize}
              link={item.link}
              image={item.images[0]}
              priorityImage={idx < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeActivitySectionV2;
