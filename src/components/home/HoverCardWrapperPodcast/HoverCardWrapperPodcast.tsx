import Image from "next/image";
import Link from "next/link";
import type { Podcasts } from "types/podcast";
import mergeClasses from "utils/mergeClasses";

interface HoverCardWrapperPodcastProps {
  className?: string;
  podcast: Pick<Podcasts.Podcast, "title" | "description" | "slug">;
}

export default function HoverCardWrapperPodcast({
  className,
  podcast,
}: HoverCardWrapperPodcastProps): JSX.Element {
  return (
    <div className={mergeClasses("grid grid-flow-col gap-3 ", className)}>
      <div className="rounded-[4px] border-[1px] border-[#88888820] shadow-3xl">
        <Link href={`/podcast/${podcast.slug}`}>
          <Image
            src={`/pods/${podcast.slug}.png`}
            className={mergeClasses("h-[88px] w-[78px] brightness-[104%]")}
            alt="Podcast cover"
            width={150}
            height={150}
            quality={100}
          />
        </Link>
      </div>

      <div className="grid h-fit w-[470px] grid-flow-row gap-[2px]">
        <h2 className="w-full text-left font-moderat text-[17px] font-medium text-[#E7E9EA]">
          {podcast.title}
        </h2>
        <p className="ml-[2px] justify-start font-moderat text-[14px] font-normal leading-[18px] tracking-[-0.3px] text-[#9ab] text-opacity-80">
          {`${podcast.description.slice(0, 128)}`}
        </p>
      </div>
    </div>
  );
}

HoverCardWrapperPodcast.displayName = "HoverCardWrapperPodcast";
