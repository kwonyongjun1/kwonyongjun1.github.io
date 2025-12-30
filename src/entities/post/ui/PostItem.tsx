import Image from "next/image";
import { Post } from "../post";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <a
      key={post.id}
      className="h-[380px] animate-fade-in flex flex-col rounded-lg overflow-hidden transition-all ease-in-out duration-300 group cursor-pointer border border-app-sub-bg dark:border-app-dark-sub-bg first:col-span-1 md:first:col-span-2"
    >
      <div className="w-full min-h-[180px] max-h-[180px] bg-app-sub-bg dark:bg-app-dark-sub-bg overflow-hidden">
        <Image
          src={post.image ?? "/empty"}
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
            {post.createdAt}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostItem;
