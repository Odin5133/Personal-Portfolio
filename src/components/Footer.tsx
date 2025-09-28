"use client";
import React, { useRef } from "react";
import { Heart } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Create smooth scroll-linked animations
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 50,
    damping: 15,
  });
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1, 1], [0.8, 0.9, 1]),
    {
      stiffness: 60,
      damping: 20,
    }
  );

  return (
    <motion.footer
      ref={footerRef}
      style={{ y, opacity }}
      className="w-full bg-[#1a120b] text-beige py-16 px-6 md:px-12 lg:px-24 border-t border-amber-900/30 rounded-t-3xl z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section - Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Replace with your logo */}
            <Link href="/" className="text-xl font-bold">
              <Image
                src="/Logo.png"
                height={80}
                width={80}
                alt="Atharva Zanjad"
                className="text-white"
              />
            </Link>
            <h2 className="text-2xl font-bold text-amber-100">
              Atharva Zanjad
            </h2>
          </div>
          <div className="flex items-center gap-2 text-amber-200/80">
            <span>Made with</span>
            <Heart className="w-5 h-5 fill-amber-600 text-amber-600" />
            <span>in 2025</span>
          </div>
          <div className="text-sm text-amber-200/50 mt-4">
            © 2025 All rights reserved
          </div>
        </div>

        {/* Right Section - Easter Egg */}
        <div className="relative group max-w-md">
          <div className="absolute -inset-2 bg-amber-900/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-amber-950/40 backdrop-blur-sm p-6 rounded-lg border border-amber-900/50">
            <h3 className="text-lg font-medium text-amber-100 mb-2">
              You made it!
            </h3>
            <p className="text-amber-200/80">
              Thanks for scrolling all the way down! I believe that best things
              come to those who wait. Let&apos;s create something remarkable
              together.
            </p>
            <div className="mt-4 text-xs text-amber-500/70">
              P.S. Did you enjoy the floating orbs above? 😉
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
