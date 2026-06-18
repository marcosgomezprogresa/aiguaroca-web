import styles from "./HomeSectionsV2.module.css";

const HIGHLIGHTS = [
  {
    lead: "Más de 20 años",
    rest: "impulsando experiencias de aventura",
  },
  {
    lead: "100%",
    rest: "naturaleza en cada actividad",
  },
  {
    lead: "6 años",
    rest: "guiando grupos, familias y empresas",
  },
  {
    lead: "Aventura para todos:",
    rest: "escolares, equipos, familias y más",
  },
];

const HomeHighlightsBar = () => {
  return (
    <section className={styles.highlights} aria-label="Datos destacados de Aiguaroca">
      <div className="custom-container">
        <div className={`${styles.highlightsGrid} sr-stagger`}>
          {HIGHLIGHTS.map((item) => (
            <div
              key={`${item.lead}-${item.rest}`}
              className={styles.highlightItem}
            >
              <p className={styles.highlightCopy}>
                <span className={styles.highlightLead}>{item.lead}</span>{" "}
                {item.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlightsBar;
