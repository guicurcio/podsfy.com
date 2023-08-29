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
        "grid w-full cursor-pointer grid-flow-row gap-4 border-0 px-[18px] pb-[12px] pt-[18px] hover:bg-fondy hover:backdrop-contrast-[500%]",
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
                  "rounded-[35px] w-[55px] h-[55px] border-[2px] border-gray-900 self-center",
              },
              NextImage: {
                className: "w-[55px] h-[55px] rounded-[25px]",
                width: 55,
                height: 55,
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
              <h2 className="w-[500px] text-left font-moderat text-[17px] font-medium text-[#E7E9EA] ">
                {generateGoodPodcastEpisodeTitles(podcastEpisode?.title || "")}
              </h2>
              <h3 className="w-[450px] text-left font-moderat text-[15px] font-normal text-[#71767B]">
                {podcast.title}
              </h3>
            </Link>
            <div className="mt-[3px] grid grid-flow-row items-start justify-start gap-[8px]">
              <TooltipContainer className="gap-[32px]">
                <ContentInteraction
                  likeCount={150}
                  tooltipContent="Hold to Like"
                  iconSpecification="LIKE"
                ></ContentInteraction>
                <ContentInteraction
                  likeCount={322}
                  tooltipContent="Hold to Comment"
                  likeCountClassName="right-[-19px]"
                  iconSpecification="COMMENT"
                ></ContentInteraction>
                <ContentInteraction
                  tooltipContent="Hold to Follow"
                  likeCountClassName="right-[-20px]"
                  iconSpecification="NOTIFY"
                ></ContentInteraction>
              </TooltipContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] w-[650px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.1px] text-[#9ab] text-opacity-80  ">
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
