"use client";

import { HiMiniBars3 } from "react-icons/hi2";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const WHATSAPP_URL = "https://wa.me/+34649047282";
const PHONE_URL = "tel:649047282";
const PHONE_DISPLAY = "649 047 282";
const NAVBAR_ICON_SIZE = 22;

const Slider = dynamic(() => import("./Slider"), {
  ssr: false,
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div className="navbar-container sticky top-0 z-50">
        <div className="space-between max-w-[1550px] mx-auto">
          <Link href="/" className="cursor-pointer">
            <img
              src="/api/v1/assets/logo3.jpeg"
              alt="Aiguaroca Logo"
              className="logo cursor-pointer"
              loading="eager"
              decoding="async"
            />
          </Link>
          <div className="align-center gap-3 sm:gap-4 lg:gap-5 ml-auto">
            <a
              href={PHONE_URL}
              className="navbar-contact-link"
              aria-label={`Llamar al ${PHONE_DISPLAY}`}
            >
              <FaPhoneAlt size={NAVBAR_ICON_SIZE} className="shrink-0" />
              <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="navbar-contact-link"
              aria-label={`Contactar por WhatsApp al ${PHONE_DISPLAY}`}
            >
              <FaWhatsapp size={NAVBAR_ICON_SIZE} className="shrink-0 text-[#25D366]" />
              <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            </a>
            <button
              type="button"
              onClick={handleOpen}
              disabled={open}
              className="navbar-menu-button"
              aria-label="Abrir menú"
            >
              <HiMiniBars3 size={NAVBAR_ICON_SIZE} />
            </button>
          </div>
        </div>
      </div>
      {open && <Slider slide={open} close={handleClose} />}
    </>
  );
};

export default Navbar;
