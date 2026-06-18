'use client';

import React from 'react';
import TripCard from '@/components/cards/TripCard';
import kid from '@/assets/images/rafting-kid.svg';
import { RiGraduationCapFill } from 'react-icons/ri';
import type { StaticImageData } from 'next/image';

interface SchoolActivityItem {
  img: StaticImageData;
  name: string;
  person: string;
  activity: string;
}

interface SchoolActivitySectionProps {
  arr: SchoolActivityItem[];
  openModal: (idx: number) => void;
}

const SchoolActivitySection: React.FC<SchoolActivitySectionProps> = ({
  arr,
  openModal,
}) => {
  return (
    <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-8 lg:py-16 sr-stagger">
      {arr.map((item, index) => (
        <TripCard
          openModal={openModal}
          key={index}
          item={item}
          idx={index}
        />
      ))}
      <div className="relative rounded-4xl overflow-hidden hidden lg:inline-block">
        <img
          loading="eager"
          decoding="async"
          src={kid.src}
          alt="kid"
          className="w-full h-full object-cover"
        />
        <div className="text-4xl align-center items-start gap-5 w-full max-w-lg absolute z-10 bottom-0 px-5 pb-20">
          <div className="rounded-full bg-white w-14 h-14 flex items-center justify-center flex-none">
            <RiGraduationCapFill />
          </div>
          <p className="text-white font-semibold">
            La mejor recompensa para el fin de curso!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolActivitySection;
