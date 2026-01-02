import PostItem from "@/entities/post/ui/PostItem";
import { getAllPost } from "@/entities/post/api/post";

const Posts = () => {
  const posts = getAllPost();

  return (
    <div className="w-full flex flex-col gap-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
