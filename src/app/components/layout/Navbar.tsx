import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const headerRef = useRef(null);
  const headerTitle = useRef(null);
  const navRef = useRef(null);

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
          <li className="opacity-75 hover:opacity-100 transition-all duration-300">
            <a href="#about">About</a>
          </li>
          <li className="opacity-75 hover:opacity-100 transition-all duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="opacity-75 hover:opacity-100 transition-all duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
