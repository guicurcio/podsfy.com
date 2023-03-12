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
    <div className={twMerge('grid w-full grid-flow-col gap-4', className)}>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-row gap-[18px]">
          <div className="grid grid-flow-col justify-start gap-2">
            <div className="h-10 w-10 overflow-hidden rounded-[20px] border border-white/25" />
            <h2 className="self-center text-[13px] text-[#678]">
              Desmond Hume reviews {userWhoMadeTheReview}
            </h2>
          </div>
          <div className="grid grid-flow-row gap-[8px]">
            {review.split('\\n').map((line, index) => (
              <p className="ml-[2px] font-visuelt text-[14px] font-normal leading-[25px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-flow-col justify-start gap-2">
          <button className="text-left font-moderat text-[12px] text-[#9ab]">like review</button>
          <h2 className="text-left text-[12px] text-[#9ab]">{amountOfLikes} likes</h2>
        </div>
      </div>
    </div>
  );
}
