"use client";
import { getSmoother } from "@/app/utils/smoother";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sectionLinks: { id: string; title: string }[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const headerRef = useRef(null);
  const headerTitle = useRef(null);
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useGSAP(() => {
    const sections = ["about", "projects", "contact"];

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "+=100%",
        toggleActions: "play reverse reverse pause",
        scrub: 0.5,
      },
    });

    tl.to(
      headerTitle.current,
      {
        opacity: 0,
        duration: 10,
      },
      0
    ).to(
      navRef.current,
      {
        duration: 10,
        marginLeft: 0,
        ease: "power2.out",
      },
      0
    );
  });

  return (
    <header
      ref={headerRef}
      className="z-50 fixed top-0 left-0 w-full wrapper bg-black"
    >
      <nav className="flex justify-center h-14 md:h-24 items-center relative">
        <a
          ref={headerTitle}
          href="#"
          className="font-title text-xl md:text-2xl absolute h-full top-0 left-0 flex items-center"
        >
          <span className="hidden md:block">William Farré</span>
          <span className="block md:hidden">WF</span>
        </a>

        <ul
          ref={navRef}
          className="flex gap-2 md:gap-8 ml-auto text-xs uppercase font-bold md:text-base"
        >
          {sectionLinks.map((link, index) => {
            return (
              <li
                key={"link" + index}
                className={`${activeSection === link.id ? "opacity-100" : "opacity-75"} cursor-pointer hover:opacity-100 transition-all duration-300`}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    const smoother = getSmoother();
                    if (smoother) {
                      smoother.scrollTo(`#${link.id}`, true, "top top");
                    }
                  }}
                >
                  {link.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
