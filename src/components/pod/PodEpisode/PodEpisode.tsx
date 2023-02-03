import Link from "next/link";
import { twMerge } from "tailwind-merge";
import PodComment from "../PodComment";

/**
 * PodEpisodes Props description
 */
export interface PodEpisodeProps {
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  whereToWatchOrListenLink?: string;
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export default function PodEpisode({
  className = "",
  description,
  title,
  whereToWatchOrListenLink,
}: PodEpisodeProps) {
  return (
    <div className={twMerge("grid grid-flow-col gap-2 pt-4 w-full", className)}>
      <div className="grid grid-flow-row gap-4 justify-start items-start wf">
        <div className="grid grid-flow-col items-center gap-3">
          <img
            src="/pods/tunein.webp"
            className="pod-episode-img shadow-3xl border-[#88888820] border"
          ></img>
          <h2 className="text-[14px] text-left text-white text-opacity-75 font-moderat w-full">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
