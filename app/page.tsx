import type { JSX } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutMission from "@/components/AboutMission";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Features />
      <AboutMission />
      <UpcomingEvents />
    </main>
  );
}
