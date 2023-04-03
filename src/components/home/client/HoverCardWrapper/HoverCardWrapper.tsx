"use client";

import { moderat, visuelt } from "app/layout";
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
export type HoverCardWrapperProps = CustomComponent & Children & Slug;

/**
 * HoverCardWrapper Component
 */
export default function HoverCardWrapper({
  children,
  slug,
  childrenProps,
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
            className={mergeClasses(
              "h-[64px] w-[64px] rounded-[3px]",
              childrenProps.NextImage?.className,
            )}
            alt="Podcast cover"
            width={200}
            height={200}
            quality={100}
          ></Image>
        </Link>
      </HoverCardTrigger>
      <HoverCardPortal
        className={mergeClasses(visuelt.variable, moderat.variable)}
      >
        <HoverCardContent
          className={mergeClasses(
            "w-[250px]",
            visuelt.variable,
            moderat.variable,
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
