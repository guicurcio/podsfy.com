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
}

/**
 * UnitOfContent Component
 */
export default function UnitOfContent({
  className = "",
  description = "",
  title = "",
  defaultCoverImage = "huberman.png",
}: UnitOfContentProps): JSX.Element {
  return (
    <div
      key={title}
      className={mergeClasses(
        "grid  w-full grid-flow-row gap-3 border-0 py-[18px] px-[18px] hover:bg-fondy/20",
        className
      )}
    >
      <div className="grid grid-flow-row items-start justify-start gap-4">
        <div className="grid grid-flow-col items-center gap-3">
          <Image
            src={`/joe-rogan-experience.jpeg`}
            className="h-[64px] w-[64px] rounded-[5px] border border-[#88888820] shadow-3xl"
            alt="Podcast cover"
            width={64}
            height={64}
          ></Image>
          <div className="grid grid-flow-row gap-[1px]">
            <h2 className="w-full text-left font-moderat text-[15px] font-medium text-[#E7E9EA]">
              Joe Rogan Experience #1278 - Kevin Hart
            </h2>
            <h2 className="w-full text-left font-moderat text-[15px] font-normal text-[#71767B]">
              Joe Rogan Experience
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        <p className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased">
          {`A lively and engaging conversation between two of the biggest names in
          comedy.\n\nIn the episode, Kevin Hart opens up about his rise to fame,
          discussing his early struggles as a comedian and the challenges he
          faced breaking into the entertainment industry.\n\nThe conversation
          covers a wide range of topics, from Harts approach to comedy and his
          creative process, to his experiences working on blockbuster films like
          "Jumanji" and "Central Intelligence".\n\nHart also discusses his
          personal life, including his family and his recent car accident that
          left him with serious injuries.\n\nThroughout the episode, Hart's
          infectious energy and humor keep the conversation moving, making it an
          enjoyable listen for fans of both Joe Rogan and Kevin Hart.`}
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
      <div className=" grid grid-flow-col items-start justify-start">
        <HoverCard key="spotify">
          <HoverCardTrigger asChild>
            <Button variant="subtle" className="w-10 p-0">
              <img
                src={`/pods/spotify.webp`}
                className="h-[42px] w-[42px] rounded-[7px] border-2 border-[#88888820] shadow-3xl"
              ></img>
            </Button>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Spotify</h4>
                  <p className="text-sm">
                    Joe Rogan Experience #1278 - Kevin Hart
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      Watch now at https://open.spotify.com/episode/
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
      </div>
    </div>
  )
}

UnitOfContent.displayName = "UnitOfContent"
