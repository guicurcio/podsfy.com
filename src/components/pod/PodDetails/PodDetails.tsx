import { twMerge } from "tailwind-merge";

/**
 * PodDetails Props description
 */
export interface PodDetailsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * PodDetails Component
 */
export default function PodDetails({ className }: PodDetailsProps) {
  return (
    <div
      className={twMerge(
        "justify-start text-left gap-4 grid grid-flow-row",
        className
      )}
    >
      <div>
        <h1 className="text-[39px] text-[#fff] font-SpaceGrotesk tracking-[-0.1em] font-normal text-opacity-90 brightness-[180%] -ml-[3px]">
          The Huberman Lab Podcast
        </h1>
        <h2 className="text-[14px] text-[#fff] text-opacity-[70%] font-moderat -mt-2">
          By <span className="underline">Andrew Huberman</span>
        </h2>
      </div>
      <p className="font-visuelt font-normal text-dimmed2 text-opacity-80 text-[15px] ml-[2px] antialiased w-[650px] tracking-[0.5px]">
        Lenny Belardo, the youngest and first American Pope in the history of
        the Church, must establish his new papacy and navigate the power
        struggles of the closed, secretive Vatican.
      </p>
    </div>
  );
}
