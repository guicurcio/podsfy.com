import Navigator from "components/common/Navigator";
import Search from "components/common/Search";
import User from "components/common/User";
// import User from "components/common/User"
import staticPodcastData from "data/staticPodcastData";
import Link from "next/link";
import { Suspense } from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * Header Props description
 */
export interface HeaderProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  navItems?: any;
}

/**
 * Header Component
 */
export default function Header({ className, navItems }: HeaderProps) {
  return (
    <div>
      <div
        className={mergeClasses(
          "relative z-50 h-full w-full max-w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-[1300px] ">
          <div className="mx-auto grid w-full grid-flow-row items-center gap-1  md:mx-0">
            <div className="mx-auto grid grid-flow-row place-content-between items-center py-3 pb-1.5 md:mx-0 lg:mx-0 lg:grid-flow-col 2xl:max-w-[1250px]">
              <Link
                href="/"
                className={mergeClasses(
                  "mx-auto cursor-pointer pt-[-2px] pl-[50px] font-SpaceGrotesk text-[26px] font-bold tracking-[-0.08em] text-[#CDCDCD] md:mx-0",
                )}
              >
                podsfy
              </Link>
              <Search
                podcasts={staticPodcastData()}
                className="lg:w-[630px]"
              ></Search>
              <div className="hidden md:block">
                <Suspense
                  fallback={
                    <div>
                      <div></div>
                    </div>
                  }
                >
                  <div className="pr-[10px]">
                    <User></User>
                  </div>
                </Suspense>
              </div>
            </div>
            <Suspense>
              <Navigator navItems={navItems}></Navigator>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.displayName = "DashboardHeader";
