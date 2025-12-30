import { existsSync, readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "db", "markdown", "post");

const paresPost = (filePath: string) => {
  const fileContent = readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: data?.title || "",
      date: data?.date || "",
      description: data?.description || "",
      category: data?.category || "",
      tags: data?.tags || [],
      releaseDate: data?.releaseDate || "",
      writer: data?.writer || "",
    },
    content,
  };
};

export const getPost = (category: string, slug: string) => {
  const filepath = join(postsDirectory, category, `${slug}.mdx`);
  if (!existsSync(filepath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }
  return paresPost(filepath);
};

export const getAllPostParams = () => {
  const params: { category: string; slug: string }[] = [];

  if (!existsSync(postsDirectory)) {
    return params;
  }

  const categories = readdirSync(postsDirectory).filter((item) => {
    const itemPath = join(postsDirectory, item);
    return statSync(itemPath).isDirectory();
  });

  categories.forEach((category) => {
    const categoryPath = join(postsDirectory, category);
    const files = readdirSync(categoryPath).filter((file) =>
      file.endsWith(".mdx")
    );

    files.forEach((file) => {
      const slug = file.replace(/\.mdx$/, "");
      params.push({ category, slug });
    });
  });

  return params;
};
