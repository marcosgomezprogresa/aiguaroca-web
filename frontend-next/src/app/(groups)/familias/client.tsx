'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import ActivitySection from '@/components/rafting/ActivitySection';
import FamiliasPetSection from '@/components/familias/FamiliasPetSection';
import FamiliasModal from '@/components/familias/FamiliasModal';
import MultiActivity from '@/components/home/MultiActivity';
import LastHeading from '@/components/home/LastHeading';
import activity from '@/assets/images/activity.svg';
import familiasIcon from '@/assets/images/familias-icon.svg';

const FamiliasClient: React.FC = () => {
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

  const familyActivities = [
    'Rafting Tamayo',
    'Circuito Multiaventura',
    'Kayak Travesia',
    'Canoa-Raft',
  ];

  return (
    <>
      {modal && <FamiliasModal title="Super Familias" closeModal={closeModal} />}

      <ActivityHero
        openModal={openModal}
        img={activity.src}
        title="Familias"
        icon={familiasIcon.src}
        breadCrumsPaths={['Home', 'Super Familias']}
        heading="Super Familias"
        subHeading="Inolvidables Aventuras en Familia"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            La <span className="highlighted__text">mamá</span>, el{' '}
            <span className="highlighted__text">papá</span>, el
            <span className="highlighted__text"> yayo, abuela</span>, el
            <span className="highlighted__text"> primo</span> Tony,{' '}
            <span className="highlighted__text">su mamá, su papá</span>, su{' '}
            <span className="highlighted__text">tío</span>, su{' '}
            <span className="highlighted__text">esposa</span>, sus hijos,{' '}
            <span className="highlighted__text">
              los hijos de los primos de sus hijos…....
              <br />
            </span>{' '}
            Para de contar.{' '}
            <span className="highlighted__text">¡Nos vamos todos!</span>
            <br />
            <span className="highlighted__text">Las familias solidas</span>{' '}
            pasan cada vez más tiempo juntos y nos alegra el corazón ser parte
            de ello.
            <br />
            Buscaremos los alojamientos que mejor se adapten a vuestra reunion
            de familia, estudiaremos con vosotros{' '}
            <span className="highlighted__text">
              las actividades que todos o la mayoria de la familia puedan
              realizar
            </span>{' '}
            y lo adaptaremos a vuestras necesidades
          </p>
        }
        secondDes={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span>
              ¡Contáctanos para comenzar a crear tu aventura familiar
              personalizada!
            </span>
            <br />
            <br />
            <span>
              ¡Trete a la familia a hacer rafting en el Rio Cabriel!
              <br /> Sólo porque el descenso lo haremos suave no significa que
              sera aburrido. Los niños gritarán, salpicarán, nadarán y jugarán,
              mientras que los &quot;seniors&quot; haran fotos… interrumpirán la diversion
              de los peques, protestaran un rato… y seguramente acabaran
              haciendo lo mismo que los niños!!!
            </span>
            <br />
            <span>
              Las actividades familiares de rafting en el río Cabriel se pueden
              realizar en el tramo Tamayo del río Cabriel, que es salvaje,
              pintoresco y te dejará boquiabierto.
            </span>
            <br />
            <span>
              Una vez que estés en el agua… ¡olvídado todo lo que no este con
              vosotros en la barca! Absorbidos por la grandeza del entorno lo
              pasareis en grande junto a los que mas quiereis.
            </span>
          </p>
        }
        showSeeMore={true}
        activityName="En Familia"
        priceLabel="Contactanos"
      />

      <ActivitySection showActivity={familyActivities}  />

      <FamiliasPetSection />

      <MultiActivity />

      <LastHeading />
    </>
  );
};

export default FamiliasClient;
