import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "/about",     label: "About"    },
  { href: "/directory", label: "Directory"},
  { href: "/events",    label: "Events"   },
  { href: "/gallery",   label: "Gallery"  },
  { href: "/welfare",   label: "Welfare"  },
  { href: "/tribute",   label: "Tributes" },
  { href: "/contact",   label: "Contact"  },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>Okosisi</div>
          <p className={styles.tagline}>Umu Egbuke Bloodline</p>
        </div>
        <nav className={styles.nav}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.divider} />
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Okosisi — Umu Egbuke Bloodline. All rights reserved.
      </p>
    </footer>
  );
}
