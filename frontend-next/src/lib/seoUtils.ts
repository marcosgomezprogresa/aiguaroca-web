import { BASE_URL, sitemapRoutes } from "./routes";

// Function to get all routes as a flat array for sitemap generation
export function getAllRoutes(): Array<{
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}> {
  const routes: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
  }> = []
  
  sitemapRoutes.forEach(route => {
    routes.push({
      url: `${BASE_URL}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  })

  return routes
}

// Function to generate robots rules for all allowed paths
export function getAllowedPaths(): string[] {
  const paths: string[] = []
  
  sitemapRoutes.forEach(route => {
    paths.push(route.path)
  })
  
  // Add general patterns
  paths.push('/actividades/')
  
  return paths
}

// SEO utility functions
export const seoUtils = {
  // Get canonical URL for a path
  getCanonicalUrl: (path: string): string => {
    return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  },

  // Get Open Graph image URL for activities
  getActivityImage: (activitySlug: string): string => {
    const imageMap: Record<string, string> = {
      'rafting': '/api/v1/assets/activity/tamayo.png',
      'rafting-tamayo': '/api/v1/assets/activity/tamayo.png',
      'rafting-cabriel': '/api/v1/assets/activity/cabrial.png',
      'circuito-multiaventura': '/api/v1/assets/activity/circito.png',
      'kayak-en-aguas-bravas': '/api/v1/assets/activity/kayak.png',
      'kayak-travesia': '/api/v1/assets/activity/kayak-travesia.png',
      'canoas': '/api/v1/assets/activity/canoas.png',
      'barranco-acuatico': '/api/v1/assets/activity/barranco.png',
      'paintball': '/api/v1/assets/activity/paintball.png',
    }

    return `${BASE_URL}${imageMap[activitySlug] || '/api/v1/assets/Logo.png'}`
  },

  // Generate breadcrumb JSON-LD
  generateBreadcrumbJsonLd: (items: Array<{ name: string; url: string }>): object => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
  },

  // Generate FAQ JSON-LD
  generateFAQJsonLd: (faqs: Array<{ question: string; answer: string }>): Record<string, unknown> => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  },
}

export default seoUtils