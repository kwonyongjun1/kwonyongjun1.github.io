import ShortAbout from "@/entities/about/ui/ShortAbout";
import PostItem from "@/entities/post/ui/PostItem";
import Button from "@/shared/ui/Button";

const Home = () => {
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

const posts = [
  {
    id: 1,
    title: "Post 1",
    summary: "Summary 1",
    image: "/images/post-1.png",
    createdAt: "2025-12-29",
  },
  {
    id: 2,
    title: "Post 2",
    summary: "Summary 2",
    createdAt: "2025-12-29",
  },
  {
    id: 3,
    title: "Post 3",
    summary: "Summary 3",
    image: "/images/post-3.png",
    createdAt: "2025-12-29",
  },
  {
    id: 4,
    title: "Post 4",
    summary: "Summary 4",
    image: "/images/post-4.png",
    createdAt: "2025-12-29",
  },
  {
    id: 5,
    title: "Post 5",
    summary: "Summary 5",
    image: "/images/post-5.png",
    createdAt: "2025-12-29",
  },
  {
    id: 6,
    title: "Post 6",
    summary: "Summary 6",
    image: "/images/post-6.png",
    createdAt: "2025-12-29",
  },
  {
    id: 7,
    title: "Post 7",
    summary: "Summary 7",
    image: "/images/post-7.png",
    createdAt: "2025-12-29",
  },
  {
    id: 8,
    title: "Post 8",
    summary: "Summary 8",
    image: "/images/post-8.png",
    createdAt: "2025-12-29",
  },
  {
    id: 9,
    title: "Post 9",
    summary: "Summary 9",
    image: "/images/post-9.png",
    createdAt: "2025-12-29",
  },
  {
    id: 10,
    title: "Post 10",
    summary: "Summary 10",
    image: "/images/post-10.png",
    createdAt: "2025-12-29",
  },
];
