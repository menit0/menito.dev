import { FaGithub } from "react-icons/fa6";
import { Tag } from "./Tag";
import type { Project } from "../types/Project.ts";
import { HiMiniArrowUpRight } from "react-icons/hi2";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col justify-between border border-stone-200 rounded-xl p-2 gap-4 hover:shadow-lg hover:shadow-violet-100 hover:border-violet-300 transition-all duration-300"
    >
      <div className="inline-flex flex-col gap-2">
        <img
          src={`../assets/${project.thumbnail}`}
          className="rounded-lg h-30 object-cover"
        />
        <div className="inline-flex justify-between items-center">
          <div className="inline-flex gap-1 items-center">
            <h3>{project.name}</h3>
            <HiMiniArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </div>
          {project.code && (
            <a href={project.code}>
              <FaGithub size={20} />
            </a>
          )}
        </div>
        <p className="text-sm leading-relaxed">
          {project.description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.skills?.map((skill) => (
          <div className="text-xs">
            <Tag key={skill} label={skill} />
          </div>
        ))}
      </div>
    </a>
  );
};
