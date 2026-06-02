import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barranco Acuático - Barranquismo en Enguidanos | Aiguaroca",
  description:
    "Descenso de barrancos con rappel, saltos y toboganes naturales. Aventura extrema en los barrancos de Enguidanos con guías expertos. Desde 45€.",
  keywords:
    "barranco acuático, barranquismo, descenso de barrancos, canyoning, rappel, aventura, Enguidanos, Cuenca, deporte extremo",
  openGraph: {
    title: "Barranco Acuático - Barranquismo en Enguidanos | Aiguaroca",
    description:
      "Descenso de barrancos con rappel, saltos y toboganes naturales. Aventura extrema en los barrancos de Enguidanos con guías expertos.",
    type: "website",
    locale: "es_ES",
    siteName: "Aiguaroca",
  },
};

export default function BarrancoAcuaticoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
