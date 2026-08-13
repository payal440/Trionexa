import { ArrowRight, Phone, Sparkles } from "lucide-react";

type Props = { onOpenContact: () => void };

export default function Hero({ onOpenContact }: Props) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl animate-float-slower" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <span className="animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-purple animate-glow-pulse" />
            Digital Marketing · Web Dev · Ads
          </span>

          <h1 className="animate-fade-up delay-2 mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Grow your business with{" "}
            <span className="text-gradient-brand-animated">TrioAas</span> — marketing,
            development & ads, working as one.
          </h1>

          <p className="animate-fade-up delay-3 mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Digital marketing, website development, Meta & Google Ads, SEO and
            lead generation — built around one goal: measurable growth for your
            business.
          </p>

          <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group sheen-on-hover inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              <span className="sheen-layer" aria-hidden="true" />
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="tel:9669945040"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <dl className="animate-fade-up delay-5 mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { k: "3-in-1", v: "Marketing · Dev · Ads" },
              { k: "8+", v: "Industries served" },
              { k: "100%", v: "Lead-focused" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
              >
                <dt className="text-gradient-brand text-2xl font-bold">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up delay-3">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-60 blur-2xl animate-glow-pulse" />
            <div className="relative h-full w-full rounded-[2rem] border border-border bg-card/70 p-6 shadow-glow backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
              <div className="grid h-full grid-cols-2 gap-3">

                <StatCard title="ROAS" value="4.8×" tone="blue" />
                <StatCard title="Leads / mo" value="+320" tone="purple" />
                <StatCard title="CTR" value="6.4%" tone="purple" />
                <StatCard title="Sites shipped" value="40+" tone="blue" />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 hidden rounded-2xl border border-border bg-card p-3 shadow-card sm:block">

                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold">Campaign live</div>
                    <div className="text-[10px] text-muted-foreground">All systems go</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  tone,
}: {
  title: string;
  value: string;
  tone: "blue" | "purple";
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft">
      <div
        className={`absolute right-0 top-0 h-16 w-16 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150 ${
          tone === "blue" ? "bg-brand/40" : "bg-brand-purple/40"
        }`}
      />

      <div className="relative">
        <div className="text-xs font-medium text-muted-foreground">{title}</div>
        <div className="mt-1 text-2xl font-bold text-foreground">{value}</div>
      </div>
    </div>
  );
}
