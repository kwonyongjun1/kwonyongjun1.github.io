import { cn } from "../lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  size?: "sm" | "md" | "lg";
}

const Badge = ({ text, size = "md", ...props }: BadgeProps) => {
  const sizeClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 font-medium text-gray-600 inset-ring inset-ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:inset-ring-gray-400/20",
        sizeClass[size]
      )}
      {...props}
    >
      {text}
    </span>
  );
};

export default Badge;
