"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [showHint, setShowHint] = useState(false);

  // Show subtle hint animation on load
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 500); // Small delay to appear
    const hideTimer = setTimeout(() => setShowHint(false), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 my-32 md:my-0 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left side - Text content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-accent font-sans">About Me</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              I&apos;m a passionate full-stack developer specializing in the
              MERN stack, with experience building intuitive user interfaces and
              scalable web applications.
            </p>
            <p>
              My journey in tech began when I built my first website at 15 and
              won many events creating SCRATCH projects and websites, and since
              then I&apos;ve been obsessed with creating digital experiences
              that solve real problems.
            </p>
            <p>
              Beyond my coding work, my passions include exploring local coffee
              shops, immersing myself in books, staying current with the latest
              tech innovations, and seeking out new adventures through trekking
              and general exploration.
            </p>
          </div>
        </div>

        {/* Right side - Flippable card with colored shadow */}
        <div className="flex justify-center md:justify-end md:w-1/2">
          {/* The `group` class on this static parent is the key.
            Hovering anywhere inside this box will now trigger the animation.
          */}
          <div className="relative w-80 h-96 [perspective:1000px] group">
            {/* Subtle hint animation */}
            {showHint && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-70 animate-pulse">
                (hover to flip)
              </div>
            )}

            {/* Colored shadow background changes with group-hover */}
            <div
              className="absolute inset-0 w-full h-full translate-x-4 translate-y-2 rounded-lg 
                         border-2 border-dotted border-gray-300 transition-colors duration-300
                         bg-[#b9d8fd] group-hover:bg-[#b9fdc6]"
            />

            {/* Card container now uses group-hover to rotate */}
            <div
              className="relative w-full h-full transition-transform duration-700 
                         [transform-style:preserve-3d] group-hover:rotate-y-180"
            >
              {/* Front of card (Portrait) */}
              <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-100">
                <Image
                  src="/Portrait.png"
                  alt="Professional Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-100 rotate-y-180">
                <Image
                  src="/portrait2.jpg"
                  alt="Casual Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
