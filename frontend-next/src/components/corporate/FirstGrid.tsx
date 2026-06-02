'use client';

import React from 'react';
import corporateProgram from '@/assets/images/corporate-program.svg';
import Heading from '@/components/ui/Heading';

const FirstGrid: React.FC = () => {
  return (
    <div className="custom-container bg-[#FFF9ED] grid grid-cols-1 md:grid-cols-7 py-10 gap-10">
      <div className="md:col-span-4 leading-relaxed space-y-5">
        <p className="text-brand-300 text-xl lg:text-3xl font-semibold">
          Nuestros programas
        </p>
        <Heading
          className="font-medium w-full"
          text="Forja Tu Super-equipo Con Programas De Actividades Basados En Naturaleza"
        />
        <p className="text-neutral-800 leading-relaxed text-xl lg:text-2xl w-full max-w-2xl">
          Nuestros programas han sido diseñados considerando la naturaleza como
          soporte escénico, y las distintas y entretenidas actividades de
          aventura que organizamos regularmente como los elementos que generan
          complicidad, lealtad y energizan a su equipo de trabajo.
        </p>
      </div>
      <div className="md:col-span-3">
        <img
          loading="eager"
          decoding="async"
          src={corporateProgram.src}
          alt="corporate-program"
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default FirstGrid;
