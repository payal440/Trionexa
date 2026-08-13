import useReveal from "@/hooks/use-reveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="border-y border-border bg-surface">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          About Us
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          A results-driven digital agency, built to{" "}
          <span className="text-gradient-brand">grow your business online</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          TrioAas Tech provides web development and marketing solutions that not
          only look good, but attract and convert customers. Our team blends
          creativity and technology to deliver high-performance websites and
          powerful marketing campaigns — whether you're a startup or an
          established business, we strengthen your online presence and drive
          real, measurable growth.
        </p>
      </div>
    </section>
  );
}
