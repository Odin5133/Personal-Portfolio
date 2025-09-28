"use client";
import TechStackBox from "./Components/TechStackBox";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div className="min-h-screen p-4 md:p-6" id="BriefProfile">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header */}
        <div className="mb-8 flex w-full md:max-w-1/3 items-center space-x-2">
          <h1 className="text-3xl md:text-4xl font-bold text-accent font-heading whitespace-nowrap">
            #Brief Introduction
          </h1>
          <div className="flex-1 h-1 bg-accent"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <div className="relative rounded-2xl p-6 md:p-8 h-80 md:h-96 overflow-hidden bg-[url('/bp_bg.jpg')] bg-cover bg-center">
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="text-white">
                  {/* Reduced text size for mobile */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Fullstack Developer
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    passionate about crafting
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 relative inline-block group">
                    <span className="glitch-text relative inline-block">
                      digital experiences that
                      <span className="glitch-layer absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span
                          className="absolute top-0 left-0 w-full h-full"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                            transform: "translate(-2px, 0)",
                            color: "#ff00c1",
                            textShadow: "2px 0 #00fff9, -2px 0 #ff0000",
                          }}
                        >
                          digital experiences that
                        </span>
                        <span
                          className="absolute top-0 left-0 w-full h-full"
                          style={{
                            clipPath:
                              "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                            transform: "translate(2px, 0)",
                            color: "#00fff9",
                            textShadow: "-3px 0 #ff00c1, 3px 0 #00ff00",
                          }}
                        >
                          digital experiences that
                        </span>
                      </span>
                    </span>
                  </h2>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
                      transform{" "}
                      <span className="relative inline-block group px-2">
                        <span className="relative z-10">ideas</span>
                        {/* SVG Lightbulb */}
                        <svg
                          className="
        absolute -top-6 left-1/2 -translate-x-1/2
        w-5 h-5 opacity-0
        group-hover:opacity-100 group-hover:-translate-y-10
        text-white group-hover:text-yellow-400
        transition-all duration-300 ease-in-out
      "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                      </span>{" "}
                      into reality
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Languages Section */}
            <div className="rounded-2xl p-6 shadow-s bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-500">
              <div className="h-auto md:h-32 rounded-lg text-xl md:text-2xl font-sans pl-2 pr-4 text-gray-800">
                Fluent in English, Hindi, Marathi and can speak German
              </div>
            </div>

            {/* Primary Techstack Section */}
            <TechStackBox />
          </div>
        </div>

        {/* Second Grid - Profile and Have a Question */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-80">
          <div className="space-y-6 lg:-mt-[5vh] flex flex-col">
            {/* Profile Section */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-500">
              {/* Added flex-wrap for mobile */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between md:flex-nowrap">
                {/* Codeforces Box */}
                <div className="flex flex-col items-center justify-center bg-indigo-100 px-3 py-2 rounded-lg">
                  <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-white">CF</span>
                  </div>
                  <p className="text-xs text-gray-600">Codeforces</p>
                  <p className="text-xs text-gray-800 font-medium">
                    <span className="text-green-700">Pupil</span> · 1397
                  </p>
                </div>

                {/* Codechef Box */}
                <div className="flex flex-col items-center justify-center bg-yellow-100 px-3 py-2 rounded-lg">
                  <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-white">CC</span>
                  </div>
                  <p className="text-xs text-gray-600">Codechef</p>
                  <p className="text-xs text-gray-800 font-medium">
                    3⭐ · 1730
                  </p>
                </div>

                {/* Leetcode Box */}
                <div className="flex flex-col items-center justify-center bg-gray-100 px-5 py-2 rounded-lg">
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-white">LC</span>
                  </div>
                  <p className="text-xs text-gray-600">Leetcode</p>
                  <p className="text-xs text-gray-800 font-medium">1658</p>
                </div>
              </div>
            </div>

            {/* Education Section - Flex grow to fill remaining space */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex-grow flex flex-col border border-gray-500">
              <h3 className="text-lg font-semibold text-gray-800 italic ">
                Education
              </h3>
              <div className="rounded-lg flex-grow flex flex-col items-center justify-around">
                {/* College Logo (Replace with actual logo or img tag if needed) */}
                <div className="w-14 h-14 flex items-center justify-center text-lg font-bold text-white bg-gray-200 rounded-md">
                  <Image src="/pict.png" width={45} height={45} alt="PICT" />
                </div>

                {/* College Details */}
                <div className="flex flex-col justify-center items-center text-gray-800">
                  <p className="text-base font-sans text-center text-gray-800">
                    Computer Science at Pune Insitute of Computer Technology,
                    currently in Final Year
                  </p>
                  <p className="text-xs">CGPA:8.98</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-2xl p-8 shadow-sm h-80 flex flex-col justify-center items-center text-center"
              style={{
                backgroundImage: 'url("/mesh_gradient.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#10B981", // Fallback color
              }}
            >
              <h3 className="text-3xl font-bold text-emerald-700 mb-6">
                Have a question?
              </h3>
              <button
                className="group relative flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-primary font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accentlight focus:ring-offset-2"
                onClick={() => {
                  const section = document.getElementById("CTA");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <span>Let&apos;s chat</span>
                </div>

                {/* Arrow inside button */}
                <div className="ml-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 text-accentdark" />
                </div>

                {/* Hover border animation */}
                <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <span className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-pulse"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
