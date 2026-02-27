"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-[#0b0b0d]" />
      <div className="absolute inset-0 bg-vignette" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.55em] text-brand-muted">Premium Sports Storytelling</p>
        <h1 className="font-heading text-6xl uppercase leading-none text-brand-text md:text-8xl">
          Capturing Performance.
        </h1>
        <h2 className="mt-3 font-heading text-4xl uppercase leading-none text-brand-text/85 md:text-6xl">
          Transforming Moments into Legacy.
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="rounded-full border border-brand-red px-8 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-brand-red/10 hover:shadow-glow"
          >
            View Work
          </a>
          <a
            href="#booking"
            className="rounded-full border border-brand-red bg-brand-red px-8 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover hover:shadow-glow"
          >
            Book a Shoot
          </a>
        </div>
      </motion.div>
    </section>
  );
}
