'use client';

import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';

const AboutHero: React.FC = () => {
  return (
    <div className="custom-container grid grid-cols-7 gap-10 py-10 lg:py-20 sr-stagger">
      <div className="col-span-7 lg:col-span-4 space-y-10 w-full max-w-xl">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-black">
            Sobre <span className="text-brand-300">AIGUA</span>ROCA
          </p>
          <Heading
            className="font-medium"
            text="Tu empresa MultiAventura de confianza desde 2005"
          />
        </div>
        <p className="lg:text-2xl text-neutral-800">
          Somos empresa formada por profesionales del mundo del turismo activo,
          con una larga trayectoria tanto en la práctica deportiva como en la
          gestión de actividades multiaventura.
        </p>
        <Link href="/actividades">
          <Button className="p-3 gap-2 lg:text-xl" icon={<GoDotFill />}>
            Ofertas Multiaventura
          </Button>
        </Link>
      </div>
      <div className="col-span-7 lg:col-span-3">
        <img
          loading="eager"
          decoding="async"
          src="/api/v1/assets/about/about-1.png"
          alt="about-hero"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutHero;
