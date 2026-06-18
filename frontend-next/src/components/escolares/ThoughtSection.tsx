'use client';

import React from 'react';
import img1 from '@/assets/images/thought-img.svg';
import img2 from '@/assets/images/thought-bubble.svg';

const ThoughtSection: React.FC = () => {
  return (
    <div className="custom-container grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-10 mt-10 lg:mt-20 sr-stagger">
      <div className="col-span-1 lg:col-span-4">
        <img
          loading="eager"
          decoding="async"
          src={img1.src}
          alt="dog"
          className="w-full h-auto lg:h-[50dvh] 2xl:h-[450px] rounded-2xl object-cover"
        />
      </div>
      <div className="col-span-1 lg:col-span-5 lg:col-start-7 space-y-5 lg:space-y-10">
        <img
          loading="eager"
          decoding="async"
          src={img2.src}
          alt="Bubble"
          className="w-24 lg:w-36"
        />
        <p className="text-xl lg:text-3xl">Incluimos reportraje Fotografico</p>
        <p className="text-brand-300 font-medium text-2xl lg:text-6xl">
          Las aventuras seran Recuerdos para toda la vida!
        </p>
      </div>
    </div>
  );
};

export default ThoughtSection;
