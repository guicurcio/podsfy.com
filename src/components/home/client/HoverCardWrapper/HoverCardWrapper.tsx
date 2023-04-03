"use client";

import { moderat, visuelt } from "app/layout";
import Image from "next/image";
import type { ImageProps as NextImageProps } from "next/image";
import Link from "next/link";
import type { DivProps } from "types/react";
import type { TailwindClassname } from "types/tailwind";
import type { ButtonProps } from "ui/components/Button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "ui/components/Hover";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * Props for an <img> element that uses the Next.js Image component.
 */
export type ImageProps = Pick<NextImageProps, "width" | "height" | "className">;

/**
 * Props for the HoverCard component.
 */
export type HoverCardProps = {
  /**
   * Custom class names passed to the root element.
   */
  className?: TailwindClassname;
};

/**
 * Props for the nested elements of the HoverCardWrapper component.
 * The keys of this object must match the names of the corresponding child elements in the JSX.
 */
export type HoverCardWrapperChildrenElementProps = MatchElementProps<{
  /**
   * Props for a <button> element.
   */
  Button: ButtonProps;

  /**
   * Props for an <img> element that uses the Next.js Image component.
   */
  Image: ImageProps;

  /**
   * Props for a <div> element.
   */
  div: DivProps;

  /**
   * Props for a HoverCard component.
   */
  HoverCardContent: React.ComponentProps<typeof HoverCardContent>;
}>;

/**
 * A utility type that matches the props for each element in a given object.
 * The keys of the object correspond to the names of the child elements in the JSX.
 * The values of the object are the corresponding props for each element.
 */
export type MatchElementProps<T> = {
  [K in keyof T]?: T[K];
};

/**
 * Props for the HoverCardWrapper component.
 */
export interface HoverCardWrapperProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children?: JSX.Element | JSX.Element[];
  hoverCardContentClassName?: TailwindClassname;
  slug?: string;
  /**
   * Pass custom props to the nested elements of the component.
   */
  childrenProps?: HoverCardWrapperChildrenElementProps;
}

/**
 * HoverCardWrapper Component
 */
export default function HoverCardWrapper({
  children,
  slug,
  childrenProps = {
    Image: {
      className: "h-[64px] w-[64px] rounded-[3px]",
    },
  },
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
              childrenProps.Image?.className,
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
