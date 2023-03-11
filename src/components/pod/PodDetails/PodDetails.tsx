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
      className={twMerge('grid grid-flow-row justify-start gap-6 pb-[10px] text-left', className)}
    >
      <div className="grid grid-flow-row gap-[1px]">
        <h1 className="-ml-[3px] justify-start font-lausanne text-[41px] font-normal capitalize tracking-[-0.04em] text-[#fff] text-opacity-90 brightness-[180%]">
          {title}
        </h1>
        {podcastHostName && (
          // <Link href={`/people/${podcastHostName.replace(/ /g, '-').toLocaleLowerCase()}`}>
          // cursor-pointer
          <h2 className="mt-[-8px]  font-moderat text-[14px] text-[#fff] text-opacity-[50%]">
            By <span className="underline">{podcastHostName}</span>
          </h2>
          // </Link>
        )}
      </div>
      <div>
        {description.split('\\n').map((line, index) => (
          <p className="ml-[2px] mt-[-2px] font-visuelt text-[15px] font-normal leading-[25px] tracking-[0.5px] text-dimmed2 text-opacity-80  antialiased">
            {line}
            <br />
          </p>
        ))}
      </div>
    </div>
  );
}
