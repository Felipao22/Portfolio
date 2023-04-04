import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Cv from "../assets/CVFelipeAviani.pdf";
import Cv2 from '../assets/ResumeFelipeAviani.pdf'

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/felipeaviani/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Felipao22",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:felipeaviani@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
           <BsWhatsapp size={30} />
        </>
      ),
      href: "https://api.whatsapp.com/send?phone=542664553869",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20  px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Felipe</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <ul>

          {socialLinks.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`inline-block pl-2 pr-2 pt-8  ${" "} ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
         <a
            className="flex justify-between items-center w-full text-white pt-2 pr-1 pl-2"
            href={Cv}
            download="CV Felipe Aviani"
          >
            <BsFillPersonLinesFill size={30}/>
            Resume Spanish
          </a>
          <a
            className="flex justify-between items-center w-full text-white pt-1 pr-2 pl-2"
            href={Cv2}
            download="Resume Felipe Aviani"
          >
             <BsFillPersonLinesFill size={30} />
             Resume English
          </a>
          </ul>
        </ul>
      )}
    </div>
  );
}

