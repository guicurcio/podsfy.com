"use client"

import { TooltipProvider } from "@radix-ui/react-tooltip"
import TooltipContainer from "components/common/TooltipContainer"
import TooltipIconButton from "components/home/TooltipIconButton"
import { Cog, RefreshCcw } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "ui/components/Tabs"
import mergeClasses from "utils/mergeClasses"
import FollowingFeed from "../feed/FollowingFeed"
import ForYouFeed from "../feed/ForYouFeed"
import LatestFeed from "../feed/LatestFeed"
import TooltipWrapper from "../TooltipWrapper"

/**
 * Props for the Scroller component.
 */
export interface ScrollerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

const defaultFeedValue = "for-you"

/**
 * Scroller Component
 */
export default function Scroller({ className }: ScrollerProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "bg-[#0D0E12]",
        "border-x border-sharper border-opacity-5",
        // border-b border-gray-700 border-opacity-25
        "grid grid-flow-row gap-[25px]  font-visuelt shadow-3xl backdrop-blur-[10px]",
        className
      )}
    >
      <Tabs defaultValue={defaultFeedValue} className="z-50 w-full border-0">
        <TabsList
          className={mergeClasses(
            "grid grid-flow-col justify-between",
            "border-b border-sharper border-opacity-5"
          )}
        >
          <div>
            <TooltipProvider>
              <TabsTrigger
                value="for-you"
                className="outline-none ring-0 focus:ring-0"
              >
                <TooltipWrapper tooltipContent="Our Suggestions">
                  <p> For You</p>
                </TooltipWrapper>
              </TabsTrigger>
              <TabsTrigger
                value="latest"
                className="outline-none ring-0 focus:ring-0"
              >
                <TooltipWrapper tooltipContent="Latest Podcasts">
                  <p>Latest</p>
                </TooltipWrapper>
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="outline-none ring-0 focus:ring-0"
              >
                <TooltipWrapper tooltipContent="Podcasts you follow">
                  <p> Following</p>
                </TooltipWrapper>
              </TabsTrigger>
            </TooltipProvider>
          </div>
          <TooltipContainer className="mr-[10px] grid h-full w-full grid-flow-col gap-[5px]  self-center  align-middle">
            <TooltipIconButton
              className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
              Icon={RefreshCcw}
            ></TooltipIconButton>
            <TooltipIconButton
              className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
              Icon={Cog}
            ></TooltipIconButton>
          </TooltipContainer>
        </TabsList>
        <ForYouFeed></ForYouFeed>
        <LatestFeed></LatestFeed>
        <FollowingFeed></FollowingFeed>
      </Tabs>
    </div>
  )
}

Scroller.displayName = "Scroller"
