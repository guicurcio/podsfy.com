import { useGetProfileBioQuery } from "graphql/schemas/generated/apollo/apollo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "ui/components/Tabs"
import mergeClasses from "utils/mergeClasses"
import UnitOfContent from "../UnitOfContent"

/**
 * Props for the Scroller component.
 */
export interface ScrollerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * Scroller Component
 */
export default function Scroller({ className }: ScrollerProps): JSX.Element {
  const { data, loading, error } = useGetProfileBioQuery()
  console.log(data, loading, error)
  return (
    <div
      className={mergeClasses(
        " w-full ",
        "bg-[#0D0E12]",
        "border-x border-sharper border-opacity-5",
        // border-b border-gray-700 border-opacity-25
        "grid grid-flow-row gap-[25px]  font-visuelt shadow-3xl backdrop-blur-[10px]",
        className
      )}
    >
      <Tabs defaultValue="for-you" className="z-50 w-full border-0">
        <TabsList
          className={mergeClasses(
            "grid grid-flow-col justify-start",
            "border-b border-sharper border-opacity-5"
          )}
        >
          <TabsTrigger value="for-you" className="">
            For You
          </TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent
          value="for-you"
          className=" h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]"
        >
          <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
            <UnitOfContent
              key="asd"
              defaultCoverImage="/joe-rogan-experience.jpeg"
              title="Joe Rogan Experience #1278 - Kevin Hart"
              description="Joe Rogan Experience"
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
            <UnitOfContent></UnitOfContent>
            <UnitOfContent></UnitOfContent>
            <UnitOfContent></UnitOfContent>
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
        <TabsContent
          value="following"
          className=" h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]"
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
      </Tabs>
    </div>
  )
}

Scroller.displayName = "Scroller"
