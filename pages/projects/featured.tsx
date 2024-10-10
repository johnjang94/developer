import Image from "next/image";
import projects from "./projects.json";
import styles from "./featured.module.css";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

export default function Featured() {
  return (
    <div>
      <div className="flex items-center space-x-3 my-28">
        <RxDividerHorizontal className={styles.dividerExtended} />
        <h1>FEATURED</h1>
        <RxDividerHorizontal className={styles.dividerExtended} />
      </div>
      {projects.map((project) => (
        <div key={project.id} className="p-4 border-b">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          {project.id === 1 ? (
            <Image
              src={project.image}
              width={130}
              height={50}
              alt={project.title}
              className="rounded-2xl mx-auto"
            />
          ) : (
            <Image
              src={project.image}
              layout="responsive"
              width={16}
              height={9}
              alt={project.title}
              className="rounded-2xl"
            />
          )}
          <div>
            <p className="p-3">{project.description}</p>
            <div className="md:flex md:items-end">
              <div className="grid md:grid-cols-4 grid-cols-2 md:w-fit w-full">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-slate-400 rounded-lg p-2 text-white text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3 text-2xl justify-end">
                {project.website_link && (
                  <a
                    href={project.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={project.github_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
