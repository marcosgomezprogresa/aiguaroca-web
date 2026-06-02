import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const LastHeading = () => {
  return (
    <section className="custom-container py-10 lg:py-14">
      <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200/70 bg-gradient-to-br from-white via-white to-brand-50/40 px-5 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-7 sm:py-7 lg:px-8">
        <div className="min-w-0 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-500">
            Próximo paso
          </p>
          <h2 className="text-xl font-black tracking-tight text-neutral-950 sm:text-2xl">
            ¿Preparados para la aventura?
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-neutral-600">
            Cuéntanos fecha, grupo y actividad. Te ayudamos a cerrar la mejor
            experiencia.
          </p>
        </div>

        <Link
          href="/contacto"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-500/20 transition hover:bg-brand-400 hover:shadow-md sm:self-center"
          aria-label="Ir a contacto"
        >
          Contactar
          <HiArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default LastHeading;
