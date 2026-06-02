import Image from "next/image";
import whatsapp from "@/assets/images/whatsApp.svg";

const WhatsAppButton = () => {
  return (
    <a
      id="whatsapp-floating-button"
      className="group fixed bottom-5 right-4 z-50 cursor-pointer rounded-full bg-[#25D366] p-3 shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:right-6 lg:bottom-6 lg:right-8"
      href="https://wa.me/+34649047282"
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="no-referrer"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src={whatsapp}
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-6 lg:h-10 lg:w-10"
        priority
      />
    </a>
  );
};

export default WhatsAppButton;
