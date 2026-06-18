import AudienceTile from "./AudienceTile";
import styles from "./HomeSectionsV2.module.css";

const AUDIENCE_TILES = [
  {
    name: "Aventura para empresas",
    link: "/empresas",
    image: "/api/v1/assets/grid/grid-4.png",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    name: "Aventura con niños",
    link: "/aiguaroca-kids",
    image: "/api/v1/assets/grid/grid-2.png",
    className: "md:col-span-4",
  },
  {
    name: "Aventura en familia",
    link: "/familias",
    image: "/api/v1/assets/grid/grid-1.png",
    className: "md:col-span-4",
  },
  {
    name: "Equipos deportivos",
    link: "/equipos-deportivos",
    image: "/api/v1/assets/grid/grid-3.png",
    className: "md:col-span-3",
  },
  {
    name: "Despedidas de solter@s",
    link: "/despedidas",
    image: "/api/v1/assets/grid/grid-6.png",
    className: "md:col-span-3",
  },
  {
    name: "Cumpleaños de aventura",
    link: "/cumpleanos",
    image: "/api/v1/assets/grid/grid-5.png",
    className: "md:col-span-3",
  },
  {
    name: "Grupos escolares",
    link: "/escolares",
    image: "/api/v1/assets/posters/escolares.png",
    className: "md:col-span-3",
  },
];

const HomeAudienceGalleryV2 = () => {
  return (
    <section
      className={styles.audienceSection}
      aria-labelledby="home-audience-heading"
    >
      <div className="custom-container">
        <header className="sr-reveal text-center">
          <p className={`${styles.sectionEyebrow} ${styles.sectionEyebrowLight}`}>
            Para cada grupo
          </p>
          <h2
            id="home-audience-heading"
            className={`${styles.sectionTitleCenter} ${styles.sectionTitleLight}`}
          >
            Aventura para todos los públicos
          </h2>
          <p className={`${styles.sectionLeadCenter} ${styles.sectionLeadLight}`}>
            Elige con quién vienes. Nosotros adaptamos la experiencia a tu
            grupo, edad y nivel.
          </p>
        </header>

        <div className={`${styles.audienceGrid} sr-stagger`}>
          {AUDIENCE_TILES.map((tile) => (
            <AudienceTile
              key={tile.link}
              name={tile.name}
              image={tile.image}
              link={tile.link}
              className={`${tile.className} min-h-[14rem] md:min-h-0 md:h-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAudienceGalleryV2;
