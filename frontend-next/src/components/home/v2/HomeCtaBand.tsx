import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./HomeSectionsV2.module.css";

const HomeCtaBand = () => {
  return (
    <section className="custom-container" aria-label="Contacto">
      <div className={styles.ctaBand}>
        <div>
          <h2 className={styles.ctaBandTitle}>¿Preparados para la aventura?</h2>
          <p className={styles.ctaBandText}>
            Cuéntanos fecha, grupo y actividad. Te ayudamos a cerrar la mejor
            experiencia en Valencia.
          </p>
        </div>
        <Link href="/contacto" className={styles.ctaBandBtn}>
          Contactar
          <HiArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default HomeCtaBand;
