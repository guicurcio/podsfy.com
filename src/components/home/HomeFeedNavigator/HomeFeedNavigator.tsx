'use client';

import TooltipContainer from "components/common/TooltipContainer";
// import TooltipIconButton from "components/home/TooltipIconButton";
import TooltipWrapper from "components/home/TooltipWrapper";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
// import { Cog, RefreshCcw } from "lucide-react";
// import { TabsList, TabsTrigger } from "ui/components/Tabs";
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

  const ssel = useSelectedLayoutSegment()

  console.log(ssel, "segment");

  return (
    <div
      className={mergeClasses(
        "grid grid-flow-col justify-between",
        "border-b border-sharper border-opacity-5",
        className,
      )}
    >
      <TooltipContainer>
        <TooltipWrapper tooltipContent="Our Suggestions">
          <Link href={"/for-you"} passHref>
            <button
              value="for-you"
              className={mergeClasses(
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em] ",
                "inline-flex min-w-[100px] items-center justify-center py-[12px]",
                "disabled:pointer-events-none disabled:opacity-50",
                "bg-[#0D0E12] ",
                ssel === 'home' && "border-b-2 border-white border-opacity-10",
                ssel === 'for-you' && "border-b-2 border-white border-opacity-10",
                className,
              )}
            >
              For You
            </button>
          </Link>
        </TooltipWrapper>
        <TooltipWrapper tooltipContent="Our Suggestions">
          <Link href={"/following"} passHref>
            <button
              value="for-you"
              className={mergeClasses(
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em] ",
                "inline-flex min-w-[100px] items-center justify-center py-[12px]",
                "disabled:pointer-events-none disabled:opacity-50",
                "bg-[#0D0E12] ",
                ssel === 'following' && "border-b-2 border-white border-opacity-10",
                className,
              )}
            >
              Following
            </button>
          </Link>
        </TooltipWrapper>
        <TooltipWrapper tooltipContent="Our Suggestions">
          <Link href={"/latest"} passHref>
            <button
              value="latest"
              className={mergeClasses(
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em] ",
                "inline-flex min-w-[100px] items-center justify-center py-[12px]",
                "disabled:pointer-events-none disabled:opacity-50",
                "bg-[#0D0E12] ",
                ssel === 'latest' && "border-b-2 border-white border-opacity-10",
                className,
              )}
            >
              Latest
            </button>
          </Link>
        </TooltipWrapper>
      </TooltipContainer>
      {/* <TooltipContainer className="mr-[20px] grid h-full w-full grid-flow-col gap-[5px]  self-center  align-middle">
      <TooltipIconButton
        className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
        Icon={RefreshCcw}
      ></TooltipIconButton>
      <TooltipIconButton
        className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
        Icon={Cog}
      ></TooltipIconButton>
    </TooltipContainer> */}
    </div>
  );
}

HomeFeedNavigator.displayName = "HomeFeedNavigator";
