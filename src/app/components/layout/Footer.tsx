import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const sns = [
  {
    title: "github",
    icon: faGithub,
    link: "https://github.com/wfarre?tab=repositories",
  },
  {
    title: "facebook",
    icon: faFacebook,
    link: "https://www.facebook.com/william.farre/",
  },
  {
    title: "linkedin",
    icon: faLinkedin,
    link: "#",
  },
  {
    title: "instagram",
    icon: faInstagram,
    link: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center pt-40">
      <h2 className="font-title text-2xl">William Farré</h2>
      <ul className="flex gap-8">
        {sns.map((sns, index) => {
          return (
            <li key={"sns" + index}>
              <a className="relative group" href={sns.link} target="_blank">
                <FontAwesomeIcon
                  className="text-2xl scale-100 group-hover:scale-110 group-hover:text-pink-500 transition-all duration-300 "
                  icon={sns.icon}
                />
                <span className="absolute top-0 left-0 opacity-0 h-0 w-0">
                  {sns.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <p>©️ 2025 All rights reserved. Coded by William Farré</p>
    </footer>
  );
};
