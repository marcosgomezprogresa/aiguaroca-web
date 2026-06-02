'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import DespedidasActivitySection from '@/components/despedidas/DespedidasActivitySection';
import DespedidasModal from '@/components/despedidas/DespedidasModal';
import ImageOverlay from '@/components/ui/ImageOverlay';
import MultiActivity from '@/components/home/MultiActivity';
import LastHeading from '@/components/home/LastHeading';
import Recommend from '@/components/home/Recommend';
import despedidasIcon from '@/assets/images/despedidas-de-solteros-icon.svg';
import stagHenPartyOverlay from '@/assets/images/stag-hen-party-overlay.svg';
import stagHenParty from '@/assets/images/stag-hen-party.svg';

const DespedidasClient: React.FC = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  const activity = [
    'Rafting Tamayo',
    'Circuito Multiaventura',
    'Paintball',
    'Canoa-Raft',
    'Rafting en Las Hoces del Cabriel - Venta del Moro',
  ];

  return (
    <>
      {modal && (
        <DespedidasModal title="Despedidas Multiaventura" closeModal={closeModal} />
      )}
      <ActivityHero
        openModal={openModal}
        img={stagHenParty.src}
        title="Despedidas Multiaventura"
        icon={despedidasIcon.src}
        breadCrumsPaths={['Home', 'Despedidas Multiaventura']}
        heading="Organizar la tropa es como pastorear gatos?"
        subHeading="Despedidas Multiaventura"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            Sabemos bien lo difícil que puede ser{' '}
            <span className="highlighted__text">
              organizar una despedida de soltero.
            </span>
            <br />
            <span className="highlighted__text">
              {' '}
              Encontrar el plan que convence a todos es tu primera misión!{' '}
            </span>
            <br />
            Los compañeros del
            <span className="highlighted__text"> novio </span>
            que apenas conoces, recogen dinero de un montón de personas
            diferentes, algunos todavia no te han hecho el bizum para
            confirmar... Antonio aun no sabe si tiene el permiso de su mujer
            para el finde...
            <br />
            <span className="highlighted__text">Os ayudaremos con todo!</span>
          </p>
        }
        secondDes={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span>
              En{' '}
              <span className="text-black">
                <span className="text-brand-300">AIGUA</span>ROCA
              </span>{' '}
              lo hacemos fácil:
            </span>
            <br />
            <span>
              Un simple pago común para reservar y la posibilidad de agregar a
              los que se apuntaran mas tarde al evento, sin problema. Lo que
              significa que no tienes que esperar a que todos se involucren
              antes de reservar el alojamiento y las actividades. Solo
              cobraremos para los que se apuntaran finalmente. El novio da igual
              si llega o no porque aunque
            </span>
            <br />
            <span>
              venga no le cobraremos las actividades. ¡Todos los novios son
              nuestros invitados!
              <br /> Todo planificado y… ¡listo!
              <br /> Sabemos dónde están los mejores pubs, qué proveedores de
              alojamiento aceptan despedidas de soltero y qué actividades
              combinan bien y tienen el toque necesario para una tremenda
              despedida…
              <br /> Lo tenemos controlado: contadnos vuestras ideas y el tiempo
              del que disponéis para celebrarlo en nuestra compañía y juntos
              crearemos vuestro mejor paquete para la despedida.
            </span>
          </p>
        }
        showSeeMore={true}
        activityName="Despedidas de solteros"
        priceLabel="Contactanos"
      />
      <DespedidasActivitySection showActivity={activity} />
      <ImageOverlay
        img={stagHenPartyOverlay.src}
        title={
          <span>
            Tu Super-Despedida Multiaventura con{' '}
            <span className="text-brand-300">AIGUA</span>ROCA!
          </span>
        }
        para1="Solo dinos como quereis ridiculizar al novio y lo haremos"
        para2={
          <span>
            encantados. desde una sola actividad hasta un fin de semana entero.
            Lo prepararemos <span className="font-medium">TODO</span>
          </span>
        }
        buttonText="Contactanos para una despedida Personalizada"
        onButtonClick={openModal}
      />
      <MultiActivity />
      <Recommend />
      <LastHeading />
    </>
  );
};

export default DespedidasClient;
