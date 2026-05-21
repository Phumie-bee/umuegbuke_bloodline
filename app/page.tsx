import type { JSX } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutMission from "@/components/AboutMission";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Features />
      <AboutMission />
    </main>
  );
}
