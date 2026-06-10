import {
  FaClock,
  FaLocationDot,
  FaPhoneFlip,
  FaRegEnvelope,
  FaShieldHalved,
} from "react-icons/fa6";
import styles from "./ContactDirectSection.module.css";

const contactChannels = [
  {
    icon: FaPhoneFlip,
    label: "Reservas",
    value: "+34 649 047 282",
    href: "tel:649047282",
    external: false,
    highlight: true,
    hint: "Línea principal de reservas",
  },
  {
    icon: FaPhoneFlip,
    label: "Información",
    value: "+34 609 261 210",
    href: "tel:609261210",
    external: false,
    highlight: false,
    hint: "Información general",
  },
  {
    icon: FaRegEnvelope,
    label: "Email",
    value: "info@aiguaroca.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com",
    external: true,
    highlight: false,
    hint: "Consultas detalladas",
  },
] as const;

const trustPoints = [
  { icon: FaClock, text: "< 24 h" },
  { icon: FaShieldHalved, text: "+20 años" },
  { icon: FaLocationDot, text: "Venta del Moro" },
] as const;

function ChevronIcon() {
  return (
    <svg
      className={styles.channelArrow}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ContactDirectSection = () => {
  return (
    <section className={styles.section} aria-labelledby="contact-direct-title">
      <div className="custom-container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Atención directa</p>
          <h2 id="contact-direct-title" className={styles.title}>
            Llámanos o escríbenos
          </h2>
          <p className={styles.lead}>
            Te orientamos sobre disponibilidad, edades y la actividad ideal para
            tu grupo.
          </p>

          <div className={styles.trustRow} aria-label="Ventajas">
            {trustPoints.map(({ icon: Icon, text }) => (
              <span key={text} className={styles.trustPill}>
                <Icon className={styles.trustIcon} aria-hidden />
                {text}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.channelList}>
          {contactChannels.map(
            ({ icon: Icon, label, value, href, external, highlight, hint }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`${styles.channelLink} ${
                  highlight ? styles.channelLinkHighlight : ""
                }`}
              >
                <span className={styles.channelIcon}>
                  <Icon size={16} aria-hidden />
                </span>
                <span className={styles.channelBody}>
                  <span className={styles.channelLabel}>{label}</span>
                  <span className={styles.channelValue}>{value}</span>
                  <span className={styles.channelHint}>{hint}</span>
                </span>
                <ChevronIcon />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactDirectSection;
