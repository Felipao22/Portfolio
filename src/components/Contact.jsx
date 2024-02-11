import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      name: "",
      email: "",
      message: "",
    });
    e.target.reset();
  }

  return (
    <div className="w-full min-h-full bg-gradient-to-b from-black to-gray-800  text-white ">
      <div name="contact" className="  pr-4 pl-4">
        <div className="flex flex-col p-4 max-w-screen-lg mx-auto h-full pt-48 ">
          <div className="pb-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              {t("navbar.contact")}
            </p>
            <p className="py-3">
              {t("contact.text")}
              <br />
              {t("contact.text2")}
            </p>
          </div>

          <div className=" flex justify-center items-center ">
            <form
              action="https://getform.io/f/e87eaaf0-bae7-4e4a-b85e-283c67a11a06"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder={t("contact.placename")}
                onChange={(e) => handleChange(e)}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                value={input.email}
                placeholder={t("contact.placeemail")}
                onChange={(e) => handleChange(e)}
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                type="text"
                name="message"
                value={input.message}
                placeholder={t("contact.placemessage")}
                onChange={(e) => handleChange(e)}
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                disabled={
                  input.name === "" ||
                  input.email === "" ||
                  input.message === ""
                }
                onSubmit={(e) => handleSubmit(e)}
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                {t("contact.talk")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
