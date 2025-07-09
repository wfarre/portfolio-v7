"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import ProjectSection from "./components/layout/sections/ProjectSection";
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const textSection = useRef(null);
  const textWrapper = useRef(null);
  const text = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);
  const imgWrapper = useRef(null);
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  useGSAP(() => {});

  useGSAP(() => {
    if (!text.current || !textSection.current) return;

    const split = SplitText.create(text.current, {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textSection.current,
        start: "top top",
        end: "+=200%",
        scrub: 0.03,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });

    tl.to(
      split.words,
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        ease: "power2.out",
      },
      0 // Start immediately
    )
      .fromTo(
        [
          imgWrapper.current,
          image1.current,
          image2.current,
          image3.current,
          image4.current,
          image5.current,
        ],
        {
          y: 500,
        },
        {
          duration: 20,
          y: -700,
          stagger: {
            // grid: [7, 15],
            each: 0.1,
            grid: "auto",
            from: "start",
            amount: 20,
          },
          ease: "ease.out",
        },
        0 // Start at the same time
      )
      .to(
        textSection.current,
        {
          opacity: 0,
          duration: 10,
          delay: 40,
          ease: "power2.out",
        },
        0
      );
  });

  ScrollTrigger.refresh();

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
    <div
      ref={scrollWrapper}
      id="scroll-wrapper"
      className="wrapper container mx-auto"
    >
      <Navbar />
      <main
        ref={scrollContent}
        id="scroll-content"
        className="overflow-x-hidden"
      >
        <HeroSection />
        <section
          ref={textSection}
          className="py-40 my-40 mx-auto px-25 relative overflow-hidden text-center"
        >
          <div
            ref={textWrapper}
            className="relative text-3xl max-w-[70%] mx-auto   leading-12 z-10"
          >
            <div className="absolute w-full top-0 left-0 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent z-0">
              <p>
                Hi 👋, I am William, a French frontend developer passionate
                about building beautiful and intuitive web applications. I
                transform complex ideas into seamless and delightful user
                experiences.
              </p>
              <p className="mt-4">
                I am currently based in Kaohsiung, Taiwan, but I have lived in
                Japan for about 5 years: Kyoto, Osaka and Matsue.
              </p>
            </div>

            <div
              ref={text}
              className="text-gray-400 absolute w-full top-0 left-0 z-0"
              aria-hidden={true}
            >
              <p>
                Hi 👋, I am William, a French frontend developer passionate
                about building beautiful and intuitive web applications. I
                transform complex ideas into seamless and delightful user
                experiences.
              </p>
              <p className="mt-4">
                I am currently based in Kaohsiung, Taiwan, but I have lived in
                Japan for about 5 years: Kyoto, Osaka and Matsue.
              </p>
            </div>
          </div>
          <div ref={imgWrapper} className="relative">
            <Image
              alt=""
              ref={image1}
              className="relative translate-x-[-20%] z-30 scale-110 shadow"
              src={"/Travel_Tower.jpg"}
              width={500}
              height={500}
            />
            <Image
              alt=""
              ref={image2}
              className=" relative translate-x-[180%] z-0 scale-80 shadow"
              src={"/Travel_Adventure_Door.jpg"}
              width={500}
              height={500}
            />
            <Image
              alt=""
              ref={image3}
              className="relative translate-x-[25%] -z-20 shadow"
              src={"/Travel_OpenMountain.jpg"}
              width={500}
              height={500}
            />
            <Image
              alt=""
              ref={image4}
              className="top-10 left-10 translate-x-[40vw] shadow z-30"
              src={"/Travel_Tower.jpg"}
              width={500}
              height={500}
            />
            <Image
              alt=""
              ref={image5}
              className="top-2 left-2 translate-x-[50%] shadow -z-10"
              src={"/Travel_Tower.jpg"}
              width={500}
              height={500}
            />
          </div>
        </section>
        <ProjectSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
