import Avatar from "@/shared/ui/Avatar";
import Link from "next/link";

const ShortAbout = () => {
  return (
    <div className="flex items-center justify-center">
      <article className="flex w-full gap-sm">
        <Avatar src="/images/avatar.png" alt="avatar" size={26} />
        <div className="flex-1 flex flex-col gap-sm">
          <div className=" text-sm">
            <h1 className="text-2xl font-semibold">권용준</h1>
          </div>
          <div className="text-app-sub-text dark:text-app-dark-sub-text text-sm">
            <p>Frontend Engineer</p>
          </div>
          <div className="text-app-sub-text dark:text-app-dark-sub-text text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-app-primary dark:text-app-dark-primary text-sm cursor-pointer px-sm">
              <Link href="/about">Detail</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ShortAbout;
