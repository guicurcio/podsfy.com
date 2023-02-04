import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
 rootProps?: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
 >;
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
  <div
   className={twMerge(
    '',
    className
   )}
   {...rootProps}
  >
   <Link
    href={
     podcastURL
    }
   >
    <img
     src={imageURL}
     className="border-[#88888820] flex-shrink-0 w-[170px] h-[225px]  rounded-[8px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out brightness-[105%]"
    />
   </Link>
  </div>
 );
}

PodcastCover.displayName =
 'PodcastCover';
