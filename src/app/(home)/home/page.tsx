"use client"

import { NhostProvider } from "@nhost/nextjs"
import { NhostApolloProvider } from "@nhost/react-apollo"
import Search from "components/common/Search"
import User from "components/common/User"
import HomeSidebar from "components/home/HomeSidebar"
import Scroller from "components/home/Scroller/Scroller"
import Trending from "components/home/Trending"
import staticPodcastData from "data/staticPodcastData"
import { nhost } from "lib/setupBackendConfig"
import Link from "next/link"
import mergeClasses from "utils/mergeClasses"

export default function HomePage() {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider
        fetchPolicy="cache-first"
        nhost={nhost}
        connectToDevTools={process.env.NEXT_PUBLIC_ENV === "dev"}
      >
        <div className="h-screen max-h-screen w-full overflow-hidden">
          <div
            className={mergeClasses(
              "sticky top-0 z-50 w-screen min-w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100"
            )}
          >
            <div className="mx-auto max-w-[1200px]">
              <div className="mx-auto grid w-[1150px] min-w-[1150px] max-w-[1150px] grid-flow-col grid-cols-12 items-center justify-items-center self-center py-[15px]">
                <Link
                  href="/"
                  className={mergeClasses(
                    "col-span-2 cursor-pointer font-SpaceGrotesk text-[26px] font-bold tracking-[-0.08em] text-[#CDCDCD]"
                  )}
                >
                  podsfy
                </Link>
                <Search
                  podcasts={staticPodcastData()}
                  className="col-span-8 w-full self-center align-middle"
                ></Search>
                <User className="col-span-2 hidden justify-end  md:block"></User>
              </div>
              {/* <HomeNavigator></HomeNavigator> */}
            </div>
          </div>
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto grid h-screen max-h-screen min-h-screen w-[1150px] min-w-[1150px] max-w-[1150px] grid-flow-col grid-cols-12">
              <HomeSidebar className="col-span-2"></HomeSidebar>
              <Scroller className="col-span-8"></Scroller>
              <Trending className="col-span-2 "></Trending>
            </div>
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  )
}
