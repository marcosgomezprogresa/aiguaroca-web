import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import { Rubik } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Aventura en Valencia | Deportes de Aventura - Aiguaroca",
  description:
    "Descubre la mejor aventura en Valencia con deportes de aventura y actividades de multiaventura para todos los niveles, en plena naturaleza.",
  keywords:
    "rafting valencia, kayak valencia, aventura valencia, rafting rio cabriel, actividades valencia, multiaventura valencia, deportes acuáticos valencia",
  openGraph: {
    title: "Aiguaroca - Rafting y Aventura en Valencia | Río Cabriel",
    description:
      "Disfruta de las mejores actividades de rafting, kayak y multiaventura en Valencia. Aiguaroca ofrece experiencias únicas en el Río Cabriel para familias, empresas y grupos.",
    url: "https://www.aiguaroca.com/",
    siteName: "Aiguaroca",
    images: [
      {
        url: "https://www.aiguaroca.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aiguaroca - Rafting y Aventura en Valencia",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiguaroca - Rafting y Aventura en Valencia | Río Cabriel",
    description:
      "Disfruta de las mejores actividades de rafting, kayak y multiaventura en Valencia.",
    images: ["https://www.aiguaroca.com/og-image.jpg"],
  },
  alternates: { 
    canonical: "https://www.aiguaroca.com/",
  },
  verification: {
    google: "uW3A-w4xs5IKvOwAf_GEZ17LP9yUnTzCs6vZuqteteM",
  },
 
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.aiguaroca.com" />
        <link rel="preconnect" href="https://www.aiguaroca.com" />
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="/cookie-banner/silktide-consent-manager.css"
        />
      </head>
      <body className={`${rubik.className} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P72GCZW');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P72GCZW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />

        {children}

        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
        <Script
          src="/cookie-banner/silktide-consent-manager.js"
          strategy="afterInteractive"
        />

        <Script
          id="silktide-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function waitForSilktide() {
        if (typeof window.silktideCookieBannerManager !== "undefined") {
          window.silktideCookieBannerManager.updateCookieBannerConfig({
            background: {
              showBackground: true
            },
            cookieIcon: {
              position: "bottomLeft"
            },
            cookieTypes: [
              {
                id: "necessary",
                name: "Necessary",
                description: "<p>Estas cookies son las que hacen que todo funcione. Nos ayudan a recordarte para que no tengas que iniciar sesión cada vez y respetan tus ajustes de privacidad. Sin ellas, la web no sería la misma.</p>",
                required: true
              },
              {
                id: "analytics",
                name: "Analytics",
                description: "<p>Utilizamos estas cookies para saber qué contenidos te interesan más y qué partes de la web podemos hacer más fáciles de usar. Todo el análisis es anónimo y nos ayuda a evolucionar.</p>",
                defaultValue: true
              },
              {
                id: "advertising",
                name: "Advertising",
                description: "<p>Queremos que te sientas como en casa. Estas cookies activan herramientas útiles y personalizan el contenido según lo que te gusta.</p>"
              }
            ],
            text: {
              banner: {
                description: "Usamos cookies para que la web funcione mejor, mostrarte contenido que te interese y entender cómo mejorar cada día. Puedes leer más en nuestra Política de Cookies.",
                acceptAllButtonText: "Aceptar",
                rejectNonEssentialButtonText: "Rechazar no esenciales",
                preferencesButtonText: "Preferencias"
              },
              preferences: {
                title: "Configurar preferencias de cookies",
                description: "<p>Tienes el control total: elige qué cookies quieres permitir y cuáles no. Los cambios que hagas se aplicarán a toda tu navegación en nuestra web.</p>"
              }
            }
          });
        } else {
          setTimeout(waitForSilktide, 100);
        }
      })();
    `,
          }}
        />   
      </body>
    </html>
  );
}
