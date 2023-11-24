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
        "sticky top-0 z-50  border-b border-gray-700 border-opacity-25 bg-[#0e0e0e] bg-opacity-100 ",
        className,
      )}
    >
      <div className="backdrop-brightness-[110%]">
        <div
          className={mergeClasses(
            "mx-auto grid max-w-[1280px] grid-flow-col grid-cols-12",
            "py-[10px]",
          )}
        >
          <Link
            href="/"
            className={mergeClasses(
              "col-span-2 w-[50px] cursor-pointer pl-[15px] text-left font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]",
            )}
          >
            podsfy
          </Link>
          <div className="col-span-7 mx-auto pt-1">
            <Search
              podcasts={staticPodcastData()}
              className="w-[600px]"
              popoverClassName="w-[600px]"
            ></Search>
          </div>
          <ProfileTools className="col-span-3"></ProfileTools>
        </div>
      </div>
    </div>
  );
}

HomeHeader.displayName = "HomeHeader";
