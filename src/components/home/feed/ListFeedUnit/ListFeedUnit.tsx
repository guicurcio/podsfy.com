// import TooltipContainer from "components/common/TooltipContainer/TooltipContainer";
// import ContentInteraction from "components/home/ContentInteraction/ContentInteraction";
import HoverCardWrapperPodcast from "components/home/HoverCardWrapperPodcast/HoverCardWrapperPodcast";
import HoverCardWrapper from "components/home/client/HoverCardWrapper/HoverCardWrapper";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ListFeedUnit component.
 */
export interface ListFeedUnitProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  item?: any;
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
 * ListFeedUnit Component
 */
export default function ListFeedUnit({
  className = "",
  item,
}: ListFeedUnitProps): JSX.Element {
  return (
    <div
      key={item.id}
      className={mergeClasses(
        "grid w-full grid-flow-row gap-3 border-0 px-[18px] py-[18px] hover:brightness-[105%]",
        className,
      )}
    >
      <div className="grid w-full grid-flow-row gap-4">
        <div className="grid w-full grid-flow-col items-center justify-between self-center align-middle">
          <div className="grid grid-flow-col items-center gap-3">
            <HoverCardWrapper
              slug={item.slug}
              customImage={`/bg.png`}
              imageClassName="object-cover w-[100px] h-[100px] rounded-[5px]"
              childrenProps={{
                HoverCardContent: {
                  className:
                    "w-full pl-3 py-3 pr-1 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-brightness-[50%] rounded-[5px] border border-white border-opacity-5  font-visuelt text-[14px] font-normal text-white/50 shadow-3xl",
                },
              }}
            >
              <HoverCardWrapperPodcast podcast={item} />
            </HoverCardWrapper>
            <div className="grid grid-flow-row gap-[1px]">
              <h2 className="w-full text-left font-moderat text-[21px] font-medium text-[#E7E9EA] ">
                {item.name}
              </h2>
              <p className="ml-[2px] font-visuelt text-[14px] font-normal  leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  ">
                {`${item.description.slice(0, 128)}`}
              </p>
            </div>
          </div>
          {/* <HoverCardWrapper></HoverCardWrapper> */}
        </div>
      </div>
      {/* <TooltipContainer className="w-[100px] gap-[32px] pl-[2px]">
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
      </TooltipContainer> */}
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

ListFeedUnit.displayName = "ListFeedUnit";
