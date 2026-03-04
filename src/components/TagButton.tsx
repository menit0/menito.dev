type TagButtonProps = {
  label: string;
  icon: React.ReactNode;
  url: string;
};

export const TagButton = ({ icon, label, url }: TagButtonProps) => {
  return (
    <a
      className="inline-flex items-center gap-2 px-2 py-1 text-sm font-medium rounded-lg bg-stone-100 border border-stone-200 transition-all duration-300 hover:border-red-200 hover:bg-red-100 hover:text-red-700"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {label}
    </a>
  );
};
