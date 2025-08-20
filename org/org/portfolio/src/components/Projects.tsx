import { useState } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const [projects] = useState<ProjectProps[]>([
    {
      title: "Fun fact of the day",
      description: "Web app showing fun fact using ChatGPT-API.",
      technologies: ["SvelteKit", "PostgreSQL", "Drizzle", "OpenAI"],
      githubUrl: "https://github.com/terrorbollen/fun-fact-of-the-day",
      liveUrl: "",
      featured: true,
    },
    {
      title: "Dotfiles",
      description: "Repo where I to organize my dotfiles",
      technologies: ["Nvim", "Tmux", "Alacritty", "Aerospace", "Zsh"],
      githubUrl: "https://github.com/terrorbollen/dotfiles",
      liveUrl: "",
      featured: true,
    },
    {
      title: "Kubernetes homelab",
      description: "Homelab where I host/ monitor *arr applications and other things",
      technologies: ["Kubernetes", "K3s", "Helm"],
      githubUrl: "https://github.com/terrorbollen/homelab",
      liveUrl: "",
    },
  ]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="numbered-heading">02.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
