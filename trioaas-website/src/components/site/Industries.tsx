import useReveal from "@/hooks/use-reveal";

const industries = [
  "Schools & Coaching",
  "Gyms & Fitness",
  "Restaurants",
  "Real Estate",
  "Solar Companies",
  "Agriculture Businesses",
  "Tent & Event Businesses",
  "Local Shops & Startups",
];

export default function Industries() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section id="industries" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div ref={head} className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Who We Work With
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Industries we <span className="text-gradient-brand">serve</span>.
          </h2>
        </div>

        <div ref={grid} className="reveal stagger mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/50 hover:text-foreground hover:shadow-glow"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
