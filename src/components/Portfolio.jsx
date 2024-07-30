import React from "react";
import bringit from "../assets/portfolio/bringit.png";
import countries from "../assets/portfolio/countries.png";
import quiz from "../assets/portfolio/quizapp.png";
import proteccion from "../assets/portfolio/proteccion.png";
import jstrivia from "../assets/portfolio/js.png";
import gotguides from "../assets/portfolio/gotguides.png";
import highlands from "../assets/portfolio/highlands.png";
import brucken from "../assets/portfolio/brucken.png";
import snakeGame from "../assets/portfolio/snakeGame.png";
import texteditor from "../assets/portfolio/texteditor.png";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  const jobProjects = [
    {
      id: 1,
      src: proteccion,
      href: "https://github.com/Felipao22/proteccion-app",
      href2: "https://proteccionlaboral.com.ar/",
      href3: "https://github.com/Felipao22/back-proteccion",
      title: "Protección Laboral",
    },
    {
      id: 2,
      src: gotguides,
      href: "https://github.com/Felipao22",
      href2: "https://gotguides.net/",
      title: "Got Guides",
    },
    {
      id: 3,
      src: brucken,
      href: "https://github.com/Felipao22",
      href2: "https://bruckencorp.com/",
      title: "Brücken Solutions Corp.",
    },
    {
      id: 4,
      src: highlands,
      href: "https://github.com/Felipao22",
      href2: "https://highlands.tur.ar/",
      title: "Highlands",
    },
  ];

  const incomingProjects = [
    
  ];

  const academicProjects = [
    {
      id: 3,
      src: jstrivia,
      href: "https://github.com/Felipao22/Js-trivia",
      href2: "https://js-trivia-nu.vercel.app/",
      title: "Js Trivia",
    },
    {
      id: 4,
      src: texteditor,
      href: "https://github.com/Felipao22/text-editor",
      href2: "https://text-editor-one-beta.vercel.app/",
      title: "Text Editor",
    },
    {
      id: 5,
      src: bringit,
      href: "https://github.com/Felipao22/bring-it-app",
      href2: "https://bring-it-app.vercel.app/",
      title: "Bring It",
    },
    {
      id: 6,
      src: countries,
      href: "https://github.com/Felipao22/PI-Countries",
      href2: "https://app-countries-one.vercel.app/",
      title: "Countries App",
    },
    {
      id: 7,
      src: quiz,
      href: "https://github.com/Felipao22/QuizzApp",
      href2: "https://vimeo.com/751504036",
      title: "Quizz App",
    },
    {
      id: 8,
      src: snakeGame,
      href: "https://github.com/Felipao22/snake-game",
      href2: "https://snake-game-ten-azure.vercel.app/",
      title: "Snake Game",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white flex flex-col items-center min-h-full"
    >
      <div className="max-w-screen-lg pr-4 pl-4 pb-8 mx-auto flex flex-col w-full flex-grow pt-24">
        <div className="pb-4">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {t("navbar.portfolio")}
          </p>
          <p className="py-4 text-sm md:text-base">{t("portfolio.textwork")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {jobProjects.map(({ id, src, href, href2, href3, title }) => (
            <div
              key={id}
              className="mb-4 md:mb-0 shadow-md shadow-gray-600 rounded-lg flex flex-col h-full"
            >
              <a
                href={href2}
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <img
                  src={src}
                  alt="Not found"
                  className="rounded-md duration-200 hover:scale-105 w-full max-w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="text-center py-2 text-lg font-semibold text-white">
                    {title}
                  </div>
                </div>
              </a>
              <div className="flex items-center justify-center flex-grow mt-2">
                <a
                  href={href2}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                >
                  Link
                </a>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                >
                  {t("portfolio.code")}
                </a>
                {href3 && (
                  <a
                    href={href3}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                  >
                    {t("portfolio.backendcode")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {incomingProjects.length > 0 && (
          <>
            <div className="mt-4">
              <p className="py-4 text-sm md:text-base">
                {t("portfolio.textincomingProject")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
              {incomingProjects.map(({ id, src, href, href2, title }) => (
                <div
                  key={id}
                  className="mb-4 md:mb-0 shadow-md shadow-gray-600 rounded-lg flex flex-col h-full"
                >
                  <a
                    href={href2}
                    target="_blank"
                    rel="noreferrer"
                    className="relative group"
                  >
                    <img
                      src={src}
                      alt="Not found"
                      className="rounded-md duration-200 hover:scale-105 w-full max-w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="text-center py-2 text-lg font-semibold text-white">
                        {title}
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center justify-center flex-grow mt-2">
                    <a
                      href={href2}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                    >
                      Link
                    </a>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                    >
                      {t("portfolio.code")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-4">
          <p className="py-4 text-sm md:text-base">
            {t("portfolio.textproject")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {academicProjects.map(({ id, src, href, href2, title }) => (
            <div
              key={id}
              className="mb-4 md:mb-0 shadow-md shadow-gray-600 rounded-lg flex flex-col h-full"
            >
              <a
                href={href2}
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <img
                  src={src}
                  alt="Not found"
                  className="rounded-md duration-200 hover:scale-105 w-full max-w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="text-center py-2 text-lg font-semibold text-white">
                    {title}
                  </div>
                </div>
              </a>
              <div className="flex flex-col flex-grow justify-between">
                <div className="flex items-center justify-center mt-2">
                  <a
                    href={href2}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                  >
                    Link
                  </a>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 text-sm md:text-base"
                  >
                    {t("portfolio.code")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
