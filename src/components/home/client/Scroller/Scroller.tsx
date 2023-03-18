"use client";

import HomeFeedNavigator from "components/home/HomeFeedNavigator/HomeFeedNavigator";
import FollowingFeed from "components/home/feed/FollowingFeed";
import ForYouFeed from "components/home/feed/ForYouFeed";
import LatestFeed from "components/home/feed/LatestFeed";
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
}

/**
 * Scroller Component
 */
export default function Scroller({
  className,
  defaultFeed = "for-you",
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
        <HomeFeedNavigator></HomeFeedNavigator>
        <ForYouFeed></ForYouFeed>
        <LatestFeed></LatestFeed>
        <FollowingFeed></FollowingFeed>
      </Tabs>
    </div>
  );
}

Scroller.displayName = "Scroller";
