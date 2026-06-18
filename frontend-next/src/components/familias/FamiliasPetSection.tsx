'use client';

import React from 'react';
import paw from '@/assets/images/paw.svg';
import dog from '@/assets/images/dog.svg';
import Button from '@/components/ui/Button';
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';

const FamiliasPetSection: React.FC = () => {
  return (
    <div className="custom-container mb-10 grid grid-cols-1 gap-5 border-y border-neutral-200/60 bg-white pt-10 lg:grid-cols-10 lg:gap-10">
      <div className="hidden lg:block lg:col-span-4">
        <img
          loading="eager"
          decoding="async"
          src={dog.src}
          alt="dog"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="col-span-1 lg:col-span-5 lg:col-start-6 space-y-5 lg:space-y-10 pb-5">
        <img
          loading="eager"
          decoding="async"
          src={paw.src}
          alt="Paw"
          className="w-24 lg:w-36"
        />
        <div className="text-lg lg:text-xl text-brand-300">
          <p>No lo dejes en casa !!!</p>
        </div>
        <div className="flex lg:hidden col-span-1 overflow-hidden rounded-2xl">
          <img
            loading="eager"
            decoding="async"
            src={dog.src}
            alt="dog"
            className="w-full h-auto"
          />
        </div>
        <p className="text-brand-300 font-medium text-2xl lg:text-6xl">
          Le hacemos un hueco en la barca? 😍
        </p>
        <p className="text-xl lg:text-2xl">
          Preguntanos sobre las actividades donde puedes llevar a tu perro
        </p>
        <Link href="/contacto">
          <Button
            className="px-4 py-2 gap-2 rounded-2xl text-base lg:text-xl w-fit h-fit"
            icon={<GoDotFill />}
          >
            Que puedo hacer con mi perro?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FamiliasPetSection;
