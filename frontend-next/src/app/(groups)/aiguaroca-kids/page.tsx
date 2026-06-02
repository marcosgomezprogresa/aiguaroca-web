import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import AiguarocaKidsClient from './client';

export const metadata: Metadata = getSEOConfig('/aiguaroca-kids').metadata;

export default function AiguarocaKidsPage() {
  return <AiguarocaKidsClient />;
}
