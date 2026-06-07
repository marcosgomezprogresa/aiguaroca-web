import Image from "next/image";
import Link from "next/link";
import styles from "./HomeSectionsV2.module.css";

const HomeEditorialSection = () => {
  return (
    <section className="custom-container" aria-label="Multiaventura en Valencia">
      <div className={styles.editorial}>
        <div className={styles.editorialImage}>
          <Image
            src="/api/v1/assets/Brand.png"
            alt="Rafting y multiaventura en Valencia — Aiguaroca"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
            quality={90}
            unoptimized
          />
        </div>
        <div className={styles.editorialOverlay} aria-hidden />

        <div className={`custom-container ${styles.editorialContent}`}>
          <p className={styles.editorialEyebrow}>Venta del Moro · Valencia</p>
          <h2 className={styles.editorialTitle}>
            Multiaventura en plena naturaleza
          </h2>
          <p className={styles.editorialText}>
            Más que una actividad: desconectar, respirar aire puro y vivir
            experiencias que recordarás. Rafting, circuito de árboles, kayak y
            mucho más en un entorno privilegiado.
          </p>
          <div className={styles.editorialActions}>
            <Link href="/dia-multiaventura" className={styles.btnPrimary}>
              Día multiaventura
            </Link>
            <Link href="/contacto" className={styles.btnGhost}>
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEditorialSection;
