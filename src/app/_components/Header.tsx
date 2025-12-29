"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useLayoutEffect, useRef, useState } from "react";
import { SunIcon } from "@/shared/ui/icons/SunIcon";
import { MoonIcon } from "@/shared/ui/icons/MoonIcon";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isFadeOut, setIsFadeOut] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-8 py-2 h-[50px] place-content-center backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="">kwonyongjun</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
