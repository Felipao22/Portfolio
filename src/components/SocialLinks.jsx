import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Cv from "../assets/CVFelipeAviani.pdf";
import Cv2 from '../assets/ResumeFelipeAviani.pdf'

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/felipeaviani/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Felipao22",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:felipeaviani@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          WhatsApp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://api.whatsapp.com/send?phone=542664553869",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${" "} ${style}`}
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
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
          }
        >
          <a
            className="flex justify-between items-center w-full text-white"
            href={Cv}
            download="CV Felipe Aviani"
          >
            Resume Spanish <BsFillPersonLinesFill size={30} />
          </a>
          
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
          }
        >

        <a
            className="flex justify-between items-center w-full text-white"
            href={Cv2}
            download="Resume Felipe Aviani"
          >
            Resume English <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
