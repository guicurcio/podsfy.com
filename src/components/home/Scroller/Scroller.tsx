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
        "col-span-7  mx-auto  overflow-scroll",
        "bg-[#0D0E12] py-[25px]",
        "border-x border-sharper border-opacity-10",
        "grid grid-flow-row gap-[25px]  font-visuelt shadow-3xl backdrop-blur-[10px]",
        "overflow-y-scroll scrollbar-none scrollbar-track-transparent scrollbar-thumb-transparent",
        className
      )}
    >
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
      <UnitOfContent></UnitOfContent>
    </div>
  )
}

Scroller.displayName = "Scroller"
