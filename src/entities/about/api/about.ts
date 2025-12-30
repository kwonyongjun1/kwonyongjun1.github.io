import { existsSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const aboutDirectory = join(process.cwd(), "src", "db", "markdown", "about");

const parseAbout = (filePath: string) => {
  const fileContent = readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  return {
    content,
  };
};

export const getAbout = () => {
  const filePath = join(aboutDirectory, "about.mdx");
  if (!existsSync(filePath)) {
    throw new Error("About file not found");
  }
  return parseAbout(filePath);
};
