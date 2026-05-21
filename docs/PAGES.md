# Pages & Project Overview

## What This Project Is

**Okosisi** — the official family portal for the **Umu Egbuke Bloodline**.
A community website for a Nigerian family to connect, register members, share news,
view events, browse a family directory, and access welfare resources.

Brand name: **Okosisi** (means "great tree" — roots run deep, branches reach wide)

---

## Pages

| Route | File | Status | Purpose |
|---|---|---|---|
| `/` | `app/page.tsx` | Placeholder | Homepage — hero, features, events, CTA |
| `/about` | `app/about/page.tsx` | Not built | Family story, vision, mission, values |
| `/directory` | `app/directory/page.tsx` | Not built | Browse registered family members |
| `/events` | `app/events/page.tsx` | Not built | Upcoming and past family events |
| `/gallery` | `app/gallery/page.tsx` | Not built | Photo gallery from reunions/ceremonies |
| `/news` | `app/news/page.tsx` | Not built | News and announcements from leadership |
| `/register` | `app/register/page.tsx` | Not built | Member registration form |
| `/tribute` | `app/tribute/page.tsx` | Not built | Tributes and memorials for passed members |
| `/welfare` | `app/welfare/page.tsx` | Not built | Welfare fund info and support resources |
| `/contact` | `app/contact/page.tsx` | Not built | Contact the family committee |

---

## Components

| File | Status | Notes |
|---|---|---|
| `components/Navbar.tsx` | ✅ Done | Sticky, scroll-aware, mobile hamburger, ARIA compliant |
| `components/Footer.tsx` | Not built | Dark `bg-footer`, links, copyright |

---

## Navbar Nav Links

```ts
{ href: "/",          label: "Home"      }
{ href: "/about",     label: "About"     }
{ href: "/directory", label: "Directory" }
{ href: "/events",    label: "Events"    }
{ href: "/gallery",   label: "Gallery"   }
{ href: "/welfare",   label: "Welfare"   }
{ href: "/contact",   label: "Contact"   }
// Register Now button → /register
```

---

## Shared Data / Copy

**Stats shown on homepage and about page:**
- 500+ Registered Members
- 12 Family Branches
- 20+ Years of Unity

**Core Values:** Unity, Respect, Integrity, Love, Support, Heritage

**Mission points:**
1. Foster unity and mutual respect among all family members regardless of location.
2. Preserve our cultural identity, traditions, and the stories of our ancestors.
3. Support one another through welfare initiatives and community action.
4. Celebrate milestones and create lasting memories across generations.
5. Build a prosperous legacy that future descendants will be proud of.

**Vision statement:**
> "To be a united, prosperous, and celebrated family — a bloodline that honours its past,
> strengthens its present, and secures a powerful legacy for generations yet to come."

**Upcoming events (sample data):**
- 15 Jun 2026 — Annual Family Grand Reunion, Enugu, Nigeria
- 03 Aug 2026 — Welfare & Planning Committee Meeting, Lagos, Nigeria
- 18 Oct 2026 — Cultural Night & Family Awards, Owerri, Nigeria
