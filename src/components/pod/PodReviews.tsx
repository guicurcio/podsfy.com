import PodComment from './PodComment';

/**
 * PodReviews Props
 */
export interface PodReviewsProps {
  /**
   * Class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * The reviews to display.
   *
   */
  reviews: {
    review: string;
  }[];
}

/**
 * This component PodReviews
 */
export default function PodReviews({ className, reviews, title }: PodReviewsProps) {
  return (
    <div className="grid w-full grid-flow-row gap-2 py-2">
      <div className="grid w-full grid-flow-col items-center justify-start gap-3 px-4">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] border-[#252525] border-opacity-[30%] brightness-200"
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
        <h2 className="self-center text-left align-middle font-moderat text-[13.5px] font-medium tracking-[-0.03em] text-[#a5a5a5]/80 antialiased">
          Popular Reviews and Comments {title && `for ${title}`}
        </h2>
      </div>
      <div className="grid  w-full grid-flow-row items-start justify-start gap-6 divide-y-[1px] divide-fondy/50 border-b-[1px]  border-fondy/50 px-2">
        {reviews.map((review) => (
          <PodComment review={review.review} />
        ))}
      </div>
    </div>
  );
}
