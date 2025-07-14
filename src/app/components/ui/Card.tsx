import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  company: string;
  date: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
  color: string;
  image: string;
}

const Card = (props: CardProps) => {
  return (
    <article className="text-white">
      <div className=" aspect-video w-full relative rounded-2xl overflow-hidden group">
        <Image alt="" className="" src={props.image} fill={true} sizes="100%" />
        <div className="relative h-full w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div
            style={{
              backgroundColor: props.color,
            }}
            className="absolute top-0 left-0 w-full h-full opacity-70"
          ></div>
          <ul className="absolute w-full h-full  flex justify-center items-center flex-col gap-8 font-bold">
            <li className="relative">
              <a
                className="after:h-0.5 after:w-full after:bg-white after:absolute  after:bottom-0 after:left-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100"
                href={props.links.live}
                target="_blank"
              >
                VIEW LIVE
              </a>
            </li>
            <li className="relative">
              <a
                className="after:h-0.5 after:w-full after:bg-white after:absolute  after:bottom-0 after:left-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100"
                href={props.links.github}
                target="_blank"
              >
                VIEW CODE
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-4 gap-2">
        <div>
          <h3 className="text-xl md:text-2xl font-bold ">{props.title}</h3>
          <p className="text-sm">Completed in 2022</p>

          <ul className="flex gap-4 mt-4 flex-wrap">
            {props.tags.map((tag, index) => (
              <li
                style={{ backgroundColor: props.color }}
                className={`px-2 text-xs md:text-sm rounded-4xl font-bold`}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 self-end lg:hidden">
          <a href={props.links.github} target="_blank">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          </a>
          <a href={props.links.live} target="_blank">
            <FontAwesomeIcon className="text-2xl" icon={faGlobe} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
