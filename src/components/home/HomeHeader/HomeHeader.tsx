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
        "sticky top-0 z-50 min-w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] place-content-start place-items-start items-start ">
        <div
          className={mergeClasses(
            "grid w-[1000px]  max-w-[1060px] grid-flow-col ",
            "self-center",
            "w-full self-center pl-[2px] pr-[13px] align-middle",
          )}
        >
          <Link
            href="/"
            className={mergeClasses(
              "cursor-pointer pl-[35px] pt-[8px] text-left font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]",
            )}
          >
            podsfy
          </Link>
          <div className="w-full py-3">
            <Search
              podcasts={staticPodcastData()}
              className="mx-auto w-[650px]"
              popoverClassName="w-[650px]"
            ></Search>
          </div>
          <ProfileTools></ProfileTools>
        </div>
      </div>
    </div>
  );
}

HomeHeader.displayName = "HomeHeader";
