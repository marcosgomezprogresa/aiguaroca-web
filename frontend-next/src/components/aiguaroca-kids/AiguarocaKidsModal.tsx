'use client';

import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Button from '@/components/ui/Button';
import InputContainer from '@/components/ui/InputContainer';
import PhoneNumberContainer from '@/components/ui/PhoneNumberContainer';
import TextAreaContainer from '@/components/ui/TextAreaContainer';
import { FaCalendarAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi2';
import { FaXmark } from 'react-icons/fa6';
import { emailRegex } from '@/lib/utils';
import { toast } from 'sonner';
import { RiLoader4Line } from 'react-icons/ri';
import {
  isNumericInput,
  normalizeNameInput,
  sendBookingEmail,
  validateBookingDateInput,
} from '@/lib/booking';

interface AiguarocaKidsModalProps {
  closeModal: () => void;
  title: string;
}

const AiguarocaKidsModal: React.FC<AiguarocaKidsModalProps> = ({ closeModal, title }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState('');
  const [numberOfActivities, setNumberOfActivities] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const validateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateBookingDateInput(e.target.value);
    setDate(result.value);
    setError(result.error);
  };

  const activityHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return toast('Por favor proporcione nombre');
    if (!email) return toast('Por favor proporcione correo electrónico');
    if (!emailRegex.test(email)) return toast('Correo electrónico no válido');
    if (!date) return toast('Por favor proporcione una fecha');
    if (error) return toast('Por favor proporcione una fecha valida');
    if (!participants) return toast('Por favor proporcione el número de participantes');
    if (!numberOfActivities) return toast('Por favor proporcione el número de actividades');
    if (!phone) return toast('Por favor proporcione un número de teléfono');
    if (!message) return toast('Por favor proporcione un mensaje');

    setLoading(true);
    try {
      const data = {
        name: name,
        email: email,
        date: date,
        phone: '+34' + phone,
        message: message,
        extraNote:
          'Nombre de la actividad: ' +
          title +
          ' Número de actividades: ' +
          numberOfActivities +
          ' Número de participantes: ' +
          participants,
      };

      const res = await sendBookingEmail(data);

      if (res.status === 200 || res.status === 201) {
        setName('');
        setEmail('');
        setDate('');
        setPhone('');
        setMessage('');
        setParticipants('');
        setNumberOfActivities('');
        toast('Gracias por contactarnos');
        closeModal();
      }
    } catch (error) {
      if (error) toast('Error al contactar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-black/30 fixed top-0 left-0 z-50 md:py-20">
      <div className="w-full bg-white custom-container max-w-6xl space-y-16 mx-auto border-2 border-neutral-100 shadow-lg md:rounded-3xl p-5 md:p-10 relative">
        <div
          onClick={closeModal}
          className="border border-neutral-300 bg-[#F9FAFB] text-neutral-900 rounded-full w-10 h-10 cursor-pointer absolute top-3 md:top-5 right-3 md:right-5 flex items-center justify-center"
        >
          <FaXmark size={20} />
        </div>

        <p className="text-center text-3xl lg:text-5xl font-medium">{title}</p>

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
              onchange={(e) => setEmail(e.target.value)}
              value={email}
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
                  onChange={validateDate}
                  readOnly={loading}
                />
              </div>
              <p className="text-xs text-red-600">{error}</p>
            </div>
            <InputContainer
              icon={<HiUsers />}
              label="Participantes"
              placeholder="Introduce numero de personas"
              onchange={(e) => {
                const rawValue = e.target.value;
                if (isNumericInput(rawValue)) {
                  setParticipants(rawValue);
                }
              }}
              value={participants}
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
            <InputContainer
              label="Numero de Actividades"
              placeholder="Introduce numero de actividades"
              onchange={(e) => {
                const rawValue = e.target.value;
                if (isNumericInput(rawValue)) {
                  setNumberOfActivities(rawValue);
                }
              }}
              value={numberOfActivities}
              readOnly={loading}
            />
          </div>

          <div className="space-y-2 w-full text-lg">
            <TextAreaContainer
              label="Tu mensaje"
              placeholder="Escribe el texto aqui ..."
              onchange={(e) => setMessage(e.target.value)}
              value={message}
              readOnly={loading}
            />
            <p className="text-base text-neutral-900">
              Nota para informacion extra
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="text-xl p-4 gap-3 rounded-2xl"
              icon={
                loading ? (
                  <RiLoader4Line className="animate-spin text-center text-2xl" />
                ) : (
                  <GoDotFill />
                )
              }
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AiguarocaKidsModal;
