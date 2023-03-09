import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import PodComment from '../PodComment';
import PodEpisode from '../PodEpisode/PodEpisode';

/**
 * PodEpisodes Props description
 */
export interface PodEpisodesProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  episodes?: PodcastEpisode[];
}

type PodcastEpisode = {
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
};

/**
 * PodEpisodes Component
 */
export default function PodEpisodes({
  className,
  title = 'Episodes',
  episodes = [],
}: PodEpisodesProps) {
  return (
    <div className="grid grid-flow-row justify-start  items-start gap-1 py-2 px-4 w-full rounded-sm bg-[#0a0a0b] border border-[#252525] border-opacity-[20%]">
      <div className="grid grid-flow-col pt-2 justify-start gap-2 items-center w-full">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px] brightness-200 border-[#252525] border-opacity-[30%]"
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
        <p className="text-[13.5px] self-center align-middle font-medium font-moderat text-left text-[#a5a5a5]/80 antialiased tracking-[-0.03em]">
          {title}
        </p>
      </div>
      <div className="grid grid-flow-row gap-6 divide-y-[1px]  divide-fondy/50 pb-2 w-full">
        {episodes.length === 0 && (
          <div className="pt-2">
            <p className="text-[14px] self-center align-middle font-medium font-moderat text-left text-[#a5a5a5]/60 antialiased tracking-[-0.03em]">
              {`${title} not found`}
            </p>
          </div>
        )}
        {episodes &&
          episodes.map((episode) => (
            <PodEpisode key={episode.title} title={episode.title}></PodEpisode>
          ))}
      </div>
    </div>
  );
}
