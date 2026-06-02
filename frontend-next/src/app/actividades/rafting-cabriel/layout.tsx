import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafting en Las Hoces del Cabriel - Venta del Moro | AIGUAROCA",
  description:
    "Rafting avanzado en Las Hoces del Cabriel. Descenso de 20km en aguas bravas con monitores expertos. Ideal para aventureros experimentados.",
  keywords: "Rafting avanzado, Las Hoces del Cabriel, Venta del Moro, aguas bravas, Valencia",
};

export default function RaftingCabrielLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
