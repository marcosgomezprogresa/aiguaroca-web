"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Button from "@/components/ui/Button";
import InputContainer from "@/components/ui/InputContainer";
import PhoneNumberContainer from "@/components/ui/PhoneNumberContainer";
import TextAreaContainer from "@/components/ui/TextAreaContainer";
import { GoDotFill } from "react-icons/go";
import { toast } from "sonner";
import { emailRegex } from "@/lib/utils";
import { RiLoader4Line } from "react-icons/ri";
import axios from "axios";

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const activity = searchParams.get("actividad")?.trim();
    if (!activity) return;

    setMessage((current) => {
      if (current.trim().length > 0) return current;
      return `Hola, me gustaría reservar: ${activity}.`;
    });
  }, [searchParams]);

  const contactHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("Por favor proporcione su nombre");
    if (!email) return toast.error("Por favor proporcione correo electrónico");
    if (!emailRegex.test(email))
      return toast.error("Correo electrónico no válido");
    if (!phone) return toast.error("Por favor proporcione un número de teléfono");
    if (!message) return toast.error("Por favor proporcione un mensaje");

    setLoading(true);
    try {
      const data = {
        name: name,
        email: email,
        phone: "+34 " + phone,
        message: message,
      };
      const res = await axios.post("/api/v1/contact", data);
      if (res.status === 200 || res.status === 201) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success("Gracias al contacto");
      }
    } catch {
      toast.error("Error al contactar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="custom-container py-10 sm:py-14 lg:py-20">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:rounded-[1.75rem] sm:shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative overflow-hidden bg-neutral-950 p-6 text-white sm:p-8 lg:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-brand-300/20 blur-3xl sm:h-64 sm:w-64 sm:bg-brand-300/25" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl sm:h-64 sm:w-64 sm:bg-brand-500/25" />
          <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:min-h-full lg:justify-between lg:gap-12">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300 sm:text-sm sm:tracking-[0.25em]">
                Contacto
              </p>
              <h1 className="max-w-xl text-2xl font-black leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl">
                Cuéntanos tu plan y te ayudamos a cerrarlo
              </h1>
              <p className="max-w-lg text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
                Respondemos rápido por email o teléfono. Indica fecha, grupo y
                actividad para darte una respuesta más precisa.
              </p>
            </div>
            <div className="grid gap-2.5 text-sm sm:gap-3">
              <span className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-2.5 backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
                Reservas para familias, colegios, empresas y grupos
              </span>
              <span className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-2.5 backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
                Actividades en Venta del Moro y río Cabriel
              </span>
              <span className="rounded-xl border border-brand-300/30 bg-brand-300/10 px-3.5 py-2.5 text-brand-200 sm:rounded-2xl sm:px-4 sm:py-3">
                Respuesta habitual en menos de 24 h laborables
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-8 lg:p-12">
          <form className="space-y-6 sm:space-y-8" onSubmit={contactHandler}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              <InputContainer
                icon={<FaUser />}
                label="Nombre"
                placeholder="María"
                value={name}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const rawValue = e.target.value;
                  const processedValue = rawValue.replace(/[^a-zA-Z\s]/g, "");
                  setName(processedValue);
                }}
                readOnly={loading}
              />
              <InputContainer
                icon={<FaEnvelope />}
                label="Email"
                placeholder="maria@email.com"
                value={email}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                readOnly={loading}
              />
            </div>

            <PhoneNumberContainer
              value={phone}
              onChange={(value) => setPhone(value)}
              label="Telefono"
              readOnly={loading}
            />

            <div className="w-full min-w-0 space-y-2 text-base sm:text-lg">
              <TextAreaContainer
                label="Tu mensaje"
                rows={5}
                placeholder="Cuéntanos fecha, número de personas y actividad de interés..."
                value={message}
                onchange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(e.target.value);
                }}
                readOnly={loading}
              />
              <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
                Tus datos se usan solo para responder a tu consulta. No compartimos
                información con terceros.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full justify-center gap-3 rounded-2xl p-4 text-base sm:w-fit sm:px-12 sm:text-lg"
              icon={<GoDotFill />}
            >
              {loading ? (
                <RiLoader4Line className="animate-spin text-center text-2xl" />
              ) : (
                <p>Enviar</p>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
