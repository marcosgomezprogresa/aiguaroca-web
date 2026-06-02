import { Metadata } from 'next';
import { getSEOConfig } from '@/lib/seoConfig';
import RaftingPageClient from './client';

// Export metadata for SEO
export const metadata: Metadata = getSEOConfig('/actividades/rafting').metadata;

export default function RaftingPage() {
  return <RaftingPageClient />;
}
