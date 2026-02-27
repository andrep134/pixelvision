"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioItems } from "@/data/siteData";

type Filter = "all" | "photo" | "video";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<number | null>(null);

  const filters: Filter[] = ["all", "photo", "video"];
  const filtered = useMemo(
    () => (filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.type === filter)),
    [filter]
  );

  const active = portfolioItems.find((item) => item.id === activeId) ?? null;

  return (
    <section id="portfolio" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand-muted">Portfolio</p>
          <h3 className="font-heading text-3xl uppercase sm:text-4xl md:text-5xl">Signature Frames & Films</h3>
        </div>
        <div className="flex gap-2 rounded-full border border-white/10 bg-brand-surface/70 p-1">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`relative rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
                filter === item ? "text-white" : "text-brand-muted"
              }`}
            >
              {filter === item && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 rounded-full bg-brand-red"
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveId(item.id)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 text-left shadow-card"
            >
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ boxShadow: "inset 0 0 70px rgba(214, 28, 28, 0.35)" }} />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">{item.category}</p>
                <p className="font-heading text-3xl uppercase">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/10 bg-brand-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 w-full sm:h-80">
                <Image src={active.image} alt={active.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-red">{active.category}</p>
                <h4 className="font-heading text-3xl uppercase sm:text-5xl">{active.title}</h4>
                <p className="text-brand-muted">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
