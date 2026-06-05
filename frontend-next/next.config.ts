import type { NextConfig } from "next";
import process from "node:process";
import { routeAliases } from "./src/lib/routes";

const fallbackApiBase = "http://localhost:5000";
const configuredApiBase =
  process.env.API_BASE?.trim() || process.env.NEXT_PUBLIC_API_BASE?.trim();
const normalizedApiBase = (configuredApiBase && configuredApiBase.length > 0 ? configuredApiBase : fallbackApiBase).replace(/\/$/, "");
const apiBaseUrl = new URL(normalizedApiBase);
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Images/videos are in public/ (synced at build). No proxy in production — avoids 502 from API_BASE.
  async rewrites() {
    if (process.env.VERCEL || isProduction) {
      return [];
    }
    const isLocalApi =
      apiBaseUrl.hostname === "localhost" || apiBaseUrl.hostname === "127.0.0.1";
    if (!isLocalApi) {
      return [];
    }
    return [
      {
        source: "/api/v1/:path((?!assets/)(?!videos/).*)",
        destination: `${normalizedApiBase}/api/v1/:path*`,
      },
    ];
  },

  async redirects() {
    return routeAliases.map((route) => ({
      source: route.source,
      destination: route.destination,
      permanent: route.permanent,
    }));
  },

  // Image optimization for backend images
  images: {
    localPatterns: [
      {
        pathname: "/api/v1/assets/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: apiBaseUrl.protocol.replace(":", "") as "http" | "https",
        hostname: apiBaseUrl.hostname,
        port: apiBaseUrl.port,
        pathname: "/api/v1/**",
      },
      {
        protocol: "https",
        hostname: "aiguaroca.com",
        pathname: "/api/v1/**",
      },
      {
        protocol: "https",
        hostname: "www.aiguaroca.com",
        pathname: "/api/v1/**",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
        pathname: "/api/v1/**",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    qualities: [50, 70, 75, 85, 90, 95],
  },


  // Enable compression
  compress: true, 

  // React strict mode
  reactStrictMode: true,

  // Production optimizations
  poweredByHeader: false,

  // SEO and Performance optimizations
  experimental: isProduction
    ? {
        optimizeCss: true,
        optimizePackageImports: ["react-icons", "swiper"],
      }
    : {},

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/v1/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/v1/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Robots-Tag",
            value: "all",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;