'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

const AboutSection: React.FC = () => {
  return (
    <div className="custom-container grid grid-cols-7 gap-10">
      <div className="col-span-7 lg:col-span-4 space-y-5 lg:space-y-10 w-full max-w-xl">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-brand-300">Nuestra Vision</p>
          <Heading
            className="font-medium"
            text="Dejar las preocupaciones de lado aunque sea por un dia!"
          />
        </div>
        <Link href="/dia-multiaventura">
          <Button
            className="hidden lg:flex p-3 gap-2 lg:text-xl bg-white text-black shadow border border-neutral-200"
          >
            Ofertas Multiaventura
          </Button>
        </Link>
      </div>
      <div className="col-span-7 lg:col-span-3 text-lg lg:text-2xl text-neutral-800">
        Nuestra visión es crear una realidad sostenible y equitativa donde
        nuestros ríos y montañas se disfruten y protejan, un lugar donde las
        familias y amigos puedan inspirarse, desafiarse y dejar las
        preocupaciones de lado aunque sea por un dia.
      </div>
    </div>
  );
};

export default AboutSection;
