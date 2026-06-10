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
import styles from "./ContactForm.module.css";

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
    <section className={styles.section} aria-labelledby="contact-form-title">
      <div className="custom-container">
        <div className={styles.shell}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>Contacto</p>
              <h1 id="contact-form-title" className={styles.title}>
                Cuéntanos tu plan
              </h1>
              <p className={styles.lead}>
                Indica fecha, grupo y actividad. Te respondemos en menos de 24 h
                laborables.
              </p>
            </div>

            <ul className={styles.highlights} aria-label="Información útil">
              <li className={styles.highlightItem}>
                Reservas para familias, colegios, empresas y grupos
              </li>
              <li className={styles.highlightItem}>
                Actividades en Venta del Moro y río Cabriel
              </li>
              <li className={`${styles.highlightItem} ${styles.highlightItemAccent}`}>
                Respuesta habitual en menos de 24 h laborables
              </li>
            </ul>
          </div>

          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={contactHandler}>
              <div className={styles.fieldRow}>
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

              <div className={styles.messageBlock}>
                <TextAreaContainer
                  label="Tu mensaje"
                  rows={3}
                  placeholder="Fecha, personas y actividad..."
                  value={message}
                  onchange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setMessage(e.target.value);
                  }}
                  readOnly={loading}
                />
                <p className={styles.privacy}>
                  Tus datos se usan solo para responder a tu consulta.
                </p>
              </div>

              <Button
                type="submit"
                className={styles.submitBtn}
                icon={<GoDotFill />}
              >
                {loading ? (
                  <RiLoader4Line className="animate-spin text-2xl" />
                ) : (
                  <span>Enviar mensaje</span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
