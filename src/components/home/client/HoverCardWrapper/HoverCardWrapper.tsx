"use client";

import { ExternalLink } from "lucide-react";
import Button from "ui/components/Button";
import { HoverCard, HoverCardPortal, HoverCardTrigger } from "ui/components/Hover";

/**
 * Props for the HoverCardWrapper component.
 */
export interface HoverCardWrapperProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  HoverCardContent?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * HoverCardWrapper Component
 */
export default function HoverCardWrapper({
  HoverCardContent = "",
  children,
}: HoverCardWrapperProps): JSX.Element {
  return (
    <HoverCard key="spotify">
      <HoverCardTrigger asChild>
        <Button
          variant="subtle"
          className="h-[42px] w-[42px] self-center rounded-[7px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl"
        >
          <img
            src={`/pods/spotify.webp`}
            className="h-[42px] w-[42px] scale-[60%] object-scale-down "
          ></img>
        </Button>
      </HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent className="w-[350px]">
          <div className="grid grid-flow-row gap-2">
            <div className="grid grid-flow-row gap-[1px]">
              <h2 className="w-full text-left font-moderat text-[14px] font-medium text-fondy">
                Joe Rogan Experience #1278 - Kevin Hart
              </h2>
              <h2 className="w-full text-left font-moderat text-[12px] font-normal text-black">
                Joe Rogan Experience
              </h2>
            </div>
            <div className="grid grid-flow-col justify-start gap-2">
              <span className="cursor-pointer text-[14px] text-[#1D9BF0]">
                https://open.spotify.com/episode/
              </span>
              <ExternalLink className="h-3 w-3  cursor-pointer text-[14px] text-[#1D9BF0]"></ExternalLink>
            </div>
          </div>
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}

HoverCardWrapper.displayName = "HoverCardWrapper";
