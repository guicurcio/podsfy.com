import TooltipContainer from "components/common/TooltipContainer";
// import TooltipIconButton from "components/home/TooltipIconButton";
import TooltipWrapper from "components/home/TooltipWrapper";
import Link from "next/link";
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
                "data-[state=active]:font-medium data-[state=active]:text-white/70",
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em]",
                "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] py-[12px] transition-all",
                "disabled:pointer-events-none disabled:opacity-50  data-[state=active]:shadow-sm",
                "bg-[#0D0E12] shadow-2xl  backdrop-brightness-[75%]",
                "duration-300",
                // "border border-white border-opacity-5",
                // data-[state=active]:bg-fondy
                className,
              )}
            >
              <p>For You</p>
            </button>
          </Link>
        </TooltipWrapper>
        <TooltipWrapper tooltipContent="Our Suggestions">
          <Link href={"/following"} passHref>
            <button
              value="for-you"
              className={mergeClasses(
                "data-[state=active]:font-medium data-[state=active]:text-white/70",
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em]",
                "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] py-[12px] transition-all",
                "disabled:pointer-events-none disabled:opacity-50  data-[state=active]:shadow-sm",
                "bg-[#0D0E12] shadow-2xl  backdrop-brightness-[75%]",
                "duration-300",
                // "border border-white border-opacity-5",
                // data-[state=active]:bg-fondy
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
                "data-[state=active]:font-medium data-[state=active]:text-white/70",
                "font-normal text-white/40",
                "font-visuelt text-[14px] tracking-[-0.01em]",
                "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] py-[12px] transition-all",
                "disabled:pointer-events-none disabled:opacity-50  data-[state=active]:shadow-sm",
                "bg-[#0D0E12] shadow-2xl  backdrop-brightness-[75%]",
                "duration-300",
                // "border border-white border-opacity-5",
                // data-[state=active]:bg-fondy
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
