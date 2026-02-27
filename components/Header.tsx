"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#0b0b0dcc] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#" className="relative h-10 w-40 sm:w-48">
          <Image src="/assets/pixelvisionlogo.png" alt="PixelVision logo" fill className="object-contain" priority />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-text md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-underline text-sm uppercase tracking-[0.2em] text-brand-text/90">
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full border border-brand-red bg-brand-red px-6 py-2 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover hover:shadow-glow"
          >
            Book
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0df0] px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-brand-text/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-brand-red bg-brand-red px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-white"
            >
              Book
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
