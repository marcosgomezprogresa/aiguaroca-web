const EquipmentSafetySection = () => {

  return (
    <div className="custom-container py-8 lg:py-16">
      <div className="bg-neutral-50 rounded-2xl lg:rounded-3xl px-5 py-8 lg:px-10 lg:py-10 space-y-6 lg:space-y-8">

      {/* Safety info */}
      <div className="space-y-3 lg:space-y-4 pt-2 lg:pt-4">
        <p className="text-base lg:text-xl text-neutral-700">
          <span className="font-semibold text-brand-500">
            La seguridad es nuestra prioridad:
          </span>{" "}
          antes de empezar, nuestros monitores te darán una charla de seguridad
          con las indicaciones básicas y estarán contigo durante todo el
          recorrido. Así, tanto si es tu primera vez como si ya has probado el
          rafting, disfrutarás de la experiencia con total confianza.
        </p>
      </div>
      </div>
    </div>
  );
};

export default EquipmentSafetySection;
