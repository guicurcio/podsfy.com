'use client';

import Button from 'ui/components/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'ui/components/Hover';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/components/Tooltip';

import { twMerge } from 'tailwind-merge';

/**
 * PodComment Props description
 */
export interface PodCommentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * The user who made the review.
   */
  userWhoMadeTheReview?: string;

  /**
   * The review text.
   */
  review?: string;
  /**
   *The amount of likes the review has.
   * @default 0
   * @example
   * 325
   */
  amountOfLikes?: number;
}

/**
 * PodComment Component
 */
export default function PodComment({
  className,
  review,
  userWhoMadeTheReview = '',
  amountOfLikes = 0,
}: PodCommentProps) {
  return (
    <div className={twMerge('grid w-full grid-flow-col gap-4 pb-4', className)}>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-row gap-[16px]">
          <div className="grid w-full grid-flow-col place-content-between content-between justify-between">
            <div className="grid grid-flow-row gap-[-4px]">
              <div className="grid grid-flow-col gap-[8px]">
                <HoverCard>
                  <HoverCardTrigger>
                    <Button variant="ghost" className="w-10 p-0">
                      <div className="h-10 w-10 overflow-hidden rounded-[20px] border border-white/25">
                        <img src="/avatars/mike.jpg"></img>
                      </div>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/25">
                          <img src="/avatars/mike.jpg"></img>
                        </div>
                        <p className="text-sm"></p>
                        <div className="flex items-center pt-2">
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <div className="grid grid-flow-row">
                  <h2 className="self-center text-[13px] text-white/60">Mike Tyson</h2>
                  <h2 className="-mt-[12px] self-center font-moderat text-[12px] text-white/50">
                    reviews {amountOfLikes} likes
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Button variant="subtle" className="font-moderat text-[12px] text-[#9ab]">
                Like this review
              </Button>
            </div>
          </div>
          <div className="grid grid-flow-row gap-[11px]">
            {review.split('\\n').map((line, index) => (
              <p className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
