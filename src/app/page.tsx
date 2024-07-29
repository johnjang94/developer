"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Ruminate from "../assets/development/ruminate.png";
import KBlock from "../assets/development/kblock.png";
import Portfolio3 from "../assets/development/portfolio-v3.gif";

import projectsData from "../app/home/projects.json";
import { useEffect, useState } from "react";
import "../app/home/homepage.css";
import { ArchiveCard } from "@/components/archive";

const titles = ["Builder", "Initiator", "Analytical"];

interface Project {
  id: number;
  projectTitle: string;
  projectSummary: string;
  toolsUsed: string[];
  githubLink: string;
  liveLink: string;
  featured?: string;
}

const cardContainerClass =
  "md:flex md:grid-cols-2 mx-auto md:w-10/12 my-10 md:my-20";
const cardImageClass =
  "md:block hidden md:w-3/6 mx-auto rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]";
const cardImageClassMobile =
  "block md:hidden mx-auto m-5 mt-0 rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]";
const cardTextClass = "p-5 md:w-3/6 z-10";
const iconContainerClass =
  "flex md:justify-start space-x-3 -mt-2 md:my-3 text-xl md:text-2xl";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const renderProjectCard = (project: Project, isOdd: boolean) => {
    return (
      <div className={cardContainerClass} key={project.id}>
        {!isOdd && (
          <Image
            src={
              project.id === 1
                ? Ruminate
                : project.id === 2
                ? KBlock
                : Portfolio3
            }
            alt={project.projectTitle}
            className={cardImageClass}
            unoptimized={true}
          />
        )}
        <div
          className={`${
            project.id === 3 ? "text-black" : "text-white"
          } ${cardTextClass}`}
        >
          {project.featured && (
            <h5 className="md:text-start text-center">{project.featured}</h5>
          )}
          <h1 className="md:text-start text-center md:text-3xl text-xl md:my-5 my-1">
            {project.projectTitle}
          </h1>
          <Image
            src={
              project.id === 1
                ? Ruminate
                : project.id === 2
                ? KBlock
                : Portfolio3
            }
            alt={project.projectTitle}
            className={cardImageClassMobile}
          />
          <p className="w-full mx-auto md:text-left md:mx-0">
            {project.projectSummary}
          </p>
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal gap-2">
            <div className="flex-wrap space-x-2 text-gray-400 md:my-5">
              {project.toolsUsed.map((tool, index) => (
                <span
                  key={index}
                  className="md:mr-2 mb-2 text-xs md:text-xl w-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className={iconContainerClass}>
              <a href={project.githubLink}>
                <FaGithub />
              </a>
              <a href={project.liveLink}>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        {isOdd && (
          <Image
            src={
              project.id === 1
                ? Ruminate
                : project.id === 2
                ? KBlock
                : Portfolio3
            }
            alt={project.projectTitle}
            className={cardImageClass}
            unoptimized={true}
          />
        )}
      </div>
    );
  };

  return (
    <main>
      <div className="md:p-24">
        <header className="lg:my-0 my-24 mx-auto lg:w-10/12">
          <h1 className="lg:text-9xl text-4xl">John Jang</h1>
          <div className="rotating-text-container mt-5">
            {titles.map((title, index) => (
              <h2
                key={index}
                className="rotating-text text-xl lg:text-3xl font-normal"
                style={{ animationDelay: `${index * 2}s` }}
              >
                {title}
              </h2>
            ))}
          </div>
          <h4 className="lg:text-3xl text-xl">
            Front-End Lead Apprentice at Philly Truce.
          </h4>
          <div>
            <Link
              href="/about"
              className="flex space-x-3 items-center mt-5 text-blue-500 hover:underline hover:cursor-pointer w-fit"
            >
              <button>More about me</button>
              <FaArrowRight />
            </Link>
          </div>
        </header>
        <section className="my-5 py-10">
          <h2 className="md:text-4xl text-2xl my-5 md:w-4/6 md:mx-auto text-center">
            Some things I have built
          </h2>
          {projects.map((project, index) =>
            renderProjectCard(project, index % 2 !== 0)
          )}
        </section>
      </div>
      <section>
        <h1 className="text-3xl my-10 text-center text-black">My Archives</h1>
        <div className="md:grid-cols-3 p-5 md:flex md:gap-5 md:mx-48 md:justify-between">
          <ArchiveCard
            title="Simplified YouTube"
            description="For learning purposes, this is a mini-version of YouTube with good quality of streaming."
            tools={["React", "JavaScript", "Tailwind CSS"]}
            githubLink="https://github.com/johnjang94/cloneYouTube"
            liveLink="https://youtube-myversion.netlify.app/"
          />
          <ArchiveCard
            title="Mini-Game"
            description="Let's have some fun: click the carrots only."
            tools={["JavaScript"]}
            githubLink="https://github.com/johnjang94/carrot"
            liveLink="https://johnjang94.github.io/carrot/"
          />
          <ArchiveCard
            title="To-Do List"
            description="For learning purposes, this is a mini-version of YouTube with good quality of streaming."
            tools={["JavaScript"]}
            githubLink="https://github.com/johnjang94/to-do-app"
            liveLink="https://johnjang94.github.io/to-do-app/"
          />
        </div>
      </section>
    </main>
  );
}
