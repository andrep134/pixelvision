"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Booking from "@/components/Booking";
import FilmGrain from "@/components/FilmGrain";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SplashScreen from "@/components/SplashScreen";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowSplash(false), 2200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <SplashScreen show={showSplash} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Header />
        <Hero />
        <Portfolio />
        <Services />
        <Booking />
        <Footer />
        <FilmGrain />
      </motion.main>
    </>
  );
}
