import Button from "ui/components/Button"
import mergeClasses from "utils/mergeClasses"

/**
 * Props for the FeedUpdater component.
 */
export interface FeedUpdaterProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
  feedUpdaterText?: string
}

/**
 * FeedUpdater Component
 */
export default function FeedUpdater({
  className,
  feedUpdaterText = "Show new updates",
}: FeedUpdaterProps): JSX.Element {
  return (
    <Button
      variant="subtle"
      size="sm"
      className={mergeClasses(
        "hover:bg-brightness-[225%] h-full w-full self-center py-[20px] align-middle backdrop-blur-[10px]",
        "backdrop-contrast-150 transition-colors duration-700 ",
        "hover:bg-white/10 hover:bg-opacity-5",
        className
      )}
    >
      {feedUpdaterText}
    </Button>
  )
}

FeedUpdater.displayName = "FeedUpdater"
