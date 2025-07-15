"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
import Marquee from "../../ui/Marquee";
import Button from "../../ui/Button";

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
        from: "random",
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="h-[100vh] flex  w-full lg:px-25 relative flex-col items-center justify-center pt-[96px]"
    >
      <h1
        ref={title}
        className="text-5xl lg:text-8xl uppercase font-title tracking-widest lg:leading-28 text-center"
      >
        crafting engaging & <br /> responsive UI.
      </h1>
      <div
        ref={buttonWrapper}
        className="flex gap-4 mt-10 items-center justify-center z-20"
      >
        <Button
          text="Say Hi!"
          styleType="primary"
          onClick={() => {
            console.log("click");
          }}
        />
        <Button
          text="Download CV"
          styleType="secondary"
          onClick={() => {
            console.log("click");
          }}
        />
      </div>
      <Marquee />
    </section>
  );
};

export default HeroSection;
