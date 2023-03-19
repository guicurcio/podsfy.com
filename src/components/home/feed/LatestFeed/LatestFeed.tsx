import UnitOfContent from "components/home/UnitOfContent";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the LatestFeed component.
 */
export interface LatestFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * LatestFeed Component
 */
export default function LatestFeed({
  className,
}: LatestFeedProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        className,
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {/* @ts-expect-error Async Server Component */}
        <UnitOfContent
          key="asd"
          defaultCoverImage="/joe-rogan-experience.jpeg"
          title="Joe Rogan Experience #1278 - Kevin Hart"
          description="Joe Rogan Experience"
        ></UnitOfContent>
      </div>
    </div>
  );
}

LatestFeed.displayName = "LatestFeed";
