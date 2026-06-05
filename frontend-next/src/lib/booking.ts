import axios from "axios";
import { isValid, parse } from "date-fns";
import { routes } from "./routes";

export function getActivityBookingHref(activityTitle: string) {
  const activity = activityTitle.trim();
  const params = new URLSearchParams({ actividad: activity });
  return `${routes.contacto.path}?${params.toString()}`;
}

export interface BookingDateValidation {
  value: string;
  error: string;
}

export interface BookingEmailPayload {
  name: string;
  email: string;
  date: string;
  phone: string;
  message: string;
  participants?: string;
  extraNote?: string;
}

export const normalizeNameInput = (value: string) =>
  value.replace(/[^a-zA-Z\s]/g, "");

export const normalizeNumericInput = (value: string) => value.replace(/[^0-9]/g, "");

export const isNumericInput = (value: string) => value === "" || /^\d+$/.test(value);

export const validateBookingDateInput = (
  rawValue: string
): BookingDateValidation => {
  let value = rawValue.replace(/[^0-9-]/g, "").slice(0, 10);

  if (value.length > 2 && value[2] !== "-") {
    value = `${value.slice(0, 2)}-${value.slice(2)}`;
  }

  if (value.length > 5 && value[5] !== "-") {
    value = `${value.slice(0, 5)}-${value.slice(5)}`;
  }

  const datePattern = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;

  if (!datePattern.test(value)) {
    return { value, error: "Formato incorrecto: MM-DD-YYYY" };
  }

  const parsedDate = parse(value, "MM-dd-yyyy", new Date());
  const [inputMonth, inputDay, inputYear] = value.split("-").map(Number);
  const isValidDate =
    isValid(parsedDate) &&
    parsedDate.getMonth() + 1 === inputMonth &&
    parsedDate.getDate() === inputDay &&
    parsedDate.getFullYear() === inputYear;

  return {
    value,
    error: isValidDate ? "" : "Fecha no válida (no existe en el calendario)",
  };
};

export const sendBookingEmail = (payload: BookingEmailPayload) =>
  axios.post("/api/v1/send-email", payload);
