import HoverCardWrapperPodcast from "components/home/HoverCardWrapperPodcast/HoverCardWrapperPodcast";
import HoverCardWrapper from "components/home/client/HoverCardWrapper/HoverCardWrapper";
import type { Podcasts } from "types/podcast";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the PodcastFeedUnit component.
 */
export interface PodcastFeedUnitProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  podcast?: Pick<Podcasts.Podcast, "title" | "slug" | "description">;
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
  podcastEpisodeDescription?: string;
  podcastSlug?: string;
}

/**
 *
 * PodcastFeedUnit Component
 */
export default function PodcastFeedUnit({
  className = "",
  podcast,
  title = "Joe Rogan Experience #1278 - Kevin Hart",
}: PodcastFeedUnitProps): JSX.Element {
  return (
    <div
      key={title}
      className={mergeClasses(
        "grid w-full grid-flow-row gap-3 border-0 px-[18px] py-[18px] hover:brightness-[105%]",
        className,
      )}
    >
      <div className="grid w-full grid-flow-row gap-4">
        <div className="grid w-full grid-flow-col items-center justify-between self-center align-middle ">
          <div className="grid grid-flow-col items-center gap-3">
            <HoverCardWrapper
              slug={podcast.slug}
              hoverCardContentClassName="w-full pl-3 py-3 pr-1 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-brightness-[50%] rounded-[5px] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
            >
              <HoverCardWrapperPodcast podcast={podcast} />
            </HoverCardWrapper>
            <div className="grid w-[500px] grid-flow-row gap-[1px]">
              <h2 className="w-full text-left font-moderat text-[16px] font-medium text-[#E7E9EA] ">
                {podcast.title}
              </h2>
              <p className="ml-[2px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  ">
                {`${podcast.description.slice(0, 128)}`}
              </p>
            </div>
          </div>
          {/* <HoverCardWrapper></HoverCardWrapper> */}
        </div>
      </div>
      {/*
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
      </div> */}
    </div>
  );
}

PodcastFeedUnit.displayName = "PodcastFeedUnit";
