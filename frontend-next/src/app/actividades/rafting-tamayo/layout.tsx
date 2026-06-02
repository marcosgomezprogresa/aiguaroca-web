import type { Metadata } from "next";
import Script from "next/script";
import { getSEOConfig } from "@/lib/seoConfig";
import { seoUtils } from "@/lib/seoUtils";

export const metadata: Metadata = getSEOConfig("/actividades/rafting-tamayo").metadata;

export default function RaftingTamayoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { structuredData } = getSEOConfig("/actividades/rafting-tamayo");

  // Generate breadcrumb JSON-LD
  const breadcrumbSchema = seoUtils.generateBreadcrumbJsonLd([
    { name: 'Inicio', url: 'https://www.aiguaroca.com/' },
    { name: 'Actividades', url: 'https://www.aiguaroca.com/actividades' },
    { name: 'Rafting', url: 'https://www.aiguaroca.com/actividades/rafting' },
    { name: 'Rafting Tamayo', url: 'https://www.aiguaroca.com/actividades/rafting-tamayo' }
  ]);

  // Generate FAQ JSON-LD based on the FAQ data from the page
  const faqSchema = seoUtils.generateFAQJsonLd([
    {
      question: "¿Cuál es el nivel de dificultad del Rafting en Tamayo?",
      answer: "El descenso de Rafting en Tamayo es de nivel iniciación, adaptable para todas las edades. Es ideal para familias y principiantes. El recorrido es de 6 km con una duración de 2 horas."
    },
    {
      question: "¿Cuál es la edad mínima para el Rafting en Tamayo?",
      answer: "La edad mínima para participar en el Rafting en Tamayo es de 6 años, lo que lo hace ideal para familias con niños."
    },
    {
      question: "¿Qué incluye la actividad de Rafting en Tamayo?",
      answer: "La actividad incluye todo el equipo necesario: barca neumática, remos, casco, chaleco salvavidas, pantalón y chaqueta de neopreno. También incluye equipo de seguridad (cuerdas de rescate, botiquín) y seguros de responsabilidad civil y accidentes."
    },
    {
      question: "¿Qué debo llevar para el Rafting en Tamayo?",
      answer: "Debes llevar bañador o bikini ajustado (para llevar bajo el neopreno), calzado deportivo que se pueda mojar, toalla, crema solar y otro calzado de recambio."
    },
    {
      question: "¿En qué temporada se puede hacer Rafting en Tamayo?",
      answer: "La actividad de Rafting en Tamayo se puede realizar durante todo el año en el Río Cabriel."
    }
  ]);

  return (
    <>
      {structuredData && (
        <Script
          id="rafting-tamayo-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      <Script
        id="rafting-tamayo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="rafting-tamayo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
