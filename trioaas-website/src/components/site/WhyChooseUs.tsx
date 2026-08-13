import useReveal from "@/hooks/use-reveal";
import { Check } from "lucide-react";

const reasons = [
  "Professional Design",
  "Affordable Pricing",
  "Fast Delivery",
  "Lead Focused Strategy",
  "Dedicated Support",
  "Result Oriented Work",
];

export default function WhyChooseUs() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section id="why-us" className="border-y border-border bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div ref={head} className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Why TrioAas
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for teams that want <span className="text-gradient-brand">results</span>.
          </h2>
        </div>

        <div ref={grid} className="reveal stagger mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
            >
              <span className="font-display text-2xl font-bold text-muted-foreground/50 tabular-nums transition-colors group-hover:text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-medium">{r}</span>
              <span className="ml-auto inline-grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-brand-foreground opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Check className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
