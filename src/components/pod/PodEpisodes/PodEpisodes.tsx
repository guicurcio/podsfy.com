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
    <div className="grid w-full grid-flow-row   gap-1 rounded-sm   border-[#252525] border-opacity-[20%] bg-[#0a0a0b] py-2 px-4">
      <div className="grid w-full grid-flow-col items-center justify-start gap-2 pt-2">
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
        <p className="self-center text-left align-middle font-moderat text-[13.5px] font-medium tracking-[-0.03em] text-[#a5a5a5]/80 antialiased">
          {title}
        </p>
      </div>
      <div className="grid w-full grid-flow-row gap-6 divide-y-[1px]  divide-fondy/50 py-3">
        {episodes.length === 0 && (
          <div className="pt-2">
            <p className="self-center text-left align-middle font-moderat text-[14px] font-medium tracking-[-0.03em] text-[#a5a5a5]/60 antialiased">
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
