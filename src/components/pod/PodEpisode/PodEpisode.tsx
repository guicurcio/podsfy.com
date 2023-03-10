import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Button from 'ui/components/Button';
import PodComment from '../PodComment';

/**
 * PodEpisodes Props description
 */
export interface PodEpisodeProps {
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
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   *
   */
  defaultCoverImage?: string;
}

export default function PodEpisode({
  className = '',
  description,
  title,
  whereToWatchOrListenLink,
  defaultCoverImage,
}: PodEpisodeProps) {
  return (
    <button className={twMerge('grid w-full grid-flow-col gap-2 py-3  hover:bg-fondy/30 px-3', className)}>
      <div className="grid grid-flow-row items-start justify-start gap-4">
        <div className="grid grid-flow-col items-center gap-3">
          <img
            src={defaultCoverImage}
            className="pod-episode-img border border-[#88888820] shadow-3xl"
          ></img>
          <h2 className="w-full text-left font-moderat text-[14px] text-white text-opacity-75">
            {title}
          </h2>
        </div>
      </div>
    </button>
  );
}
