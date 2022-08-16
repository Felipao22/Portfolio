import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Who am I?🙋‍♂️
          <br />
          Full Stack Developer with an inclination towards the Front-End.
          Proficient in various platforms, languages, and embedded systems.
          Individual and team projects completed. I have the ability to carry
          out scalable and modularizable web projects. Great aptitude for
          teamwork.
        </p>
        <br />
        <p className="text-xl">
          Why me?🚀
          <br />
          With me you will get a curious, creative developer, with a vast
          ability to solve problems and above all, someone always willing to
          share and acquire knowledge.
        </p>
      </div>
    </div>
  );
}
