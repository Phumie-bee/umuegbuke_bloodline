import Link from "next/link";
import type { JSX } from "react";

export default function Welfare(): JSX.Element {
  return (
    <main>
      <section className="bg-primary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Welfare</span>
          </nav>
          <span className="section-label text-accent/70">We Rise Together</span>
          <h1 className="section-title text-white text-5xl md:text-[3.5rem]">
            Welfare &amp; Support
          </h1>
          <div className="gold-divider" />
          <p className="text-white/65 font-light text-[1.0625rem] max-w-2xl leading-[1.85]">
            Resources and support available to Umu Egbuke family members in
            times of need. In this family, no one faces hardship alone.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label">How We Help</span>
          <h2 className="section-title text-primary text-3xl">How We Support Each Other</h2>
          <div className="gold-divider" />
          <p className="text-[#3A3028] font-light text-[0.9375rem] leading-[1.85] max-w-2xl mb-8">
            Our family stands together in times of joy and hardship. If you need
            assistance or wish to contribute to the welfare fund, please reach out
            via the Contact page.
          </p>
          <Link href="/contact" className="btn-primary">Contact the Committee</Link>
        </div>
      </section>
    </main>
  );
}
