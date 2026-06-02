"use client";

import { useEffect, useState } from "react";
import ActivityHero from "@/components/ui/ActivityHero";
import LastHeading from "@/components/home/LastHeading";
import MultiActivity from "@/components/home/MultiActivity";
import Recommend from "@/components/home/Recommend";
import ActivitySection from "@/components/rafting/ActivitySection";
import Modal from "@/components/ui/Modal";
import PetSection from "@/components/ui/PetSection";
import tamayo3 from "@/assets/images/tamayo-3.svg";

export default function RaftingPageClient() {
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

  const activity = [
    "Rafting en Tamayo-Venta del Moro",
    "Rafting en Las Hoces del Cabriel - Venta del Moro",
  ];

  return (
    <>
      {modal && <Modal title="Rafting" closeModal={closeModal} />}
      <ActivityHero
        openModal={openModal}
        img={tamayo3.src}
        type="img"
        title="Rafting"
        breadCrumsPaths={["Home", "Rafting"]}
        heading="Rafting en Valencia Rio Cabriel"
        subHeading="RAFTING en VALENCIA"
        priceLabel="Contactanos"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            Todos <span className="highlighted__text">adelante</span>! ¡Derecha{" "}
            <span className="highlighted__text">atras,</span> izquierda{" "}
            <span className="highlighted__text">adelante!</span> Creas o no,
            estas ordenes se te{" "}
            <span className="highlighted__text">quedaran en la mente</span>{" "}
            muchos días después del descenso…
            <br />
            <br />
            El desfiladero del{" "}
            <span className="highlighted__text">Río Cabriel</span> esta
            prácticamente{" "}
            <span className="highlighted__text">hecho para aventura</span>. El
            tramo Tamayo, te desafía a luchar contra{" "}
            <span className="highlighted__text">
              los rápidos del legendario Rio Cabriel.
            </span>{" "}
            Antes de poder desembarcar en la pintoresca{" "}
            <span className="highlighted__text">zona del Retorno,</span> incluso
            las partes más tranquilas del río os brindarán{" "}
            <span className="highlighted__text">acción acuática</span> y{" "}
            <span className="highlighted__text">chapuzónes</span> en agua{" "}
            <span className="highlighted__text">limpia y fresca!</span> Pero
            nunca pierdas de vista el río y las corrientes o te veras nadando en
            algún{" "}
            <span className="highlighted__text">rápido con aguas blancas.</span>
          </p>
        }
        showSeeMore={false}
        activityName="RAFTING"
      />
      <ActivitySection showActivity={activity} priceLabel="Contactanos" />
      <MultiActivity />
      <PetSection />
      <Recommend />
      <LastHeading />
    </>
  );
}
