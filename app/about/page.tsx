import Link from "next/link";
import type { JSX } from "react";

/* ── Types ───────────────────────────────────────────────── */
interface Stat {
  number: string;
  label: string;
}

interface Value {
  title: string;
  desc: string;
}

interface MissionItem {
  num: string;
  text: string;
}

/* ── Data ────────────────────────────────────────────────── */
const stats: Stat[] = [
  { number: "500+", label: "Registered Members" },
  { number: "12",   label: "Family Branches"    },
  { number: "20+",  label: "Years of Unity"     },
];

const mission: MissionItem[] = [
  { num: "01", text: "Foster unity and mutual respect among all family members regardless of location." },
  { num: "02", text: "Preserve our cultural identity, traditions, and the stories of our ancestors."   },
  { num: "03", text: "Support one another through welfare initiatives and community action."            },
  { num: "04", text: "Celebrate milestones and create lasting memories across generations."            },
  { num: "05", text: "Build a prosperous legacy that future descendants will be proud of."             },
];

const values: Value[] = [
  { title: "Unity",     desc: "Together we are stronger. Every member belongs to something greater than themselves."       },
  { title: "Respect",   desc: "We honour the dignity of every family member — in word, deed, and decision."               },
  { title: "Integrity", desc: "Our name means something. We uphold truth and act with honour in all we do."               },
  { title: "Love",      desc: "An unconditional bond ties our generations together across every distance."                 },
  { title: "Support",   desc: "In times of need the family rises — we lift one another without condition."                 },
  { title: "Heritage",  desc: "Our roots run deep. We preserve our story so it is never lost or forgotten."               },
];

