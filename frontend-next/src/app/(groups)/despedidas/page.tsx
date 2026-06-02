import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import DespedidasClient from './client';

export const metadata: Metadata = getSEOConfig('/despedidas').metadata;

export default function DespedidasPage() {
  return <DespedidasClient />;
}
