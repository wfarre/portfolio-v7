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
    <header ref={headerRef} className="z-50 relative">
      <nav className="flex justify-center h-24 items-center relative">
        <a
          ref={headerTitle}
          href="#"
          className="font-title text-2xl absolute h-full top-0 left-0 flex items-center"
        >
          William Farré
        </a>

        <ul
          ref={navRef}
          className="flex gap-8 ml-auto text-base font-bold font-title md:text-xl"
        >
          <li>
            <a href="#scroll-content">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
