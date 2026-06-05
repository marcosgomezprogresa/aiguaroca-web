"use client";

import Heading from "../ui/Heading";

interface HomeHeroTextProps {
  className?: string;
  align?: "center" | "left";
}

const HomeHeroText = ({ className = "", align = "left" }: HomeHeroTextProps) => {
  const alignClass =
    align === "center"
      ? "text-center"
      : "text-center sm:text-left";

  return (
    <div className={`space-y-5 max-w-xl ${alignClass} ${className}`}>
      <h1 className="text-sm sm:text-base font-black uppercase tracking-[0.3em] text-black">
        Aventura Valencia
      </h1>

      <Heading
        level={2}
        text="Deportes de Aventura Valencia"
        className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-gray-900"
      />

      <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto sm:mx-0">
        Vive experiencias de multiaventura en Valencia al aire libre, con actividades
        diseñadas para disfrutar, superar límites y conectar con la naturaleza.
      </p>

      <div className="pt-6">
        <span
          className={`block h-1 bg-[#00acec] rounded-full ${
            align === "center"
              ? "w-full max-w-xs mx-auto"
              : "w-full sm:w-56 lg:w-125"
          }`}
        />
      </div>
    </div>
  );
};

export default HomeHeroText;
