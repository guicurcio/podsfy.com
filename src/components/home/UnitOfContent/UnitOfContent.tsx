"use client"

import Image from "next/image"

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
        "grid h-[100px] w-full grid-flow-row gap-2 border-0 px-3 hover:bg-fondy/20",
        className
      )}
    >
      <div className="grid grid-flow-row items-start justify-start gap-4">
        <div className="grid grid-flow-col items-center gap-3">
          <Image
            src={`/joe-rogan-experience.jpeg`}
            className="h-[32px] w-[32px] rounded-sm border border-[#88888820] shadow-3xl"
            alt="Podcast cover"
            width={32}
            height={32}
          ></Image>
          <h2 className="w-full text-left font-moderat text-[14px] text-white text-opacity-75">
            {title}
          </h2>
        </div>
      </div>
      <div className="grid grid-flow-row gap-[8px]">
        {description.split("\\n").map((line) => (
          <p
            key={line}
            className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

UnitOfContent.displayName = "UnitOfContent"
