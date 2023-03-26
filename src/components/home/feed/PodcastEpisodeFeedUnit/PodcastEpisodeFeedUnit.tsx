import TooltipContainer from "components/common/TooltipContainer";
import ContentInteraction from "components/home/ContentInteraction/ContentInteraction";
import HoverCardWrapper from "components/home/client/HoverCardWrapper/HoverCardWrapper";
import Image from "next/image";
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
        "grid w-full grid-flow-row gap-4 border-0 py-[18px] px-[18px] hover:brightness-[105%]",
        className,
      )}
    >
      <div className="grid w-full grid-flow-col items-center justify-between self-center align-middle ">
        <div className="grid grid-flow-col items-center gap-3">
          <HoverCardWrapper
            slug={podcast.slug}
            hoverCardContentClassName="w-full pl-3 py-3 pr-1 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-brightness-[50%] rounded-[5px] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
          >
            <div className="grid grid-flow-col gap-3 ">
              <Link href={`/podcast/${podcast.slug}`}>
                <Image
                  src={`/pods/${podcast.slug}.png`}
                  className="h-[88px] w-[78px] rounded-[4px] border border-[#88888820] shadow-3xl brightness-[104%]"
                  alt="Podcast cover"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </Link>
              <div className="grid h-fit w-[470px] grid-flow-row  gap-[2px]">
                <h2 className="w-full text-left font-moderat text-[17px] font-medium text-[#E7E9EA] ">
                  {podcast.title}
                </h2>
                <p className="ml-[2px] justify-start font-moderat text-[14px] font-normal leading-[18px] tracking-[-0.3px] text-[#9ab] text-opacity-80  ">
                  {`${podcast.description.slice(0, 128)}`}
                </p>
              </div>
            </div>
          </HoverCardWrapper>
          <Link
            href={`podcast/${podcast.slug}`}
            className="grid w-full grid-flow-row gap-[1px]"
          >
            <h2 className="w-[500px] text-left font-moderat text-[15px] font-medium text-[#E7E9EA] ">
              {generateGoodPodcastEpisodeTitles(podcastEpisode.title)}
            </h2>
            <h3 className="w-[450px] text-left font-moderat text-[15px] font-normal text-[#71767B]">
              {podcast.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  ">
          {`${podcastEpisode.description.slice(0, 210)}...`}
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