/* ── Page ────────────────────────────────────────────────── */
export default function About(): JSX.Element {
  return (
    <main>

      {/* ════════════════════════════════════════
          1. HERO — split layout
      ════════════════════════════════════════ */}
      <section className="bg-primary flex flex-col lg:flex-row min-h-[88vh]">

        {/* Left — headline + CTAs */}
        <div className="flex-[3] flex flex-col justify-center px-8 md:px-14 py-20">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10 uppercase tracking-widest">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">About</span>
          </nav>

          <span className="section-label text-accent/70">Our Family</span>

          <h1 className="section-title text-white text-6xl md:text-7xl leading-[1.05] mb-4">
            About<br />
            <span className="text-accent">Us</span>
          </h1>

          <div className="gold-divider" />

          <p className="text-white/60 font-light text-lg max-w-lg leading-[1.85] mb-10">
            Learn the story, values, and vision of the Umu Egbuke Bloodline —
            a family rooted in love, strength, and a shared identity carried
            across every generation and every border.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/register" className="btn-primary">
              Join the Family
            </Link>
            <Link
              href="#story"
              className="inline-block border border-white/25 text-white/80 font-semibold
                         text-sm px-7 py-3 rounded transition-colors
                         hover:border-accent hover:text-accent"
            >
              Explore Our Story
            </Link>
          </div>
        </div>

        {/* Right — stat panel */}
        <div className="flex-[2] bg-cream flex flex-col justify-center px-10 md:px-14 py-16
                        border-l border-[#E8E0CF] lg:min-h-full">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 flex flex-col gap-2
                          ${i < stats.length - 1 ? "border-b border-[#E8E0CF]" : ""}`}
            >
              <span className="font-heading font-bold text-accent leading-none
                               text-5xl md:text-6xl">
                {s.number}
              </span>
              <span className="text-[0.8125rem] font-medium uppercase tracking-[1.5px] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. OUR STORY — asymmetric grid
      ════════════════════════════════════════ */}
      <section id="story" className="bg-cream py-28 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">

          <span className="section-label">Who We Are</span>
          <h2 className="section-title text-primary text-4xl md:text-5xl">
            The Umu Egbuke Legacy
          </h2>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start mt-4">

            {/* Body copy — 7 cols */}
            <div className="md:col-span-7 space-y-6 text-[#3A3028] font-light
                            text-[0.9375rem] leading-[1.9]">
              <p>
                The Umu Egbuke Bloodline is more than a family — it is a living
                institution, a covenant of shared blood and shared purpose. For
                generations, our people have carried a name that stands for
                integrity, resilience, and community.
              </p>
              <p>
                Rooted in the rich cultural traditions of our homeland, the family
                has grown across regions, professions, and generations, yet remains
                bound by an unbreakable sense of identity. The name{" "}
                <span className="font-semibold text-primary">Okosisi</span> — our
                family portal — embodies this spirit: a great tree whose roots run
                deep and whose branches reach wide.
              </p>
              <p>
                This platform exists to connect, celebrate, and preserve our story
                so that no branch of the family ever feels lost or forgotten. Every
                name added to this record is a root deepened, a branch extended.
              </p>
            </div>

            {/* Pull-quote card — 5 cols */}
            <div className="md:col-span-5 relative bg-primary rounded-2xl px-10 pt-16 pb-10
                            overflow-hidden">
              {/* Decorative oversized opening quote */}
              <span
                aria-hidden="true"
                className="absolute top-2 left-6 font-heading font-bold text-accent/25
                           text-[8rem] leading-none select-none"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10">
                <p className="font-heading font-semibold italic text-white text-lg
                               leading-[1.75] mb-6">
                  A family without knowledge of its past is like a tree without
                  roots — it stands, but it does not truly grow.
                </p>
                <cite className="not-italic text-[11px] uppercase tracking-[1.5px]
                                 text-accent/70 font-medium">
                  — Umu Egbuke Elders Council
                </cite>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. VISION — centered, dramatic
      ════════════════════════════════════════ */}
      <section className="bg-cream-light py-28 px-8 md:px-14">
        <div className="max-w-6xl mx-auto text-center">

          <span className="section-label mx-auto w-fit">Looking Forward</span>
          <h2 className="section-title text-primary text-4xl md:text-5xl">
            Our Vision
          </h2>
          <div className="gold-divider mx-auto" />

          {/* Quote card */}
          <div className="relative bg-primary rounded-2xl py-16 px-10 md:px-16
                          max-w-4xl mx-auto overflow-hidden mt-4">
            {/* Decorative background quotation mark */}
            <span
              aria-hidden="true"
              className="absolute -top-4 left-8 font-heading font-bold text-accent/15
                         text-[10rem] leading-none select-none pointer-events-none"
            >
              &ldquo;
            </span>

            <p className="relative z-10 font-heading font-semibold italic text-white
                           text-xl md:text-2xl leading-[1.75] text-center max-w-3xl mx-auto
                           mb-8">
              To be a united, prosperous, and celebrated family — a bloodline that
              honours its past, strengthens its present, and secures a powerful legacy
              for generations yet to come.
            </p>

            {/* Gold rule */}
            <div className="w-16 h-px bg-accent/60 mx-auto mb-6" />

            <p className="text-[11px] uppercase tracking-[2px] text-accent/70 font-medium">
              — Umu Egbuke Bloodline
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          4. MISSION — numbered list
      ════════════════════════════════════════ */}
      <section className="bg-cream py-28 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">

          <span className="section-label">Our Purpose</span>
          <h2 className="section-title text-primary text-4xl md:text-5xl">
            Our Mission
          </h2>
          <div className="gold-divider" />

          <p className="text-[#5A5047] font-light text-[0.9375rem] leading-[1.85]
                         max-w-2xl mb-16">
            The Umu Egbuke Bloodline is committed to nurturing every member of our
            family — from the eldest elder to the newest born. Whether you live in
            the village or across the world, this family is your home.
          </p>

          <ul className="space-y-0 divide-y divide-[#E8E0CF]">
            {mission.map((item) => (
              <li key={item.num}
                  className="group flex items-start gap-8 py-8
                             hover:bg-cream-light transition-colors rounded-lg px-4 -mx-4">

                {/* Number + accent bar */}
                <div className="relative shrink-0 w-16 flex flex-col items-center pt-1">
                  <span className="font-heading font-bold text-accent/30 text-5xl leading-none
                                   group-hover:text-accent/50 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-px h-6 bg-accent/40 mt-1" />
                </div>

                {/* Mission text */}
                <p className="text-[0.9375rem] font-light text-[#3A3028] leading-[1.85]
                               pt-3 flex-1">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ════════════════════════════════════════
          5. CORE VALUES — refined card grid
      ════════════════════════════════════════ */}
      <section className="bg-primary py-28 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">

          <span className="section-label text-white/40">What Guides Us</span>
          <h2 className="section-title text-white text-4xl md:text-5xl">
            Core Values
          </h2>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group border border-accent/30 rounded-xl p-8 bg-white/5
                           hover:bg-accent/10 hover:border-accent/60 transition-all
                           duration-300 cursor-default"
              >
                <h3 className="font-heading font-semibold text-accent text-2xl mb-3
                               group-hover:text-accent transition-colors">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-[1.7]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          6. CTA — split two-tone, edge-to-edge
      ════════════════════════════════════════ */}
      <section className="flex flex-col md:flex-row">

        {/* Left — gold */}
        <div className="flex-1 bg-accent px-10 md:px-16 py-20 flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[1.5px] text-primary/60
                           font-medium mb-4">
            Join the Bloodline
          </span>
          <h2 className="font-heading font-bold text-primary text-4xl md:text-5xl
                         leading-[1.1] mb-5">
            You belong<br />here.
          </h2>
          <p className="text-primary/70 font-light text-[0.9375rem] leading-[1.85]
                         max-w-sm">
            Every registered member strengthens the family record. Make sure your
            branch is counted and connected.
          </p>
        </div>

        {/* Right — dark green */}
        <div className="flex-1 bg-primary px-10 md:px-16 py-20 flex flex-col
                        justify-center gap-5">
          <Link href="/register" className="btn-primary self-start">
            Register as a Member
          </Link>
          <Link
            href="/"
            className="self-start inline-block border border-accent/40 text-accent
                       font-semibold text-sm px-7 py-3 rounded transition-colors
                       hover:bg-accent hover:text-primary hover:border-accent"
          >
            Explore the Site
          </Link>
          <p className="text-white/30 text-xs font-light leading-relaxed max-w-xs mt-2">
            Already registered? Visit the{" "}
            <Link href="/directory"
                  className="text-accent/60 hover:text-accent underline underline-offset-2
                             transition-colors">
              family directory
            </Link>{" "}
            to find your branch.
          </p>
        </div>

      </section>

    </main>
  );
}
