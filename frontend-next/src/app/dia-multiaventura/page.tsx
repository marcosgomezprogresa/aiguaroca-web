import { Metadata } from "next";
import { getSEOConfig } from "@/lib/seoConfig";
import DiaMultiaventuraClient from "./client";

export const metadata: Metadata = getSEOConfig("/dia-multiaventura").metadata;

export default function DiaMultiaventuraPage() {
  return <DiaMultiaventuraClient />;
}
