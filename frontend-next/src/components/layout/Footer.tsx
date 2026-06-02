"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/logo-white.svg";
import comp1 from "@/assets/images/comp-1.svg";
import comp2 from "@/assets/images/comp-2.svg";
import comp3 from "@/assets/images/comp-3.svg";
import comp4 from "@/assets/images/comp-4.svg";
import comp5 from "@/assets/images/comp-5.svg";
import comp6 from "@/assets/images/comp-6.svg";
import comp7 from "@/assets/images/comp-7.svg";
import comp8 from "@/assets/images/comp-8.svg";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { emailRegex } from "@/lib/utils";
import { RiLoader4Line } from "react-icons/ri";
import { activityNavRoutes, legalRoutes, offerNavRoutes } from "@/lib/routes";

const Footer = () => {
  const navCol1 = {
    title: "Actividades",
    links: activityNavRoutes,
  };

  const navCol2 = {
    name: "Ofertas Multiaventura",
    paths: offerNavRoutes,
  };

  const socialArr = [
    { icon: <FaFacebookF size={20} />, link: "https://m.facebook.com/aiguarocamultiaventura/" },
    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/aiguaroca/" },
    { icon: <FaYoutube size={20} />, link: "https://youtube.com/@aiguaroca?si=PBaxYtyV14nEm7Ae" },
    { icon: <FaXTwitter size={20} />, link: "https://x.com/aiguaroca?s=11" },
    { icon: <FaTiktok size={20} />, link: "https://www.tiktok.com/@aiguaroca?_t=ZN-8w1PPTNuJnS&_r=1" },
  ];

  const policyArr = legalRoutes;

  const companyArr = [
    { img: comp1, alt: "comp1" },
    { img: comp2, alt: "comp2" },
    { img: comp3, alt: "comp3" },
    { img: comp4, alt: "comp4" },
    { img: comp5, alt: "comp5" },
    { img: comp6, alt: "comp6" },
    { img: comp7, alt: "comp7" },
    { img: comp8, alt: "comp8" },
  ];

  const mobCompanyArr = [
    { img: comp6, alt: "comp1" },
    { img: comp7, alt: "comp2" },
    { img: comp8, alt: "comp3" },
    { img: comp4, alt: "comp4" },
    { img: comp5, alt: "comp5" },
    { img: comp1, alt: "comp6" },
    { img: comp2, alt: "comp7" },
    { img: comp3, alt: "comp8" },
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribeHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return toast.error("Por favor proporcione correo electrónico");
    if (!emailRegex.test(email)) return toast.error("Correo electrónico no válido");
    
    setLoading(true);
    try {
      const axios = (await import("axios")).default;
      const res = await axios.post("/api/v1/subscribe", { email });
      if (res.status === 200 || res.status === 201) {
        setEmail("");
        toast.success("Gracias por suscribirte a nosotros");
      }
    } catch {
      toast.error("Error al suscribirte");
    } finally {
      setLoading(false);
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="px-2.5 lg:px-0 pb-5 lg:pb-0">
      <div className="bg-footer text-white rounded-3xl lg:rounded-none">
        <div className="custom-container pt-16 pb-5 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-12 border-b border-neutral-700">
            <p className="col-span-1 font-medium text-4xl">
              Suscribete a nuestras noticias
            </p>
            <form
              onSubmit={subscribeHandler}
              className="col-span-1 flex h-fit items-stretch bg-white text-lg rounded-lg"
            >
              <input
                readOnly={loading}
                type="text"
                value={email}
                placeholder="Introduce tu correo electrónico"
                className="bg-transparent px-5 outline-none w-full placeholder-neutral-700 text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-brand-300 text-black w-28 lg:w-54 text-sm lg:text-base text-left px-5 py-3 rounded-lg center"
              >
                {loading ? (
                  <RiLoader4Line className="animate-spin text-center text-2xl" />
                ) : (
                  <p>Suscribete</p>
                )}
              </Button>
            </form>
          </div>

          <div className="py-4 grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-28">
            <div className="col-span-1">
              <p className="font-semibold text-2xl">{navCol1.title}</p>
              <ul className="mt-4 space-y-2 text-lg">
                {navCol1.links.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="cursor-pointer w-fit hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <p className="font-semibold text-2xl">{navCol2.name}</p>
              <ul className="mt-4 space-y-2 text-lg">
                {navCol2.paths.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="cursor-pointer w-fit hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid grid-cols-5 gap-0 lg:gap-2">
                {socialArr.map((social, idx) => (
                  <a
                    className="cursor-pointer w-9 h-9 center rounded-full col-span-1"
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <p className="font-semibold text-2xl">Contacta con nosotros</p>
              <ul className="mt-4 space-y-2 text-lg">
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
                <li className="align-center items-start gap-2">
                  <FaPhoneAlt size={16} />
                  <div>
                    <a href="tel:649047282" className="cursor-pointer w-full">
                      649 047 282
                    </a>
                    <br />
                    <a href="tel:609261210" className="cursor-pointer w-full">
                      609 261 210
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="align-center gap-2"
                    href="https://www.google.es/maps/place/AIGUAROCA+deportes+de+aventura/@39.4853091,-1.356508,18.39z/data=!4m6!3m5!1s0xd673c77bbe4610d:0xbb62dcc3c9da8fc4!8m2!3d39.485357!4d-1.3563522!16s%2Fg%2F1tfk5sb5?hl=es&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLocationDot size={16} />
                    <p className="cursor-pointer w-fit">Nuestra Ubicación</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 pb-5 lg:pb-10">
            <Image
              src={logo}
              alt="Aiguaroca Logo"
              className="w-full lg:w-[60%] mx-auto"
            />
            <p className="mx-auto w-fit text-lg lg:text-xl font-semibold">
              Nº Registro Turismo: TA-17V
            </p>
          </div>

          <div className="align-center flex-row justify-between lg:justify-center lg:gap-12 pb-5">
            {policyArr.map((policy, idx) => (
              <Link
                href={policy.path}
                key={idx}
                className="cursor-pointer text-nowrap lg:w-fit text-[0.5rem] sm:text-[0.6rem] lg:text-lg underline"
              >
                {policy.label}
              </Link>
            ))}
          </div>

          <div className="bg-white rounded-lg lg:hidden">
            <div className="p-5 grid grid-cols-3 gap-8 items-center">
              {mobCompanyArr.slice(0, 3).map((company, idx) => (
                <div key={idx} className="center">
                  <Image
                    src={company.img}
                    alt={company.alt}
                    className="w-full object-contain"
                  />
                </div>
              ))}
              <div className="align-center gap-2 w-full col-span-3">
                {mobCompanyArr.slice(3).map((company, idx) => (
                  <Image
                    key={idx}
                    src={company.img}
                    alt={company.alt}
                    className="w-[16%] object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white hidden lg:block">
        <div className="px-12 py-6 grid grid-cols-5 gap-8 lg:grid-cols-8 lg:gap-4 items-center custom-container">
          {companyArr.map((company, idx) => (
            <div key={idx} className="col-span-1 center">
              <Image src={company.img} alt={company.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-footer text-white py-2 mt-5 lg:mt-0 rounded-full lg:rounded-none">
        <p className="text-center text-[0.6rem] lg:text-sm">
          © {year} AIGUAROCA. Todos los derechos reservados.
        </p>
        <div className="w-full center">
          <a
            href="https://www.venre.org"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="text-center text-[0.6rem] lg:text-sm mx-auto"
          >
            Diseño y desarrollo por{" "}
            <span className="text-brand-300 font-medium text-[0.8rem] lg:text-base">
              Venre
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
