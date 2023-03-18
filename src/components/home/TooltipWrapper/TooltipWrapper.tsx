"use client"

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger
} from "ui/components/Tooltip"

/**
 * Props for the TooltipWrapper component.
 */
export interface TooltipWrapperProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
  onLike?: () => void
  tooltipContent?: string
  children: React.ReactNode | React.ReactNode[]
}

/**
 * TooltipWrapper Component
 */
export default function TooltipWrapper({
  tooltipContent = "",
  children,
}: TooltipWrapperProps): JSX.Element {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
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
  )
}

TooltipWrapper.displayName = "TooltipWrapper"
