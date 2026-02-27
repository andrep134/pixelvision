"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b0b0dcc] backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#" className="relative h-10 w-48">
          <Image src="/assets/pixelvisionlogo.png" alt="PixelVision logo" fill className="object-contain" priority />
        </a>

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
    </motion.header>
  );
}
