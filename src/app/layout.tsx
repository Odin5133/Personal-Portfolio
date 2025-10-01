import type { Metadata } from "next";
import { Advent_Pro, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/MainPage/SideBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Advent_Pro({
  weight: "800",
  style: "italic",
  variable: "--font-heading",
  subsets: ["latin"],
});

// Advent Pro - Medium Italic for body headings
const bodyHeadingFont = Advent_Pro({
  weight: "500",
  style: "italic",
  variable: "--font-bodyHeading",
  subsets: ["latin"],
});

// Inter Regular for general body
const bodyFont = Inter({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
});

// Pacifico Regular for name
const nameFont = Pacifico({
  weight: "400",
  variable: "--font-name",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharva Zanjad | Full-Stack Developer",
  description:
    "The professional portfolio of Atharva Zanjad, a full-stack developer specializing in creating modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyHeadingFont.variable} ${bodyFont.variable} ${nameFont.variable} antialiased`}
    >
      <body className=" bg-[#f4f4f4]">
        {/* Navbar spans full width at top */}
        <Navbar />

        <div className="flex flex-row min-h-screen">
          {/* Sidebar (20%) */}
          <Sidebar />

          {/* Main content (80%) */}
          <div className="w-full lg:w-[90%] px-4">
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
