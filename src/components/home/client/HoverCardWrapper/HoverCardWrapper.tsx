"use client";

import { moderat, visuelt } from "app/layout";
import Image from "next/image";
import Link from "next/link";
import type { TailwindClassname } from "types/tailwind";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "ui/components/Hover";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * Props for the HoverCardWrapper component.
 */
export interface HoverCardWrapperProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onBookmark?: () => void;
  children?: JSX.Element | JSX.Element[];
  hoverCardContentClassName?: TailwindClassname;
  hoverCardTriggerButtonClassName?: TailwindClassname;
  hoverCardTriggerButtonImageSRC?: string;
  slug?: string;
}

/**
 * HoverCardWrapper Component
 */
export default function HoverCardWrapper({
  children,
  hoverCardContentClassName,

  slug,
}: HoverCardWrapperProps): JSX.Element {
  return (
    <HoverCard key="spotify">
      <HoverCardTrigger
        className="border-opacity rounded-[3px] border-[2px] border-[#88888815] backdrop-blur-[50px] backdrop-filter"
        asChild
      >
        <Link href={`/podcast/${slug}`}>
          <Image
            src={`/pods/${slug}.png`}
            className="h-[64px] w-[64px] rounded-[3px]"
            alt="Podcast cover"
            width={200}
            height={200}
            quality={100}
          ></Image>
        </Link>
        {/* <Button
          variant="subtle"
          className={mergeClasses(
            "h-[42px] w-[42px] self-center rounded-[7px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl",
            hoverCardTriggerButtonClassName,
          )}
        >
          <img
            src={hoverCardTriggerButtonImageSRC}
            className="h-[42px] w-[42px] scale-[60%] object-scale-down "
          ></img>
        </Button> */}
      </HoverCardTrigger>
      <HoverCardPortal
        className={mergeClasses(visuelt.variable, moderat.variable)}
      >
        <HoverCardContent
          className={mergeClasses(
            "w-[250px]",
            visuelt.variable,
            moderat.variable,
            hoverCardContentClassName,
          )}
        >
          {children}
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}

HoverCardWrapper.displayName = "HoverCardWrapper";
