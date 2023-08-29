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
  children,
}: ScrollerProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "bg-[#0D0E12]",
        "border-x border-sharper border-opacity-5",
        "grid grid-flow-row gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
        className,
      )}
    >
      <div className="z-50">{children}</div>
    </div>
  );
}

Scroller.displayName = "Scroller";
