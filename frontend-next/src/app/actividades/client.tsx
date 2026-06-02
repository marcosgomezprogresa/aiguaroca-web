'use client';

import React from 'react';
import SingleActivityHero from '@/components/home/SingleActivityHero';
import ActivitiesGallerySection from '@/components/home/ActivitiesGallerySection';
import MultiActivity from '@/components/home/MultiActivity';
import LastHeading from '@/components/home/LastHeading';
import ActivityCard from '@/components/cards/ActivityCard';
import { allActivitiesData } from '@/lib/data';

const ActivitiesPageClient: React.FC = () => {
  const imgArray = [
    '/api/v1/assets/carousal/carousal-1.png',
    '/api/v1/assets/carousal/carousal-2.png',
    '/api/v1/assets/carousal/carousal-3.png',
    '/api/v1/assets/carousal/carousal-4.png',
  ];

  return (
    <>
      <SingleActivityHero
        imgs={[
          '/api/v1/assets/singleActivity/img-2.png',
          '/api/v1/assets/singleActivity/img-3.png',
          '/api/v1/assets/singleActivity/img-1.png',
        ]}
        breadCrumsPaths={['Home', 'Actividades']}
        heading="Actividades para todas las edades & niveles fisicos"
        title="La Aventura Empieza Aqui - Elige la actividad perfecta para ti!"
      />

      {/* Activities Grid */}
      <div className="custom-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {allActivitiesData.map((activity, idx) => (
            <ActivityCard
              key={idx}
              img={activity.images}
              title={activity.title}
              des={activity.des}
              level={activity.level}
              age={activity.age}
              duration={activity.duration}
              prize={activity.prize}
              link={activity.link}
            />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <ActivitiesGallerySection images={imgArray} />

      {/* MultiActivity */}
      <MultiActivity />

      {/* Last Heading */}
      <LastHeading />
    </>
  );
};

export default ActivitiesPageClient;
