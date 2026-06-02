import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
     userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/loading',
          '/error',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/loading',
          '/error',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',      },
      {
        userAgent: 'Slurp', 
        allow: '/',      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',      },
      {
        userAgent: [
          'AhrefsBot',
          'MJ12bot',
          'SemrushBot',
          'DotBot',
          'MegaIndex',
          'BLEXBot',
          'spbot',
        ],
        disallow: '/',
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`],
    host: BASE_URL,
  }
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate every 24 hours