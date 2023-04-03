import TooltipContainer from "components/common/TooltipContainer";
import ContentInteraction from "components/home/ContentInteraction/ContentInteraction";
import HoverCardWrapperPodcast from "components/home/HoverCardWrapperPodcast/HoverCardWrapperPodcast";
import HoverCardWrapper from "components/home/client/HoverCardWrapper/HoverCardWrapper";
import Link from "next/link";
import type { Podcasts } from "types/podcast";
import generateGoodPodcastEpisodeTitles from "utils/generateGoodPodcastEpisodeTitles/generateGoodPodcastEpisodeTitles";
import mergeClasses from "utils/mergeClasses";

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
   * Pass a custom description to the component.
   * @default ""
   */
  whereToWatchOrListenLink?: string;
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
        "grid w-full grid-flow-row gap-4 border-0 px-[18px] py-[18px] hover:brightness-[105%]",
        className,
      )}
    >
      <div className="grid w-full grid-flow-col items-center justify-between self-center align-middle ">
        <div className="grid grid-flow-col items-center gap-3">
          <HoverCardWrapper
            slug={podcast.slug}
            hoverCardContentClassName="w-full pl-3 py-3 pr-1 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-brightness-[50%] rounded-[5px] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
          >
            <HoverCardWrapperPodcast podcast={podcast} />
          </HoverCardWrapper>
          <Link
            href={`podcast/${podcast.slug}`}
            className="grid w-full grid-flow-row gap-[1px]"
          >
            <h2 className="w-[500px] text-left font-moderat text-[15px] font-medium text-[#E7E9EA] ">
              {generateGoodPodcastEpisodeTitles(podcastEpisode?.title || "")}
            </h2>
            <h3 className="w-[450px] text-left font-moderat text-[15px] font-normal text-[#71767B]">
              {podcast.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  ">
          {`${
            podcastEpisode?.description
              ? podcastEpisode?.description.slice(0, 210)
              : ""
          }...`}
        </p>
      </div>
      <div className="mt-[-5px] grid grid-flow-row items-start justify-start gap-[8px]">
        <TooltipContainer className="gap-[32px]">
          <ContentInteraction
            likeCount={150}
            tooltipContent="Hold to Like"
            iconSpecification="LIKE"
          ></ContentInteraction>
          <ContentInteraction
            likeCount={322}
            tooltipContent="Hold to Follow"
            likeCountClassName="right-[-20px]"
            iconSpecification="NOTIFY"
          ></ContentInteraction>
          <ContentInteraction
            likeCount={322}
            tooltipContent="Hold to Comment"
            likeCountClassName="right-[-19px]"
            iconSpecification="COMMENT"
          ></ContentInteraction>
        </TooltipContainer>
      </div>
    </div>
  );
}

PodcastEpisodeFeedUnit.displayName = "PodcastEpisodeFeedUnit";
