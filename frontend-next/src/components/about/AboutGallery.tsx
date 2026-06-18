'use client';

import React from 'react';
import abt1 from '@/assets/images/abt-1.svg';
import abt2 from '@/assets/images/abt-2.svg';
import abt3 from '@/assets/images/abt-3.svg';
import type { StaticImageData } from 'next/image';

interface GalleryCard {
  img: StaticImageData;
  bedge: string;
  des: string;
}

const AboutGallery: React.FC = () => {
  const card: GalleryCard[] = [
    {
      img: abt1,
      bedge: 'Maxima seguridas',
      des: 'Garantizamos la máxima seguridad en las actividades, materiales de calidad y supervisión en todo momento.',
    },
    {
      img: abt2,
      bedge: 'Precios para todos',
      des: 'Además de unos Precios asequibles, en AIGUAROCA tendreis inmejorables Ofertas Multiaventura y paquetes de actividades Multiaventura en la Comunidad Valenciana.',
    },
    {
      img: abt3,
      bedge: 'Maxima diversion',
      des: 'Guiamos actividades dentro del Parque Natural de Las Hoces del Cabriel desde 2005 y sabemos el como hacer para que disfruteis al maximo en nuestra compañia.',
    },
  ];

  return (
    <div className="custom-container grid grid-cols-1 lg:grid-cols-3 gap-12 my-20 sr-stagger">
      {card.map((item, idx) => (
        <div key={idx} className="space-y-5">
          <div className="relative">
            <img
              loading="eager"
              decoding="async"
              src={item.img.src}
              alt="about-gallery"
              className="w-full rounded-xl"
            />
            <p className="absolute bottom-5 right-5 bg-white/80 text-lg lg:text-2xl px-5 py-2 rounded-xl">
              {item.bedge}
            </p>
          </div>
          <p className="lg:text-lg text-neutral-800">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutGallery;
