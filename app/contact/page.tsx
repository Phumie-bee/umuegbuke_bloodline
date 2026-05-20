import Link from "next/link";
import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <main>
      <section className="bg-primary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <span className="section-label text-accent/70">Get in Touch</span>
          <h1 className="section-title text-white text-5xl md:text-[3.5rem]">Contact Us</h1>
          <div className="gold-divider" />
          <p className="text-white/65 font-light text-[1.0625rem] max-w-2xl leading-[1.85]">
            Have a question, a tribute to submit, or want to reach the family
            committee? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label">Reach Out</span>
          <h2 className="section-title text-primary text-3xl">How to Contact Us</h2>
          <div className="gold-divider" />

          <div className="space-y-4 text-[0.9375rem] font-light text-[#3A3028] leading-[1.85]">
            <p>
              <span className="font-medium text-primary">Email: </span>
              <a
                href="mailto:info@umuegbuke.org"
                className="text-accent hover:underline"
              >
                info@umuegbuke.org
              </a>
            </p>
            <p>
              For family registration, visit the{" "}
              <Link href="/register" className="text-primary font-medium hover:text-accent transition-colors">
                Register
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
