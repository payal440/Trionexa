import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Industries from "@/components/site/Industries";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import ContactModal from "@/components/site/ContactModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrioAas — Digital Marketing, Web Development & Ads Agency" },
      {
        name: "description",
        content:
          "TrioAas is a results-driven digital agency in India offering web development, SEO, social media marketing, Meta Ads and Google Ads — built for measurable growth.",
      },
      { property: "og:title", content: "TrioAas — Digital Marketing, Web Development & Ads Agency" },
      {
        property: "og:description",
        content:
          "Marketing, development and ads working as one. Lead-focused campaigns and premium websites for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const open = () => setContactOpen(true);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={open} />
      <main>
        <Hero onOpenContact={open} />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <ContactSection onOpenContact={open} />
      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
