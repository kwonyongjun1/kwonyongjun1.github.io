import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-md">
      <div className="flex flex-col gap-md">
        <div className="flex items-center justify-between gap-sm">
          <span className="text-xl font-semibold">Posts</span>
          <button className="px-md py-sm bg-app-sub-bg dark:bg-app-dark-sub-bg rounded-md text-app-sub-text dark:text-app-dark-sub-text text-sm">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {posts.map((post) => (
            <a
              key={post.id}
              className="h-[380px] animate-fade-in flex flex-col rounded-lg overflow-hidden transition-all ease-in-out duration-300 group cursor-pointer border border-app-sub-bg dark:border-app-dark-sub-bg first:col-span-1 md:first:col-span-2"
            >
              <div className="w-full min-h-[180px] max-h-[180px] bg-app-sub-bg dark:bg-app-dark-sub-bg overflow-hidden">
                <Image
                  src="/images/post-1.png"
                  alt="post-1"
                  width={380}
                  height={180}
                  className="w-full h-full object-cover group-hover:scale-110 duration-150 ease-in-out"
                />
              </div>
              <div className="flex-1 flex flex-col gap-md p-md">
                <div className="line-clamp-2 font-semibold group-hover:text-app-primary dark:group-hover:text-app-dark-primary break-all">
                  {post.title}
                </div>
                <div className="line-clamp-3 text-app-sub-text dark:text-app-dark-sub-text">
                  {post.summary}
                </div>
                <div className="flex-1 flex items-end justify-between gap-sm">
                  <div className="text-app-sub-text dark:text-app-dark-sub-text text-sm">
                    {post.date}
                  </div>
                </div>
              </div>
            </a>
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
    date: "2025-12-29",
  },
  {
    id: 2,
    title: "Post 2",
    summary: "Summary 2",
    date: "2025-12-29",
  },
  {
    id: 3,
    title: "Post 3",
    summary: "Summary 3",
    image: "/images/post-3.png",
    date: "2025-12-29",
  },
  {
    id: 4,
    title: "Post 4",
    summary: "Summary 4",
    image: "/images/post-4.png",
    date: "2025-12-29",
  },
  {
    id: 5,
    title: "Post 5",
    summary: "Summary 5",
    image: "/images/post-5.png",
    date: "2025-12-29",
  },
  {
    id: 6,
    title: "Post 6",
    summary: "Summary 6",
    image: "/images/post-6.png",
    date: "2025-12-29",
  },
  {
    id: 7,
    title: "Post 7",
    summary: "Summary 7",
    image: "/images/post-7.png",
    date: "2025-12-29",
  },
  {
    id: 8,
    title: "Post 8",
    summary: "Summary 8",
    image: "/images/post-8.png",
    date: "2025-12-29",
  },
  {
    id: 9,
    title: "Post 9",
    summary: "Summary 9",
    image: "/images/post-9.png",
    date: "2025-12-29",
  },
  {
    id: 10,
    title: "Post 10",
    summary: "Summary 10",
    image: "/images/post-10.png",
    date: "2025-12-29",
  },
];
