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
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-24 text-center sm:px-6"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-brand-muted sm:mb-6 sm:text-sm sm:tracking-[0.55em]">
          Premium Sports Storytelling
        </p>
        <h1 className="font-heading text-4xl uppercase leading-none text-brand-text sm:text-6xl md:text-8xl">
          Capturing Performance.
        </h1>
        <h2 className="mt-3 font-heading text-2xl uppercase leading-none text-brand-text/85 sm:text-4xl md:text-6xl">
          Transforming Moments into Legacy.
        </h2>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#portfolio"
            className="rounded-full border border-brand-red px-8 py-3 text-center text-xs uppercase tracking-[0.2em] transition hover:bg-brand-red/10 hover:shadow-glow sm:text-sm"
          >
            View Work
          </a>
          <a
            href="#booking"
            className="rounded-full border border-brand-red bg-brand-red px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover hover:shadow-glow sm:text-sm"
          >
            Book a Shoot
          </a>
        </div>
      </motion.div>
    </section>
  );
}
