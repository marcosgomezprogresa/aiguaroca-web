import React from 'react';
import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import CumpleañosClient from './client';

export const metadata: Metadata = getSEOConfig('/cumpleanos').metadata;

export default function CumpleañosPage() {
  return <CumpleañosClient />;
}

