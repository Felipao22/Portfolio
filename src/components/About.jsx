import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("navbar.about")}
          </p>
        </div>
        <p className="text-xl mt-20">
          {t("about.iam")}🙋‍♂️
          <br />
          {t("about.iamtext")}
        </p>
        <br />
        <p className="text-xl">
          {t("about.me")}🚀
          <br />
          {t("about.metext")}
        </p>
      </div>
    </div>
  );
}
