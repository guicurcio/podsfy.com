'use client';

import Button from 'ui/components/Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/components/Tooltip';

/**
 * PodStreaming
 */
export default function PodStreaming() {
  return (
    <div className="grid grid-flow-row items-start justify-start gap-4 rounded-sm border border-[#252525] border-opacity-[20%] bg-[#0a0a0b] py-2 px-4">
      <div className="grid grid-flow-col items-center justify-start gap-2 pt-2">
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
      <div className="relative grid grid-flow-col items-start justify-start gap-x-2 pb-2">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >
              <div className="relative"> */}
        <Button variant="subtle" className="w-10 p-0">
          <img
            src="/pods/tunein.webp"
            className="rounded-[4px] border-[#88888820] shadow-3xl"
          ></img>
        </Button>
        {/* </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
        <img
          src="/pods/stitcher.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/audible.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/spotify.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/youtube.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/soundcloud.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/google.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
      </div>
    </div>
  );
}
