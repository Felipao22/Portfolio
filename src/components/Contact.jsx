import React, { useState, useEffect } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  //   setInput({
  //     name: "",
  //     email: "",
  //     message: ""
  //   })
  // },[])

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
      message: '',
    });
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.
          <br />
          Check to complete all the fields.
          </p>
        
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/e87eaaf0-bae7-4e4a-b85e-283c67a11a06"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter your name"
              onChange={(e) => handleChange(e)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={input.email}
              placeholder="Enter your email"
              onChange={(e) => handleChange(e)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              type="text"
              name="message"
              value={input.message}
              placeholder="Enter your message"
              onChange={(e) => handleChange(e)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              disabled={input.name === "" || input.email === "" || input.message === ""}
              onSubmit={(e) => handleSubmit(e)}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
