import { icons } from "../utils/icons";

type TagProps = {
  label: string;
  iconName?: keyof typeof icons;
};

export const Tag = ({ iconName, label }: TagProps) => {
  const Icon = iconName ? icons[iconName] : null;

  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-stone-200/50">
      {Icon && <Icon />}
      {label}
    </div>
  );
};
