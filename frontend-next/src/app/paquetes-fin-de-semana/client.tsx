"use client";

import { useEffect, useState } from "react";
import MultiWeekendHero from "@/components/multiAdventure/MultiWeekendHero";
import MultiWeekendSection from "@/components/multiAdventure/MultiWeekendSection";
import MultiWeekendModal from "@/components/multiAdventure/MultiWeekendModal";
import ImageOverlay from "@/components/ui/ImageOverlay";
import singleImg2 from "@/assets/images/single-activity-main.svg";
import weekOverlay from "@/assets/images/week-overlay.svg";

export default function PaquetesFinDeSemanClient() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <>
      {modal && <MultiWeekendModal closeModal={closeModal} />}
      <MultiWeekendHero
        openModal={openModal}
        imgs={[
          singleImg2.src,
          "/api/v1/assets/samena/img-2.png",
          "/api/v1/assets/samena/img-3.png",
        ]}
        breadCrumsPaths={["Home", "Paquetes Fin de Semana"]}
        heading="Paquetes Fin de Semana en Valencia"
        packName="Fin de Semana"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span className="text-black text-lg lg:text-3xl font-medium">
              Ven a pasar el finde con AIGUAROCA y prueba las actividades que
              siempre soñaste probar!
            </span>
          </p>
        }
      />

      <div className="custom-container space-y-10 lg:space-y-20">
        <p className="font-medium text-3xl lg:text-5xl sr-reveal">
          Packs Finde
          <br /> Alojamiento + Actividades
        </p>
        <MultiWeekendSection openModal={openModal} />
      </div>

      <ImageOverlay
        img={weekOverlay.src}
        title="El tiempo es tuyo"
        para1="Tu eliges cuantos dias y cuantas actividades tendra tu escapada ideal"
        para2=""
        buttonText="Contactanos para tu pack con alojamiento"
        onButtonClick={openModal}
      />

    </>
  );
}
