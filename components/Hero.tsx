"use client";

import Link from "next/link";
import { motion, Variants, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { JSX } from "react";
/* ── Animation variants ─────────────────────────────────── */
const cardGridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Mini card data ──────────────────────────────────────── */
interface MiniCard {
  icon: string;
  title: string;
  subtitle: string;
}

const miniCards: MiniCard[] = [
  { icon: "👥", title: "Family Directory", subtitle: "Members connected" },
  { icon: "📅", title: "Events & Reunions", subtitle: "Upcoming gatherings" },
  { icon: "🤝", title: "Welfare & Support", subtitle: "For every member" },
  { icon: "🖼️", title: "Photo Gallery", subtitle: "Shared memories" },
];

/* ── Marquee items ───────────────────────────────────────── */
const marqueeItems: string[] = [
  "Family Unity",
  "Heritage Preservation",
  "Mutual Support",
  "Youth Mentorship",
  "Cultural Identity",
  "Collective Growth",
];

/* ── Marquee strip ───────────────────────────────────────── */
const scrollAnimation = {
  x: ["0%", "-50%"],
  transition: { duration: 22, ease: "linear" as const, repeat: Infinity },
};

function MarqueeStrip(): JSX.Element {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(scrollAnimation);
  }, [controls]);

  return (
    <div
      aria-hidden="true"
      className="bg-smoky-rose py-2.5 overflow-hidden"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start(scrollAnimation)}
    >
      <motion.div animate={controls} className="flex items-center gap-8 w-max">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center gap-2.5 shrink-0">
            <span className="text-seashell text-xs tracking-widest uppercase">
              {item}
            </span>
            <span className="w-1 h-1 bg-desert-sand rounded-full shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero(): JSX.Element {
  return (
    <>
      <section
        aria-label="Welcome to Okosisi"
        className="relative overflow-hidden bg-seashell"
      >
        {/* Diagonal dark overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-deep-rose"
          style={{ clipPath: "polygon(0 0, 65% 0, 35% 100%, 0 100%)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* ── Left column ── */}
          <div
            className="relative overflow-hidden
                          flex flex-col justify-center
                          p-8 md:p-14 z-10"
          >
            {/* Watermark */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 font-heading text-8xl font-bold
                         text-seashell/5 pointer-events-none select-none z-0
                         leading-none"
            >
              EGB
              <span className="text-desert-sand/10">UKE</span>
            </span>

            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 flex items-center gap-2 mb-5"
            >
              <span className="w-6 h-px bg-desert-sand shrink-0" />
              <span className="text-desert-sand text-sm tracking-widest uppercase">
                Umu Egbuke Bloodline
              </span>
            </motion.div>

            {/* Headline */}
            <div className="relative z-10 mb-5">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading font-bold text-seashell
                           text-3xl md:text-5xl leading-tight"
              >
                One Family,
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-heading font-bold text-desert-sand italic
                           text-3xl md:text-5xl leading-tight"
              >
                One Heritage
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10 text-md font-light text-seashell/60
                         leading-relaxed max-w-sm mb-8"
            >
              A platform built to strengthen our bond, preserve our culture, and
              celebrate the ties that bind generations of the Umu Egbuke family
              across all locations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.65,
              }}
              className="relative z-10 flex flex-wrap gap-3"
            >
              <Link
                href="/register"
                className="bg-desert-sand text-deep-rose px-6 py-3 rounded
                           text-md font-medium transition-filter duration-200
                           hover:brightness-105"
              >
                Join the Family
              </Link>
              <a
                href="#features"
                className="bg-transparent text-seashell border border-seashell/25
                           px-6 py-3 rounded text-md transition-colors duration-200
                           hover:bg-seashell/10"
              >
                Explore the Site
              </a>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div
            className="relative z-10 flex flex-col gap-3 justify-center
                          p-8 md:p-10"
          >
            {/* Top card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-desert-sand rounded-lg p-6"
            >
              <p className="text-xs uppercase tracking-widest text-deep-rose/90 mb-2">
                Growing Strong
              </p>
              <h2 className="font-heading text-xl font-bold text-deep-rose leading-snug">
                United across generations and locations
              </h2>
            </motion.div>

            {/* 2×2 mini card grid */}
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {miniCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardItemVariants}
                  className="bg-white rounded-lg p-4 border border-[#f0ddd0]"
                >
                  <p className="text-xs font-medium text-deep-rose mb-1">
                    {card.title}
                  </p>
                  <p className="text-xs text-deep-rose/40">{card.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <MarqueeStrip />
    </>
  );
}
