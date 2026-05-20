"use client";

import Link from "next/link";
import { useState } from "react";
import type { JSX, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  branch: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", phone: "", branch: "" };

export default function Register(): JSX.Element {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Register</span>
          </nav>
          <span className="section-label text-accent/70">Join the Family</span>
          <h1 className="section-title text-white text-5xl md:text-[3.5rem]">
            Family Registration
          </h1>
          <div className="gold-divider" />
          <p className="text-white/65 font-light text-[1.0625rem] max-w-2xl leading-[1.85]">
            Register your household and become part of the official Umu Egbuke
            Bloodline record. It only takes a moment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <span className="section-label">Your Details</span>
          <h2 className="section-title text-primary text-3xl">Register Your Branch</h2>
          <div className="gold-divider" />

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Chukwuemeka Okonkwo"
                className="w-full border border-[#D9D0C0] bg-white rounded px-4 py-3
                           text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#B0A898]
                           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                           transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-primary">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-[#D9D0C0] bg-white rounded px-4 py-3
                           text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#B0A898]
                           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                           transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-primary">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className="w-full border border-[#D9D0C0] bg-white rounded px-4 py-3
                           text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#B0A898]
                           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                           transition-colors"
              />
            </div>

            {/* Family Branch */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="branch" className="text-sm font-medium text-primary">
                Family Branch
              </label>
              <input
                id="branch"
                name="branch"
                type="text"
                value={form.branch}
                onChange={handleChange}
                placeholder="e.g. Umuahia, Enugu, Diaspora"
                className="w-full border border-[#D9D0C0] bg-white rounded px-4 py-3
                           text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#B0A898]
                           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                           transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting…" : "Register Now"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-4 py-3">
                Registration successful! Welcome to the Umu Egbuke family.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
