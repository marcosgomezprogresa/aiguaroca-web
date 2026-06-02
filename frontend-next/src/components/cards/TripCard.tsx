'use client';

import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { GoDotFill } from 'react-icons/go';
import type { StaticImageData } from 'next/image';

interface TripCardProps {
  openModal: (idx: number) => void;
  item: {
    img: StaticImageData;
    name: string;
    person: string;
    activity: string;
  };
  idx: number;
}

const TripCard: React.FC<TripCardProps> = ({ openModal, item, idx }) => {
  return (
    <div className="space-y-3 lg:space-y-6">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          loading="eager"
          decoding="async"
          src={item.img.src}
          alt="trip"
          className="w-full object-cover"
        />
        <p className="absolute z-10 top-5 left-5 bg-white text-sm lg:text-base font-semibold p-2 rounded-lg">
          Monitores 24 Horas
        </p>
      </div>
      <p className="text-2xl lg:text-4xl font-medium text-neutral-900">
        {item.name}
      </p>
      <div className="align-center gap-4 text-sm lg:text-xl">
        <AiFillHome />
        <p className="font-semibold">Alojamiento</p>
        <p className="text-neutral-700 font-light">{item.person}</p>
      </div>
      <div className="align-center gap-4 text-sm lg:text-xl">
        <FaRocket />
        <p className="font-semibold">Actividades</p>
        <p className="text-neutral-700 font-light">{item.activity}</p>
      </div>
      <Button
        onClick={() => openModal(idx)}
        className="gap-2 px-3 py-2 rounded-xl"
        icon={<GoDotFill />}
      >
        Solicitar Precio
      </Button>
    </div>
  );
};

export default TripCard;
