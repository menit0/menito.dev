type TagProps = {
  label: string;
  icon?: React.ReactNode;
};

export const Tag = ({ icon, label }: TagProps) => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-stone-200/50">
      {icon && icon}
      {label}
    </div>
  );
};
