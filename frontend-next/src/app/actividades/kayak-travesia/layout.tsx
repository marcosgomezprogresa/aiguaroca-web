import { getSEOConfig } from "@/lib/seoConfig";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoConfig = getSEOConfig("/actividades/kayak-travesia");
  
  return {
    ...seoConfig.metadata,
  };
}

export default function KayakTravesiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
