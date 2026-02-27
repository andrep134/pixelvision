"use client";

import { motion } from "framer-motion";
import Booking from "@/components/Booking";
import FilmGrain from "@/components/FilmGrain";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Booking />
      <Footer />
      <FilmGrain />
    </motion.main>
  );
}
