"use client";
import { useState, useRef } from "react";

export default function TechStackBox() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const getFloatingStyle = (baseX: number, baseY: number, intensity = 0.15) => {
    const offsetX = (mousePosition.x - baseX) * intensity;
    const offsetY = (mousePosition.y - baseY) * intensity;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      transition:
        mousePosition.x === 0 && mousePosition.y === 0
          ? "transform 0.4s ease-out"
          : "none",
    };
  };

  const secondarySkills = [
    { name: "TypeScript", x: -50, y: 40 },
    { name: "Next.js", x: 30, y: 10 },
    { name: "C++", x: 100, y: 80 },
    { name: "Tailwind", x: 90, y: 140 },
    { name: "Python", x: 20, y: 190 },
  ];

  return (
    <div className="rounded-2xl shadow-s bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-500">
      <div
        ref={containerRef}
        className="h-56 rounded-xl relative overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left: Tech Stack Highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center p-4">
          <div className="text-center relative group">
            <h2 className="text-lg font-sans mb-2 leading-snug text-left">
              Preferred
              <br />
              tech-Stack:
            </h2>
            <div className="text-4xl font-sans font-bold text-accent mb-3 tracking-wide opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105">
              MERN
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-6 border-stone-400 rounded-xl opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105"></div>

            {/* Subtle glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-stone-300/10 to-stone-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          </div>
        </div>

        {/* Right: Floating Skills */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 py-4">
          {secondarySkills.map((skill, index) => (
            <div
              key={index}
              className="absolute px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-stone-200/80 border border-stone-400 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:bg-stone-300/90 hover:scale-105 hover:border-stone-500"
              style={{
                ...getFloatingStyle(skill.x, skill.y),
                left: `${skill.x}px`,
                top: `${skill.y}px`,
                animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <span className="relative z-10">{skill.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-300/50 to-stone-400/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Floating decorative points */}
        <div className="absolute top-5 right-5 w-3 h-3 bg-stone-400 rounded-full opacity-40 animate-pulse" />
        <div
          className="absolute bottom-5 left-5 w-2 h-2 bg-stone-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/4 left-1/3 w-1 h-1 bg-stone-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-stone-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
}
