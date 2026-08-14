// Keeps the exact same axios-based contact submission logic as the original app.
import axios from "axios";

const _envUrl = (import.meta as any).env?.VITE_API_URL as string | undefined;
export const CONTACT_API_URL = _envUrl
  ? _envUrl.includes("/api")
    ? _envUrl.replace(/\/$/, "")
    : _envUrl.replace(/\/$/, "") + "/api/contact"
  : "https://trionexa-2.onrender.com/api/contact";

export type ContactForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

export async function submitContact(form: ContactForm) {
  const res = await axios.post(CONTACT_API_URL, form);
  return res.data as { message?: string };
}
