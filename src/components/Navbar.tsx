"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isPillVisible, setIsPillVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 200;

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setIsPillVisible(false); // Scrolling DOWN
      } else {
        setIsPillVisible(true); // Scrolling UP or at top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navAnimationClasses = `
    transition-all duration-300 ease-in-out
    ${isPillVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
  `;

  return (
    <>
      {/* Logo Container - now animates and has a mobile-only pill */}
      <nav
        className={`fixed top-6 left-4 md:left-11 z-50 ${navAnimationClasses}`}
      >
        <Link
          href="/"
          className="block bg-surface p-1 rounded-full shadow-lg border border-divider 
                     md:bg-transparent md:p-0 md:shadow-none md:border-none"
        >
          {/* Reduced image size for better mobile fit */}
          <Image
            src="/Logo.png"
            height={60}
            width={60}
            alt="Atharva Zanjad"
            className="block"
          />
        </Link>
      </nav>

      {/* Pill Navigation Container - uses the same animation classes */}
      <div
        className={`fixed top-6 right-4 md:right-8 z-50 ${navAnimationClasses}`}
      >
        <div className="flex items-center space-x-2 bg-surface p-2 rounded-full shadow-lg border border-divider">
          {pathname === "/" && (
            <>
              <span
                className="hidden md:inline-block px-4 py-2 rounded-full hover:bg-background cursor-pointer transition-colors text-secondary"
                onClick={() => {
                  const section = document.getElementById("BriefProfile");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Profile
              </span>
              {/* ... other spans ... */}
              <span
                className="hidden md:inline-block px-4 py-2 rounded-full hover:bg-background cursor-pointer transition-colors text-secondary"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </span>
              <span
                className="hidden md:inline-block px-4 py-2 rounded-full hover:bg-background cursor-pointer transition-colors text-secondary"
                onClick={() => {
                  const section = document.getElementById("CTA");
                  if (section)
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
              >
                Contact
              </span>
            </>
          )}
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-background transition-colors text-secondary bg-accentlight/50"
          >
            About Me
          </Link>
        </div>
      </div>
    </>
  );
}
