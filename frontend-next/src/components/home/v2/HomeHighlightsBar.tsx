import styles from "./HomeSectionsV2.module.css";

const HIGHLIGHTS = [
  { value: "9+", label: "Actividades de aventura en un mismo entorno natural" },
  { value: "6+", label: "Años de experiencia organizando grupos y familias" },
  { value: "100%", label: "Actividades al aire libre en plena naturaleza" },
  { value: "Todo", label: "Públicos: familias, empresas, escolares y más" },
];

const HomeHighlightsBar = () => {
  return (
    <section className={styles.highlights} aria-label="Datos destacados de Aiguaroca">
      <div className="custom-container">
        <div className={styles.highlightsGrid}>
          {HIGHLIGHTS.map((item) => (
            <div key={item.value} className={styles.highlightItem}>
              <p className={styles.highlightValue}>{item.value}</p>
              <p className={styles.highlightLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlightsBar;
