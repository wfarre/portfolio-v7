import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const images = [
  {
    src: "/wazuka.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[75%] lg:translate-x-[150%]",
    zIndex: "-z-20",
    scale: "scale-90",
  },
  {
    src: "/shimogamo.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[-25%] lg:translate-x-[-50%]",
    zIndex: "z-10",
    scale: "scale-100",
  },
  {
    src: "/tainan.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[75%] lg:translate-x-[150%]",
    zIndex: "-z-20",
    scale: "scale-80",
  },
  {
    src: "/nara_shika.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[80%] lg:translate-x-[100%]",
    zIndex: "z-20",
    scale: "scale-100",
  },
  {
    src: "/taipei_sunset.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[0%]",
    zIndex: "-z-20",
    scale: "scale-100",
  },
  {
    src: "/wazuka2.jpg",
    alt: "Travel Tower",
    posX: "translate-x-[50%]",
    zIndex: "z-40",
    scale: "scale-120",
  },
];

const AboutSection = () => {
  const textSection = useRef(null);
  const textWrapper = useRef(null);
  const text = useRef(null);
  const imgWrapper = useRef(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

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
        opacity: 0,
        duration: 20,
        stagger: 0.2,
        ease: "power2.out",
        amount: split.words.length,
      },
      0 // Start immediately
    ).fromTo(
      imageRefs.current,
      {
        y: 500,
      },
      {
        duration: 20,
        y: -(images.length - 1) * 500,
        stagger: {
          each: 0.5,
          grid: "auto",
          from: "start",
          amount: images.length,
        },
        ease: "ease.out",
      },
      0 // Start at the same time
    );
  });

  ScrollTrigger.refresh();
  return (
    <section
      id="about"
      ref={textSection}
      className="my-40 relative text-center py-40"
    >
      <div
        ref={textWrapper}
        className=" text-lg relative lg:text-3xl lg:max-w-[70%] mx-auto  lg:leading-12 z-10 "
      >
        <div className="absolute w-full top-0 left-0 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent ">
          <p>
            Hi 👋, I am William, a French frontend developer passionate about
            building beautiful and intuitive web applications. I love bringing
            to life designs into seamless and delightful user experiences.
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
          className="text-gray-900 absolute w-full top-0 left-0 "
          aria-hidden={true}
        >
          <p>
            Hi 👋, I am William, a French frontend developer passionate about
            building beautiful and intuitive web applications. I love bringing
            to life designs into seamless and delightful user experiences.
          </p>
          <p className="mt-4">
            I used to work in the hospitality industry in Kyoto, Japan for 3
            years. So, I can speak French, English and Japanese. Now, I am based
            in Kaohsiung, in the South of Taiwan, where I am currently learning
            Mandarin.
          </p>
        </div>
      </div>
      <div ref={imgWrapper} className="relative w-full">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`relative w-50 lg:w-[500px] aspect-[800/600] rounded-2xl overflow-hidden ${image.posX} ${image.zIndex} ${image.scale} `}
            >
              <Image
                width={533}
                height={799}
                alt=""
                src={image.src}
                className="object-cover aspect-[800/600] w-full  absolute top-0 left-0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
