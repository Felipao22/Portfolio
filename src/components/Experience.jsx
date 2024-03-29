import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import redux from "../assets/redux2.png";
import git from "../assets/git.png";
import reactNative from "../assets/reactNative.png";
import bootstrap from "../assets/bootstrap-logo-shadow.png";
import next from "../assets/nextjs.png";
import wordpress from "../assets/wordpress.png";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-800",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-violet-500",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-red-600",
    },
    {
      id: 10,
      src: reactNative,
      title: "React Native",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-700",
    },
    {
      id: 12,
      src: next,
      title: "Next",
      style: "shadow-white",
    },
    {
      id: 13,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full flex flex-col items-center min-h-full"
      // bg-gradient-to-b from-black to-gray-800 w-full text-white flex flex-col items-center min-h-full
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full text-white pt-16 pb-16 flex-grow">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {t("navbar.experience")}
          </p>
          <p className="py-6">{t("experience.tech")} </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center p-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
