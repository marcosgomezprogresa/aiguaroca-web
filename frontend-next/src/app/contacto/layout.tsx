import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos | AIGUAROCA",
  description:
    "Ponte en contacto con AIGUAROCA. Disponible por teléfono, email o formulario de contacto. ¡Somos rápidos!",
  keywords: "contacto, teléfono, email, AIGUAROCA, actividades aventura",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
