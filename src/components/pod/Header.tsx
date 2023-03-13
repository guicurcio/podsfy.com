import Navigator from "components/common/Navigator"
import Search from "components/common/Search"
import SignInModal from "components/SignInModal"
import staticPodcastData from "data/staticPodcastData"
import Link from "next/link"
import { Suspense } from "react"
import { twMerge } from "tailwind-merge"
import mergeClasses from "utils/mergeClasses/mergeClasses"

/**
 * Header Props description
 */
export interface HeaderProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * Header Component
 */
export default function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        "relative z-50 h-full w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100",
        className
      )}
    >
      <div className="mx-auto w-full lg:max-w-[1100px] 2xl:max-w-[1200px]">
        <div className="mx-auto grid w-full grid-flow-row items-center pt-1   md:mx-0">
          <div className="mx-auto grid grid-flow-row place-content-between pb-1.5 md:mx-0 lg:mx-0 lg:grid-flow-col">
            <Link
              href="/"
              className={mergeClasses(
                "mx-auto cursor-pointer py-2 px-3 font-SpaceGrotesk text-[26px] font-bold tracking-[-0.08em] text-[#CDCDCD] md:mx-0"
              )}
            >
              podsfy
            </Link>
            <Search podcasts={staticPodcastData()} className=""></Search>
            <div className="hidden md:block">
              <Suspense>
                <SignInModal></SignInModal>
              </Suspense>
            </div>
          </div>
          <Suspense>
            <Navigator></Navigator>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

Header.displayName = "DashboardHeader"
