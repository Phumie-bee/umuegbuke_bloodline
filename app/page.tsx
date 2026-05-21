import type { JSX } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutMission from "@/components/AboutMission";
import UpcomingEvents from "@/components/UpcomingEvents";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Features />
      <AboutMission />
      <UpcomingEvents />
      <GallerySection />
      <CTASection />
    </main>
  );
}
