"use client";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen 
                 px-6 text-center md:items-start md:text-left lg:px-20 text-secondary"
    >
      <p className="text-sm mb-2">Hello I am</p>
      <h1 className="text-5xl sm:text-6xl lg:text-9xl font-name text-accent leading-tight tracking-wider mb-6">
        Atharva Zanjad
      </h1>
      <div className="space-y-1 text-base text-secondary max-w-xl mb-6">
        <p className="flex flex-row items-center flex-wrap justify-center md:justify-start">
          Full-stack Developer <span className="mx-2 hidden sm:inline">|</span>
          <span role="img" aria-label="India" className="mx-2">
            <Image src="/flag.svg" width={16} height={20} alt="In" />
          </span>{" "}
          Pune, India
        </p>
        <p>Interactive and engaging web design and applications</p>
        <p>Each simple step today carves tomorrow’s path</p>
      </div>

      <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
        {/* Resume Button */}
        <div className="relative group">
          <div className="absolute inset-0 w-36 h-12 -translate-x-1.5 translate-y-1.5 bg-[#b9fdc6] border-2 border-dotted border-border rounded-lg z-0" />
          <a
            className="relative z-10 flex items-center gap-2 h-12 px-5 text-white bg-accent rounded-lg text-xl font-semibold shadow-md
   transition-transform duration-100
   group-active:-translate-x-1.5 group-active:translate-y-1.5 cursor-pointer"
            href="https://drive.google.com/uc?export=download&id=1dcuRFPVKmntg08ZfQPPUGqu-JqD9XC10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* GitHub Button */}
        <div className="relative group">
          <div className="absolute inset-0 w-12 h-12 -translate-x-1.5 translate-y-1.5 bg-[#b9fdc6] border-2 border-dotted border-border rounded-lg z-0" />
          <a
            href="https://github.com/Odin5133"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center w-12 h-12 bg-accent text-black rounded-lg shadow-md
             hover:brightness-95 transition-all
             group-active:-translate-x-1.5 group-active:translate-y-1.5"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* LinkedIn Button */}
        <div className="relative group">
          <div className="absolute inset-0 w-12 h-12 -translate-x-1.5 translate-y-1.5 bg-[#b9fdc6] border-2 border-dotted border-border rounded-lg z-0" />
          <a
            href="https://www.linkedin.com/in/atharva-zanjad/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center w-12 h-12 bg-accent rounded-lg shadow-md
             hover:brightness-95 transition-all
             group-active:-translate-x-1.5 group-active:translate-y-1.5"
          >
            <FaLinkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
