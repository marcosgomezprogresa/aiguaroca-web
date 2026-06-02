import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import AboutClient from './client';

export const metadata: Metadata = getSEOConfig('/sobre-nosotros').metadata;

export default function AboutPage() {
  return <AboutClient />;
}
