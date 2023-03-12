import Button from 'ui/components/Button';
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
      <div className="grid  w-full grid-flow-row items-start justify-start gap-6 divide-y-[2px] divide-fondy/50  px-2">
        {reviews.map((review) => (
          <PodComment review={review.review} />
        ))}
      </div>
      <Button className="w-fit" variant="default">
        Write a Review
      </Button>
    </div>
  );
}
