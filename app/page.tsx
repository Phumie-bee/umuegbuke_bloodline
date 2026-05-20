import Link from "next/link";
import type { JSX } from "react";
import styles from "./page.module.css";

/* ── Icon components ─────────────────────────────────────── */
function IconUsers(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconGrid(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3"  y="3"  width="7" height="7" rx="1" />
      <rect x="14" y="3"  width="7" height="7" rx="1" />
      <rect x="3"  y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconBell(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function IconImage(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function IconHeart(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function IconFlame(): JSX.Element {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

/* ── Data types ──────────────────────────────────────────── */
interface Stat {
  number: string;
  label: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  href: string;
  desc: string;
}

interface FamilyEvent {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
}

/* ── Data ────────────────────────────────────────────────── */
const stats: Stat[] = [
  { number: "500+", label: "Registered Members" },
  { number: "12",   label: "Family Branches"    },
  { number: "20+",  label: "Years of Unity"     },
];

const features: Feature[] = [
  { icon: <IconUsers />, title: "Family Registration",  href: "/register",  desc: "Officially register your household and become part of the living record of the Umu Egbuke Bloodline." },
  { icon: <IconGrid />,  title: "Family Directory",      href: "/directory", desc: "Browse registered family members across all branches and geographical locations." },
  { icon: <IconBell />,  title: "News & Announcements",  href: "/news",      desc: "Stay informed with the latest updates, decisions, and notices from family leadership." },
  { icon: <IconImage />, title: "Photo Gallery",         href: "/gallery",   desc: "Relive precious moments from reunions, ceremonies, and cherished family milestones." },
  { icon: <IconHeart />, title: "Welfare & Support",     href: "/welfare",   desc: "Access family welfare resources and contribute to supporting members in times of need." },
  { icon: <IconFlame />, title: "Tributes & Memorials",  href: "/tribute",   desc: "Honor and remember loved ones whose legacies continue to shape who we are." },
];

const missionPoints: string[] = [
  "Foster unity and mutual respect among all family members regardless of location.",
  "Preserve our cultural identity, traditions, and the stories of our ancestors.",
  "Support one another through welfare initiatives and community action.",
  "Celebrate milestones and create lasting memories across generations.",
  "Build a prosperous legacy that future descendants will be proud of.",
];

const values: string[] = ["Unity", "Respect", "Integrity", "Love", "Support", "Heritage"];

const events: FamilyEvent[] = [
  { day: "15", month: "Jun", year: "2026", title: "Annual Family Grand Reunion",         location: "Enugu, Nigeria"  },
  { day: "03", month: "Aug", year: "2026", title: "Welfare & Planning Committee Meeting", location: "Lagos, Nigeria"  },
  { day: "18", month: "Oct", year: "2026", title: "Cultural Night & Family Awards",       location: "Owerri, Nigeria" },
];

/* ── Page ────────────────────────────────────────────────── */
export default function Home(): JSX.Element {
  return (
    <main>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.heroLabel}>Est. Since The Beginning</span>
          <h1 className={styles.heroHeading}>
            One Family,<br />One Heritage
          </h1>
          <p className={styles.heroSub}>
            A living bond across generations. The Umu Egbuke Bloodline is a
            community rooted in love, strength, and a shared identity that
            transcends borders.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/register" className={styles.btnSolid}>Join the Family</Link>
            <Link href="/about"    className={styles.btnGhost}>Explore the Site</Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className={styles.features}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>What We Offer</span>
          <h2 className={styles.sectionHeading}>Everything the Family Needs</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <Link key={f.title} href={f.href} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className={styles.visionMission}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Who We Are</span>
          <h2 className={styles.sectionHeading}>Vision &amp; Mission</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.vmGrid}>
            <div className={styles.visionBox}>
              <span className={styles.vmTag}>Our Vision</span>
              <p className={styles.visionText}>
                &ldquo;To be a united, prosperous, and celebrated family —
                a bloodline that honors its past, strengthens its present,
                and secures a powerful legacy for generations yet to come.&rdquo;
              </p>
            </div>
            <div className={styles.missionCol}>
              <span className={styles.vmTag}>Our Mission</span>
              <ul className={styles.missionList}>
                {missionPoints.map((m) => (
                  <li key={m} className={styles.missionItem}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className={styles.coreValues}>
        <div className={styles.container}>
          <span className={styles.sectionLabelLight}>What Guides Us</span>
          <h2 className={styles.sectionHeadingLight}>Our Core Values</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v} className={styles.valuePill}>{v}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS */}
      <section className={styles.events}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Mark Your Calendar</span>
          <h2 className={styles.sectionHeading}>Upcoming Events</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.eventsGrid}>
            {events.map((e) => (
              <div key={e.title} className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>{e.day}</span>
                  <span className={styles.eventMonth}>{e.month} {e.year}</span>
                </div>
                <div className={styles.eventBody}>
                  <h3 className={styles.eventTitle}>{e.title}</h3>
                  <p className={styles.eventLocation}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden="true"
                      className="inline align-middle mr-1.25">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {e.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.eventsFooter}>
            <Link href="/events" className={styles.viewAllLink}>View All Events &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaLabel}>The Family is Waiting</span>
          <h2 className={styles.ctaHeading}>You belong here.</h2>
          <p className={styles.ctaSub}>
            Every branch. Every generation. Every story. They all start with
            one step — becoming part of the official Umu Egbuke record.
          </p>
          <Link href="/register" className={styles.ctaBtn}>Register as a Member</Link>
        </div>
      </section>
    </main>
  );
}
