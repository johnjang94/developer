import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import logo from "../assets/logo/logo500.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={`flex justify-between items-center py-10 text-white`}>
      <Link href="/home">
        <Image src={logo} alt="Logo" className="w-10" />
      </Link>
      <div className="flex space-x-1">
        <span className="text-blue-500">&copy;</span>
        <div className="md:flex mt-1 md:mt-0 md:space-x-1">
          <p className="text-[9px] md:text-base">
            Designed & Built by John Jang.
          </p>
          <p className="text-[9px] md:text-base">All Rights Reserved. 2024</p>
        </div>
      </div>
      <div className="flex space-x-3 text-3xl hover:cursor-pointer">
        <Link href="https://github.com/johnjang94">
          <FaGithub />
        </Link>
        <Link href="http://www.linkedin.com/in/johnjang94">
          <FaLinkedin className="text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
