import Heading from "@/components/ui/Heading";
import Image from "next/image";

const HomeBrandSection = () => {
  

  return (
    <div className="custom-container py-8 lg:py-10 space-y-6 lg:space-y-10">
      {/* H2 Section */}
      <Heading
        text="Multiaventura en Valencia en Plena Naturaleza"
        level={2}
        className="text-xl sm:text-2xl lg:text-2xl font-black text-gray-900"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Image
          src="/api/v1/assets/Brand.png"
          alt="Rafting en Valencia - Aventura en aguas bravas"
          width={720}
          height={480}
          loading="lazy"
          quality={50}
          className="w-full lg:hidden rounded-xl"
        />

        <div className="w-full space-y-4 lg:space-y-6">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Vivir una experiencia de aventura en Valencia es mucho más que hacer una actividad: es desconectar del día a día y disfrutar del entorno natural de una forma activa y divertida.

          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Nuestro centro de multiaventura se encuentra en un entorno privilegiado, rodeado de naturaleza, donde cada actividad se convierte en una experiencia completa al aire libre. Un plan perfecto para quienes buscan emociones, aire puro y momentos para recordar.
          </p>
  
        </div>

        <div className="flex items-center">
          <Image
            src="/api/v1/assets/Brand.png"
            alt="Rafting en Valencia - Aventura en aguas bravas"
            width={720}
            height={480}
            loading="lazy"
            quality={50}
            className="hidden lg:block w-full max-w-md mx-auto rounded-xl"
          />
        </div>
      </div>
      <div className="pt-10">
        <div className="w-full h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394149.1619740862!2d-1.9660931109374686!3d39.485358399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd673c77bbe4610d%3A0xbb62dcc3c9da8fc4!2sAIGUAROCA%20DEPORTES%20DE%20AVENTURA%20VENTA%20DEL%20MORO!5e0!3m2!1ses!2ses!4v1770220548916!5m2!1ses!2ses"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div></div>
          </div>
        );
      };

export default HomeBrandSection;
