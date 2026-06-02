import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import FamiliasClient from './client';

export const metadata: Metadata = getSEOConfig('/familias').metadata;

export default function FamiliasPage() {
  return <FamiliasClient />;
}
