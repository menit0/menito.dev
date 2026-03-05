import type { Experience } from "../types/Experience.ts";

type ExperienceItemProps = {
  item: Experience;
};

export const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          {item.icon && (
            <img
              src={`../assets/${item.icon}`}
              className="rounded-md"
              width="45"
            />
          )}
          <div>
            <h4>{item.title}</h4>
            <a
              className="hover:text-stone-700"
              href={item.place.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.place.name}
            </a>
          </div>
        </div>
        <span className="text-sm">{item.date}</span>
      </div>
      <p className="pl-5 leading-relaxed">{item.description}</p>
    </div>
  );
};
