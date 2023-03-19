"use client";

import { Tabs } from "ui/components/Tabs";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Scroller component.
 */
export interface ScrollerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  defaultFeed?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * Scroller Component
 */
export default function Scroller({
  className,
  defaultFeed = "for-you",
  children,
}: ScrollerProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "bg-[#0D0E12]",
        "border-x border-sharper border-opacity-5",
        "grid grid-flow-row gap-[25px]  font-visuelt shadow-3xl backdrop-blur-[10px]",
        className,
      )}
    >
      <Tabs defaultValue={defaultFeed} className="z-50 w-full border-0">
        {children}
      </Tabs>
    </div>
  );
}

Scroller.displayName = "Scroller";
