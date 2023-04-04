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
          Full Stack Web developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With 2 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
        </p>
        <br />
        <p className="text-xl">
          Why me?🚀
          <br />
          Whether I'm working on a website or mobile app, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
        </p>
      </div>
    </div>
  );
}
