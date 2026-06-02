"use client";

import { useEffect, useState } from "react";
import MultiAdventureHero from "@/components/multiAdventure/MultiAdventureHero";
import LastHeading from "@/components/home/LastHeading";
import MultiAdventureSection from "@/components/multiAdventure/MultiAdventureSection";
import MultiAdventureModal from "@/components/multiAdventure/MultiAdventureModal";
import ImageOverlay from "@/components/ui/ImageOverlay";
import multiImg1 from "@/assets/images/multi-1.svg";
import multiImg2 from "@/assets/images/multi-2.svg";
import multiImg3 from "@/assets/images/multi-3.svg";
import multiOverlay from "@/assets/images/multi-overlay.svg";

export default function DiaMultiaventuraClient() {
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
      {modal && <MultiAdventureModal closeModal={closeModal} />}
      <MultiAdventureHero
        openModal={openModal}
        imgs={[multiImg3.src, multiImg2.src, multiImg1.src]}
        breadCrumsPaths={["Home", "Dia Multiaventura"]}
        heading="Dia Multiaventura"
        packName="Dia Multiaventura"
        showSeeMore={true}
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span className="text-black">
              <span className="text-brand-300">AIGUA</span>ROCA
            </span>{" "}
            tiene el abanico mas amplio de paquetes multiaventura en Valencia,
            diseñados para todas las edades y todos los gustos. Estamos ubicados
            en un punto de facil acceso, a tan solo 1 hora de la playa
            (Valencia) y 2,5 horas desde Madrid.
          </p>
        }
        secondDes={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            Hemos creado estos paquetes especialmente para grupos de amigos,
            cumpleaños, familias con niños, incluso para despedidas de solteros
            que optan por un dia de deportes de aventura y bien estar al aire
            libre. Si los podemos mejorar o necesitais un paquete especial,
            contactarnos y lo diseñaremos a vuestra medida con los mejores
            Precios y las actividades que mas ilusión os hacen.
          </p>
        }
      />

      <div className="custom-container space-y-10 lg:space-y-20">
        <p className="font-medium text-3xl lg:text-5xl">Packs 2 Actividades</p>
        <MultiAdventureSection openModal={openModal} />
      </div>

      <ImageOverlay
        img={multiOverlay.src}
        title="El tiempo es tuyo, elige tu las actividades que mas te gustan!"
        para1=" Ahora tu puedes elegir las actividades y combinarlas con otras a"
        para2="tu gusto, Buscaremos que se adapte al tiempo del que dispones"
        buttonText="Contactanos para un pack personalizado"
        onButtonClick={openModal}
      />

      <LastHeading />
    </>
  );
}
