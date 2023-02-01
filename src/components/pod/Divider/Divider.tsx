import { twMerge } from "tailwind-merge";

/**
 * Divider Props description
 */
export interface DividerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Divider Component
 */
export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={twMerge(
        "flex-grow-0 flex-shrink-0 w-full h-0.5 border-t-0 border-r-0 border-b border-l-0 border-[#e3e5e8]/10",
        className
      )}
    ></div>
  );
}
