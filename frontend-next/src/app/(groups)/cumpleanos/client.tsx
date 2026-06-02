'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import CumpleañosActivitySection from '@/components/cumpleaños/CumpleañosActivitySection';
import CumpleañosCardsSwip from '@/components/cumpleaños/CumpleañosCardsSwip';
import CumpleañosModal from '@/components/cumpleaños/CumpleañosModal';
import ImageOverlay from '@/components/ui/ImageOverlay';
import LastHeading from '@/components/home/LastHeading';
import cumpleanosIcon from '@/assets/images/cumpleanos-icon.svg';
import birthdayOverlay from '@/assets/images/birthday-overlay.svg';

const CumpleañosClient: React.FC = () => {
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
    'Canoa-Raft',
    'Kayak Travesia',
  ];

  return (
    <>
      {modal && (
        <CumpleañosModal title="Cumpleaños y Celebraciones" closeModal={closeModal} />
      )}
      <div className="overflow-x-hidden">
        <ActivityHero
          openModal={openModal}
          img="/api/v1/assets/posters/cum.png"
          title="Cumpleaños y Celebraciones"
          icon={cumpleanosIcon.src}
          breadCrumsPaths={['Home', 'Cumpleaños y Celebraciones']}
          heading={
            <p className='font-normal text-3xl lg:text-4xl'>
              Fiestas de cumpleaños y celebraciones con{' '}
              <span className="text-brand-300">AIGUA</span>ROCA
            </p>
          }
          subHeading="Fiestas de Cumpleaños"
          des={
            <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
              <span className="highlighted__text">
                ¿Se acerca tu cumpleaños y aún no tienes idea de cómo
                celebrarlo?
              </span>{' '}
              ¡tenemos buenas opciones para ti! <br />{' '}
              <span className="highlighted__text">Únete a nosotros</span> para
              pasar
              <span className="highlighted__text"> tu gran día </span>en el río
              enfrentando los
              <span className="highlighted__text"> rápidos</span> y montando
              unas
              <span className="highlighted__text">
                {' '}
                epicas peleas entre las barcas! <br />
              </span>
              También puedes optar por el{' '}
              <span className="highlighted__text">
                Circuito Multiaventura, Kayak, Canoa-Raft{' '}
              </span>
              o cualquiera de{' '}
              <span className="highlighted__text">nuestras actividades</span>
            </p>
          }
          showSeeMore={false}
          activityName="Fiestas de Cumpleaños"
          priceLabel="Contactanos"
        />
        <CumpleañosCardsSwip />
        <CumpleañosActivitySection showActivity={activity} />
        <ImageOverlay
          img={birthdayOverlay.src}
          title={
            <p>
              Tu Super - Feliz Cumpleaños con{' '}
              <span className="text-brand-300">AIGUA</span>ROCA
            </p>
          }
          para1="Podemos organizarte desde una simple actividad hasta un fin de"
          para2="semana lleno de fiesta y actividades Multiaventura"
          buttonText="Contactanos para un cumpleaños personalizado"
          onButtonClick={openModal}
        />
       
        <LastHeading />
      </div>
    </>
  );
};

export default CumpleañosClient;
