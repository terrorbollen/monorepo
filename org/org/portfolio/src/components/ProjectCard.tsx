import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: ProjectProps) => {
  return (
    <div className="project-card group">
      <div className="mb-5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.15C3 5.51487 3.25286 4.90601 3.7029 4.45597C4.15294 4.00594 4.76179 3.75308 5.39692 3.75308H18.6031C19.2382 3.75308 19.8471 4.00594 20.2971 4.45597C20.7471 4.90601 21 5.51487 21 6.15V17.8438C21 18.4789 20.7471 19.0878 20.2971 19.5378C19.8471 19.9879 19.2382 20.2408 18.6031 20.2408H5.39692C4.76179 20.2408 4.15294 19.9879 3.7029 19.5378C3.25286 19.0878 3 18.4789 3 17.8438V6.15Z"
            stroke="#64ffda"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 11.5H16.5"
            stroke="#64ffda"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 15.5H16.5"
            stroke="#64ffda"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 7.5H16.5"
            stroke="#64ffda"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="text-portfolio-white text-xl font-semibold mb-2 group-hover:text-portfolio-accent transition-colors">
        {title}
      </h3>

      <div className="mb-4">
        <p className="text-portfolio-slate">{description}</p>
      </div>

      <div className="flex flex-wrap mb-6">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-lightestSlate hover:text-portfolio-accent"
          aria-label={`GitHub repository for ${title}`}
        >
          <Github size={20} />
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-lightestSlate hover:text-portfolio-accent"
            aria-label={`Live demo for ${title}`}
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
