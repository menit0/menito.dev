import "./App.css";
import { ExperienceItem } from "./components/ExperienceItem";
import { Tag } from "./components/Tag";
import { DATA_EN } from "./data/data_en";
import type { Experience } from "./types/Experience";
import avatar from "./assets/avatar.jpg";
import { ProjectCard } from "./components/ProjectCard";
import type { Project } from "./types/Project";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiCodeberg } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function App() {
  const data = DATA_EN;

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center">
        <img
          src={avatar}
          className="rounded-full"
          alt={data.name}
          width="40"
          height="40"
        />
        {/*<LanguageToggle />*/}
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1>{data.name}</h1>
          <p className="font-medium text-rose-600">{data.about}</p>
        </div>
        {data.summary}
      </section>

      <section className="flex flex-col gap-6">
        <h2>{data.work.sectionName}</h2>
        <div className="flex flex-col gap-5">
          {data.work.items.map((item) => (
            <ExperienceItem item={item as Experience} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2>{data.education.sectionName}</h2>
        {data.education.items.map((item) => (
          <ExperienceItem item={item as Experience} />
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <h2>{data.skills.sectionName}</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.items.map((item) => (
            <Tag
              iconName={item.toLowerCase().replace(/\s+/g, "")}
              label={item}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2>{data.mainProjects.sectionName}</h2>
        <div className="grid grid-cols-2 gap-3">
          {data.mainProjects.items.map((item) => (
            <ProjectCard project={item as Project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2>{data.sideProjects.sectionName}</h2>
        <div className="grid grid-cols-2 gap-3">
          {data.sideProjects.items.map((item) => (
            <ProjectCard project={item as Project} />
          ))}
        </div>
      </section>

      <footer className="flex border-t border-stone-200 items-center justify-between py-4">
        <small className="text-stone-400">© 2026</small>
        <div className="flex items-center gap-4">
          <a
            href="mailto:guille.mena@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-700"
          >
            <MdEmail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/menito"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-700"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/guillermomena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-700"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://codeberg.org/menito"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-700"
          >
            <SiCodeberg className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
