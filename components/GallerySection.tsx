"use client";

import type { JSX } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ── Types & data ───────────────────────────────────────── */
interface Photo {
  seed: string;
  alt: string;
}

const featuredPhoto: Photo = {
  seed: "okosisi-reunion",
  alt: "Annual Family Grand Reunion",
};

const gridPhotos: Photo[] = [
  { seed: "okosisi-elders", alt: "Family Elders Gathering" },
  { seed: "okosisi-youth", alt: "Youth Mentorship Programme" },
  { seed: "okosisi-cultural", alt: "Cultural Night Celebration" },
  { seed: "okosisi-awards", alt: "Family Awards Night" },
];

/* ── Shared photo card ──────────────────────────────────── */
function PhotoCard({
  photo,
  className = "",
}: {
  photo: Photo;
  className?: string;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl group ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://picsum.photos/seed/${photo.seed}/800/800`}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-deep-rose/0 group-hover:bg-deep-rose/50 transition-colors duration-300" />
      <p className="absolute bottom-0 left-0 right-0 p-4 text-seashell text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {photo.alt}
      </p>
    </motion.div>
  );
}

/* ── Component ──────────────────────────────────────────── */
export default function GallerySection(): JSX.Element {
  return (
    <>
      {/* ── Quote Banner ── */}
      <section
        aria-label="Family Quote"
        className="bg-lavender px-4 sm:px-8 md:px-16 py-12 md:py-14"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-lg"
          >
            <blockquote className="font-heading italic text-lg md:text-xl text-deep-rose leading-relaxed mb-3">
              &ldquo;As members of one family, we are stronger together. Let us
              continue to uphold the values of unity, peace, and mutual respect
              that define us.&rdquo;
            </blockquote>
            <p className="text-xs font-medium uppercase tracking-[2px] text-smoky-rose">
              — Message to Family Members
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="shrink-0"
          >
            <Link
              href="/gallery"
              className="inline-block bg-deep-rose text-seashell font-semibold text-sm
                         px-7 py-3 rounded transition-colors duration-200
                         hover:bg-smoky-rose focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-deep-rose"
            >
              View Our Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section
        aria-label="Photo Gallery Preview"
        className="bg-cream-light px-4 sm:px-8 md:px-16 py-14 md:py-20"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px shrink-0 bg-smoky-rose" />
            <span className="text-xs font-medium uppercase tracking-[2px] text-smoky-rose">
              Our Memories
            </span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl text-deep-rose">
            Family Gallery
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Photos — featured left, 2×2 grid right */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <PhotoCard
            photo={featuredPhoto}
            className="aspect-video sm:w-1/2 sm:aspect-auto sm:h-64 md:h-80 lg:h-96"
          />

          <div className="grid grid-cols-2 gap-3 md:gap-4 sm:w-1/2 sm:h-64 md:h-80 lg:h-96">
            {gridPhotos.map((photo) => (
              <PhotoCard
                key={photo.seed}
                photo={photo}
                className="aspect-square sm:aspect-auto"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10"
        >
          <Link href="/gallery" className="btn-primary">
            Browse Full Gallery
          </Link>
        </motion.div>
      </section>
    </>
  );
}
