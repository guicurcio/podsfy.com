import HoverCardWrapperPodcast from "components/home/HoverCardWrapperPodcast/HoverCardWrapperPodcast";
import HoverCardWrapper from "components/home/client/HoverCardWrapper/HoverCardWrapper";
import Link from "next/link";
import type { Podcasts } from "types/podcast";
import generateGoodPodcastEpisodeTitles from "utils/generateGoodPodcastEpisodeTitles/generateGoodPodcastEpisodeTitles";
import mergeClasses from "utils/mergeClasses";
import EntryInteraction from "../EntryInteraction/EntryInteraction";

/**
 * Props for the PodcastEpisodeFeedUnit component.
 */
export interface PodcastEpisodeFeedUnitProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  podcast?: Pick<Podcasts.Podcast, "slug" | "title" | "description">;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  podcastEpisode?: Pick<Podcasts.Episode, "title" | "description">;
  /**
   * Custom class names passed to the root element.
   */
  className?: string;

  /**
   *
   */
  defaultCoverImage?: string;
}

/**
 * PodcastEpisodeFeedUnit Component
 */
export default function PodcastEpisodeFeedUnit({
  className = "",
  podcast,
  podcastEpisode,
}: PodcastEpisodeFeedUnitProps): JSX.Element {
  return (
    <div
      key={podcastEpisode.title}
      className={mergeClasses(
        "grid w-full cursor-pointer grid-flow-row gap-4 border-0 bg-[#121212] px-[18px] pb-[12px] pt-[18px] hover:brightness-[110%] ",
        className,
      )}
    >
      <div className="grid w-full grid-flow-col  justify-between  ">
        <div className="grid grid-flow-col gap-4">
          <HoverCardWrapper
            slug={podcast.slug}
            childrenProps={{
              HoverCardContent: {
                className:
                  "w-full pl-3 py-3 pr-1 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-brightness-[50%] rounded-[5px] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl",
              },
              HoverCardTrigger: {
                className:
                  "rounded-[35px] w-[75px] h-[75px] border-[3px] border-fondy self-center",
              },
              NextImage: {
                className: "w-[75px] h-[75px] rounded-[35px]",
                width: 75,
                height: 75,
              },
            }}
          >
            <HoverCardWrapperPodcast podcast={podcast} />
          </HoverCardWrapper>
          <div className="grid w-full grid-flow-row content-start items-start align-top hover:cursor-pointer ">
            <Link
              href={`podcast/${podcast.slug}`}
              className="grid w-full grid-flow-row content-start items-start align-top hover:cursor-pointer "
            >
              <h3 className="w-[500px] text-left font-moderat text-[12px] font-medium text-[#E7E9EA] text-opacity-60 ">
                Podcast Episode
              </h3>
              <h2 className="w-[500px] text-left font-moderat text-[17px] font-medium text-[#E7E9EA] ">
                {generateGoodPodcastEpisodeTitles(podcastEpisode?.title || "")}
              </h2>
              <h3 className="w-[550px] text-left font-moderat text-[15px] font-normal text-[#71767B]">
                {podcast.title}
              </h3>
            </Link>
            <EntryInteraction></EntryInteraction>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] w-[700px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.1px] text-[#9ab] text-opacity-80  ">
          {`${
            podcastEpisode?.description
              ? podcastEpisode?.description.slice(0, 210)
              : ""
          }...`}
        </p>
      </div>
    </div>
  );
}

PodcastEpisodeFeedUnit.displayName = "PodcastEpisodeFeedUnit";
