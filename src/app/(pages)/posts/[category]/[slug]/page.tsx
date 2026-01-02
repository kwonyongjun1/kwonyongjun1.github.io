import { getPost, getAllPostParams } from "@/entities/post/api/post";
import MDXContent from "@/shared/ui/MDXContent";
import TableOfContents from "@/shared/ui/TableOfContents";

interface PostsProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostParams();
}

const Posts = async ({ params }: PostsProps) => {
  const { category, slug } = await params;
  const { metadata, content } = getPost(category as string, slug as string);
  return (
    <div className="w-full flex flex-col gap-md">
      <div className="flex flex-row justify-between border-b pb-md border-app-sub-bg dark:border-app-dark-sub-bg">
        <span className="text-2xl font-bold">{metadata?.title}</span>
        <span className="text-app-sub-text dark:text-app-dark-sub-text text-sm align-end">
          {metadata?.releaseDate.toString()}
        </span>
      </div>
      <div className="flex flex-row gap-md items-start">
        <div className="flex-1">
          <MDXContent content={content} />
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};

export default Posts;
