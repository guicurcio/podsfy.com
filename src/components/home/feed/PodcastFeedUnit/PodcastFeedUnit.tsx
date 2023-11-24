import TooltipContainer from "components/common/TooltipContainer";
import ContentInteraction from "components/home/ContentInteraction";
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
  podcast?: Pick<Podcasts.Podcast, "title" | "slug" | "description" | "id">;
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
  podcastID: string | number;
}

/**
 *
 * PodcastFeedUnit Component
 */
export default function PodcastFeedUnit({
  className = "",
  podcast,
  podcastID,
  title = "Joe Rogan Experience #1278 - Kevin Hart",
}: PodcastFeedUnitProps): JSX.Element {
  return (
    <div
      key={title}
      className={mergeClasses(
        "grid w-full max-w-[830px] cursor-pointer grid-flow-row gap-3 border-0 px-[18px] pb-[12px] pt-[18px] hover:bg-fondy hover:brightness-[105%]",
        className,
      )}
    >
      <div className="grid w-full grid-flow-row gap-4">
        <div className="grid w-full grid-flow-col items-start">
          <div className="grid grid-flow-col place-content-start items-start gap-4 ">
            <HoverCardWrapper
              slug={podcast.slug}
              childrenProps={{
                HoverCardContent: {
                  className: mergeClasses(
                    "w-full pl-3 py-3 pr-1 bg-black",
                    "bg-opacity-50 backdrop-blur-[50px] rounded-none backdrop-brightness-[50%] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl",
                  ),
                },
                NextImage: {
                  className: "w-[79px] h-[92px] rounded-none",
                  width: 79,
                  height: 92,
                },
                HoverCardTrigger: {
                  className: "w-[79px] h-[92px] rounded-none rounded-0 ",
                },
              }}
            >
              <HoverCardWrapperPodcast podcast={podcast} />
            </HoverCardWrapper>
            <div className="grid grid-flow-row place-content-start content-start items-start gap-[2px] align-baseline">
              <h3 className="w-[500px] text-left font-moderat text-[12px] font-medium text-[#E7E9EA] text-opacity-60 ">
                Podcast 
              </h3>
              <h2 className="w-full text-left font-moderat text-[18px] font-medium text-[#E7E9EA] ">
                {podcast.title}
              </h2>
              <p className="ml-[2px] w-[550px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.1px] text-[#9ab] text-opacity-80  ">
                {`${podcast.description.slice(0, 128)}...`}
              </p>
              <div className="mt-[10px] grid grid-flow-row items-start justify-start gap-[8px] pl-[15px]">
                <TooltipContainer className="gap-[32px]">
                  <ContentInteraction
                    likeCount={150}
                    tooltipContent="Hold to Like"
                    iconSpecification="LIKE"
                    podcastID={podcast.id}
                  ></ContentInteraction>
                  <ContentInteraction
                    tooltipContent="Hold to Follow"
                    likeCountClassName="right-[-20px]"
                    iconSpecification="NOTIFY"
                    podcastID={podcast.id}
                  ></ContentInteraction>
                </TooltipContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PodcastFeedUnit.displayName = "PodcastFeedUnit";
