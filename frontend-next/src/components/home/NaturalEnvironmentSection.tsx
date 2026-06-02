import Link from "next/link";
import Heading from "@/components/ui/Heading";

const NaturalEnvironmentSection = () => {
  return (
    <div className="custom-container py-8 lg:py-24 space-y-6 lg:space-y-10">
      <Heading
        text="Organiza tu día de aventura en Valencia"
        level={2}
        className="text-xl sm:text-2xl lg:text-2xl font-black text-gray-900 "/>

      <div className="space-y-4 lg:space-y-6">
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-7xl">
          Tanto si buscas una actividad puntual como si quieres organizar una jornada
          completa de multiaventura, te ayudamos a
              <a href="/dia-multiaventura" className="font-semibold text-gray-600 hover:underline"
            > crear el plan </a> 
             que mejor encaje contigo y con tu grupo
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-7xl">
          Puedes combinar diferentes actividades, adaptarlas al nivel del grupo y
          disfrutar de una experiencia personalizada en plena naturaleza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Link href="/contacto">
          <button className="px-6 py-3 rounded-xl font-semibold text-white bg-[#00acec] hover:bg-[#0095cf] transition">
            Contactar
          </button>
        </Link>

        <a
          href="https://wa.me/34649047282"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition text-center"
        >
          Hablar por WhatsApp
        </a>
      </div>
      </div>
      </div>
      );
      };

export default NaturalEnvironmentSection;
