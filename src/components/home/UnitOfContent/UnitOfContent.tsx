"use client"

import { HoverCardPortal } from "@radix-ui/react-hover-card"
import Image from "next/image"
import Button from "ui/components/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "ui/components/Hover"

import mergeClasses from "utils/mergeClasses"

/**
 * Props for the UnitOfContent component.
 */
export interface UnitOfContentProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  whereToWatchOrListenLink?: string
  /**
   * Custom class names passed to the root element.
   */
  className?: string
  /**
   *
   */
  defaultCoverImage?: string
  content?: string
}

/**
 * UnitOfContent Component
 */
export default function UnitOfContent({
  className = "",
  description = "",
  title = "Joe Rogan Experience #1278 - Kevin Hart",
  defaultCoverImage = "/joe-rogan-experience.jpeg",
  content = `A lively and engaging conversation between two of the biggest names in
  comedy.\n\nIn the episode, Kevin Hart opens up about his rise to fame,
  discussing his early struggles as a comedian and the challenges he
  faced breaking into the entertainment industry.`,
}: UnitOfContentProps): JSX.Element {
  return (
    <div
      key={title}
      className={mergeClasses(
        "grid  w-full grid-flow-row gap-3 border-0 py-[18px] px-[18px] hover:brightness-[105%]",
        className
      )}
    >
      <div className="grid grid-flow-row items-start justify-start gap-4">
        <div className="grid grid-flow-col items-center gap-3">
          <Image
            src={defaultCoverImage || "/joe-rogan-experience.jpeg"}
            className="h-[64px] w-[64px] rounded-[5px] border border-[#88888820] shadow-3xl"
            alt="Podcast cover"
            width={64}
            height={64}
          ></Image>
          <div className="grid grid-flow-row gap-[1px]">
            <h2 className="w-full text-left font-moderat text-[15px] font-medium text-[#E7E9EA]">
              {title}
            </h2>
            <h2 className="w-full text-left font-moderat text-[15px] font-normal text-[#71767B]">
              {description}
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased">
          {content}
        </p>

        {/* {description.split("\\n").map((line) => (
          <p
            key={line}
            className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased"
          >
            {line}
          </p>
        ))} */}
      </div>
      <div className=" mt-[-5px] grid grid-flow-row items-start justify-start gap-[8px]">
        {/* <p className="self-center text-left align-middle font-moderat text-[13.5px] font-medium tracking-[-0.03em] text-[#a5a5a5]/80 antialiased">
          Streaming At
        </p> */}
        <div className=" grid grid-flow-col items-start justify-start px-[1px]">
          <HoverCard key="spotify">
            <HoverCardTrigger asChild>
              <Button
                variant="subtle"
                className="h-[42px] w-[42px] rounded-[7px] border-[2px] border-[#88888820]  p-0 shadow-3xl"
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
                  <span className="cursor-pointer text-[14px] text-[#1D9BF0]">
                    https://open.spotify.com/episode/
                  </span>
                </div>
              </HoverCardContent>
            </HoverCardPortal>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}

UnitOfContent.displayName = "UnitOfContent"

// to-use

/* <AvatarFallback className="border border-white border-opacity-5 bg-fondy  shadow-2xl">
                <span className="self-center align-middle font-moderat text-[10px] text-white/60">
                  US
                </span>
              </AvatarFallback> */
