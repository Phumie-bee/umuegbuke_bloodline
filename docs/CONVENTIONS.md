# Code Conventions

## Stack

- **Framework:** Next.js (App Router) — check `node_modules/next/dist/docs/` before writing anything, this version has breaking changes
- **Language:** TypeScript — strict mode enabled (`"strict": true` in tsconfig)
- **Styling:** Tailwind CSS v4 — `@import "tailwindcss"`, `@theme inline`, `@layer base/components`
- **Fonts:** `next/font/google` only — no CDN links

---

## TypeScript Rules

- Every component function must declare its return type: `function Foo(): JSX.Element`
- Import the type: `import type { JSX } from "react"`
- Type all `useState` hooks: `useState<boolean>(false)`, `useState<string>("")`
- Type all event handlers explicitly: `function handleScroll(): void { ... }`
- Use `interface` for object shapes (e.g. `NavLink`, `Stat`, `Feature`)
- Client components that use hooks must have `"use client"` as the very first line

---

## Import Paths

- Use the `@/` path alias for all project imports — **never** relative `../` paths
  - ✅ `import Navbar from "@/components/Navbar"`
  - ❌ `import Navbar from "../components/Navbar"`
- `@/*` maps to the project root (configured in `tsconfig.json`)

---

## Tailwind Rules

- **No hardcoded hex values** in `className` — always use design token classes
  - ✅ `text-desert-sand`, `bg-deep-rose/80`
  - ❌ `text-[#e4bb97]`, `bg-[#7a3e48]`
- **No hardcoded `px` values** in arbitrary classes — use Tailwind scale or `rem`
  - ✅ `gap-1.5`, `min-h-16`, `h-0.5`, `rounded-md`
  - ❌ `gap-[5px]`, `min-h-[64px]`, `h-[2px]`, `rounded-[6px]`
- Use `transition-colors` not `transition-all` when only color/border changes on hover
- Use `transition-all` only when multiple unrelated properties change simultaneously

---

## CSS Architecture

- All base resets and global element styles go inside `@layer base` in `globals.css`
  — this ensures Tailwind utility classes always win over base styles
- Design tokens live in `:root { }` — defined **before** `@layer base`
- `@theme inline` registers tokens as Tailwind utilities — defined after `:root`
- Component utility classes (`.btn-primary`, `.section-label`) go in `@layer components`

**Why this matters:** CSS outside any `@layer` has higher cascade priority than layered
styles. Putting `a { color: inherit }` outside a layer would override `text-seashell`
on any `<Link>` component. Everything base-level must be in `@layer base`.

---

## Component Patterns

### Interactive elements
- Hover/focus styles belong on the **interactive element itself** (`<Link>`, `<button>`),
  not on a parent wrapper
- All interactive elements need `transition-colors duration-200` (or appropriate transition)

### Accessibility
- Hamburger buttons: `aria-label`, `aria-expanded={menuOpen}`, `aria-controls="<menu-id>"`
- Mobile menu container: `id` matching the button's `aria-controls`
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<ul>/<li>`

### Lists
- Navigation link lists: `list-none` on `<ul>` (global reset doesn't strip list styles)
- Use `key={item.href}` or another stable unique value when mapping nav links

### Server vs Client components
- Default to Server Components (no `"use client"`)
- Only add `"use client"` when the component uses hooks (`useState`, `useEffect`, etc.)
  or browser APIs (`window`, `document`)
- Keep client boundaries as small/deep as possible

---

## File Structure

```
app/
  layout.tsx          ← RootLayout, loads fonts, mounts Navbar
  globals.css         ← Tailwind import, :root tokens, @theme, @layer base/components
  page.tsx            ← Homepage (/)
  about/page.tsx
  contact/page.tsx
  directory/page.tsx
  events/page.tsx
  gallery/page.tsx
  news/page.tsx
  register/page.tsx
  tribute/page.tsx
  welfare/page.tsx
  api/
    register/route.ts

components/
  Navbar.tsx          ← "use client", sticky, scroll-aware, mobile menu
  Footer.tsx          ← (to be built)

docs/
  DESIGN_SYSTEM.md
  CONVENTIONS.md
  PAGES.md
```
