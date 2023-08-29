"use client";

import Image from "next/image";
import Link from "next/link";
import type { Children, CustomComponent, Slug } from "types/project";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "ui/components/Hover";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * HoverCardWrapperProps
 */
export type HoverCardWrapperProps = CustomComponent &
  Children &
  Slug & {
    customImage?: any;
    imageClassName?: string;
  };

/**
 * HoverCardWrapper Component
 */
export default function HoverCardWrapper({
  children,
  slug,
  customImage,
  childrenProps,
  imageClassName,
}: HoverCardWrapperProps): JSX.Element {
  return (
    <HoverCard key="spotify">
      <HoverCardTrigger
        className={mergeClasses(
          "border-opacity border-[2px] border-[#88888815] backdrop-blur-[50px] backdrop-filter",
          childrenProps?.HoverCardTrigger?.className,
        )}
        asChild
      >
        <Link href={`/podcast/${slug}`}>
          <Image
            src={customImage || `/pods/${slug}.png`}
            className={mergeClasses(childrenProps.NextImage?.className)}
            alt="Podcast cover"
            width={childrenProps.NextImage?.width || 200}
            height={childrenProps.NextImage?.height || 200}
            quality={100}
          ></Image>
        </Link>
      </HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent
          className={mergeClasses(
            "w-[250px]",
            "--font-moderat",
            "--font-visuelt",
            childrenProps?.HoverCardContent?.className,
          )}
        >
          {children}
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}

HoverCardWrapper.displayName = "HoverCardWrapper";
