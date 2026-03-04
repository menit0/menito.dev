import { icons } from "../utils/icons";

type TagButtonProps = {
  label: string;
  iconName?: keyof typeof icons;
  url: string;
};

export const TagButton = ({ iconName, label, url }: TagButtonProps) => {
  const Icon = iconName ? icons[iconName] : null;

  return (
    <a
      className="inline-flex items-center gap-2 px-2 py-1 font-medium rounded-lg bg-stone-100 border border-stone-200 transition-all duration-300 hover:border-red-200 hover:bg-red-100 hover:text-red-700"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon && <Icon />}
      {label}
    </a>
  );
};
