"use client";

import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    <section className="custom-container py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-neutral-950 p-8 text-white lg:p-12">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-300/25 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">
                Contacto
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl">
                Cuéntanos tu plan y te ayudamos a cerrarlo
              </h1>
              <p className="text-base leading-relaxed text-white/75 lg:text-lg">
                Respondemos rápido por email o teléfono. Indica fecha, grupo y
                actividad para darte una respuesta más precisa.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <span className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                Reservas para familias, colegios, empresas y grupos
              </span>
              <span className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                Actividades en Venta del Moro y río Cabriel
              </span>
              <span className="rounded-2xl border border-brand-300/30 bg-brand-300/10 px-4 py-3 text-brand-200">
                Respuesta habitual en menos de 24 h laborables
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-8 p-5 md:p-10 lg:p-12">
        <form className="space-y-8" onSubmit={contactHandler}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <PhoneNumberContainer
              value={phone}
              onChange={(value) => setPhone(value)}
              label="Telefono"
              readOnly={loading}
            />
            <div className="w-full h-1" />
          </div>
          <div className="space-y-2 w-full text-lg">
            <TextAreaContainer
              label="Tu mensaje"
              rows={6}
              placeholder="Cuéntanos fecha, número de personas y actividad de interés..."
              value={message}
              onchange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.target.value);
              }}
              readOnly={loading}
            />
            <p className="text-sm text-neutral-500">
              Tus datos se usan solo para responder a tu consulta. No compartimos
              información con terceros.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:items-start">
            <Button
              type="submit"
              className="w-full justify-center gap-3 rounded-2xl p-4 text-lg sm:w-fit sm:px-12"
              icon={<GoDotFill />}
            >
              {loading ? (
                <RiLoader4Line className="animate-spin text-center text-2xl" />
              ) : (
                <p>Enviar</p>
              )}
            </Button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;
