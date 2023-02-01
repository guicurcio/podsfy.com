import Link from "next/link";
import { twMerge } from "tailwind-merge";
import PodComment from "../PodComment";

/**
 * PodEpisodes Props description
 */
export interface PodEpisodesProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * PodEpisodes Component
 */
export default function PodEpisodes({ className }: PodEpisodesProps) {
  return (
    <div className="grid grid-flow-row justify-start items-start gap-4 py-2 px-4 w-full rounded-sm bg-[#0a0a0b]/[0.25] border border-[#252525] border-opacity-[20%]">
      <div className="grid grid-flow-col pt-2 justify-start gap-2 items-center w-full">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px] brightness-200 border-[#252525] border-opacity-[30%]"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_2_693)">
            <rect width={16} height={16} rx={9} fill="#0a0a0b" />
          </g>
          <defs>
            <clipPath id="clip0_2_693">
              <rect width={16} height={16} rx={9} fill="" />
            </clipPath>
          </defs>
        </svg>
        <p className="text-[13.5px] self-center align-middle font-medium font-moderat text-left text-[#a5a5a5]/80 antialiased tracking-[-0.03em]">
          Newest Episodes
        </p>
      </div>
      <div className="grid grid-flow-row gap-6 divide-y-[1px]  divide-fondy/50 px-2 w-full">
        <div
          className={twMerge("grid grid-flow-col gap-2 pt-4 w-full", className)}
        >
          <div className="grid grid-flow-row gap-4 justify-start items-start wf">
            <div className="grid grid-flow-col items-center gap-4">
              <img
                src="/pods/tunein.webp"
                className="pod-episode-img shadow-3xl border-[#88888820] border"
              ></img>
              <h2 className="text-[14px] text-left text-white text-opacity-75 font-moderat w-full">
                Dr. Andy Galpin: How to Assess & Improve All Aspects of Your
                Fitness | Huberman Lab Guest Series
              </h2>
            </div>
          </div>
        </div>
        <div
          className={twMerge("grid grid-flow-col gap-2 pt-4 w-full", className)}
        >
          <div className="grid grid-flow-row gap-4 justify-start items-start wf">
            <div className="grid grid-flow-col items-center gap-4">
              <img
                src="/pods/tunein.webp"
                className="pod-episode-img shadow-3xl border-[#88888820] border"
              ></img>
              <h2 className="text-[14px] text-left text-white text-opacity-75 font-moderat w-full">
                Dr. Andy Galpin: How to Assess & Improve All Aspects of Your
                Fitness | Huberman Lab Guest Series
              </h2>
            </div>
          </div>
        </div>
        <div
          className={twMerge("grid grid-flow-col gap-2 pt-4 w-full", className)}
        >
          <div className="grid grid-flow-row gap-4 justify-start items-start wf">
            <div className="grid grid-flow-col items-center gap-4">
              <img
                src="/pods/tunein.webp"
                className="pod-episode-img shadow-3xl border-[#88888820] border"
              ></img>
              <h2 className="text-[14px] text-left text-white text-opacity-75 font-moderat w-full">
                Dr. Andy Galpin: How to Assess & Improve All Aspects of Your
                Fitness | Huberman Lab Guest Series
              </h2>
            </div>
          </div>
        </div>
        <div
          className={twMerge("grid grid-flow-col gap-2 pt-4 w-full", className)}
        >
          <div className="grid grid-flow-row gap-4 justify-start items-start wf">
            <div className="grid grid-flow-col items-center gap-4">
              <img
                src="/pods/tunein.webp"
                className="pod-episode-img shadow-3xl border-[#88888820] border"
              ></img>
              <h2 className="text-[14px] text-left text-white text-opacity-75 font-moderat w-full">
                Dr. Andy Galpin: How to Assess & Improve All Aspects of Your
                Fitness | Huberman Lab Guest Series
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
