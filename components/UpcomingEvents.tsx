"use client";

import type { JSX } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ── Variants ───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerGrid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ── Types & data ───────────────────────────────────────── */
interface Event {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  tag: string;
}

const events: Event[] = [
  {
    day: "15",
    month: "JUN",
    year: "2026",
    title: "Annual Family Grand Reunion",
    location: "Enugu, Nigeria",
    tag: "Family Gathering",
  },
  {
    day: "03",
    month: "AUG",
    year: "2026",
    title: "Welfare & Planning Committee Meeting",
    location: "Lagos, Nigeria",
    tag: "Community",
  },
  {
    day: "18",
    month: "OCT",
    year: "2026",
    title: "Cultural Night & Family Awards",
    location: "Owerri, Nigeria",
    tag: "Celebration",
  },
];

/* ── Sub-components ─────────────────────────────────────── */
function SectionLabel({ children }: { children: string }): JSX.Element {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="w-6 h-px shrink-0 bg-smoky-rose" />
      <span className="text-xs font-medium uppercase tracking-[2px] text-smoky-rose">
        {children}
      </span>
    </div>
  );
}

function CalendarIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PinIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EventCard({ event }: { event: Event }): JSX.Element {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-xl overflow-hidden border border-desert-sand/20 shadow-sm"
    >
      {/* Top — date + title on deep-rose */}
      <div className="bg-deep-rose px-4 sm:px-6 py-5 flex items-center gap-4 sm:gap-5">
        <div className="shrink-0 text-center">
          <p className="font-heading font-bold text-4xl leading-none text-desert-sand">
            {event.day}
          </p>
          <p className="text-xs text-desert-sand/70 tracking-widest uppercase mt-1">
            {event.month} {event.year}
          </p>
        </div>
        <div className="w-px self-stretch bg-seashell/15" />
        <h3 className="font-medium text-seashell text-sm leading-snug">
          {event.title}
        </h3>
      </div>

      {/* Bottom — location + tag on seashell */}
      <div className="bg-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-muted text-xs">
          <PinIcon />
          <span>{event.location}</span>
        </div>
        <span className="shrink-0 border border-smoky-rose/40 text-smoky-rose text-xs px-2.5 py-0.5 rounded-full bg-seashell">
          {event.tag}
        </span>
      </div>
    </motion.article>
  );
}

/* ── Section ────────────────────────────────────────────── */
export default function UpcomingEvents(): JSX.Element {
  return (
    <section
      id="events"
      aria-label="Upcoming Events"
      className="bg-seashell px-4 sm:px-8 md:px-16 py-14 md:py-20"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10"
      >
        <SectionLabel>Coming Up</SectionLabel>
        <h2 className="section-title text-3xl md:text-4xl text-deep-rose">
          Upcoming Events
        </h2>
        <div className="gold-divider" />
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {events.map((event) => (
          <EventCard
            key={`${event.day}-${event.month}-${event.year}`}
            event={event}
          />
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-3 mt-10"
      >
        <Link href="/events" className="btn-primary flex items-center gap-2">
          <CalendarIcon />
          View all events
        </Link>
      </motion.div>
    </section>
  );
}
