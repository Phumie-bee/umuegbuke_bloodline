"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/",          label: "Home"      },
  { href: "/about",     label: "About"     },
  { href: "/directory", label: "Directory" },
  { href: "/events",    label: "Events"    },
  { href: "/gallery",   label: "Gallery"   },
  { href: "/welfare",   label: "Welfare"   },
  { href: "/contact",   label: "Contact"   },
];

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Okosisi</Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/register"
              className={styles.registerBtn}
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
