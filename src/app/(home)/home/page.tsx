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
import { Inbox } from "lucide-react"
import Link from "next/link"
import Button from "ui/components/Button"
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
              "sticky top-0 z-50 w-screen min-w-full border-b border-gray-700 border-opacity-0 bg-[#0D0E12] bg-opacity-100"
            )}
          >
            <div className="mx-auto max-w-[1200px]">
              <div
                className={mergeClasses(
                  "mx-auto grid w-[1100px] min-w-[1100px] max-w-[1100px] grid-flow-col grid-cols-12",
                  // "border-b border-gray-700 border-opacity-25",
                  " self-center",
                  "self-center px-[10px] align-middle"
                )}
              >
                <Link
                  href="/"
                  className={mergeClasses(
                    "col-span-2 cursor-pointer text-left pl-[20px] pt-[8px] font-SpaceGrotesk text-[32px] font-bold tracking-[-0.08em] text-[#CDCDCD]"
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

                <div
                  className={mergeClasses(
                    "col-span-3 grid w-full grid-flow-col place-items-end items-end justify-end justify-items-end"
                  )}
                >
                  <Button className="h-[16px] w-[16px]" variant="subtle">
                    <Inbox className="h-[16px] w-[16px] self-center align-middle"></Inbox>
                  </Button>
                  <User className=""></User>
                </div>
              </div>
              {/* <HomeNavigator></HomeNavigator> */}
            </div>
          </div>
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto grid h-full  max-w-[1100px] grid-flow-col grid-cols-12">
              <HomeSidebar className="col-span-2"></HomeSidebar>
              <Scroller className="col-span-7"></Scroller>
              <Trending className="col-span-3 "></Trending>
            </div>
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  )
}
