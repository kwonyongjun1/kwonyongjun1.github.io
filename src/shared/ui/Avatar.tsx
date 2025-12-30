import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size: [6, 14, 18, 20, 26][number];
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
  return (
    <div
      className={`bg-app-sub-bg dark:bg-app-dark-sub-bg rounded-full flex flex-row`}
      style={{ width: `${size * 5}px`, height: `${size * 5}px` }}
    >
      <Image src={src} alt={alt} width={size * 5} height={size * 5} />
    </div>
  );
};

export default Avatar;
