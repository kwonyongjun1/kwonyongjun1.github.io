"use client";

import Link from "next/link";
import ToggleTheme from "@/features/toggleTheme/ui/ToggleTheme";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-8 py-2 h-[50px] place-content-center backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="">kwonyongjun</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
