'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import EquiposDeportivosActivitySection from '@/components/equipos-deportivos/EquiposDeportivosActivitySection';
import EquiposDeportivosModal from '@/components/equipos-deportivos/EquiposDeportivosModal';
import ImageOverlay from '@/components/ui/ImageOverlay';
import MultiActivity from '@/components/home/MultiActivity';
import LastHeading from '@/components/home/LastHeading';
import Recommend from '@/components/home/Recommend';
import equiposDeportivosIcon from '@/assets/images/equipos-deportivos-icon.svg';
import sportOverlay from '@/assets/images/sport-overlay.svg';
import sport from '@/assets/images/sport.svg';

const EquiposDeportivosClient: React.FC = () => {
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
  ];

  return (
    <>
      {modal && (
        <EquiposDeportivosModal title="Equipos Deportivos" closeModal={closeModal} />
      )}
      <ActivityHero
        openModal={openModal}
        img={sport.src}
        title="Equipos Deportivos"
        icon={equiposDeportivosIcon.src}
        breadCrumsPaths={['Home', 'Equipos Deportivos']}
        heading="El Respiro que se merecen!"
        subHeading="Diversion en Equipo"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            Cada año llega un momento cuando{' '}
            <span className="highlighted__text">
              los equipos deportivos deciden airearse con una salida fuera de su
              ámbito.
            </span>{' '}
            La gran gran mayoria de{' '}
            <span className="highlighted__text">
              los entrenadores prefieren
            </span>{' '}
            llevar a sus deportistas
            <span className="highlighted__text">
              {' '}
              al aire libre.
              <br />
            </span>
            <span className="highlighted__text">
              {' '}
              ¿Tenéis un calendario de entrenes y hay que respetarlo?
            </span>{' '}
            <br />
            No te preocupes,{' '}
            <span className="highlighted__text">somos flexibles. </span>
            Podemos organizaros desde una simple actividad, hasta varias
            jornadas multiaventura con{' '}
            <span className="highlighted__text">
              todo lo que necesite vuestro programa{' '}
            </span>
            ya sea preestablecido o que aun este por organizar. Haremos posible
            que{' '}
            <span className="highlighted__text">
              todos recarguen las pilas al 100%{' '}
            </span>
            y al mismo tiempo disfruten de{' '}
            <span className="highlighted__text">
              {' '}
              una salida muy divertida.
            </span>
          </p>
        }
        secondDes={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span>
              Entendemos muy bien vuestras limitaciones y lo difícil que puede
              ser encajar una salida con el equipo y cuadrarlo con los
              entrenamientos, ya que en nuestro stuff tenemos ex deportistas de
              elite.
            </span>
            <br />
            <br />
            <span>
              Os ayudaremos y haremos la gestion y la organización fácil, que
              esa carga no sea solo vuestra…
              <br /> Al final de la jornada quedara menos de esa tensión, típica
              de un largo periodo de entrenamientos. Lo prometemos!🙂
              <br /> Algunas de las actividades mas divertidas y mas recordadas
              en la historia de AIGUAROCA han sido con equipos deportivos!
            </span>
          </p>
        }
        activityName="Equipos Deportivos"
        showSeeMore={true}
        priceLabel="Contactanos"
      />
      <EquiposDeportivosActivitySection showActivity={activity} />
      <ImageOverlay
        img={sportOverlay.src}
        title="Actividades personalizadas para tu Equipo"
        para1="Si necesitan un programa personalizado, adaptado"
        para2="a vuestras necesidades lo modelaremos juntos y lo tendreis a la carta"
        buttonText="Contactanos para un programa personalizado"
        onButtonClick={openModal}
      />
      <MultiActivity />
      <Recommend />
      <LastHeading />
    </>
  );
};

export default EquiposDeportivosClient;
