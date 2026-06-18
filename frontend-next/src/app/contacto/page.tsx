import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactDirectSection from "@/components/contact/ContactDirectSection";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-brand-50/50 via-white to-neutral-50/30">
      <div className="sr-reveal">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>

      <div className="sr-reveal">
        <ContactDirectSection />
      </div>

      <div className="sr-reveal">
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
      </div>
    </main>
  );
}
