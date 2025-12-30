import { useTheme as useNextTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    toggleTheme,
    mounted,
  };
};
