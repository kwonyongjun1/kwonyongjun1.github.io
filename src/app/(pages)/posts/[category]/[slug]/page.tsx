import { getPost, getAllPostParams } from "@/entities/post/api/post";

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
    <div>
      {metadata?.title}
      {content}
    </div>
  );
};

export default Posts;
