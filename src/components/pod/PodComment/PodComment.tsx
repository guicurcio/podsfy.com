import { twMerge } from 'tailwind-merge';
import splitParagraph from 'utils/splitParagraph';

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
    <div className={twMerge('grid w-full grid-flow-col gap-4 py-4', className)}>
      <div className="grid grid-flow-row items-start justify-start">
        <div className="relative h-10 w-10 rounded-[20px]">
          <div className="bg-image-here left-0 top-0 flex h-10 w-10  flex-col items-start justify-start gap-2.5 overflow-hidden rounded-[20px] p-2.5" />
          <div className="left-0 top-0  h-10 w-10 overflow-hidden rounded-[20px] border border-white/25" />
        </div>
      </div>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-row gap-1">
          <h2 className="text-left text-[13px] text-[#678]">Review by {userWhoMadeTheReview}</h2>
          <p className="text-left text-[15px] leading-[25px] text-[#9ab]">{review}</p>
        </div>
        <div className="grid grid-flow-col justify-start gap-2">
          <button className="text-left text-[12px] text-[#9ab]">like review</button>
          <h2 className="text-left text-[12px] text-[#9ab]">{amountOfLikes} likes</h2>
        </div>
      </div>
    </div>
  );
}
