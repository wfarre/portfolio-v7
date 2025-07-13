"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
import Marquee from "../ui/Marquee";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

const HeroSection = () => {
  const title = useRef(null);
  const sectionRef = useRef(null);
  const buttonWrapper = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(title.current, {
      type: "chars, lines, words",
    });

    gsap.to(buttonWrapper.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title.current,
        start: "center center",
        end: "center center",
        toggleActions: "play reverse reverse pause",
        scrub: 0.5,
      },
    });

    gsap.to(split.chars, {
      yPercent: "random([-100,100])",
      rotationY: "random([-30,30])",
      autoAlpha: 0,
      scrollTrigger: {
        trigger: title.current,
        start: "center center",
        end: "+=100%",
        toggleActions: "play reverse reverse pause",
        scrub: 0.5,
        pin: true,
        markers: true,
      },
      stagger: {
        amount: 0.5,
        // repeat: -1,
        // yoyo: true,
        from: "random",
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="h-[calc(100vh-96px)] flex  w-full lg:px-25 relative flex-col items-center justify-center"
    >
      <h1
        ref={title}
        className="text-6xl lg:text-8xl uppercase font-title tracking-widest lg:leading-28 text-center"
      >
        crafting engaging & <br /> responsive UI.
      </h1>
      <div
        ref={buttonWrapper}
        className="flex gap-4 mt-10 items-center justify-center"
      >
        <button className=" text-white font-title text-2xl bg-gradient-to-br from-pink-500 to-purple-500 h-12 px-8 rounded-xl font-bold uppercase hover:scale-110 transition-all duration-300 cursor-pointer">
          Say Hi!
        </button>
        <button className="bg-white relative font-title text-2xl bg-clip-padding before:bg-gradient-to-br before:from-pink-500 before:to-purple-500 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 h-12 px-8 rounded-xl font-bold uppercase border-[2px] border-transparent before:m-[-2px] before:rounded-xl  before:z-[-1] hover:bg-transparent transition-all duration-300 cursor-pointer hover:scale-110 group ">
          <span className="bg-gradient-to-br from-pink-500 to-purple-500 text-transparent bg-clip-text group-hover:text-white transition-all duration-300">
            Download CV
          </span>
        </button>
      </div>
      <Marquee />
    </section>
  );
};

export default HeroSection;
