"use client";

import type { LucideIcon } from "lucide-react";
import { BellPlus, Heart, MessageCircle } from "lucide-react";
import { iconClasses } from "static/customStyles";
import Button from "ui/components/Button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from "ui/components/Tooltip";
import useToggle from "ui/hooks/useToggle";
import { useLongPress } from "use-long-press";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ContentInteraction component.
 */
export interface ContentInteractionProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  podcastID?: string;
  likeCount?: number;
  Icon?: LucideIcon | React.FC;
  tooltipContent?: string;
  likeCountClassName?: string;
  iconSpecification?: "LIKE" | "NOTIFY" | "COMMENT" | "SHARE";
}

/**
 * ContentInteraction Component
 */
export default function ContentInteraction({
  className,
  onLike,
  likeCount,
  Icon,
  tooltipContent = "Hold to like",
  likeCountClassName,
  iconSpecification,
}: ContentInteractionProps) {
  // const [addPodcastToFavoritesMutation, status] =
  //   useAddPodcastToFavoritesMutation()
  // const getProfileBio = useGetProfileBioLazyQuery()

  const [isToggled, setIsToggled] = useToggle(false);

  const bind = useLongPress(() => {
    setIsToggled();
  });

  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={mergeClasses(
              "grid h-[28px] grid-flow-col self-center align-middle text-[13px]",
              className,
            )}
            variant="subtle"
            size="none"
            {...bind}
            onClick={onLike}
          >
            {Icon && (
              <Icon
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></Icon>
            )}
            {iconSpecification === "LIKE" && (
              <Heart
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></Heart>
            )}
            {iconSpecification === "NOTIFY" && (
              <BellPlus
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></BellPlus>
            )}
            {iconSpecification === "COMMENT" && (
              <MessageCircle
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></MessageCircle>
            )}
          </Button>
        </TooltipTrigger>
        <div className="group relative">
          {likeCount && (
            <span
              className={mergeClasses(
                "absolute bottom-[-1px] right-[-16px] self-center font-moderat text-[11px] font-normal text-white/30 hover:text-white/50",
                "text-white/30 transition-colors duration-200 ease-in-out hover:text-white/50",
                likeCountClassName,
              )}
            >
              {likeCount}
            </span>
          )}
        </div>
        <TooltipPortal>
          <TooltipContent
            className="overflow-x-hidden rounded-[3px] border-0 bg-[#1f1f23] font-visuelt text-[13px] font-normal text-white/50 shadow-3xl"
            side="bottom"
            align="center"
          >
            <p>{tooltipContent}</p>
            <TooltipArrow></TooltipArrow>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  );
}

ContentInteraction.displayName = "ContentInteraction";
