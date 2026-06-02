"use client";

import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Button from "@/components/ui/Button";
import InputContainer from "@/components/ui/InputContainer";
import PhoneNumberContainer from "@/components/ui/PhoneNumberContainer";
import TextAreaContainer from "@/components/ui/TextAreaContainer";
import CheckBox from "@/components/ui/CheckBox";
import { FaBed, FaCalendarAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { emailRegex } from "@/lib/utils";
import { toast } from "sonner";
import { RiLoader4Line } from "react-icons/ri";
import {
  normalizeNumericInput,
  normalizeNameInput,
  sendBookingEmail,
  validateBookingDateInput,
} from "@/lib/booking";

interface MultiWeekendModalProps {
  closeModal: () => void;
}

const AVAILABLE_ACTIVITIES = [
  "Rafting Tamayo",
  "Circuito Multiaventura",
  "Rafting Hoces del Cabriel",
  "Kayak aguas bravas",
  "Paintball",
  "Canoa-Raft",
  "Kayak Aguas Tranquilas",
];

const MultiWeekendModal: React.FC<MultiWeekendModalProps> = ({
  closeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState("");
  const [phone, setPhone] = useState("");
  const [nights, setNights] = useState("");
  const [message, setMessage] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const validateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateBookingDateInput(e.target.value);
    setDate(result.value);
    setError(result.error);
  };

  const addActivity = (activity: string) => {
    if (activities.length >= 2) {
      toast.error("Maximo 2 actividades");
      return;
    }
    setActivities([...activities, activity]);
  };

  const removeActivity = (activity: string) => {
    setActivities(activities.filter((act) => act !== activity));
  };

  const handleActivityToggle = (activity: string) => {
    if (activities.includes(activity)) {
      removeActivity(activity);
    } else {
      addActivity(activity);
    }
  };

  const activityHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) return toast.error("Por favor proporcione nombre");
    if (!email) return toast.error("Por favor proporcione correo electrónico");
    if (!emailRegex.test(email))
      return toast.error("Correo electrónico no válido");
    if (!date) return toast.error("Por favor proporcione una fecha");
    if (error) return toast.error("Por favor proporcione una fecha valida");
    if (!participants)
      return toast.error("Por favor proporcione el número de participantes");
    if (!phone) return toast.error("Por favor proporcione un número de teléfono");
    if (!nights) return toast.error("Por favor proporcione el numero de noches");
    if (activities.length === 0)
      return toast.error("Por favor seleccione al menos una actividad");
    if (activities.length < 2)
      return toast.error("Por favor seleccione al menos dos actividades");
    if (!message) return toast.error("Por favor proporcione un mensaje");

    setLoading(true);
    try {
      const data = {
        name: name,
        email: email,
        date: date,
        phone: "+34" + phone,
        message: message,
        extraNote:
          "Nombre de la actividad: Finde Multiaventura, Actividades seleccionadas: " +
          activities.join(", ") +
          " Número de noches: " +
          nights +
          " Número de participantes: " +
          participants,
      };

      const res = await sendBookingEmail(data);

      if (res.status === 200 || res.status === 201) {
        setName("");
        setEmail("");
        setDate("");
        setPhone("");
        setMessage("");
        setParticipants("");
        setActivities([]);
        setNights("");
        toast.success("Gracias por contactarnos");
        closeModal();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al contactar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-black/30 fixed top-0 left-0 z-50 md:py-20">
      <div className="w-full bg-white custom-container max-w-6xl space-y-16 mx-auto border-2 border-neutral-100 shadow-lg md:rounded-3xl p-5 md:p-10 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="border border-neutral-300 bg-[#F9FAFB] text-neutral-900 rounded-full w-10 h-10 cursor-pointer absolute top-3 md:top-5 right-3 md:right-5 flex items-center justify-center hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <FaXmark size={20} />
        </button>

        {/* Title */}
        <p className="text-center text-3xl lg:text-5xl font-medium">
          Finde Multiaventura
        </p>

        {/* Form */}
        <form className="space-y-10" onSubmit={activityHandler}>
          {/* Name and Email */}
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

          {/* Date and Participants */}
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
                setParticipants(normalizeNumericInput(e.target.value));
              }}
            />
          </div>

          {/* Phone and Nights */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <PhoneNumberContainer
              value={phone}
              onChange={(value) => setPhone(value)}
              label="Telefono"
              readOnly={loading}
            />
            <InputContainer
              icon={<FaBed />}
              label="Numero de Noches"
              placeholder="Introduce numero de Noches"
              value={nights}
              onchange={(e) => {
                setNights(normalizeNumericInput(e.target.value));
              }}
              readOnly={loading}
            />
          </div>

          {/* Activities Selection */}
          <div className="input-container bg-neutral-200 text-lg p-6 space-y-6">
            <p className="font-medium text-3xl text-black text-center">
              Selecciona tu Paquete Multiaventura
            </p>
            <p className="text-lg font-medium text-black">
              Selecciona (Maximo 2 Actividades)
            </p>
            <div className="space-y-5 md:space-y-10">
              {/* Row 1 */}
              <div className="space-between flex flex-col md:flex-row gap-5 md:gap-10">
                {AVAILABLE_ACTIVITIES.slice(0, 2).map((activity) => (
                  <div
                    key={activity}
                    className="w-full md:w-1/2 align-center gap-3 cursor-pointer"
                    onClick={() => handleActivityToggle(activity)}
                  >
                    <CheckBox value={activities.includes(activity)} />
                    <p>{activity}</p>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="space-between flex flex-col md:flex-row gap-5 md:gap-10">
                {AVAILABLE_ACTIVITIES.slice(2, 4).map((activity) => (
                  <div
                    key={activity}
                    className="w-full md:w-1/2 align-center gap-3 cursor-pointer"
                    onClick={() => handleActivityToggle(activity)}
                  >
                    <CheckBox value={activities.includes(activity)} />
                    <p>{activity}</p>
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="space-between flex flex-col md:flex-row gap-5 md:gap-10">
                {AVAILABLE_ACTIVITIES.slice(4, 6).map((activity) => (
                  <div
                    key={activity}
                    className="w-full md:w-1/2 align-center gap-3 cursor-pointer"
                    onClick={() => handleActivityToggle(activity)}
                  >
                    <CheckBox value={activities.includes(activity)} />
                    <p>{activity}</p>
                  </div>
                ))}
              </div>

              {/* Row 4 */}
              <div className="space-between flex flex-col md:flex-row gap-5 md:gap-10">
                {AVAILABLE_ACTIVITIES.slice(6, 8).map((activity) => (
                  <div
                    key={activity}
                    className="w-full md:w-1/2 align-center gap-3 cursor-pointer"
                    onClick={() => handleActivityToggle(activity)}
                  >
                    <CheckBox value={activities.includes(activity)} />
                    <p>{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
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

          {/* Submit Button */}
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

export default MultiWeekendModal;
