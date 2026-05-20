import Link from "next/link";
import type { JSX } from "react";

export default function Directory(): JSX.Element {
  return (
    <main>
      <section className="bg-primary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Directory</span>
          </nav>
          <span className="section-label text-accent/70">Our Members</span>
          <h1 className="section-title text-white text-5xl md:text-[3.5rem]">Family Directory</h1>
          <div className="gold-divider" />
          <p className="text-white/65 font-light text-[1.0625rem] max-w-2xl leading-[1.85]">
            Browse all registered members of the Umu Egbuke Bloodline across
            every branch and location.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#7A7065] text-[0.9375rem] font-light leading-[1.85] mb-8">
            No members registered yet. Be the first to join the family record.
          </p>
          <Link href="/register" className="btn-primary">Register Now</Link>
        </div>
      </section>
    </main>
  );
}
