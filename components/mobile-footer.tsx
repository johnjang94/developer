import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function MobileFooter() {
  return (
    <div className="justify-between items-center flex">
      <Image src="/logo.png" width={35} height={35} alt="Logo" />
      <div className="flex space-x-1">
        <span className="text-blue-500">&copy;</span>
        <div className="md:flex mt-1 md:mt-0 md:space-x-1">
          <p className="text-[9px] md:text-base">
            Designed & Built by John Jang.
          </p>
          <p className="text-[9px] md:text-base">All Rights Reserved. 2024</p>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-3xl justify-center my-20">
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
}
