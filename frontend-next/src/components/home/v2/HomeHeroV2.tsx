import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHeroV2.module.css";

const CATEGORY_LINKS = [
  { label: "Circuito", path: "/actividades/circuito-multiaventura" },
  { label: "Rafting", path: "/actividades/rafting" },
  { label: "Kayak", path: "/actividades/kayak-en-aguas-bravas" },
  { label: "Paintball", path: "/actividades/paintball" },
  { label: "Barranco", path: "/actividades/barranco-acuatico" },
  { label: "Canoa-Raft", path: "/actividades/canoas" },
  { label: "Día multiaventura", path: "/dia-multiaventura" },
];

const HERO_POSTER = "/api/v1/assets/poster.png";
const HERO_VIDEO = "/api/v1/videos/intro.mp4";

const HomeHeroV2 = () => {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Aiguaroca — deportes de aventura en Valencia"
      >
        <div className={styles.heroMedia}>
          <Image
            src={HERO_POSTER}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={100}
            unoptimized
            className={styles.heroPoster}
            aria-hidden
          />
          <video
            poster={HERO_POSTER}
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={styles.heroVideo}
            aria-label="Aiguaroca — multiaventura en Valencia"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden />

        <div className={`custom-container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>Valencia · Venta del Moro</p>

          <h1 className={styles.heroTitle}>
            Tu aventura.
            <br />
            Tu naturaleza.
            <br />
            Tu historia.
          </h1>

          <p className={styles.heroSubtitle}>
            Multiaventura al aire libre en plena naturaleza: rafting, circuito
            de árboles, kayak y experiencias para todos los públicos.
          </p>

          <div className={styles.heroActions}>
            <Link href="#actividades" className={styles.btnPrimary}>
              Descubrir actividades
            </Link>
            <Link href="/contacto" className={styles.btnGhost}>
              Reservar ahora
            </Link>
          </div>
        </div>
      </section>

      <div className="custom-container">
        <nav className={styles.categoryNav} aria-label="Categorías de actividades">
          <div className={styles.categoryTrack}>
            {CATEGORY_LINKS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={styles.categoryPill}
                prefetch
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default HomeHeroV2;
