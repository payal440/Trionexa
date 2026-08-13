import { useState } from "react";import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../../assets/logo1.png";

type Props = { onOpenContact: () => void };

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why us" },
  { href: "#industries", label: "Industries" },
];

const services = [
  { href: "#social", label: "Social Media Marketing" },
  { href: "#website", label: "Website Development" },
  { href: "#meta", label: "Meta Ads" },
  { href: "#google", label: "Google Ads" },
  { href: "#shopify", label: "Shopify Store" },
  { href: "#branding", label: "Branding & Design" },
];

export default function Navbar({ onOpenContact }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="TrioAas" className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">
            Trio<span className="text-gradient-brand">Aas</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 animate-in fade-in-0 zoom-in-95"
              >
                <div className="rounded-2xl border border-border bg-popover p-2 shadow-card">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block rounded-xl px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:9669945040"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary">
                Services <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </details>
            <button
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
