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
        "sticky top-0 z-50 w-screen min-w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div
          className={mergeClasses(
            "mx-auto grid w-[1200px] min-w-[1200px] max-w-[1200px] grid-flow-col grid-cols-12",
            "self-center",
            "w-full self-center pl-[2px] pr-[13px] align-middle",
          )}
        >
          <Link
            href="/"
            className={mergeClasses(
              "col-span-2 cursor-pointer pl-[35px] pt-[8px] text-left font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]",
            )}
          >
            podsfy
          </Link>
          <div className="col-span-7  w-full py-3">
            <Search
              podcasts={staticPodcastData()}
              className=""
              popoverClassName="w-[715px]"
            ></Search>
          </div>
          <ProfileTools></ProfileTools>
        </div>
      </div>
    </div>
  );
}

HomeHeader.displayName = "HomeHeader";
