'use client';

import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import corporateParty from '@/assets/images/corporate-party.svg';
import Heading from '@/components/ui/Heading';

const SecondGrid: React.FC = () => {
  const skills = [
    'Trabajar en equipo',
    'Liderazgo: Toma de Decisiones, Organización, Comunicación',
    'Capacidad de Afrontamiento en Entornos Cambiantes',
    'Solución de Problemas prácticos',
    'Motivacion',
  ];

  return (
    <div className="custom-container bg-[#FFF9ED] grid grid-cols-1 md:grid-cols-7 py-10 gap-10">
      <div className="md:col-span-4 leading-relaxed space-y-5">
        <Heading
          className="font-medium w-full"
          text="Habilidades Que Se Potencian En Nuestras Actividades"
        />
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-md bg-brand-300 flex items-center justify-center flex-none mt-1">
                <IoMdCheckmark size={16} color="black" />
              </div>
              <p className="text-neutral-800 leading-relaxed text-lg lg:text-xl">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-3">
        <img src={corporateParty.src} alt="corporate-party" className="w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default SecondGrid;
