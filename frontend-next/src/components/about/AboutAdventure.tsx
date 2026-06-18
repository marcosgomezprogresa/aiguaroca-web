'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { GoDotFill } from 'react-icons/go';
import abtAdv from '@/assets/images/abt-adv.svg';
import Link from 'next/link';

const AboutAdventure: React.FC = () => {
  return (
    <div className="bg-brand-100">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-28 py-14 sr-stagger">
        <div className="space-y-10 w-full max-w-lg">
          <div className="space-y-3">
            <p className="text-xl font-semibold text-brand-300">
              Nuestra Mision
            </p>
            <h2 className="font-medium text-3xl lg:text-5xl">
              Aventuras para <br className="hidden md:block" /> todos!
            </h2>
          </div>
          <p className="text-neutral-600 lg:text-xl">
            Queremos acercar los deportes al aire libre y las actividades
            multiaventura a todos los públicos, edades y niveles: jóvenes,
            mayores, personas con discapacidades, familias con niños, escolares,
            empresas, equipos deportivos etc.
            <br /> Nuestra misión es llevaros a experimentar estos medios en su
            forma mas pura sin dejar nunca de lado la seguridad
          </p>
          <div>
            <p className="lg:text-xl text-neutral-600">Pero sobretodo…</p>
            <p className="text-brand-300 text-lg lg:text-xl">
              QUEREMOS VER VUESTRAS MEJORES SONRISAS
            </p>
          </div>
          <Link href="/paquetes-fin-de-semana">
            <Button className="p-2 gap-2 lg:text-xl" icon={<GoDotFill />}>
              Nuestros Pack Multiaventura
            </Button>
          </Link>
        </div>
        <div>
          <img
            loading="eager"
            decoding="async"
            src={abtAdv.src}
            className="w-full rounded-2xl"
            alt="about-adventure"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAdventure;
