"use client";
import React, { useState, useEffect } from "react";
import { Copy, Linkedin, ArrowUpRight } from "lucide-react";

const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  // 1. Update the orb state to include a 'baseSize'
  const [orbs, setOrbs] = useState<
    { id: number; size: number; x: number; y: number; baseSize: number }[]
  >([]);

  // Generate random orbs with a baseSize on mount
  useEffect(() => {
    const newOrbs = Array.from({ length: 40 }).map((_, i) => {
      const size = Math.random() * 4 + 2; // Random size between 2-6
      return {
        id: i,
        size: size,
        baseSize: size, // Store the original size
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
    });
    setOrbs(newOrbs);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("zanjadatharva@protonmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/atharva-zanjad/", "_blank");
  };

  // Handle mouse movement for orb interaction
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    setOrbs((prevOrbs) =>
      prevOrbs.map((orb) => {
        const distance = Math.sqrt(
          Math.pow(x - orb.x, 2) + Math.pow(y - orb.y, 2)
        );

        // 2. Set size directly instead of incrementing/decrementing
        const newSize = distance < 15 ? 12 : orb.baseSize; // Enlarge to a fixed size or return to base

        return {
          ...orb,
          size: newSize,
        };
      })
    );
  };

  return (
    <section
      className="py-24 md:py-40 mx-4 md:mx-20 px-6 relative overflow-hidden rounded-3xl border-2 border-dashed border-primary/20 my-20"
      onMouseMove={handleMouseMove}
      id="CTA"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full bg-accent opacity-20 transition-all duration-300 ease-out"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size * 4}px`,
              height: `${orb.size * 4}px`,
              transform: "translate(-50%, -50%)",
              transitionProperty: "width, height", // Only transition size properties
            }}
          />
        ))}
      </div>

      <div className="max-w-xl mx-auto text-center relative bg-background/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl sm:rounded-full">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent to-accentdark">
          Wanna Talk?
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accentdark text-white font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <Copy className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </div>
            <div className="ml-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-5 h-5 text-accentlight" />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300"></div>
            </div>
          </button>

          {/* LinkedIn Button */}
          <button
            onClick={openLinkedIn}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-primary font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accentlight focus:ring-offset-2 hover:bg-accentlight/10"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </div>
            <div className="ml-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-5 h-5 text-aceentdark" />
            </div>
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-pulse"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
