'use client';

import type { LucideIcon } from "lucide-react";
import { Heart } from "lucide-react";
import { iconClasses } from "static/customStyles";
import Button from "ui/components/Button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from "ui/components/Tooltip";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the TooltipIconButton component.
 */
export interface TooltipIconButtonProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  Icon?: LucideIcon | React.FC;
  tooltipContent?: string;
  likeCount?: number;
  likeCountClassName?: string;
}

/**
 * TooltipIconButton Component
 */
export default function TooltipIconButton({
  className,
  onLike,
  Icon,
  tooltipContent = "Hold to like",
}: TooltipIconButtonProps): JSX.Element {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={mergeClasses(
            "grid h-[28px] grid-flow-col self-center align-middle text-[13px]",
            className,
          )}
          variant="subtle"
          size="none"
          onClick={onLike}
        >
          {Icon ? (
            <Icon
              className={mergeClasses(
                iconClasses,
                "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
              )}
            ></Icon>
          ) : (
            <Heart
              className={mergeClasses(
                iconClasses,
                "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
              )}
            ></Heart>
          )}
        </Button>
      </TooltipTrigger>
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
  );
}

TooltipIconButton.displayName = "TooltipIconButton";
