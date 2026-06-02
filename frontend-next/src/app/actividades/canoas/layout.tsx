import { getSEOConfig } from "@/lib/seoConfig";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoConfig = getSEOConfig("/actividades/canoas");
  
  return {
    ...seoConfig.metadata,
  };
}

export default function CanoasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
