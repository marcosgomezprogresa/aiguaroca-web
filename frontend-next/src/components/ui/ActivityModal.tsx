"use client";

import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import InputContainer from "./InputContainer";
import PhoneNumberContainer from "./PhoneNumberContainer";
import TextAreaContainer from "./TextAreaContainer";
import { FaCalendarAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { emailRegex } from "@/lib/utils";
import { toast } from "sonner";
import { RiLoader4Line } from "react-icons/ri";
import {
  isNumericInput,
  normalizeNameInput,
  sendBookingEmail,
  validateBookingDateInput,
} from "@/lib/booking";

interface ActivityModalProps {
  closeModal: () => void;
  title: string;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ closeModal, title }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const validateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateBookingDateInput(e.target.value);
    setDate(result.value);
    setError(result.error);
  };

  const activityHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("Por favor proporcione nombre");
    if (!email) return toast.error("Por favor proporcione correo electrónico");
    if (!emailRegex.test(email)) return toast.error("Correo electrónico no válido");
    if (!date) return toast.error("Por favor proporcione una fecha");
    if (error) return toast.error("Por favor proporcione una fecha valida");
    if (!participants)
      return toast.error("Por favor proporcione el número de participantes");
    if (!phone) return toast.error("Por favor proporcione un número de teléfono");
    if (!message) return toast.error("Por favor proporcione un mensaje");
    
    setLoading(true);
    try {
      const data = {
        name: name,
        email: email,
        date: date,
        phone: "+34" + phone,
        participants: participants,
        message: message,
        extraNote: `Nombre de la actividad: ${title}`,
      };
      
      const res = await sendBookingEmail(data);
      
      if (res.status === 200 || res.status === 201) {
        setName("");
        setEmail("");
        setDate("");
        setPhone("");
        setMessage("");
        setParticipants("");
        toast.success("Gracias por contactarnos");
        closeModal();
      }
    } catch (error) {
      console.error("Contact error:", error);
      toast.error("Error al contactar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-full overflow-y-auto bg-black/50 backdrop-blur-sm md:py-20">
      <div className="custom-container relative mx-auto w-full max-w-6xl space-y-12 bg-white p-5 shadow-2xl shadow-black/20 md:rounded-[2rem] md:p-10">
        <div
          onClick={closeModal}
          className="border border-neutral-300 bg-[#F9FAFB] text-neutral-900 rounded-full w-10 h-10 cursor-pointer absolute top-3 md:top-5 right-3 md:right-5 center"
        >
          <FaXmark size={20} />
        </div>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            Reserva tu aventura
          </p>
          <h2 className="text-3xl font-black text-neutral-950 lg:text-5xl">
            {title}
          </h2>
          <p className="text-neutral-600">
            Déjanos tus datos y te confirmamos disponibilidad lo antes posible.
          </p>
        </div>
        <form className="space-y-10" onSubmit={activityHandler}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <InputContainer
              icon={<FaUser />}
              label="Nombre"
              placeholder="John"
              onchange={(e) => {
                setName(normalizeNameInput(e.target.value));
              }}
              value={name}
              readOnly={loading}
            />
            <InputContainer
              icon={<FaEnvelope />}
              label="Email"
              placeholder="john@gmail.com"
              value={email}
              onchange={(e) => {
                setEmail(e.target.value);
              }}
              readOnly={loading}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="space-y-2 w-full text-lg">
              <p className="font-medium text-black">Fecha</p>
              <div className="input-container align-center">
                <FaCalendarAlt />
                <input
                  type="text"
                  className="w-full outline-none placeholder:text-neutral-900"
                  placeholder="MM-DD-YYYY"
                  value={date}
                  onChange={(e) => validateDate(e)}
                  readOnly={loading}
                />
              </div>
              <p className="text-xs text-red-600">{error}</p>
            </div>
            <InputContainer
              icon={<HiUsers />}
              label="Participantes"
              placeholder="Introduce numero de personas"
              value={participants}
              onchange={(e) => {
                const rawValue = e.target.value;
                if (isNumericInput(rawValue)) {
                  setParticipants(rawValue);
                }
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
          </div>

          <div className="space-y-2 w-full text-lg">
            <TextAreaContainer
              label="Tu mensaje"
              rows={6}
              placeholder="Escribe el texto aqui ..."
              onchange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              readOnly={loading}
            />
            <p className="text-base text-neutral-900">
              Nota para informacion extra
            </p>
          </div>
          <div className="center">
            <Button
              type="submit"
              className="text-xl p-4 gap-3 rounded-2xl"
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
  );
};

export default ActivityModal;
