"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type SplashScreenProps = {
  show: boolean;
};

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b] px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.03, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex max-w-3xl flex-col items-center text-center"
          >
            <div className="relative h-24 w-72 sm:h-32 sm:w-96 md:h-40 md:w-[34rem]">
              <Image src="/assets/pixelvisionlogo.png" alt="PixelVision logo" fill className="object-contain" priority />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.45em] text-brand-muted sm:text-sm">
              “Every frame tells your legacy.”
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
