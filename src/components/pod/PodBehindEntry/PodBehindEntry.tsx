"use client";

import mergeClasses from "utils/mergeClasses";

/**
 * PodBehindEntry Props description
 */
export interface PodBehindEntryProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * PodBehindEntry Component
 */
export default function PodBehindEntry({
  className,
  title = "",
  description = "",
}: PodBehindEntryProps) {
  return (
    <div
      className={mergeClasses(
        "grid grid-flow-row items-start justify-start gap-x-4 py-2",
        className,
      )}
    >
      <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
        {title}
      </p>
      <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
        {description}
      </p>
    </div>
  );
}
