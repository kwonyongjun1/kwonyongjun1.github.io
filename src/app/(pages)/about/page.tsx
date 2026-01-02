import MDXContent from "@/shared/ui/MDXContent";
import { getAbout } from "@/entities/about/api/about";
import TableOfContents from "@/shared/ui/TableOfContents";

const About = () => {
  const { content } = getAbout();

  return (
    <div className="w-full flex flex-col gap-md">
      <div className="flex flex-row gap-md">
        <MDXContent content={content} />
        <TableOfContents />
      </div>
    </div>
  );
};

export default About;
