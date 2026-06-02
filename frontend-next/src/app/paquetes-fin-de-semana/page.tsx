import { Metadata } from "next";
import { getSEOConfig } from "@/lib/seoConfig";
import PaquetesFinDeSemanClient from "./client";

export const metadata: Metadata = getSEOConfig("/paquetes-fin-de-semana").metadata;

export default function PaquetesFinDeSemanPage() {
  return <PaquetesFinDeSemanClient />;
}
