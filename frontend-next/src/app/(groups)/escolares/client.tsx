'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import SchoolActivitySection from '@/components/escolares/SchoolActivitySection';
import SchoolModal from '@/components/escolares/SchoolModal';
import SchoolContactModal from '@/components/escolares/SchoolContactModal';
import ImageOverlay from '@/components/ui/ImageOverlay';
import ThoughtSection from '@/components/escolares/ThoughtSection';
import LastHeading from '@/components/home/LastHeading';
import trip1 from '@/assets/images/trip.svg';
import trip2 from '@/assets/images/school-trip-2.svg';
import trip3 from '@/assets/images/school-trip-3.svg';
import overlayImg from '@/assets/images/school-overlay.svg';
import viajesescolaresicon from '@/assets/images/viajes-escolares-icon.svg';
import type { StaticImageData } from 'next/image';

interface TripItem {
  img: StaticImageData;
  name: string;
  person: string;
  activity: string;
}

const EscolaresClient: React.FC = () => {
  const arr: TripItem[] = [
    {
      img: trip1,
      name: 'Campamento economico',
      person: '1 Noche ',
      activity: '2 Actividades Multiaventura ',
    },
    {
      img: trip2,
      name: 'Campamento 3 Dias',
      person: '2 Noches',
      activity: '3 Actividades Multiaventura ',
    },
    {
      img: trip3,
      name: 'Campamento 4 Dias',
      person: '3 Noches',
      activity: '4 Actividades Multiaventura ',
    },
  ];

  const [modal, setModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [contactModal, setContactModal] = useState(false);

  const openModal = (idx: number) => {
    setModal(true);
    setSelectedIndex(idx);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedIndex(null);
  };

  const openContactModal = () => setContactModal(true);
  const closeContactModal = () => setContactModal(false);

  useEffect(() => {
    if (modal || contactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal, contactModal]);

  return (
    <>
      {modal && selectedIndex !== null && (
        <SchoolModal item={arr[selectedIndex]} closeModal={closeModal} />
      )}
      {contactModal && <SchoolContactModal closeModal={closeContactModal} />}

      <ActivityHero
        openModal={openContactModal}
        img="/api/v1/assets/posters/escolares.png"
        title="Viajes Escolares"
        icon={viajesescolaresicon.src}
        breadCrumsPaths={["Home", "Viajes Escolares"]}
        heading="Campamentos Multiaventura"
        subHeading="Viajes Escolares & Campamentos de Fin de Curso"
        des={
          <div className="w-full max-w-2xl text-neutral-800 leading-relaxed space-y-8">
            <p className="font-semibold">
              Solo encargaros de tener a todos los niños y maestros preparados
              en la puerta de la escuela, nosotros llegaremos con el bus y os
              llevaremos al río!
            </p>
            <p>
              Desde una simple
              <span className="highlighted__text"> actividad de medio dia</span>
              , hasta{" "}
              <span className="highlighted__text">
                campamentos escolares de varios días
              </span>{" "}
              con un montón de espectaculares
              <span className="highlighted__text">
                {" "}
                actividades multiaventura
              </span>{" "}
              que los estudiantes siempre recordaran.
            </p>
            <p>
              Realizamos
              <span className="highlighted__text">
                {" "}
                nuestras actividades multiaventura{" "}
              </span>{" "}
              entorno al{" "}
              <span className="highlighted__text">
                {" "}
                Parque Natural de las Hoces del Cabriel
              </span>
              , donde disfrutaremos de sus{" "}
              <span className="highlighted__text">magníficas aguas</span>, junto
              a la <span className="highlighted__text"> flora y fauna </span>que
              caracteriza este entorno.
            </p>
          </div>
        }
        activityName="Viajes Escolares"
        showSeeMore={false}
        priceLabel="Contactanos"
      />

      <SchoolActivitySection arr={arr} openModal={openModal} />

      <ImageOverlay
        img={overlayImg.src}
        title="Programas Multiaventura Personalizados"
        para1="Si necesitais un programa que encaje con vuestro tiempo disponible o Adaptado a ciertas limitaciones, lo Planificamos a vuestra medida. "
        para2="Contactarnos y juntos confeccionaremos el paquete Ideal para vuestro viaje de fin de curso."
        buttonText="Contactanos para mas informacion"
      />

      <ThoughtSection />

      <LastHeading />
    </>
  );
};

export default EscolaresClient;
