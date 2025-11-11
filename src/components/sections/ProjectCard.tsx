import { Eye, Github, Play } from "lucide-react";
import RollingTextWithIcon from "../RollingLinkWithIcon";
import Image, { StaticImageData } from "next/image";
type Props = {
  description: string;
  techStack: string;
  previewLink: string;
  repoLink: string;
  videoLink: string;
  imageUrl: StaticImageData;
  imageAlt: string;
};
export default function ProjectCard({
  description,
  previewLink,
  repoLink,
  techStack,
  videoLink,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    <div className="flex flex-col gap-4 max-h-full">
      <div className="flex gap-4 flex-wrap">
        <div className="lg:w-96 lg:h-52 h-fit w-full rounded-2xl overflow-hidden border dark:bg-[#131313] bg-[#dbdbdb]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="w-full lg:h-52 h-fit object-cover"
            loading="eager"
          />
        </div>
        <div className="flex flex-col gap-4">
          <RollingTextWithIcon
            delay={0.2}
            link={previewLink}
            title="Live Preview"
            classes="w-full bg-box-bg px-4 py-1.5 rounded-2xl border-2 hover:border-black dark:hover:border-low-color border-low-color hover:bg-transparent duration-300"
            icon={<Eye className="w-5 h-5" />}
          />
          <RollingTextWithIcon
            delay={0.3}
            link={repoLink}
            title="Github Repo"
            classes="w-full bg-box-bg px-4 py-1.5 rounded-2xl border-2 hover:border-black dark:hover:border-low-color border-low-color hover:bg-transparent duration-300"
            icon={<Github className="w-5 h-5" />}
          />
          <RollingTextWithIcon
            delay={0.4}
            link={videoLink}
            title="Video Show Project"
            classes="w-full bg-box-bg px-4 py-1.5 rounded-2xl border-2 hover:border-black dark:hover:border-low-color border-low-color hover:bg-transparent duration-300"
            icon={<Play className="w-5 h-5" />}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-bold">• Desctiption</p>
        <p>{description}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-bold">• Tech Stack</p>
        <p>{techStack}</p>
      </div>
    </div>
  );
}
