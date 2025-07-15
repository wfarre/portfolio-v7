import React, { useRef } from "react";
import Card from "../../ui/Card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const projects = [
  {
    picture: "/assets/images/projects/extensions.png",
    title: "Browser Extensions List",
    company: "Frontend mentor",
    date: "2025",
    tags: ["Vue", "Vue-router", "Pinia", "TailwindCSS"],
    links: {
      github:
        "https://github.com/wfarre/browser-extension-manager-UI/tree/main",
      live: "https://browser-extension-manager-ui-rho.vercel.app/",
    },
    color: "#c7221a",
  },
  {
    picture: "/assets/images/projects/porfolio.png",
    title: "Portfolio",
    company: "frontend mentor",
    date: "2024",
    tags: ["Nextjs", "CSS"],
    links: {
      github: "https://github.com/wfarre/fake-portfolio/tree/main",
      live: "https://fake-portfolio-jjpciyrpv-wfarres-projects.vercel.app/",
    },
    color: "#4ee1a0",
  },
  {
    picture: "/assets/images/projects/fisheye.png",
    title: "Fisheye",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["HTML", "Javascript", "Sass", "Accessibility"],
    links: {
      github: "https://github.com/wfarre/Front-End-Fisheye/tree/main",
      live: "https://front-end-fisheye.vercel.app/",
    },
    color: "#D3573C",
  },
  {
    picture: "/assets/images/projects/petitsplats.png",
    title: "Les petits plats",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/wfarre/LesPetitsPlats-P7/tree/master",
      live: "https://les-petits-plats-p7-qlvjnnn4u-wfarre.vercel.app/",
    },
    color: "#d62b39",
  },
  {
    picture: "/assets/images/projects/kasa.png",
    title: "Kasa",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["React", "Sass", "Typescript", "React-router"],
    links: {
      github: "https://github.com/wfarre/kasa-v2/tree/main",
      live: "https://kasa-v2-tau.vercel.app/",
    },
    color: "#ff6060",
  },
  {
    picture: "/assets/images/projects/spacetourism.png",
    title: "Space Tourism",
    date: "2023",
    company: "frontend mentor",
    tags: ["Nextjs", "TailwindCSS", "Typescript"],
    links: {
      github: "https://github.com/wfarre/space-tourism-next/tree/main",
      live: "https://space-tourism-next-umber.vercel.app/",
    },
    color: "#CBD5E1",
  },
  {
    picture: "/assets/images/projects/ecommerce.png",
    title: "Ecommerce",
    company: "frontend mentor",
    date: "2023",
    tags: ["Typescript", "CSS", "HTML"],
    links: {
      github: "https://github.com/wfarre/ecommerce/tree/main",
      live: "https://ecommerce-jokg.vercel.app/",
    },
    color: "#ff7e1b",
  },
  {
    picture: "/assets/images/projects/portfolio2024.png",
    title: "Portfolio 2024",
    company: "personal",
    date: "2024",
    tags: ["Typescript", "CSS", "HTML", "Next.js", "materialUI"],
    links: {
      github: "https://github.com/wfarre/portfolio-app-v4/tree/main",
      live: "https://william-portfolio-psi.vercel.app/",
    },
    color: "#14b8a6",
  },
  {
    picture: "/assets/images/projects/portfolio2022.png",
    title: "Portfolio 2022",
    company: "personal",
    date: "2022",
    tags: ["React", "CSS", "HTML", "Javascript"],
    links: {
      github: "https://github.com/wfarre/williamdev-portfolio-app/tree/master",
      live: "https://williamdev-portfolio-app.vercel.app/",
    },
    color: "#f6c",
  },
];

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 0.05,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    });

    tl.to(
      headerRef.current,
      {
        x: 0,
        y: 0,
      },
      0
    )
      .to(
        projectsRef.current,
        {
          y: "-100%",
          duration: 20,
        },
        0
      )
      .to(
        sectionRef.current,
        {
          opacity: 0,
          duration: 5,
          delay: 15,
          ease: "power2.out",
        },
        1
      );
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative my-40 bg-black z-30"
    >
      <header
        ref={headerRef}
        className="relative pt-14 lg:pt-24 pb-30 bg-gradient-to-b  from-black from-60% to-transparent to-75% z-40"
      >
        <h2 className="text-2xl md:text-3xl font-bold">Selected projects</h2>
        <p className="mt-2 max-w-2xl text-white/75 text-sm">
          Here are a selection of my most recent projects. My usual stack for
          the frontend is: Sass, React, TailwindCSS and Typescript.
        </p>
      </header>
      <ul className=" grid lg:grid-cols-2 gap-8 " ref={projectsRef}>
        {projects.map((project, index) => (
          <li ref={cardRef} key={index} className="">
            <Card
              links={project.links}
              image={project.picture}
              title={project.title}
              company={project.company}
              date={project.date}
              tags={project.tags}
              color={project.color}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
