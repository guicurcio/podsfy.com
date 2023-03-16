"use client"

import UnitOfContent from "components/home/UnitOfContent"
import { TabsContent } from "ui/components/Tabs"
import mergeClasses from "utils/mergeClasses"

/**
 * Props for the FollowingFeed component.
 */
export interface FollowingFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * FollowingFeed Component
 */
export default function FollowingFeed({
  className,
}: FollowingFeedProps): JSX.Element {
  return (
    <TabsContent
      value="following"
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        className
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        <UnitOfContent
          key="asd"
          defaultCoverImage="/huberman-lab.jpeg"
          title="Dr. Peter Attia: Fasting, Autophagy, and Bulletproof Coffee"
          description="The Huberman Lab Podcast"
          content={`A fascinating discussion between neuroscientist Dr. Andrew Huberman and physician Dr. Peter Attia.\n\nIn the episode, Huberman delves into the science of sleep, exploring the importance of circadian rhythms and the ways in which sleep affects the body and brain. He also discusses the benefits and potential risks of various sleep supplements and strategies for improving sleep quality.\n\nThe conversation then turns to the topic of recovery, as Attia and Huberman discuss the latest research on the most effective ways to recover from physical activity and injury. They touch on the benefits of fasting and other dietary interventions for promoting recovery and overall health.\n\nThroughout the episode, Huberman and Attia share their deep knowledge and insights on the subject matter, making for a thought-provoking and informative listen. The "Dr. Andrew Huberman: Neuroscience of Sleep, Supplements, and Recovery | Peter Attia Drive #13" episode is recommended for anyone interested in learning more about the science of sleep, recovery, and optimal health.`}
        ></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
      </div>
    </TabsContent>
  )
}

FollowingFeed.displayName = "FollowingFeed"
