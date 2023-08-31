"use client";

import { twMerge } from "tailwind-merge";

/**
 * PodBehind Props description
 */
export interface PodBehindProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * image url
   */
  image?: string;
  /**
   * image url
   */
  genre?: string | null;
  /**
   * image url
   */
  rating?: number;
  tags?: string;
  podcastTitle?: string;
  duration?: number;
  language?: string;
  country?: string;
}

/**
 * PodBehind Component
 */
export default function PodBehind({
  className,
  genre,
  rating,
  podcastTitle,
  duration,
  language,
  country,
}: PodBehindProps) {
  return (
    <div
      className={twMerge(
        "hidden w-full  grid-flow-row gap-2  py-1  md:grid",
        className,
      )}
    >
      <div className="grid grid-flow-col items-center justify-items-center  gap-2 py-2 "></div>
      <div className=" mx-auto w-[93%] border-t border-[#10161d]/60" />
      <div className="grid grid-flow-row gap-3 divide-y-2 divide-[#10161d]/50 border-y border-[#10161d]/60 py-4">
        {rating && (
          <div className="grid grid-flow-row items-start justify-start gap-x-4 py-2">
            <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
              Rating:
            </p>
            <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
              {rating}/10
            </p>
          </div>
        )}
        {genre && (
          <div className="grid grid-flow-row items-start justify-start gap-x-4 py-2">
            <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
              Genre:
            </p>
            <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
              {genre.split(",").map((str, i) => (
                <span key={str} className="capitalize">
                  {str}
                  {i === genre.split(",").length - 1 ? " " : ","}
                </span>
              ))}
            </p>
          </div>
        )}
        {duration && (
          <div className="grid grid-flow-row items-start justify-start gap-x-4 py-2 ">
            <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
              Duration:
            </p>
            <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
              {duration}
            </p>
          </div>
        )}
        {language && (
          <div className="grid grid-flow-row items-start justify-start gap-x-4 py-2 ">
            <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
              language:
            </p>
            <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
              {language}
            </p>
          </div>
        )}
        {language && (
          <div className="grid grid-flow-row items-start justify-start gap-x-4 py-2 ">
            <p className=" text-left font-inter text-[16px] font-medium uppercase text-white text-opacity-60">
              country:
            </p>
            <p className="space-x-1 self-center  truncate align-middle font-inter text-[14px] font-normal text-white/70 text-opacity-60">
              {country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
