import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./LastHeading.module.css";

const LastHeading = () => {
  return (
    <section className={styles.section} aria-label="Próximo paso">
      <div className="custom-container">
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Próximo paso</p>
            <h2 className={styles.title}>¿Preparados para la aventura?</h2>
            <p className={styles.lead}>
              Cuéntanos la fecha, el grupo y la actividad que tienes en mente.
              Te ayudamos a cerrar la mejor experiencia.
            </p>
          </div>

          <Link href="/contacto" className={styles.cta} aria-label="Ir a contacto">
            Contactar
            <HiArrowUpRight className={styles.ctaIcon} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LastHeading;
