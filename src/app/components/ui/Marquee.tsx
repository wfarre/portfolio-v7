import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Marquee = () => {
  const scrollMarquee = useRef(null);
  const marqueeWrapper = useRef(null);

  useGSAP(() => {
    const marqueeContent = scrollMarquee.current;
    const marqueeContainer = marqueeWrapper.current;

    if (!marqueeContainer || !marqueeContent) return;

    const clonedContent = (marqueeContent as HTMLElement).cloneNode(true);
    (marqueeContainer as HTMLElement).appendChild(clonedContent);

    const contentWidth = (marqueeContent as HTMLElement).offsetWidth;

    gsap.fromTo(
      [marqueeContent, clonedContent],
      { x: 0 },
      {
        x: -contentWidth,
        duration: 20, // Adjust duration for speed
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          // Reset position to create seamless loop
          gsap.set([marqueeContent, clonedContent], { x: 0 });
        },
      }
    );
  });
  return (
    <div
      ref={marqueeWrapper}
      className="absolute bottom-0 left-0 w-full overflow-hidden flex"
    >
      <div className="absolute bg-gradient-to-r from-black from-50% to-transparent to-70% h-25 w-14  md:h-50 md:w-28  top-0 left-0 z-10"></div>
      <div className="absolute bg-gradient-to-l from-black from-50% to-transparent to-70% h-25 w-14 md:h-50 md:w-28  top-0 right-0 z-10 "></div>

      <ul
        ref={scrollMarquee}
        className="flex items-start opacity-10 font-title w-fit text-[100px] leading-[100px]  md:text-[200px] md:leading-[200px]"
      >
        <li className="">REACT</li>
        <li className=""> / </li>
        <li className="">SVELTE</li>
        <li className=""> / </li>
        <li className="">TAILWINDCSS</li>
        <li className=""> / </li>
        <li className="">Typescript</li>
        <li className=""> / </li>
        <li className="">sass</li>
        <li className=""> / </li>
        <li className="">Laravel</li>
        <li className=""> / </li>
        <li className="">ExpressJS</li>
        <li className=""> / </li>
      </ul>
    </div>
  );
};

export default Marquee;
