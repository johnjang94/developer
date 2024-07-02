import { FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import PropTypes from "prop-types";

interface ArchiveCardProps {
  title: string;
  description: string;
  tools: string[];
  githubLink: string;
  liveLink: string;
}

export const ArchiveCard: React.FC<ArchiveCardProps> = ({
  title,
  description,
  tools,
  githubLink,
  liveLink,
}) => (
  <div className="bg-zinc-400 rounded-xl p-5 md:w-3/6 w-full my-5 md:my-0">
    <div className="flex justify-between text-2xl">
      <a href={githubLink}>
        <FaFolder />
      </a>
      <a href={liveLink}>
        <FaExternalLinkAlt />
      </a>
    </div>
    <h2 className="text-xl my-3">{title}</h2>
    <p className="text-gray-200">{description}</p>
    <div className="flex flex-wrap justify-start text-white my-5">
      {tools.map((tool, index) => (
        <span key={index} className="mr-2">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

ArchiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
