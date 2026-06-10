import Link from "next/link";
import Image from "next/image";
import styles from "./ShowcaseActivityCard.module.css";

interface ShowcaseActivityCardProps {
  title: string;
  level: string;
  age: string;
  duration: string;
  prize: string;
  link: string;
  image: string;
  priorityImage?: boolean;
  priceLabel?: string;
}

const ShowcaseActivityCard = ({
  title,
  level,
  age,
  duration,
  prize,
  link,
  image,
  priorityImage = false,
  priceLabel = "Desde",
}: ShowcaseActivityCardProps) => {
  const isLocalAsset = image.startsWith("/api/v1/assets/");

  return (
    <article>
      <Link
        href={link}
        className={styles.card}
        aria-label={`Ver ${title}`}
        prefetch
      >
        <div className={styles.imageWrap}>
          <Image
            src={image}
            alt={`${title} — Aventura en Valencia | Aiguaroca`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={styles.image}
            loading={priorityImage ? "eager" : "lazy"}
            priority={priorityImage}
            quality={95}
            unoptimized={isLocalAsset}
          />
        </div>

        <div className={styles.gradient} aria-hidden />

        <div className={styles.content}>
          <h2 className={styles.title}>{title.trim()}</h2>

          <div className={styles.metaRow}>
            <span className={styles.metaTag}>
              Nivel <strong>{level}</strong>
            </span>
            <span className={styles.metaTag}>
              Edad <strong>{age.replace(/\s{2,}/g, " ")}</strong>
            </span>
            <span className={styles.metaTag}>
              Duración <strong>{duration.replace(/\s{2,}/g, " ")}</strong>
            </span>
          </div>

          <div className={styles.footer}>
            <div className={styles.priceBlock}>
              <span className={styles.priceLabel}>{priceLabel}</span>
              <span className={styles.priceValue}>
                {prize}
                <span className={styles.priceCurrency}>€</span>
              </span>
            </div>
            <span className={styles.reserve}>
              Reservar ahora
              <svg
                className={styles.reserveIcon}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ShowcaseActivityCard;
