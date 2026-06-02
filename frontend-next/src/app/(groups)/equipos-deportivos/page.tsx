import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import EquiposDeportivosClient from './client';

export const metadata: Metadata = getSEOConfig('/equipos-deportivos').metadata;

export default function EquiposDeportivosPage() {
  return <EquiposDeportivosClient />;
}
