import mergeClasses from "utils/mergeClasses";

/**
 * Props for the FollowingFeedJSON component.
 */
export interface FollowingFeedJSONProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children?: any;
}

/**
 * FollowingFeedJSON Component
 */
export default function FollowingFeedJSON({
  className,
  children,
}: FollowingFeedJSONProps) {
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

FollowingFeedJSON.displayName = "FollowingFeedJSON";
