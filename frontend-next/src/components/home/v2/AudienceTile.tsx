import Link from "next/link";
import Image from "next/image";
import styles from "./AudienceTile.module.css";

interface AudienceTileProps {
  name: string;
  image: string;
  link: string;
  className?: string;
}

const AudienceTile = ({ name, image, link, className = "" }: AudienceTileProps) => {
  const isLocalAsset = image.startsWith("/api/v1/assets/");

  return (
    <Link href={link} className={`${styles.tile} ${className}`} prefetch>
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={styles.image}
        loading="lazy"
        quality={90}
        unoptimized={isLocalAsset}
      />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.label}>
        <h3 className={styles.title}>
          {name}
          <span className={styles.arrow} aria-hidden>
            →
          </span>
        </h3>
      </div>
    </Link>
  );
};

export default AudienceTile;
