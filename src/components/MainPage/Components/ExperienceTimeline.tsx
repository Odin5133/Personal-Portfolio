"use client";
import React, { useEffect, useRef, useState } from "react";

interface Experience {
  title: string;
  date: string;
  description: string;
  designation: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    experiences.map(() => false)
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const observers: IntersectionObserver[] = [];

    experiences.forEach((_, idx) => {
      const item = document.getElementById(`exp-item-${idx}`);
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        },
        { root: null, rootMargin: "0px 0px -50% 0px", threshold: 0 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [experiences]);

  // Calculate gradient fill height based on items revealed
  const fillPercent =
    (visibleItems.filter(Boolean).length / experiences.length) * 100;

  return (
    <div className="relative py-16 max-w-5xl" ref={containerRef}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 w-full rounded-full bg-gradient-to-b from-accentlight to-accentdark transition-all"
          style={{ height: `${fillPercent}%` }}
        />
      </div>

      {/* Experience Items */}
      <div className="ml-16 flex flex-col space-y-12">
        {experiences.map((exp, idx) => (
          <div
            id={`exp-item-${idx}`}
            key={idx}
            className="relative flex items-start"
          >
            {/* Circle Marker on Line */}
            <div
              className={`absolute left-8 mt-1 w-5 h-5 rounded-full border-2 transform -translate-x-18 transition-colors duration-1000 
                ${
                  visibleItems[idx]
                    ? "bg-accent border-bg"
                    : "bg-white border-gray-400"
                }`}
            />

            {/* Content */}
            <div className="ml-8">
              <h4 className="text-lg font-semibold text-gray-800">
                {exp.title}
              </h4>
              <p className="text-sm text-accentdark mb-2">{exp.date}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
