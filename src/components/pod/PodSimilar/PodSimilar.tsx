import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

/**
 * PodSimilar Props description
 */
export interface PodSimilarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  similarPodcasts?: any;
}

/**
 * PodSimilar Component
 */
export default function PodSimilar({ className, title, similarPodcasts }: PodSimilarProps) {
  return (
    <div className="grid grid-flow-row gap-2 py-2">
      <div className="grid grid-flow-col items-center justify-start gap-3 px-4">
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
          Similar Podcasts {title && `to`} {title}
        </h2>
      </div>
      <div className="relative grid w-fit grid-flow-col items-start justify-items-start  gap-[32px] border-t border-fondy/50 py-[12px]">
        {similarPodcasts &&
          similarPodcasts.map((podcast) =>
            podcast.cover ? (
              <Link href={`/podcast/${podcast.slug}`}>
                <img
                  src={`/${podcast.cover}`}
                  className="h-[150px] flex-shrink-0  flex-grow-0 cursor-pointer rounded-[15px] border border-black object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  style={{
                    boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.28)',
                  }}
                />
              </Link>
            ) : null,
          )}
      </div>
    </div>
  );
}
