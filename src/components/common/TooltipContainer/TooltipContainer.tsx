"use client"

import { TooltipProvider } from "ui/components/Tooltip"
import mergeClasses from "utils/mergeClasses"

/**
 * Props for the TooltipContainer component.
 */
export interface TooltipContainerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
  /**
   * Children to be rendered inside the component.
   */
  children?: React.ReactNode
}

/**
 * Wraps the children in a TooltipProvider.
 */
export default function TooltipContainer({
  className,
  children,
}: TooltipContainerProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        className === "blank"
          ? ""
          : "grid h-full w-full grid-flow-col gap-[8px] self-center align-middle",
        className
      )}
    >
      <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
    </div>
  )
}

TooltipContainer.displayName = "TooltipContainer"
