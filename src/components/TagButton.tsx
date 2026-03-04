import type { ColorVariant } from "../types/ColorVariant";

type TagButtonProps = {
  label: string;
  icon: React.ReactNode;
  url: string;
  variant?: ColorVariant;
};

export const TagButton = ({
  icon,
  label,
  url,
  variant = "amber",
}: TagButtonProps) => {
  const variants = {
    amber: "hover:bg-amber-100 hover:text-amber-700 hover:border-amber-200",
    blue: "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-200",
    rose: "hover:bg-rose-100 hover:text-rose-700 hover:border-rose-200",
    emerald:
      "hover:bg-emerald-100 hover:text-emerald-700 hover:border-emerald-200",
    violet: "hover:bg-violet-100 hover:text-violet-700 hover:border-violet-200",
    yellow: "hover:bg-yellow-100 hover:text-yellow-700 hover:border-yellow-200",
    orange: "hover:bg-orange-100 hover:text-orange-700 hover:border-orange-200",
  };

  const selectedVariant = variants[variant];

  return (
    <a
      className={`inline-flex items-center gap-2 px-2 py-1 text-sm font-medium rounded-lg bg-stone-100 border border-stone-200 transition-all duration-300 ${selectedVariant}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {label}
    </a>
  );
};
