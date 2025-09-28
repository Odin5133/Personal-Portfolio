// app/template.tsx
"use client";

import { motion } from "framer-motion";

// Variants for the page transition
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 0.5 }}
      >
        {children}
      </motion.main>

      {/* Slide-in screen */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Slide-out screen */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
