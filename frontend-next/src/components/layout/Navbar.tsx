"use client";

import { HiMiniBars3 } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

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
              src="/api/v1/assets/Logo2.png"
              alt="Aiguaroca Logo"
              className="logo cursor-pointer"
              loading="eager"
              decoding="async"
            />
          </Link>
          <div className="align-center gap-4">
            <Link
              href="/contacto"
              className="button w-28 h-11 cursor-pointer center rounded-2xl"
            >
              Contacto
            </Link>
            <Button
              onClick={handleOpen}
              disabled={open}
              className="navbar-side-button bg-white text-black center"
            >
              <HiMiniBars3 size={22} />
            </Button>
          </div>
        </div>
      </div>
      {open && <Slider slide={open} close={handleClose} />}
    </>
  );
};

export default Navbar;
