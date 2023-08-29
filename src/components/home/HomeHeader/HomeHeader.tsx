import Search from "components/common/Search";
import ProfileTools from "components/home/ProfileTools";
import staticPodcastData from "data/staticPodcastData";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";
/**
 * Props for the HomeHeader component.
 */
export interface HomeHeaderProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * HomeHeader Component
 */
export default function HomeHeader({
  className,
}: HomeHeaderProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "sticky top-0 z-50  border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100",
        className,
      )}
    >
      <div
        className={mergeClasses(
          "mx-auto grid max-w-[1250px] grid-flow-col",
          "py-[12px]",
        )}
      >
        <Link
          href="/"
          className={mergeClasses(
            "w-[210px] cursor-pointer pl-[30px] text-left font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]",
          )}
        >
          podsfy
        </Link>
        <div className="mx-auto max-w-[750px] pt-1">
          <Search
            podcasts={staticPodcastData()}
            className="w-[650px]"
            popoverClassName="w-[650px]"
          ></Search>
        </div>
        <ProfileTools className="w-[260px]"></ProfileTools>
      </div>
    </div>
  );
}

HomeHeader.displayName = "HomeHeader";
