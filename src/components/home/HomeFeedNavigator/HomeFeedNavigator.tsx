"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import TooltipContainer from "components/common/TooltipContainer";
import TooltipIconButton from "components/home/TooltipIconButton";
import TooltipWrapper from "components/home/TooltipWrapper";
import { Cog, RefreshCcw } from "lucide-react";
import { TabsList, TabsTrigger } from "ui/components/Tabs";
import mergeClasses from "utils/mergeClasses";


/**
 * Props for the HomeFeedNavigator component.
 */
export interface HomeFeedNavigatorProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * HomeFeedNavigator Component
 */
export default function HomeFeedNavigator({
  className,
}: HomeFeedNavigatorProps): JSX.Element {
  return (
    <TabsList
    className={mergeClasses(
      "grid grid-flow-col justify-between",
      "border-b border-sharper border-opacity-5",
      className
    )}
  >
    <TooltipContainer>
      <TooltipProvider>
        <TabsTrigger
          value="for-you"
          className="outline-none ring-0 focus:ring-0"
        >
          <TooltipWrapper tooltipContent="Our Suggestions">
            <p>For You</p>
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
    </TooltipContainer>
    <TooltipContainer className="mr-[20px] grid h-full w-full grid-flow-col gap-[5px]  self-center  align-middle">
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
  );
}

HomeFeedNavigator.displayName =
 'HomeFeedNavigator';
