"use client";

import React, { useEffect, useState } from "react";
import ActivityHero from "@/components/ui/ActivityHero";
import Modal from "@/components/ui/Modal";
import MultiActivity from "@/components/home/MultiActivity";
import Recommend from "@/components/home/Recommend";
import paintballMain from "@/assets/images/paintball-main.svg";
import paintballSide1 from "@/assets/images/paintball-side1.svg";
import paintballSide2 from "@/assets/images/paintball-side2.svg";
import { FaTint, FaCrosshairs, FaTshirt, FaMask } from "react-icons/fa";

export default function PaintballPageClient() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const equipmentIcons = [
    {
      icon: <FaTint size={28} color="#004057" />,
      name: "Bolas de pintura",
    },
    {
      icon: <FaCrosshairs size={28} color="#004057" />,
      name: "Marcadora",
    },
    {
      icon: <FaTshirt size={28} color="#004057" />,
      name: "Mono protector",
    },
    {
      icon: <FaMask size={28} color="#004057" />,
      name: "Máscara",
    },
  ];

  const faqData = [
    {
      ques: "DATOS",
      ans: [
        "Localidad: Villargordo del Cabriel.",
        "Duración: 2-3 horas.",
        "Nivel: Iniciación.",
        "Grupo mínimo: 6 personas.",
        "Edad mínima: 16 años.",
        "Temporada: todo el año.",
        "No apto para embarazadas.",
      ],
    },
    {
      ques: "QUÉ INCLUYE",
      ans: [
        "Todo el equipo necesario para realizar Paintball: monos para no ensuciarse de pintura, chalecos de protección, mascaras de protección para la cara, protección para el cuello, pistola-marcadora y 200 bolas de munición.",
        "Equipo de seguridad: móvil todoterreno y botiquín.",
        "Seguros de responsabilidad civil y accidentes.",
      ],
    },
    {
      ques: "QUÉ NO INCLUYE",
      ans: ["Tranporte a la actividad."],
    },
    {
      ques: "QUÉ HAY QUE LLEVAR",
      ans: ["Agua.", "Calzado deportivo."],
    },
    {
      ques: "RATIO MONITOR/CLIENTES",
      ans: ["1 monitor/10 clientes."],
    },
    {
      ques: "Servicios opcionales",
      ans: ["Posibilidad de alojamiento en AIGUAROCA. Consultar."],
    },
  ];

  return (
    <>
      {modal && <Modal title="Paintball" closeModal={closeModal} />}

      <ActivityHero
        openModal={openModal}
        activityName="Paintball"
        imgs={[
          {
            file: paintballMain.src,
            type: "img",
          },
          {
            file: paintballSide1.src,
            type: "img",
          },
          {
            file: paintballSide2.src,
            type: "img",
          },
        ]}
        breadCrumsPaths={["Home", "Paintball"]}
        level="Principiante"
        age="Desde 16 años"
        duration="2 horas"
        heading="Paintball"
        Prize="30€"
        include={equipmentIcons}
        subTitle="Sobre el Paintball con AIGUAROCA"
        title="Paintball"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            El paintball es un juego al aire libre en el que contamos con una
            marcadora (pistola) de bolas de pintura, con la cual deberemos
            alcanzar a nuestros oponentes. Para desarrollar la actividad iremos
            completamente equipados, para que sea divertido y totalmente seguro.
            <br />
            <br />
            Las bolas son completamente biodegradables (por lo que no contamina
            en absoluto), y están compuestas por gelatina alimenticia (el
            exterior) y por agua con colorante alimenticio (el interior). Se
            limpia fácilmente con un poco de agua. El paintball se encuentra por
            debajo del golf en el ranking de lesiones, por lo que no es nada
            arriesgado ni duro.
          </p>
        }
        faq={faqData}
        showSeeMore={false}
      />

      <MultiActivity />
      <Recommend excludeLink="/actividades/paintball" />
    </>
  );
}
