import HideCookieIconOnMobile from "@/components/layout/HideCookieIconOnMobile";

export default function ActividadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HideCookieIconOnMobile />
      {children}
    </>
  );
}
