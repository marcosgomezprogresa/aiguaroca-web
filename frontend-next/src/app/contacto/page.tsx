import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import LastHeading from "@/components/home/LastHeading";
import {
  FaClock,
  FaLocationDot,
  FaPhoneFlip,
  FaRegEnvelope,
  FaShieldHalved,
} from "react-icons/fa6";

const contactChannels = [
  {
    icon: FaRegEnvelope,
    label: "Email",
    value: "info@aiguaroca.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com",
    external: true,
    highlight: false,
    hint: "Ideal para consultas detalladas",
  },
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
] as const;

const trustPoints = [
  { icon: FaClock, text: "Respuesta en menos de 24 h laborables" },
  { icon: FaShieldHalved, text: "Empresa local con más de 20 años de experiencia" },
  { icon: FaLocationDot, text: "Base en Venta del Moro, Valencia" },
] as const;

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-brand-50/50 via-white to-neutral-50/30">
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <section className="custom-container py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-500 sm:tracking-[0.28em]">
            Atención directa
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-neutral-950 sm:mt-4 sm:text-3xl lg:text-5xl">
            Habla con nosotros cuando lo necesites
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:text-base lg:text-lg">
            Si prefieres resolverlo al momento, llámanos o escríbenos. Te
            orientamos sobre disponibilidad, edades mínimas y la actividad que
            mejor encaje con tu grupo.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:mt-12 sm:grid-cols-3">
          {trustPoints.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-white px-4 py-3.5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-500">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <p className="min-w-0 text-left text-sm font-medium leading-snug text-neutral-700">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid w-full min-w-0 max-w-5xl gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {contactChannels.map(
            ({ icon: Icon, label, value, href, external, highlight, hint }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`group flex min-h-0 flex-col rounded-2xl p-5 transition-all duration-300 sm:min-h-[10.5rem] sm:rounded-[1.75rem] sm:p-6 sm:hover:-translate-y-1 ${
                  highlight
                    ? "bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-[0_12px_32px_rgba(0,123,182,0.22)] sm:shadow-[0_16px_40px_rgba(0,123,182,0.28)]"
                    : "border border-neutral-200/80 bg-white text-neutral-950 shadow-sm sm:shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:hover:border-brand-200 sm:hover:shadow-[0_16px_40px_rgba(0,192,252,0.12)]"
                }`}
              >
                <span
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl sm:mb-5 sm:h-12 sm:w-12 ${
                    highlight
                      ? "bg-white/20 text-white"
                      : "bg-brand-100 text-brand-500"
                  }`}
                >
                  <Icon size={20} aria-hidden />
                </span>
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.16em] sm:text-xs sm:tracking-widest ${
                    highlight ? "text-white/80" : "text-neutral-400"
                  }`}
                >
                  {label}
                </p>
                <p
                  className={`mt-1.5 break-words text-base font-black leading-tight sm:mt-2 sm:text-lg lg:text-xl ${
                    highlight ? "text-white" : "text-neutral-950"
                  }`}
                >
                  {value}
                </p>
                <p
                  className={`mt-3 text-sm leading-snug sm:mt-auto sm:pt-4 ${
                    highlight ? "text-white/75" : "text-neutral-500"
                  }`}
                >
                  {hint}
                </p>
              </a>
            ),
          )}
        </div>
      </section>

      <section className="custom-container pb-12 sm:pb-16 lg:pb-20">
        <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:rounded-[1.75rem] sm:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-4 border-b border-neutral-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 sm:tracking-[0.25em]">
                Ubicación
              </p>
              <h3 className="mt-1 text-lg font-black text-neutral-950 sm:text-xl lg:text-2xl">
                AIGUAROCA · Venta del Moro
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Deportes de aventura en el río Cabriel, Valencia
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=AIGUAROCA+deportes+de+aventura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-200 sm:w-auto"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            title="Ubicación de AIGUAROCA en Venta del Moro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.602581874092!2d-1.358927123730018!3d39.48535701072101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd673c77bbe4610d%3A0xbb62dcc3c9da8fc4!2sAIGUAROCA%20deportes%20de%20aventura!5e0!3m2!1sen!2ses!4v1740653783187!5m2!1sen!2ses"
            className="h-[42dvh] min-h-[240px] w-full border-0 sm:h-[45dvh] lg:h-[55dvh] 2xl:h-[520px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <LastHeading />
    </main>
  );
}
