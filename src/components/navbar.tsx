import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

// LOGO
import Logo from "../assets/logo/logo500.png";

export default function Navigation() {
  return (
    <div className="flex justify-between my-5 items-center">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-10" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <div className="justify-between space-x-14">
          <Link href="/about">
            <button>About</button>
          </Link>
          <a href="mailto:jscolbe9675@gmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <RxHamburgerMenu className="w-6" />
      </div>
    </div>
  );
}
