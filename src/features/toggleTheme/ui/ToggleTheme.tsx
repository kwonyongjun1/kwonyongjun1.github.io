import { SunIcon } from "@/shared/ui/icons/SunIcon";
import { MoonIcon } from "@/shared/ui/icons/MoonIcon";
import { useTheme } from "../hook";
import { useRef, useState } from "react";

const ToggleTheme = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme, mounted } = useTheme();
  const [isFadeOut, setIsFadeOut] = useState(false);

  const onClick = () => {
    if (timeoutRef.current) return;
    setIsFadeOut(true);
    timeoutRef.current = setTimeout(() => {
      toggleTheme();
      setIsFadeOut(false);
      clearTimeout(timeoutRef.current!);
      timeoutRef.current = null;
    }, 150);
  };

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="다크모드 토글"
    >
      <div
        className={`${
          isFadeOut
            ? "animate-theme-icon-fade-out"
            : "animate-theme-icon-fade-in"
        }`}
      >
        {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
};

export default ToggleTheme;
