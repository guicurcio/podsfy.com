import mergeClasses from "utils/mergeClasses"

/**
 * Props for the Trending component.
 */
export interface TrendingProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * Trending Component
 */
export default function Trending({ className }: TrendingProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "col-span-3 mx-auto w-full overflow-hidden",
        "bg-[#0D0E12] py-[15px]",
        "border-r border-sharper border-opacity-10",
        "grid grid-flow-col px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px] ",
        "h-screen max-h-screen min-h-screen overflow-hidden",
        className
      )}
    ></div>
  )
}

Trending.displayName = "Trending"
