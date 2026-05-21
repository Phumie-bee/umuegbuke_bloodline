# Design System

## Color Tokens

All colors are defined as CSS custom properties in `app/globals.css` `:root`
and registered in `@theme inline` so Tailwind utility classes are auto-generated.

| Token | Variable | Hex | Usage |
|---|---|---|---|
| `deep-rose` | `--deep-rose` | `#7a3e48` | Navbar, hero, dark sections, headings |
| `desert-sand` | `--desert-sand` | `#e4bb97` | Buttons, logo accent, dividers, mission numbers |
| `smoky-rose` | `--smoky-rose` | `#9d5c63` | Section labels, CTA section, marquee strip |
| `seashell` | `--seashell` | `#fef5ef` | Page background, card backgrounds |
| `lavender` | `--lavender` | `#d6e3f8` | Quote sections, feature card accents |
| `footer` | `--footer-dark` | `#3a1820` | Footer background |
| `text` | `--text` | `#1a0f11` | Body text |
| `muted` | `--text-muted` | `#7a6065` | Muted / secondary text |

**Usage:** `bg-deep-rose`, `text-desert-sand`, `border-seashell`, `text-seashell/75` (opacity modifier), etc.

**Rule: Never use hardcoded hex values in className. Always use the token class.**

---

## Typography

| Role | Font | Variable | Tailwind class |
|---|---|---|---|
| Headings | Playfair Display | `--font-playfair` → `--font-heading` | `font-heading` |
| Body | DM Sans | `--font-dm-sans` | default body font |

Both fonts are loaded via `next/font/google` in `app/layout.tsx` and injected as
CSS variables (`--font-dm-sans`, `--font-playfair`) on the `<html>` element.

---

## Global Component Classes

Defined in `app/globals.css` `@layer components`. Use these everywhere for consistency.

| Class | Purpose | Key styles |
|---|---|---|
| `.section-label` | Small uppercase eyebrow text | `text-xs`, `tracking-[2px]`, `text-smoky-rose`, `uppercase` |
| `.section-title` | Section heading | `font-heading`, `font-bold`, `leading-tight` |
| `.gold-divider` | Decorative horizontal rule | `w-10 h-[3px] bg-desert-sand rounded-sm mb-10` |
| `.btn-primary` | Filled action button | `bg-desert-sand text-deep-rose`, hover `bg-desert-sand/80` |
| `.btn-outline` | Outlined action button | `border-deep-rose text-deep-rose`, hover fills `bg-deep-rose` |

---

## Section Background Pattern

Alternate sections using these backgrounds for visual rhythm:

1. `bg-deep-rose` — dark hero/feature sections
2. `bg-seashell` — default light sections
3. `bg-[#F5EDD8]` — slightly warmer cream for contrast sections
4. `bg-lavender` — accent quote/highlight sections
5. `bg-footer` — footer only
