"use client";

import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import Link from "next/link";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch";
import {
  activityNavRoutes,
  groupNavRoutes,
  offerNavRoutes,
  routes,
} from "@/lib/routes";

const navArr1 = {
  title: "Actividades",
  links: activityNavRoutes,
};

const navArr2 = {
  title: "Ofertas Multiaventura",
  links: offerNavRoutes,
};

const navArr3 = {
  title: "Grupos",
  links: groupNavRoutes,
};

interface SliderProps {
  slide: boolean;
  close: () => void;
}

const Slider: React.FC<SliderProps> = ({ slide, close }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);
  const { prefetchRoute, prefetchRoutes } = useRoutePrefetch();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
      close();
    }
  }, [close]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const menuRoutes = useMemo(
    () => [
      ...navArr1.links.map((item) => item.path),
      ...navArr2.links.map((item) => item.path),
      ...navArr3.links.map((item) => item.path),
      routes.sobreNosotros.path,
      routes.contacto.path,
    ],
    [],
  );

  useEffect(() => {
    if (slide) {
      prefetchRoutes(menuRoutes);
    }
  }, [slide, prefetchRoutes, menuRoutes]);

  const navigateHandler = (path: string) => {
    if (!path) return;
    close();
    setTitle("");
    router.push(path);
  };

  return (
    <div
      ref={sliderRef}
      className={`sliding-panel ${slide ? "slide" : "close"}`}
    >
      <div className="custom-container slider-container">
        <Button
          onClick={close}
          className="bg-white text-[#242424] w-10 h-10 rounded-full center absolute top-3 md:top-5 right-3 md:right-5 cursor-pointer"
        >
          <FaXmark size={20} />
        </Button>

        {/* Desktop navigation */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr1.title); prefetchRoutes(navArr1.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl text-left"
              aria-expanded={title === navArr1.title}
            >
              {navArr1.title}
            </button>

            <ul className="space-y-3 mt-6">
              {navArr1.links.map((item) => (
                <li key={item.path} className="text-lg w-fit">
                  <Link href={item.path} className="cursor-pointer hover:underline" onClick={close} onMouseEnter={() => prefetchRoute(item.path)} onFocus={() => prefetchRoute(item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr2.title); prefetchRoutes(navArr2.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl text-left"
              aria-expanded={title === navArr2.title}
            >
              {navArr2.title}
            </button>

            <ul className="space-y-3 mt-6">
              {navArr2.links.map((item) => (
                <li key={item.path} className="text-lg w-fit">
                  <Link href={item.path} className="cursor-pointer hover:underline" onClick={close} onMouseEnter={() => prefetchRoute(item.path)} onFocus={() => prefetchRoute(item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-3 space-y-3">
              <li className="align-center gap-2">
                <FaRegEnvelope size={16} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="cursor-pointer w-fit"
                >
                  info@aiguaroca.com
                </a>
              </li>
              <li className="align-center gap-2">
                <FaPhoneAlt size={16} />
                <a href="tel:649047282" className="cursor-pointer w-full">
                  649 047 282
                </a>
              </li>
              <li className="align-center gap-2">
                <FaPhoneAlt size={16} />
                <a href="tel:609261210" className="cursor-pointer w-full">
                  609 261 210
                </a>
              </li>
              <li className="align-center gap-2">
                <FaLocationDot size={16} />
                <p className="cursor-pointer w-fit">Nuestra Ubicación</p>
              </li>
            </ul>

            <button
              onClick={() => navigateHandler(routes.sobreNosotros.path)}
              onMouseEnter={() => prefetchRoute(routes.sobreNosotros.path)}
              onFocus={() => prefetchRoute(routes.sobreNosotros.path)}
              className="text-lg cursor-pointer w-fit mt-3 hover:underline"
            >
              Sobre nosotros
            </button>
          </div>

          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr3.title); prefetchRoutes(navArr3.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl text-left"
              aria-expanded={title === navArr3.title}
            >
              {navArr3.title}
            </button>

            <ul className="space-y-3 mt-6">
              {navArr3.links.map((item) => (
                <li key={item.path} className="text-lg w-fit">
                  <Link href={item.path} className="cursor-pointer hover:underline" onClick={close} onMouseEnter={() => prefetchRoute(item.path)} onFocus={() => prefetchRoute(item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="grid lg:hidden grid-cols-1 gap-5 mt-4 py-16">
          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr1.title); prefetchRoutes(navArr1.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl space-between w-full text-left"
              aria-expanded={title === navArr1.title}
              aria-controls="mobile-actividades"
            >
              {navArr1.title}
              <IoCaretForwardOutline />
            </button>

            <nav
              id="mobile-actividades"
              aria-label="Actividades"
              className={`sliding-panel top-0 left-0 h-full w-full z-50 bg-[#242424] rounded-2xl transition-all duration-300
                ${title === navArr1.title ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
            >
              <div className="custom-container sliding-container space-y-2 py-10">
                <button
                  onClick={() => setTitle("")}
                  className="text-white font-medium text-xl center"
                >
                  <IoCaretBackOutline /> Volver
                </button>

                <ul className="mt-4 space-y-3">
                  {navArr1.links.map((item) => (
                    <li key={item.path} className="w-fit">
                      <Link
                        href={item.path}
                        className="text-xl text-white hover:underline"
                        onClick={() => { setTitle(""); close(); }}
                        onTouchStart={() => prefetchRoute(item.path)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr3.title); prefetchRoutes(navArr3.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl space-between w-full text-left"
              aria-expanded={title === navArr3.title}
              aria-controls="panel-grupos"
            >
              {navArr3.title}
              <IoCaretForwardOutline />
            </button>

            <nav
              id="panel-grupos"
              aria-label="Grupos"
              className={`sliding-panel top-0 left-0 h-full w-full z-50 bg-[#242424] rounded-2xl transition-all duration-300
                ${title === navArr3.title ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
            >
              <div className="custom-container sliding-container space-y-2 py-10">
                <button
                  onClick={() => setTitle("")}
                  className="text-white font-medium text-xl center"
                >
                  <IoCaretBackOutline /> Volver
                </button>

                <ul className="mt-4 space-y-3">
                  {navArr3.links.map((item) => (
                    <li key={item.path} className="text-xl w-fit">
                      <Link
                        href={item.path}
                        className="text-white hover:underline"
                        onClick={() => { setTitle(""); close(); }}
                        onTouchStart={() => prefetchRoute(item.path)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-span-1">
            <button
              onClick={() => { setTitle(navArr2.title); prefetchRoutes(navArr2.links.map((item) => item.path)); }}
              className="font-semibold text-2xl lg:text-3xl space-between w-full text-left"
              aria-expanded={title === navArr2.title}
              aria-controls="panel-ofertas"
            >
              {navArr2.title}
              <IoCaretForwardOutline />
            </button>

            <nav
              id="panel-ofertas"
              aria-label="Ofertas Multiaventura"
              className={`sliding-panel top-0 left-0 h-full w-full z-50 bg-[#242424] rounded-2xl transition-all duration-300
                ${title === navArr2.title ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
            >
              <div className="custom-container sliding-container space-y-2 py-10">
                <button
                  onClick={() => setTitle("")}
                  className="text-white font-medium text-xl center"
                >
                  <IoCaretBackOutline /> Volver
                </button>

                <ul className="mt-4 space-y-3">
                  {navArr2.links.map((item) => (
                    <li key={item.path} className="text-xl w-fit">
                      <Link
                        href={item.path}
                        className="text-white hover:underline"
                        onClick={() => { setTitle(""); close(); }}
                        onTouchStart={() => prefetchRoute(item.path)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <ul className="mt-3 space-y-3 text-xl">
              <li className="align-center gap-2">
                <FaRegEnvelope size={16} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="cursor-pointer w-fit"
                >
                  info@aiguaroca.com
                </a>
              </li>
              <li className="align-center gap-2">
                <FaPhoneAlt size={16} />
                <p className="cursor-pointer w-fit">649 047 282</p>
              </li>
              <li className="align-center gap-2">
                <FaPhoneAlt size={16} />
                <p className="cursor-pointer w-fit">609 261 210</p>
              </li>
              <li className="align-center gap-2">
                <FaLocationDot size={16} />
                <p className="cursor-pointer w-fit">Nuestra Ubicación</p>
              </li>
            </ul>

            <button
              onClick={() => navigateHandler(routes.sobreNosotros.path)}
              onTouchStart={() => prefetchRoute(routes.sobreNosotros.path)}
              className="text-lg cursor-pointer w-fit mt-3 hover:underline"
            >
              Sobre nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
