import useReveal from "@/hooks/use-reveal";
import {
  Share2,
  ShoppingBag,
  TrendingUp,
  Search,
  Code2,
  Chrome,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import type { ComponentType } from "react";

type Service = {
  id: string;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

const services: Service[] = [
  { id: "social", Icon: Share2, title: "Social Media Marketing", text: "Instagram & Facebook marketing to grow your business online." },
  { id: "shopify", Icon: ShoppingBag, title: "Shopify Store", text: "High-converting Shopify stores that are fast, responsive, and sales-focused." },
  { id: "meta", Icon: TrendingUp, title: "Meta Ads", text: "Professional Facebook & Instagram ads for lead generation." },
  { id: "seo", Icon: Search, title: "SEO Optimization", text: "Improve Google ranking and get organic traffic." },
  { id: "website", Icon: Code2, title: "Website Development", text: "Professional business websites and landing pages." },
  { id: "google", Icon: Chrome, title: "Google Ads", text: "Reach more customers instantly through Google advertising." },
  { id: "branding", Icon: Palette, title: "Branding & Design", text: "Creative posters, banners and social media creatives." },
];

function Card({ s }: { s: Service }) {
  const { Icon } = s;
  return (
    <div
      id={s.id}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-glow"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative flex items-center justify-between">
        <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
    </div>
  );
}

export default function Services() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div ref={head} className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            What We Do
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to <span className="text-gradient-brand">go to market</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One team. One roadmap. Marketing, development, and paid ads under a single roof.
          </p>
        </div>

        <div ref={grid} className="reveal stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
