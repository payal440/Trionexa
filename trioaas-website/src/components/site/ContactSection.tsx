import { MessageCircle, ArrowRight } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

type Props = { onOpenContact: () => void };

export default function ContactSection({ onOpenContact }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-brand animate-gradient-x p-10 text-center shadow-glow sm:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl animate-glow-pulse" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Let's Talk
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Book a free consultation and we'll map a lead-focused plan for your business — no obligations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={onOpenContact}
                className="group sheen-on-hover inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span className="sheen-layer" aria-hidden="true" />
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://wa.me/919669945040?text=Hello%20Trioaas%20Digital%20Marketing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
