import ShortAbout from "@/entities/about/ui/ShortAbout";
import { getAllPost } from "@/entities/post/api/post";
import PostItem from "@/entities/post/ui/PostItem";
import Button from "@/shared/ui/Button";

const Home = async () => {
  const posts = getAllPost();
  return (
    <div className="w-full flex flex-col gap-md">
      <div className="flex flex-col gap-md">
        <ShortAbout />
      </div>
      <div className="flex flex-col gap-md">
        <div className="flex items-center justify-between gap-sm">
          <span className="text-xl font-semibold">Posts</span>
          <Button text="View All" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
