import { twMerge } from "tailwind-merge";

/**
 * PodDetails Props description
 */
export interface PodDetailsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   */
  title: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
}

/**
 * PodDetails Component
 */
export default function PodDetails({
  className,
  title,
  description,
}: PodDetailsProps) {
  return (
    <div
      className={twMerge(
        "justify-start text-left gap-4 grid grid-flow-row",
        className
      )}
    >
      <div>
        <h1 className="text-[39px] text-[#fff] font-SpaceGrotesk tracking-[-0.1em] font-normal text-opacity-90 brightness-[180%] -ml-[3px]">
          {title}
        </h1>
        <h2 className="text-[14px] text-[#fff] text-opacity-[70%] font-moderat -mt-2">
          By <span className="underline">Andrew Huberman</span>
        </h2>
      </div>
      <p className="font-visuelt h-[80px] font-normal text-dimmed2 text-opacity-80 text-[15px] ml-[2px] antialiased w-[650px] tracking-[0.5px]">
        {description}
      </p>
    </div>
  );
}
