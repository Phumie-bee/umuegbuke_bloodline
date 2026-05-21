"use client";

import type { JSX } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ── Variants ───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerGrid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Types & data ───────────────────────────────────────── */
interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
  accent: string;
}

function Svg({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const features: Feature[] = [
  {
    icon: (
      <Svg>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </Svg>
    ),
    title: "Family Registration",
    description: "Register and keep your family records updated across generations.",
    href: "/register",
    accent: "border-t-desert-sand",
  },
  {
    icon: (
      <Svg>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Svg>
    ),
    title: "Family Directory",
    description: "Connect with members across different locations and lineages.",
    href: "/directory",
    accent: "border-t-lavender",
  },
  {
    icon: (
      <Svg>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Svg>
    ),
    title: "News & Announcements",
    description: "Stay informed on meetings, celebrations, and family updates.",
    href: "/news",
    accent: "border-t-smoky-rose",
  },
  {
    icon: (
      <Svg>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </Svg>
    ),
    title: "Photo Gallery",
    description: "Relive memorable family moments through photos and highlights.",
    href: "/gallery",
    accent: "border-t-desert-sand",
  },
  {
    icon: (
      <Svg>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </Svg>
    ),
    title: "Welfare & Support",
    description: "Access family welfare initiatives and mutual support programs.",
    href: "/welfare",
    accent: "border-t-lavender",
  },
  {
    icon: (
      <Svg>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
      </Svg>
    ),
    title: "Tributes & Memorials",
    description: "Honor and remember our beloved departed family members.",
    href: "/tribute",
    accent: "border-t-smoky-rose",
  },
];

/* ── Component ──────────────────────────────────────────── */
export default function Features(): JSX.Element {
  return (
    <section id="features" className="bg-cream-light px-8 md:px-16 py-20">

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="section-label">What We Offer</span>
        <h2 className="section-title text-2xl md:text-4xl text-deep-rose">
          Everything your family needs
        </h2>
        <div className="gold-divider" />
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={cardVariant}>
            <Link
              href={feature.href}
              className={[
                "bg-white rounded-xl p-6 border border-desert-sand/20 border-t-4",
                feature.accent,
                "hover:shadow-md transition-shadow duration-200 group block",
              ].join(" ")}
            >
              <div className="w-10 h-10 rounded-lg bg-desert-sand/10 flex items-center justify-center text-deep-rose mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium text-deep-rose text-base mb-2 group-hover:text-smoky-rose transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                {feature.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center mt-14"
      >
        <a
          href="#next"
          aria-label="Scroll down"
          className="w-10 h-10 rounded-full bg-deep-rose flex items-center justify-center text-seashell hover:bg-smoky-rose transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
