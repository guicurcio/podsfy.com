import Search from "components/common/Search"
import HomeSidebar from "components/home/HomeSidebar"
import ProfileTools from "components/home/ProfileTools"
import Scroller from "components/home/Scroller/Scroller"
import Trending from "components/home/Trending"
import staticPodcastData from "data/staticPodcastData"
import Link from "next/link"
import mergeClasses from "utils/mergeClasses"

export const iconClasses =
  "h-[16px] w-[16px] self-center align-middle text-white/60"

export default function HomePage() {
  return (
    <div className="h-screen max-h-screen w-full overflow-hidden">
      <div
        className={mergeClasses(
          "sticky top-0 z-50 w-screen min-w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100"
        )}
      >
        <div className="mx-auto max-w-[1200px]">
          <div
            className={mergeClasses(
              "mx-auto grid w-[1150px] min-w-[1150px] max-w-[1150px] grid-flow-col grid-cols-12",
              // "border-b border-gray-700 border-opacity-25",
              " self-center",
              "self-center px-[10px] align-middle"
            )}
          >
            <Link
              href="/"
              className={mergeClasses(
                "col-span-2 cursor-pointer pl-[35px] pt-[8px] text-left font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]"
              )}
            >
              podsfy
            </Link>
            <div className="col-span-7  py-3">
              {/* border-x border-sharper border-opacity-5 */}
              <Search
                podcasts={staticPodcastData()}
                className="col-span-7 w-full self-center  align-middle"
                popoverClassName="col-span-7"
              ></Search>
            </div>

            <ProfileTools></ProfileTools>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto grid h-full  max-w-[1150px] grid-flow-col grid-cols-12">
          <HomeSidebar className="col-span-2"></HomeSidebar>
          <Scroller className="col-span-7"></Scroller>
          <Trending className="col-span-3 "></Trending>
        </div>
      </div>
    </div>
  )
}
