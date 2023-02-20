import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

/**
 * PodDetails Props description
 */
export interface PodDetailsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  podcastHostName?: string;
}

/**
 * PodDetails Component
 */
export default function PodDetails({
  className,
  title = '',
  description,
  podcastHostName,
}: PodDetailsProps) {
  return (
    <div
      className={twMerge('justify-start text-left gap-6 grid grid-flow-row ', className)}
    >
      <div className="grid grid-flow-row gap-[1px]">
        <h1 className="text-[41px] capitalize text-[#fff] font-lausanne tracking-[-0.04em] font-normal text-opacity-90 justify-start brightness-[180%] -ml-[3px]">
          {title}
        </h1>
        {podcastHostName && (
          <Link
            href={`/people/${podcastHostName.replace(/ /g, '-').toLocaleLowerCase()}`}
          >
            <h2 className="text-[14px] cursor-pointer text-[#fff] text-opacity-[50%] font-moderat mt-[-12px]">
              By <span className="underline">{podcastHostName}</span>
            </h2>
          </Link>
        )}
      </div>
      <p className="font-visuelt font-normal text-dimmed2 text-opacity-80 text-[15px] ml-[2px] antialiased  tracking-[0.5px]">
        {description}
      </p>
    </div>
  );
}
