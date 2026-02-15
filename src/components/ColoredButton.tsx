import { icons } from "../utils/icons";

type ColoredButtonProps = {
  label: string;
  iconName?: keyof typeof icons;
  url: string;
};

export const ColoredButton = ({ iconName, label, url }: ColoredButtonProps) => {
  return <div>ColoredButton</div>;
};
