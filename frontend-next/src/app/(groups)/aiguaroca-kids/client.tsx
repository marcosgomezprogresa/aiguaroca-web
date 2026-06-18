'use client';

import React, { useEffect, useState } from 'react';
import ActivityHero from '@/components/ui/ActivityHero';
import AiguarocaKidsActivitySection from '@/components/aiguaroca-kids/AiguarocaKidsActivitySection';
import AiguarocaKidsModal from '@/components/aiguaroca-kids/AiguarocaKidsModal';
import ImageOverlay from '@/components/ui/ImageOverlay';
import agiKidIcon from '@/assets/images/agi-kid.svg';
import aiguarocaKidsImg from '@/assets/images/aiguaroca-kids.svg';
import kidsOverlay from '@/assets/images/kids-overlay.svg';

const AiguarocaKidsClient: React.FC = () => {
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
    'Circuito Multiaventura',
    'Kayak Travesia',
    'Canoa-Raft',
  ];

  return (
    <>
      {modal && (
        <AiguarocaKidsModal title="Aiguaroca Kids" closeModal={closeModal} />
      )}
      <ActivityHero
        openModal={openModal}
        img={aiguarocaKidsImg.src}
        title={
          <span>
            <span className="text-brand-300">AIGUA</span>ROCA Kids
          </span>
        }
        icon={agiKidIcon.src}
        breadCrumsPaths={['Home', 'Aiguaroca Kids']}
        heading="Los Nenes solo quieren diversion!"
        subHeading="Multiaventuras para los mas Pequeños"
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed font-medium">
            Adaptamos las actividades mas divertidas y emocionantes para
            vuestros hijos mas pequeños. Si tenéis nenes con 4 años o mas, ya
            pueden realizar algunas de nuestras super actividades!
          </p>
        }
        secondDes={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            <span>
              <br />
              <span className="font-medium text-xl lg:text-2xl">
                Rafting Kids
              </span>
              <br />
              <br />
              <span className="font-medium">
                Hacer rafting es tremendo! Pero para nuestros hijos… es muuucho
                más!!!{' '}
              </span>
              <br />
              <br /> Los jóvenes capitanes y aventureros aprenden a maniobrar la
              balsa a lo largo del río mientras los guías les harán divertidos
              juegos acuáticos para disfrutar aún más de esta increible
              experiencia. <br />
              <br />
              <br />
              Después de un descenso en{' '}
              <span className="font-medium">
                Rafting por el rio Cabriel
              </span>{' '}
              tendrán infinitas historias emocionantes para contar!
              <br /> <br />
              <ul className="list-disc list-inside font-medium">
                <li>Experiencia genial para tu familia!</li>
                <li>Un guía experimentado acompañara a usted y a sus hijos.</li>
                <li>Descenso mega divertido!</li>
                <li>A partir de 4 años!</li>
              </ul>
              <br />
              <br />
              <span className="highlighted__text">
                ¡Sé una súper mamá o un súper papá y reserva ahora unas plaza
                tara ti y tus hij@s en nuestros super barcos!{' '}
              </span>
              <br />
              <br />{' '}
              <span className="font-medium text-xl lg:text-2xl">
                Multiaventura Kids
              </span>
              <br />
              <br />
              <span className="font-medium">Estaran en su salsa!</span>
              <br />
              <br />
              <span>
                Trepando como monos, brincando, saltando y chillando a la vez.
                Así suele ser un día cualquiera para los super nenes que vienen
                al Circuito Multiaventura de{' '}
                <span className="text-black font-medium">
                  AIGUA<span className="text-brand-300">ROCA</span>
                </span>
              </span>
              <br />
              <br />
              <ul className="list-disc list-inside font-medium">
                <li>A partir de 6 Años!</li>
                <li>Super Experiencia!</li>
                <li>Diversion garantizada!</li>
              </ul>
              <br />
              <span className="highlighted__text">
                ¡Dormiran a pierna suelta, lo prometemos!{' '}
              </span>
            </span>
          </p>
        }
        showSeeMore={true}
        activityName="Nenes"
        priceLabel="Contactanos"
      />
      <div className="custom-container h-72 lg:h-fit py-10 lg:py-20 sr-reveal">
        <video
          src="/api/v1/videos/kids.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ pointerEvents: 'none' }}
          onClick={(e) => e.preventDefault()}
          className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
        />
      </div>
      <AiguarocaKidsActivitySection showActivity={activity} />
      <ImageOverlay
        img={kidsOverlay.src}
        title="Inicialos en el mundo de las super Aventuras"
        para1="Dinos la edad de los mas pequeños y lo valientes que son y "
        para2="juntos organizaremos las actividades que la mayoria de los nenes puedan hacer!"
        buttonText="Pregunta sobre actividades para los mas pequeños"
        onButtonClick={openModal}
      />
    </>
  );
};

export default AiguarocaKidsClient;
