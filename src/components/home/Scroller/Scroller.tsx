import { useGetProfileBioQuery } from "graphql/schemas/generated/apollo/apollo"
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
        "col-span-6 mx-auto   w-full ",
        " overflow-scroll overflow-y-scroll bg-[#0D0E12]",
        "border-x border-sharper border-opacity-10",
        "grid grid-flow-row gap-[25px]  font-visuelt shadow-3xl backdrop-blur-[10px]",
        " scrollbar-thin scrollbar-track-fondy scrollbar-thumb-black",
        "h-screen",
        className
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50 border border-t  border-fondy/50 backdrop-brightness-[50%]">
        <UnitOfContent
          key="asd"
          defaultCoverImage="./bg/png"
          title="Episode 1"
          description="assad"
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
    </div>
  )
}

Scroller.displayName = "Scroller"
