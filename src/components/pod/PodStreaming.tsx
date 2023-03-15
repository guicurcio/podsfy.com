"use client"

import { HoverCardPortal } from "@radix-ui/react-hover-card"
import Button from "ui/components/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "ui/components/Hover"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/components/Tooltip';

/**
 * PodStreaming Props
 */
export interface PodStreamingProps {
  /**
   * Class names passed to the root element.
   */
  className?: string
  /**
   *
   */
  streamingSites?: {
    title: string
  }[]
}

/**
 * PodStreaming
 */
export default function PodStreaming({ streamingSites }) {
  return (
    <div className="grid w-full grid-flow-row rounded-[4px] border-[#252525] border-opacity-[20%] bg-[#0a0a0b] ">
      <div className="grid w-full grid-flow-col items-center justify-start gap-2  py-4  px-4  backdrop-brightness-[50%]">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] border-[#252525] border-opacity-[30%] brightness-200"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_2_693)">
            <rect width={16} height={16} rx={9} fill="#0a0a0b" />
          </g>
          <defs>
            <clipPath id="clip0_2_693">
              <rect width={16} height={16} rx={9} fill="" />
            </clipPath>
          </defs>
        </svg>
        <p className="self-center text-left align-middle font-moderat text-[13.5px] font-medium tracking-[-0.03em] text-[#a5a5a5]/80 antialiased">
          Streaming At
        </p>
      </div>

      <div className=" grid grid-flow-col items-start  justify-start gap-x-2 border-t border-fondy/50 px-4 px-3 py-4 backdrop-brightness-[50%]">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >
              <div className="relative"> */}

        {streamingSites?.length >= 1 &&
          streamingSites?.map((site) => (
            <HoverCard key={site?.title}>
              <HoverCardTrigger asChild>
                <Button variant="subtle" className="w-10 p-0">
                  <img
                    src={`/pods/${site.title}.webp`}
                    className="pod-streaming border-2 border-[#88888820] shadow-3xl"
                  ></img>
                </Button>
              </HoverCardTrigger>
              <HoverCardPortal>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-slate-500 dark:text-slate-400 text-xs">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCardPortal>
            </HoverCard>
          ))}
      </div>
    </div>
  )
}
