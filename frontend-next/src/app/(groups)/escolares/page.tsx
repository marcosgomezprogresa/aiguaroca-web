import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import EscolaresClient from './client';

export const metadata: Metadata = getSEOConfig('/escolares').metadata;

export default function EscolaersPage() {
  return <EscolaresClient />;
}
