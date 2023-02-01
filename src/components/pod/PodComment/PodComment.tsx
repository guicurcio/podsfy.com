import { twMerge } from "tailwind-merge";

/**
 * PodComment Props description
 */
export interface PodCommentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * PodComment Component
 */
export default function PodComment({ className }: PodCommentProps) {
  return (
    <div className={twMerge("grid grid-flow-col gap-2 pt-4", className)}>
      <div className="grid grid-flow-row justify-start items-start">
        <div className="w-10 h-10 relative rounded-[20px]">
          <div className="flex flex-col justify-start items-start w-10 h-10  left-0 top-0 overflow-hidden gap-2.5 p-2.5 rounded-[20px] bg-image-here" />
          <div className="w-10 h-10  left-0 top-0 overflow-hidden rounded-[20px] border border-white/25" />
        </div>
      </div>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-row gap-1">
          <h2 className="text-[13px] text-left text-[#678]">
            Review by 2wqewqeasd
          </h2>
          <p className="text-[15px] text-left text-[#9ab] w-[532px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            debitis provident consequatur quis nulla repellendus mollitia
            deserunt assumenda tempore porro vitae nisi vero earum consequuntur,
            beatae laborum alias id eveniet?
          </p>
        </div>
        <div className="grid grid-flow-col gap-2 justify-start">
          <button className="text-[12px] text-left text-[#9ab]">
            like review
          </button>
          <h2 className="text-[12px] text-left text-[#9ab]">325 likes</h2>
        </div>
      </div>
    </div>
  );
}
