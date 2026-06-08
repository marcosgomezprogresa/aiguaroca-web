import Link from "next/link";
import styles from "./ActivityDetail.module.css";

interface ActivityBookingPanelProps {
  activityName: string;
  displayPrice?: string;
  pricePrefix: string;
  bookingHref: string;
}

const ActivityBookingPanel = ({
  activityName,
  displayPrice,
  pricePrefix,
  bookingHref,
}: ActivityBookingPanelProps) => {
  return (
    <aside className={styles.bookingAside} aria-label="Reservar actividad">
      <div className={styles.bookingPanel}>
        {displayPrice && (
          <div className={styles.bookingPrice}>
            <span className={styles.bookingPriceLabel}>{pricePrefix}</span>
            <span className={styles.bookingPriceValue}>
              {displayPrice}
              <span className={styles.bookingPriceCurrency}>€</span>
            </span>
          </div>
        )}

        <p className={styles.bookingActivityLabel}>Actividad</p>
        <p className={styles.bookingActivityName}>{activityName}</p>

        <div className={styles.bookingActions}>
          <Link href={bookingHref} className={styles.bookingCta} prefetch>
            Contáctanos para reservar
          </Link>
          <Link
            href="https://wa.me/34649047282"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookingCtaSecondary}
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ActivityBookingPanel;
