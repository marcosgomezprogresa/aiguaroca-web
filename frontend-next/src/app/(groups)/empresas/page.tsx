import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import EmpresasClient from './client';

export const metadata: Metadata = getSEOConfig('/empresas').metadata;

export default function EmpresasPage() {
  return <EmpresasClient />;
}
