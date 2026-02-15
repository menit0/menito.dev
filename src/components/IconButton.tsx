import { icons } from "../utils/icons";

type IconButtonProps = {
  url: string;
  iconName?: keyof typeof icons;
};

export const IconButton = ({ iconName, url }: IconButtonProps) => {
  const Icon = iconName ? icons[iconName] : null;

  return <a href={url}>{Icon && <Icon />}</a>;
};
