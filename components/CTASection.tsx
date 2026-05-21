"use client";

import type { JSX } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection(): JSX.Element {
  return (
    <section
      aria-label="Join the Family"
      className="bg-smoky-rose px-4 sm:px-8 md:px-16 py-12 md:py-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-seashell mb-2">
            You belong here.
          </h2>
          <p className="text-seashell/70 text-sm leading-relaxed max-w-md">
            Join the Umu Egbuke family platform — register today and stay
            connected with your roots, your people, and your heritage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="shrink-0"
        >
          <Link href="/register" className="btn-primary block text-center sm:inline-block">
            Register as a Member
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
