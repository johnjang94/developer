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
          I am a Canadian who currently resides in Toronto, Ontario, Canada 🇨🇦{" "}
          <br />I enjoy crafting digital experience and building various
          products on the internet. I imagine and design my imagination first,
          then I let it breathe on the internet.
        </p>
        <p>
          I often heard that I am a creative person, but my true journey with
          design began back in 2021. It was during pandemic and I wanted to seek
          for a new journey away from teaching. This was the moment that
          I&#39;ve encountered UX Design and since then, I have been involved in
          different types of projects from redesign of a web application to a
          mobile design. Perhaps, I wanted to expand my journey a little
          further.
        </p>
        <p>
          In 2022, I was exposed to the world of Web Development for the first
          time. I learned the basics of Front-End (from HTML, CSS and
          JavaScript) and have built a few simple projects from making a to-do
          list to a static website. I have continued my journey in learning
          advanced level of web development technology using React, TypeScript,
          Next.js, and Tailwind CSS (for Front-End) as well as MongoDB,
          Express.js, Node.js, and many more (for Back-End).
        </p>
        <p>
          Since then, I have also had a few opportunities to contribute as a
          Front-End Developer in different projects in different communities. I
          was a UI Developer for a blockchain project, a Software Developer for
          an e-commerce project, and a Front-End Developer for a non-profit
          organization. Even though I am a UX Designer, I am dedicated to build
          a good web application to the organizations that need my hands.
        </p>
      </div>
    </div>
  );
}
