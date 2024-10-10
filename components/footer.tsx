import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center space-x-5 text-3xl justify-center mt-32">
      <Link href="https://github.com/johnjang94">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/johnjang94/">
        <FaLinkedin className="text-blue-500" />
      </Link>
    </div>
  );
}
