"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useRef } from "react";
import HeroSection from "./components/layout/sections/HeroSection";
import Navbar from "./components/layout/Navbar";
import ProjectSection from "./components/layout/sections/ProjectSection";
import AboutSection from "./components/layout/sections/AboutSection";
import ContactSection from "./components/layout/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  gsap.registerPlugin(ScrollSmoother);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: scrollWrapper.current,
      content: scrollContent.current,
      smooth: 1,
      normalizeScroll: true,
      effects: true,
      speed: 0.3,
    });
  });
  return (
    <div ref={scrollWrapper} id="scroll-wrapper" className="mx-auto">
      <div className="wrapper">
        <Navbar />
      </div>
      <div ref={scrollContent} id="scroll-content" className="pb-[96px]">
        <main className="overflow-x-hidden">
          <div className="wrapper">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
