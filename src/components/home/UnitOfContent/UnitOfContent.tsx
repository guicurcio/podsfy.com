"use client"

import { HoverCardArrow, HoverCardPortal } from "@radix-ui/react-hover-card"
import {
  useAddPodcastToFavoritesMutation,
  useGetProfileBioQuery,
} from "graphql/schemas/generated/apollo/apollo"
import { ExternalLink, Heart, ListPlus } from "lucide-react"
import Image from "next/image"
import Button from "ui/components/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "ui/components/Hover"
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "ui/components/Tooltip"

import mergeClasses from "utils/mergeClasses"

export const iconClasses =
  "h-[16px] w-[16px] self-center align-middle text-white/60"

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
  const [addPodcastToFavoritesMutation, status] =
    useAddPodcastToFavoritesMutation()
  const { data, loading, error } = useGetProfileBioQuery()

  const podId = "0561e16c-09d5-4738-9173-1efe1541ac50"

  if (loading) {
    return <div>Loading</div>
  }

  console.log(data)

  return (
    <div
      key={title}
      className={mergeClasses(
        "grid  w-full grid-flow-row gap-3 border-0 py-[18px] px-[18px] hover:brightness-[105%]",
        className
      )}
    >
      <div className="grid w-full grid-flow-row gap-4">
        <div className="grid w-full grid-flow-col items-center justify-between self-center align-middle ">
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
        <div className=" grid grid-flow-col items-start justify-start gap-[4px] px-[1px] px-4">
          {/* <div
                  className={mergeClasses(
                    "col-span-3 grid w-full grid-flow-col place-items-end items-end justify-end justify-items-end gap-[10px]"
                  )}
                > */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="grid h-[28px] grid-flow-col  self-center  align-middle text-[13px]"
                  variant="subtle"
                  size="none"
                  onClick={async () => {
                    if (!data?.profiles[0].id) {
                      alert("no profile id")
                    }
                    const res = await addPodcastToFavoritesMutation({
                      variables: {
                        profileID: data?.profiles[0]?.id,
                        podcastID: podId,
                      },
                    })
                    console.log(res)
                  }}
                >
                  <Heart
                    className={mergeClasses(
                      iconClasses,
                      "h-4 w-4 text-white/40 hover:text-white/70",
                      data?.profiles[0]?.favoritePodcasts[0]?.podcast_id ===
                        podId && "fill-white/50 brightness-[100%]"
                    )}
                  ></Heart>
                </Button>
              </TooltipTrigger>
              <span className="self-center align-middle font-moderat text-[12px] font-normal text-[#71767B]">
                1124
              </span>
              <TooltipPortal>
                <TooltipContent
                  className="overflow-x-hidden rounded-[3px] border-0 bg-[#1f1f23] font-visuelt text-[13px] font-normal text-white/50 shadow-3xl"
                  side="bottom"
                  align="center"
                >
                  <p>Like</p>
                  <TooltipArrow></TooltipArrow>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-8 self-center rounded-md px-2 align-middle text-[13px]"
                  variant="subtle"
                  size="none"
                >
                  <ListPlus
                    className={mergeClasses(
                      iconClasses,
                      "h-4 w-4 text-white/40 hover:text-white/70"
                    )}
                  ></ListPlus>
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent
                  className="overflow-x-hidden rounded-[3px] border-0 bg-[#1f1f23] font-visuelt text-[13px] font-normal text-white/50 shadow-3xl"
                  side="bottom"
                  align="center"
                >
                  <p>Follow</p>
                  <TooltipArrow></TooltipArrow>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>

          {/* <Button
                    className="m-0 h-[32px] w-full gap-2  self-center rounded-[1px] bg-fondy px-2 shadow-2xl"
                    variant="none"
                    size="none"
                  >
                    <Archive className="h-[16px] w-[16px] self-center align-middle text-white/60"></Archive>
                    <span className="self-center  align-middle font-moderat text-[13px] text-white/60">
                      Get Bits
                    </span>
                  </Button> */}
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
