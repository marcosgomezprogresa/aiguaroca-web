'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import FamiliasModal from '@/components/familias/FamiliasModal';
import FirstGrid from '@/components/corporate/FirstGrid';
import TeamBuilding from '@/components/corporate/TeamBuilding';
import SecondGrid from '@/components/corporate/SecondGrid';
import ImageOverlay from '@/components/ui/ImageOverlay';
import empresasIcon from '@/assets/images/empresas-icon.svg';
import corporateOverlay from '@/assets/images/corporate-overlay.svg';
import corporate from '@/assets/images/corporate.svg';

const EmpresasClient: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return (
    <>
      {showModal && <FamiliasModal title="Empresas" closeModal={closeModal} />}
      <ActivityHero
        openModal={openModal}
        img={corporate.src}
        title="Empresas"
        icon={empresasIcon.src}
        breadCrumsPaths={["Home", "Empresas"]}
        heading="Cooperacion & Trabajo en Equipo "
        subHeading="TEAM FUN - COACHING"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            Una forma <span className="highlighted__text">dinámica</span> y{" "}
            <span className="highlighted__text">divertida</span> de formar{" "}
            <span className="highlighted__text">un auténtico equipo</span>, de
            cohesionar, trabajar aspectos como la
            <span className="highlighted__text"> comunicación</span> <br />
            <span className="highlighted__text">
              coordinación, gestión del tiempo y trabajo en equipo.{" "}
            </span>
            Todo ello, de la mejor forma: disfrutando. La{" "}
            <span className="highlighted__text">
              construcción y consolidación{" "}
            </span>
            de equipos de trabajo, mediante{" "}
            <span className="highlighted__text">
              técnicas deportivas de aventura en plena naturaleza
            </span>{" "}
            es uno de los pilares básicos del programa de{" "}
            <span className="highlighted__text">Team Building.</span>
          </p>
        }
        showSeeMore={false}
        activityName="Corporativa"
        priceLabel="Contactanos"
      />
      <FirstGrid />
      <TeamBuilding />
      <SecondGrid />
      <ImageOverlay
        img={corporateOverlay.src}
        title="Experiencias diseñadas para optimizar el ambiente laboral"
        para1="Si necesita un programa Especial, tenemos recursos, lo Personalizamos a vuestras necesidades y lo adaptamos al perfil de vuestros trabajadores. Te sorprendera!"
        para2=""
        buttonText="Contactanos para un programa personalizado"
        onButtonClick={openModal}
      />
    </>
  );
};

export default EmpresasClient;
