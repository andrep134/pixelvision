"use client";

import { FormEvent, useMemo, useState } from "react";

const steps = ["Details", "Session", "Review"];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    sport: "",
    package: "Individual Athlete Shoot",
    date: "",
    notes: ""
  });

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="booking" className="mx-auto w-full max-w-4xl px-6 py-24 md:px-8">
      <p className="text-sm uppercase tracking-[0.4em] text-brand-muted">Booking</p>
      <h3 className="font-heading text-5xl uppercase">Book Your Cinematic Session</h3>

      <div className="mt-8 rounded-2xl border border-white/10 bg-brand-surface/80 p-8 shadow-card">
        {!submitted ? (
          <>
            <div className="mb-8">
              <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.2em] text-brand-muted">
                <span>{steps[step]}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-brand-red transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              {step === 0 && (
                <>
                  <input
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <input
                    required
                    placeholder="Sport / Discipline"
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                    value={form.sport}
                    onChange={(e) => setForm({ ...form, sport: e.target.value })}
                  />
                  <select
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                    value={form.package}
                    onChange={(e) => setForm({ ...form, package: e.target.value })}
                  >
                    <option>Individual Athlete Shoot</option>
                    <option>Team Coverage</option>
                    <option>Promotional Reels</option>
                  </select>
                  <input
                    required
                    type="date"
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </>
              )}

              {step === 2 && (
                <textarea
                  rows={5}
                  placeholder="Project goals, mood, target platforms..."
                  className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none transition focus:border-brand-red"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              )}

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                  disabled={step === 0}
                  className="rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.2em] text-brand-muted disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="rounded-full border border-brand-red bg-brand-red px-7 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover hover:shadow-glow"
                >
                  {step < steps.length - 1 ? "Continue" : "Confirm"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="rounded-2xl border border-brand-red/40 bg-black/30 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-red">Confirmed</p>
            <h4 className="mt-2 font-heading text-5xl uppercase">You&apos;re Booked</h4>
            <p className="mx-auto mt-4 max-w-lg text-brand-muted">
              Thanks {form.name || "Athlete"}! PixelVision will contact you at {form.email || "your email"} to finalize
              creative direction and schedule.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
