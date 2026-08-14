import { useState, useEffect } from "react";
import { X, Phone, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactForm } from "@/lib/site-contact";

type Props = { isOpen: boolean; onClose: () => void };

const initialForm: ContactForm = { name: "", phone: "", email: "", address: "", message: "" };

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<{ type: "" | "success" | "error"; message: string }>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const data = await submitContact(form);
      setStatus({ type: "success", message: data.message || "Message Sent Successfully" });
      setForm(initialForm);
    } catch (err: any) {
      const msg =
        err?.response?.data?.errors?.[0]?.msg ||
        err?.response?.data?.message ||
        "Failed to send message. Please try again.";
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-in fade-in-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-glow animate-in zoom-in-95 md:grid-cols-[1fr_1.2fr]"
      >
        {/* Info panel */}
        <div className="relative hidden overflow-hidden bg-gradient-brand p-8 text-white md:block">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold">Get in Touch</h3>
            <p className="mt-2 text-sm text-white/80">
              Tell us a little about your business — we'll get back within 24 hours.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-white/70">Call us</div>
                  <div className="font-medium">+91 96699 45040</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-white/70">Email</div>
                  <div className="font-medium">trioaasinfotech@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-white/70">Address</div>
                  <div className="font-medium">Bus Stop Multhan, Khargone, MP</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          <h3 className="font-display text-2xl font-bold">Contact Us</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'd love to hear about your project.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Field label="Full Name">
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                required pattern="[A-Za-z\s]+" title="Please enter a valid name"
                className={inputCls}
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Phone">
                <input
                  type="text" name="phone" value={form.phone} onChange={handleChange}
                  required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number"
                  className={inputCls}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  required title="Please enter a valid email address"
                  className={inputCls}
                />
              </Field>
            </div>
            <Field label="Address">
              <input
                type="text" name="address" value={form.address} onChange={handleChange}
                required title="Please enter a valid address"
                className={inputCls}
              />
            </Field>
            <Field label="Message">
              <textarea
                rows={4} name="message" value={form.message} onChange={handleChange}
                required title="Please enter your message"
                className={inputCls + " resize-none"}
              />
            </Field>

            {status.message && (
              <div
                className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-destructive/20 bg-destructive/10 text-destructive"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/15";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
