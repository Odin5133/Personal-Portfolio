"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  projectName: string;
  projectImage: string;
  projectImageBgColor: string;
  briefAbout: string;
  skillsLearnt: string[];
  code: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectImage,
  projectImageBgColor,
  briefAbout,
  skillsLearnt,
  code,
  className,
}) => {
  // 1. Create a ref for the card to track its viewport status
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(y, [0, 300], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 300], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
  };

  return (
    // 2. Attach the ref to the main card container
    <motion.div
      ref={cardRef}
      className={`relative group rounded-2xl overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: projectImageBgColor }}
    >
      <div className="relative bg-transparent shadow-lg h-[55vh] overflow-visible rounded-xl">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          // 3. Update animation logic to depend on isInView
          animate={{
            opacity: isInView ? 1 : 0,
            scale: hovered ? 1 : 1.25,
            y: isInView ? (hovered ? 0 : 50) : 100, // Start lower (y: 100) and animate to position
          }}
          style={{
            rotateX: hovered ? rotateX : 0,
            rotateY: hovered ? rotateY : 0,
            perspective: "1000px",
          }}
          // 4. Define transitions for different properties
          transition={{
            // Spring for hover interactions
            scale: { type: "spring", stiffness: 120, damping: 14 },
            rotateX: { type: "spring", stiffness: 150, damping: 20 },
            rotateY: { type: "spring", stiffness: 150, damping: 20 },
            // Tween for the initial scroll-in animation
            opacity: { duration: 0.6, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" },
          }}
          className="absolute w-[80%] left-[10%] top-4 lg:w-full lg:left-0 lg:top-0 h-2/5 lg:h-1/2 z-0"
        >
          <Image
            src={projectImage}
            alt={projectName}
            fill
            className="object-contain pointer-events-none"
          />
        </motion.div>

        {/* Content Section (foreground) */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="p-4 md:p-6 space-y-4 bg-white rounded-b-2xl h-[50%]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold font-sans text-gray-800">
                {projectName}
              </h3>
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                aria-label={`View code for ${projectName}`}
                onClick={(e) => e.stopPropagation()}
              >
                <SiGithub className="w-6 h-6 text-gray-800" />
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Skills Learned
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsLearnt.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 px-3 py-2 rounded-full border border-gray-200"
                  >
                    <div className="relative w-4 h-4 flex-shrink-0">
                      <Image
                        src={`/${skill.toLowerCase()}.svg`}
                        alt={skill}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-gray-600 text-sm leading-relaxed">
                {briefAbout}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shadow effect */}
      <div
        className="absolute inset-0 bg-black/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
        style={{ transform: "translateY(10px)" }}
      ></div>
    </motion.div>
  );
};

export default ProjectCard;
