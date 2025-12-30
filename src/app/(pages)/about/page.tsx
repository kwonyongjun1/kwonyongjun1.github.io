import MDXContent from "@/entities/about/ui/MDXContent";
import { getAbout } from "@/entities/about/api/about";

const About = () => {
  const { content } = getAbout();

  return (
    <div className="w-full flex flex-col gap-md">
      <MDXContent content={content as string} />
    </div>
  );
};

export default About;
