'use client';

import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Heading from '@/components/ui/Heading';

interface BenefitDetail {
  del1: string;
  del2: string;
}

const TeamBuilding: React.FC = () => {
  const details: BenefitDetail[] = [
    {
      del1: 'Ayuda a identificar los factores que frenan la integración y desarrollo del equipo.',
      del2: 'Aumento significativo del rendimiento.',
    },
    {
      del1: 'Ayuda a resolver conflictos del equipo',
      del2: 'Aumenta la cohesión grupal de su equipo de trabajo',
    },
    {
      del1: 'Mejora el clima laboral, la integración del trabajador en la empresa',
      del2: 'Optimización del trabajo en equipo',
    },
    {
      del1: 'Aumenta la motivación',
      del2: 'Clarificación de ideas y objetivos',
    },
    {
      del1: 'Mejora la comunicación entre los miembros del equipo',
      del2: 'Detección de los puntos débiles del equipo ',
    },
  ];

  return (
    <div className="custom-container bg-brand-300/10 flex flex-col items-center rounded-2xl md:px-28 py-10 gap-5 my-16">
      <Heading
        className="font-medium"
        text="Beneficios del Team-Building"
      />
      <div className="grid grid-rows-5 gap-5">
        {details.map((d, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-3 md:gap-10 text-neutral-800 text-lg lg:text-2xl"
          >
            <div className="align-center items-start gap-3">
              <div className="w-5 lg:w-10 h-5 lg:h-10 rounded-md lg:rounded-xl bg-brand-300 flex items-center justify-center flex-none mt-1 lg:mt-0">
                <IoMdCheckmark color="black" />
              </div>
              <p>{d.del1}</p>
            </div>
            <div className="align-center items-start gap-3">
              <div className="w-5 lg:w-10 h-5 lg:h-10 rounded-md lg:rounded-xl bg-brand-300 flex items-center justify-center flex-none mt-1 lg:mt-0">
                <IoMdCheckmark color="black" />
              </div>
              <p>{d.del2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBuilding;
