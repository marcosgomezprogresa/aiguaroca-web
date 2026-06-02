import Link from "next/link";
import Heading from "@/components/ui/Heading";
import { GoDotFill } from "react-icons/go";

const BeforeWaterSection = () => {
  return (
    <div className="custom-container py-8 lg:py-16 space-y-6 lg:space-y-10">
      {/* H2 Section */}
      <Heading
        text="Todo lo que debes saber antes de lanzarte al agua"
        level={2}
        className="font-semibold text-center lg:text-left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Best time of year */}
        <div className="space-y-3 lg:space-y-4">
          <h3 className="text-lg lg:text-2xl font-semibold">
            Mejor época del año para hacer rafting en Valencia
          </h3>
          <p className="text-base lg:text-xl text-neutral-700">
            La temporada ideal va de primavera a otoño, cuando el caudal de los
            ríos garantiza descensos divertidos y seguros. En verano, además,
            podrás disfrutar del agua fresca y cristalina, convirtiéndolo en el
            plan perfecto para escapar del calor.
          </p>
        </div>

        {/* Where to find us */}
        <div className="space-y-3 lg:space-y-4">
          <h3 className="text-lg lg:text-2xl font-semibold">
            Dónde nos encontramos y cómo llegar fácilmente
          </h3>
          <p className="text-base lg:text-xl text-neutral-700">
            Nuestro centro de actividades está en{" "}
            <Link
              href="/actividades/rafting-tamayo"
              className="text-brand-500 hover:underline font-medium"
            >
              Venta del Moro (Valencia)
            </Link>
            , a solo 1h 30 min de la ciudad de Valencia y con acceso rápido
            desde Madrid y Albacete.
          </p>
          <p className="text-base lg:text-xl text-neutral-700">
            Aquí te recibiremos para conoceros, os daremos los trajes de
            neopreno con las tallas que os corresponden y nos seguiréis con
            vuestros vehículos hasta el punto de inicio del descenso. Aparcaréis
            en nuestro parking. Al final del descenso os llevaremos de vuelta en
            nuestras furgonetas hasta al parking donde dejamos vuestros
            vehículos.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center pt-4 lg:pt-6">
        <Link
          href="/contacto"
          className="button inline-flex items-center justify-center gap-2 px-4 py-3 lg:px-6 rounded-2xl text-base lg:text-xl font-semibold text-center"
        >
          <GoDotFill className="flex-shrink-0" />
          <span>Reserva tu plaza de forma rápida</span>
        </Link>
      </div>
    </div>
    
  );
};

export default BeforeWaterSection;
