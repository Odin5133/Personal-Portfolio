import Hero from "@/components/MainPage/Hero";
import BriefProfile from "@/components/MainPage/BriefProfile";
import { Projects } from "@/components/MainPage/Projects";
import Experience from "@/components/MainPage/Experience";
// import CallToAction from "@/components/MainPage/CTA";
import CTA from "@/components/MainPage/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <BriefProfile />
      <Projects />
      <Experience />
      <CTA />
    </div>
  );
}
