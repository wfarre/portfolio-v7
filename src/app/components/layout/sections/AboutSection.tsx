import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutSection = () => {
  const textSection = useRef(null);
  const textWrapper = useRef(null);
  const text = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);
  const imgWrapper = useRef(null);

  useGSAP(() => {
    if (!text.current || !textSection.current) return;

    const split = SplitText.create(text.current, {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textSection.current,
        start: "top top",
        // end: "+=300%",
        scrub: 0.05,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });

    tl.to(
      split.words,
      {
        // delay: 1,
        opacity: 0,
        duration: 10,
        stagger: 0.2,
        ease: "power2.out",
      },
      0 // Start immediately
    ).fromTo(
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
          //   grid: [7, 15],
          each: 0.5,
          grid: "auto",
          from: "start",
          amount: 5,
        },
        ease: "ease.out",
      },
      0 // Start at the same time
    );
    //   .to(
    //     textSection.current,
    //     {
    //       opacity: 0,
    //       duration: 20,
    //       //   delay: 40,
    //       ease: "power2.out",
    //     },
    //     1
    //   );
  });

  ScrollTrigger.refresh();
  return (
    <section
      ref={textSection}
      className="my-40 relative overflow-hidden text-center py-40"
    >
      {/* <div ref={textSection} className="py-40 relative"> */}
      {/* <Container> */}
      <div
        ref={textWrapper}
        className="relative text-lg lg:text-3xl lg:max-w-[70%] mx-auto  lg:leading-12 z-0"
      >
        <div className="absolute w-full top-0 left-0 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent ">
          <p>
            Hi 👋, I am William, a French frontend developer passionate about
            building beautiful and intuitive web applications. I transform
            complex ideas into seamless and delightful user experiences.
          </p>
          <p className="mt-4">
            I used to work in the hospitality industry in Kyoto, Japan for 3
            years. So, I can speak French, English and Japanese. Now, I am based
            in Kaohsiung, in the South of Taiwan, where I am currently learning
            Mandarin.
          </p>
        </div>

        <div
          ref={text}
          className="text-gray-400 absolute w-full top-0 left-0 "
          aria-hidden={true}
        >
          <p>
            Hi 👋, I am William, a French frontend developer passionate about
            building beautiful and intuitive web applications. I transform
            complex ideas into seamless and delightful user experiences.
          </p>
          <p className="mt-4">
            I used to work in the hospitality industry in Kyoto, Japan for 3
            years. So, I can speak French, English and Japanese. Now, I am based
            in Kaohsiung, in the South of Taiwan, where I am currently learning
            Mandarin.
          </p>
        </div>
      </div>
      <div ref={imgWrapper} className="relative">
        <Image
          alt=""
          ref={image1}
          className="relative translate-x-[-20%] -z-20 scale-110 shadow"
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
          className="top-10 left-10 translate-x-[40vw] shadow z-20"
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
      {/* </Container> */}
    </section>
  );
};

export default AboutSection;
