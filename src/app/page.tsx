"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import ProjectSection from "./components/layout/sections/ProjectSection";
import AboutSection from "./components/layout/sections/AboutSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/layout/ContactForm";
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: scrollWrapper.current,
      content: scrollContent.current,
      smooth: 1,
      normalizeScroll: true,
      effects: true,
      speed: 0.5,
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
            <section className="relative my-40 z-50">
              <div className="bg-white rounded-2xl p-8 text-black">
                <ContactForm />
              </div>
            </section>
          </div>
        </main>
        <footer className="row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center pt-40">
          <h2 className="font-title text-2xl">William Farré</h2>
          <ul className="flex gap-8">
            <li>
              <a href="#">
                <FontAwesomeIcon className="text-2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
              </a>
            </li>
          </ul>
          <p>©️ 2025 All rights reserved. Coded by William Farré</p>
        </footer>
      </div>
    </div>
  );
}
