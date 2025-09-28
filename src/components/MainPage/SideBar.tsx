import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import React from "react";

const sidebarLinks = [
  {
    icon: <FaDownload />,
    href: "https://drive.google.com/file/d/1dcuRFPVKmntg08ZfQPPUGqu-JqD9XC10/view",
    hoverName: "Resume",
    external: true,
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Odin5133",
    hoverName: "GitHub",
    external: true,
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/atharva-zanjad/",
    hoverName: "LinkedIn",
    external: true,
  },
  {
    icon: <SiCodechef />,
    href: "https://www.codechef.com/users/odin5133",
    hoverName: "CodeChef",
    external: true,
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/Odin5133/",
    hoverName: "LeetCode",
    external: true,
  },
];

export default function Sidebar() {
  const cs: string =
    "text-black w-7 h-7 hover:text-[#15b572] hover:scale-105 transition-colors transition-transform";
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 left-0 w-1/10 h-full justify-end">
      {/* Icons */}
      <div className="space-y-4 flex flex-col mb-4">
        {sidebarLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="relative group"
          >
            {React.cloneElement(link.icon, { className: cs })}
            <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {link.hoverName}
            </span>
          </a>
        ))}
      </div>
      {/* Line */}
      <div className="h-32 w-[8px] bg-[#17c37b] rounded-t-full"></div>
    </div>
  );
}
