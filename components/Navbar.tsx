"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { JSX } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/welfare", label: "Welfare" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll(): void {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-deep-rose border-b-3 border-desert-sand",
        "transition-shadow duration-300",
        scrolled
          ? "backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "shadow-none",
      ].join(" ")}
    >
      {/* ── Main bar ── */}
      <div className="min-h-16 flex items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/family_logo.png"
            alt="Okosisi — Umu Egbuke Bloodline"
            width={447}
            height={559}
            className="h-17 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-seashell/90
                           transition-colors duration-200 hover:text-desert-sand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: register button + hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/register"
            className="hidden md:inline-block border border-seashell text-seashell
                       text-sm font-medium px-4.5 py-2 rounded-md
                       transition-colors duration-200 hover:bg-seashell hover:text-deep-rose"
          >
            Register Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col justify-center gap-1.5
                       w-8 h-8 bg-transparent border-none cursor-pointer p-0"
          >
            <span
              className={[
                "block w-6 h-0.5 bg-seashell rounded origin-center transition-all duration-200",
                menuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-seashell rounded transition-all duration-200",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-seashell rounded origin-center transition-all duration-200",
                menuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden bg-deep-rose border-t border-desert-sand/20",
          "transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col items-center py-5 gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-seashell/75 text-sm font-normal
                           transition-colors duration-200 hover:text-desert-sand"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="mt-4">
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="inline-block border border-seashell text-seashell
                         text-sm font-medium px-4.5 py-2 rounded-md
                         transition-colors duration-200 hover:bg-seashell hover:text-deep-rose"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
