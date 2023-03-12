import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import mergeClasses from 'utils/mergeClasses';

/**
 * PodcastCover Props description
 */
export interface PodcastCoverProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Custom props passed to the root element.
   */
  rootProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * URL of the image.
   *
   * @remarks Ideally the extension should be .webp
   */
  imageURL?: string;
  /**
   * The path or URL to navigate to.
   * @example
   * https://example.com/PodcastCover
   */
  podcastURL?: string;
}

/**
 * PodcastCover Component
 */
export default function PodcastCover({
  className,
  imageURL = '',
  podcastURL,
  rootProps,
}: PodcastCoverProps) {
  return (
    <div className={twMerge('', className)} {...rootProps}>
      <Link href={podcastURL}>
        <img
          src={imageURL}
          className={mergeClasses(
            'md:h-[235px] md:w-[190px] flex-shrink-0 cursor-pointer rounded-[8px]',
            ' object-fill shadow-3xl',
            'duration-500 ease-in-out hover:scale-[102%]',
          )}
        />
      </Link>
    </div>
  );
}

PodcastCover.displayName = 'PodcastCover';
