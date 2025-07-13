"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useRef, useState } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import ProjectSection from "./components/layout/sections/ProjectSection";
import AboutSection from "./components/layout/sections/AboutSection";
import FormInput from "./components/ui/FormInput";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

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
                <form
                  action=""
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <FormInput
                    type="text"
                    id="name"
                    value={contactForm.name}
                    label="Name"
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                  />
                  <FormInput
                    type="email"
                    id="email"
                    value={contactForm.email}
                    label="email"
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                  <FormInput
                    type="textarea"
                    id="message"
                    value={contactForm.message}
                    label="Message"
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                  />
                  <button className=" text-white font-title text-2xl bg-gradient-to-br from-pink-500 to-purple-500 h-12 px-8 rounded-xl font-bold uppercase hover:scale-110 transition-all duration-300 cursor-pointer">
                    Say Hi!
                  </button>
                </form>
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
