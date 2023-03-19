import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ForYouFeed component.
 */
export interface ForYouFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ForYouFeed Component
 */
export default function ForYouFeed({ className, children }: ForYouFeedProps) {
  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12]",
        "scrollbar-thumb-[#0D0E12]",
        className,
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {children}
      </div>
    </div>
  );
}

ForYouFeed.displayName = "ForYouFeed";
