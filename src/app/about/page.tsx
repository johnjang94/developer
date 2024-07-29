import Image from "next/image";
import Profile from "../../assets/profile/profile.png";

export default function About() {
  return (
    <div>
      <div className="md:flex md:space-x-2 md:my-20 md:items-center md:justify-center text-center">
        <h1 className="mt-20 md:mt-0 md:text-5xl text-2xl">Hi 👋🏼</h1>
        <h1 className="mb-20 md:mb-0 md:text-5xl text-2xl">
          My name is John Jang
        </h1>
      </div>
      <Image src={Profile} alt="Profile" className="mx-auto my-14" />
      <div className="w-full md:w-3/6 md:mx-auto px-10 space-y-5 text-black">
        <p>
          I&#39;m a Lead Web Developer Apprentice at a non-profit organization
          called Philly Truce in Philadelphia, US, where I am currently on a
          mission to build a texting service to help the vulnerable communities
          from gun violence.
        </p>
        {/* I need to be creative in adding information on how I tend to build a system to code */}
        {/* I want to be able to explain my personality as a developer and what I seek for*/}
        {/* I need to describe my tools */}
      </div>
    </div>
  );
}
