'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutSection from '@/components/about/AboutSection';
import AboutGallery from '@/components/about/AboutGallery';
import AboutAdventure from '@/components/about/AboutAdventure';
import MultiActivity from '@/components/home/MultiActivity';
import LastHeading from '@/components/home/LastHeading';

const AboutClient: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <AboutGallery />
      <AboutAdventure />
      <MultiActivity />
      <LastHeading />
    </>
  );
};

export default AboutClient;
