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
   className={twMerge(
    'justify-start text-left gap-4 grid grid-flow-row',
    className
   )}
  >
   <div className="grid grid-flow-row -gap-4">
    <h1 className="text-[41px] capitalize text-[#fff] font-SpaceGrotesk tracking-[-0.1em] font-normal text-opacity-90 brightness-[180%] -ml-[3px]">
     {title}
    </h1>
    {podcastHostName && (
     <Link
      href={`/people/${podcastHostName
       .replace(
        / /g,
        '-'
       )
       .toLocaleLowerCase()}`}
     >
      <span className="text-[14px] cursor-pointer text-[#fff] text-opacity-[70%] font-moderat -mt-4">
       By{' '}
       <span className="underline">
        {
         podcastHostName
        }
       </span>
      </span>
     </Link>
    )}
   </div>
   <p className="font-visuelt h-[80px] font-normal text-dimmed2 text-opacity-80 text-[15px] ml-[2px] antialiased w-[650px] tracking-[0.5px]">
    {description}
   </p>
  </div>
 );
}
