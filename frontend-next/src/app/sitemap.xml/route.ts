import { getAllRoutes } from '@/lib/seoUtils'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const routes = getAllRoutes()

  // Generate XML sitemap with proper namespaces and formatting
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified.toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    </url>`
  )
  .join('\n')}
  </urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'all',
    },
  })
}
