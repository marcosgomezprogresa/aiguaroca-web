import { toast } from "sonner";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleCopy = async (text: string) => {
  const success = await copyToClipboard(text);
  if (success) {
    toast.success("¡Texto copiado al portapapeles!");
  } else {
    toast.error("No se pudo copiar el texto.");
  }
};

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    // Use the modern Clipboard API if available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true; // Success
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);

      if (success) {
        return true; // Success
      } else {
        return false; // Failure
      }
    }
  } catch (error) {
    console.error("Copy to clipboard failed:", error);
    return false; // Failure
  }
};

export const ensureNoTrailingSlash = (url: string): string => {
  return url.endsWith('/') && url.length > 1 ? url.slice(0, -1) : url;
};
