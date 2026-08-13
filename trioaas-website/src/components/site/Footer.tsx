import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo1.png";

const cols = [
  {
    title: "Quick Links",
    items: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About Us" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Back Office",
    items: [
      { href: "#services", label: "Ecommerce Management" },
      { href: "#services", label: "Amazon Account Management" },
      { href: "#services", label: "Data Entry Management" },
      { href: "#services", label: "Customer Support" },
    ],
  },
  {
    title: "Development",
    items: [
      { href: "#website", label: "Website" },
      { href: "#shopify", label: "Shopify Website" },
      { href: "#services", label: "Wordpress Website" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { href: "#social", label: "Social Media Marketing" },
      { href: "#services", label: "Email Marketing" },
      { href: "#services", label: "Content Marketing" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="TrioAas" className="h-10 w-10 rounded-lg object-contain" />
              <span className="font-display text-lg font-bold">
                Trio<span className="text-gradient-brand">Aas</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A results-driven digital agency — marketing, development & ads working as one.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +91 96699 45040</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> trioaasinfotech@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> Bus Stop Multhan, Khargone, MP</li>
            </ul>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="text-sm font-semibold text-foreground">{c.title}</h5>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TrioAas Tech. All rights reserved.</p>
          <p>Crafted with care · Marketing · Development · Ads</p>
        </div>
      </div>
    </footer>
  );
}
