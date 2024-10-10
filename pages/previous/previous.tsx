import Image from "next/image";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Previous() {
  return (
    <div>
      <h2 className="text-2xl font-bold m-5">Web Development Portfolio V.3</h2>
      <Image
        src="/assets/previous-portfolio.png"
        layout="responsive"
        width={16}
        height={9}
        alt="previous portfolio"
        className="rounded-2xl"
      />
      <div className="md:flex md:items-end justify-between">
        <p className="m-5">My previous version of portfolio</p>
        <div className="md:flex md:items-center">
          <div className="flex space-x-3 text-2xl justify-end">
            <a
              href="https://www.johnjang.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/johnjang94/developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
