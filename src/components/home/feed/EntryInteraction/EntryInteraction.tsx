'use client'

import TooltipContainer from "components/common/TooltipContainer";
import ContentInteraction from "components/home/ContentInteraction/ContentInteraction";
import type { Podcasts } from "types/podcast";

/**
 * Props for the EntryInteraction component.
 */
export interface EntryInteractionProps {
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
 * EntryInteraction Component
 */
export default function EntryInteraction(): JSX.Element {
  return (
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
  );
}

EntryInteraction.displayName = "EntryInteraction";
