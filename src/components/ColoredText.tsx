import type { ColorVariant } from "../types/ColorVariant";

type ColoredTextProps = {
  label: string;
  variant?: ColorVariant;
};

export const ColoredText = ({ label, variant = "amber" }: ColoredTextProps) => {
  const variants = {
    amber: { bg: "bg-amber-100/50", text: "text-amber-900" },
    blue: { bg: "bg-blue-100/50", text: "text-blue-900" },
    rose: { bg: "bg-rose-100/50", text: "text-rose-900" },
    emerald: { bg: "bg-emerald-100/50", text: "text-emerald-900" },
    violet: { bg: "bg-violet-100/50", text: "text-violet-900" },
    yellow: { bg: "bg-yellow-100/50", text: "text-yellow-900" },
    orange: { bg: "bg-orange-100/50", text: "text-orange-900" },
  };

  const selectedVariant = variants[variant];

  return (
    <span className="relative inline-block group px-1">
      <span
        className={`absolute inset-0 -skew-y-2 rounded opacity-70 ${selectedVariant.bg}`}
      ></span>
      <span className={`relative font-medium ${selectedVariant.text}`}>
        {label}
      </span>
    </span>
  );
};
