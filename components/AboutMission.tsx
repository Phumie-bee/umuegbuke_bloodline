"use client";

import type { JSX } from "react";
import { motion, type Variants } from "framer-motion";

/* ── Shared animation variants ──────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ── Data ───────────────────────────────────────────────── */
interface MissionPoint {
  number: string;
  text: string;
}

const missionPoints: MissionPoint[] = [
  {
    number: "01",
    text: "Foster unity and mutual respect among all family members regardless of location.",
  },
  {
    number: "02",
    text: "Preserve our cultural identity, traditions, and the stories of our ancestors.",
  },
  {
    number: "03",
    text: "Support one another through welfare initiatives and community action.",
  },
  {
    number: "04",
    text: "Celebrate milestones and create lasting memories across generations.",
  },
  {
    number: "05",
    text: "Build a prosperous legacy that future descendants will be proud of.",
  },
];

const coreValues: string[] = [
  "Unity",
  "Respect",
  "Integrity",
  "Love",
  "Support",
  "Heritage",
];

/* ── Section label ──────────────────────────────────────── */
function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}): JSX.Element {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`w-6 h-px shrink-0 ${light ? "bg-desert-sand" : "bg-smoky-rose"}`}
      />
      <span
        className={`text-xs font-medium uppercase tracking-[2px] ${light ? "text-desert-sand" : "text-smoky-rose"}`}
      >
        {children}
      </span>
    </div>
  );
}

/* ── Component ──────────────────────────────────────────── */
export default function AboutMission(): JSX.Element {
  return (
    <>
      {/* ── About + Mission split ── */}
      <section aria-label="About and Mission" className="bg-deep-rose">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: About */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="px-8 md:px-14 py-20"
          >
            <SectionLabel light>Who We Are</SectionLabel>
            <h2 className="section-title text-3xl md:text-4xl text-seashell">
              About Umu Egbuke Bloodline
            </h2>
            <div className="gold-divider" />
            <p className="text-seashell/65 font-light leading-relaxed max-w-4xl text-md">
              Umu Egbuke Bloodline is a proud and growing family community
              committed to fostering unity, mutual support, cultural heritage,
              and meaningful relationships among all members. Over the years,
              our family has continued to grow in strength and diversity, while
              maintaining the values handed down by our forefathers. We believe
              that staying connected helps us build a stronger future for
              ourselves and generations to come.
            </p>
          </motion.div>

          {/* Right: Mission card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start md:pb-12 pt-0 md:pr-0"
          >
            <div className="bg-desert-sand w-full h-full px-8 md:px-12 py-14">
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="section-title text-3xl md:text-4xl text-deep-rose">
                What drives us
              </h2>
              <div className="w-10 h-0.75 bg-deep-rose rounded-sm mb-10" />

              <motion.ol
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="list-none flex flex-col gap-4"
              >
                {missionPoints.map((point) => (
                  <motion.li
                    key={point.number}
                    variants={staggerItem}
                    className="flex items-start gap-3.5"
                  >
                    <span className="shrink-0 w-8 h-8 rounded bg-deep-rose flex items-center justify-center text-desert-sand text-xs font-semibold tracking-wide">
                      {point.number}
                    </span>
                    <p className="text-sm text-deep-rose leading-relaxed font-normal pt-1.5">
                      {point.text}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section
        aria-label="Core Values"
        className="bg-deep-rose px-8 md:px-16 pb-20 pt-12"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel light>What Defines Us</SectionLabel>
          <h2 className="section-title text-3xl md:text-4xl text-seashell">
            Our Core Values
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {coreValues.map((value) => (
            <motion.div
              key={value}
              variants={staggerItem}
              whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
              className="border border-seashell/20 rounded-xl px-6 py-5 text-seashell font-medium text-sm bg-desert-sand/10 hover:bg-desert-sand/20 cursor-default"
            >
              {value}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
