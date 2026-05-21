import type { JSX } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface NavColumn {
  heading: string;
  links: NavLink[];
}

const navColumns: NavColumn[] = [
  {
    heading: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/register", label: "Register" },
      { href: "/directory", label: "Directory" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/welfare", label: "Welfare" },
      { href: "/tribute", label: "Tributes" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "/contact", label: "Phone" },
      { href: "/contact", label: "Email" },
      { href: "/contact", label: "Address" },
    ],
  },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-footer">
      {/* Main row */}
      <div className="px-4 sm:px-8 md:px-16 pt-12 md:pt-16 pb-10 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand */}
        <div className="shrink-0">
          <p className="font-heading font-bold text-2xl text-desert-sand mb-1.5">
            Okosisi
          </p>
          <p className="text-seashell/50 text-sm">
            Umu Egbuke Bloodline — Connected by heritage
          </p>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-widest text-seashell/40 mb-4">
                {col.heading}
              </p>
              <ul className="list-none flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-seashell/60 hover:text-desert-sand transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 sm:mx-8 md:mx-16 border-t border-seashell/10" />

      {/* Bottom bar */}
      <div className="px-4 sm:px-8 md:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-seashell/40">
          © 2025 Umu Egbuke Bloodline. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="text-xs text-seashell/50 hover:text-desert-sand transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs text-seashell/50 hover:text-desert-sand transition-colors duration-200"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
