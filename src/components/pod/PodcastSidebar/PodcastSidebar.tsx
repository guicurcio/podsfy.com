import Image from "next/image";

import Trackers from "components/home/Trackers";
import PodBehind from "components/pod/PodBehind";
import { Podcasts } from "types/podcast";
import mergeClasses from "utils/mergeClasses";

/**
 * PodcastSidebar Props description
 */
export interface PodcastSidebarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Custom props passed to the root element.
   */
  rootProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  /**
   * URL of the image.
   *
   * @remarks Ideally the extension should be .webp
   */
  imageURL?: string;
  /**
   * The path or URL to navigate to.
   * @example
   * https://example.com/PodcastSidebar
   */
  podcastURL?: string;
  /**
   *
   * The specific podcast for the sidebar.
   *
   */
  podcast?: Podcasts.Podcast;
}

/**
 * PodcastSidebar Component
 */
export default function PodcastSidebar({
  className,
  podcast,
  rootProps,
}: PodcastSidebarProps) {
  return (
    <div
      className={mergeClasses(
        "shadow-3xl relative h-[391px]  rounded-[4px] border-b-[4px] border-l-[4px] border-r-[4px] border-t-[4px] border-[#88888820]",
        className,
      )}
      {...rootProps}
    >
      <div className=" h-[383px] w-[305px]  self-center p-0 align-middle">
        <Image
          src={`/${podcast.cover}`}
          className="h-[380px]  w-[305px]"
          alt="Podcast cover"
          width={305}
          height={380}
        ></Image>
      </div>
      <div className="absolute bottom-[-2px] grid h-[70px] w-[305px] grid-flow-col gap-x-0 rounded-bl-md rounded-br-md    bg-black bg-opacity-60 pt-[0px] backdrop-blur-[150px] backdrop-brightness-[30%] backdrop-contrast-[150%]">
        <Trackers tooltipContent="Track" iconSpecification="NOTIFY"></Trackers>
        <Trackers tooltipContent="Like" iconSpecification="LIKE"></Trackers>
        <Trackers tooltipContent="Share" iconSpecification="SHARE"></Trackers>
      </div>
      <div>
        <PodBehind
          rating={5}
          tags="family,sports,finance"
          genre="Sports"
          podcastTitle={podcast.title}
          duration={60}
          language="English"
        ></PodBehind>
      </div>
    </div>
  );
}

PodcastSidebar.displayName = "PodcastSidebar";
