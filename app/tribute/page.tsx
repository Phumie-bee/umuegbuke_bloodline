import Link from "next/link";
import type { JSX } from "react";

export default function Tribute(): JSX.Element {
  return (
    <main>
      <section className="bg-primary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Tributes</span>
          </nav>
          <span className="section-label text-accent/70">In Loving Memory</span>
          <h1 className="section-title text-white text-5xl md:text-[3.5rem]">
            Tributes &amp; Memorials
          </h1>
          <div className="gold-divider" />
          <p className="text-white/65 font-light text-[1.0625rem] max-w-2xl leading-[1.85]">
            Honouring and remembering the ancestors and loved ones whose lives
            and legacies continue to shape who we are.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7A7065] text-[0.9375rem] font-light leading-[1.85] mb-8">
            No memorials have been added yet.
          </p>
          <Link href="/contact" className="btn-primary">Submit a Tribute</Link>
        </div>
      </section>
    </main>
  );
}
