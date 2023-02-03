import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

/**
 * PodGuests Props description
 */
export interface PodGuestsProps {
 /**
  * Custom class names passed to the root element.
  */
 className?: string;
 /**
  * Pass a custom title to the component.
  * @default ""
  */
 title?: string;
}

/**
 * PodGuests Component
 */
export default function PodGuests({
 className,
 title,
}: PodGuestsProps) {
 return (
  <div
   className={twMerge(
    'grid grid-flow-row gap-2 py-2',
    className
   )}
  >
   <div className="grid grid-flow-col justify-start gap-3 items-center px-4">
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
      <rect
       width={16}
       height={16}
       rx={9}
       fill="#0a0a0b"
      />
     </g>
     <defs>
      <clipPath id="clip0_2_693">
       <rect
        width={16}
        height={16}
        rx={9}
        fill=""
       />
      </clipPath>
     </defs>
    </svg>
    <h2 className="text-[13.5px] self-center align-middle font-medium font-moderat text-left text-[#a5a5a5]/80 antialiased tracking-[-0.03em]">
     Guest
     Appearances{' '}
     {title && `in`}{' '}
     {title}
    </h2>
   </div>
   <div className="grid grid-flow-col mx-auto relative gap-[32px] py-[12px]">
    <Link href="/podcast/call-her-daddy">
     <img
      src="/ab67706c0000bebbe74171c42b0069e80316ab7e.jpeg"
      className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
       boxShadow:
        '0px 4px 4px 0 rgba(0,0,0,0.28)',
      }}
     />
    </Link>
    <img
     src="/images-(10).jpeg"
     className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
     style={{
      boxShadow:
       '0px 4px 4px 0 rgba(0,0,0,0.28)',
     }}
    />
    <Link href="/podcast/huberman-lab-podcast">
     <img
      src="/huberman-lab.jpeg"
      className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
       boxShadow:
        '0px 4px 4px 0 rgba(0,0,0,0.28)',
      }}
     />
    </Link>
    <Link href="/podcast/huberman-lab-podcast">
     <img
      src="/huberman-lab.jpeg"
      className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
       boxShadow:
        '0px 4px 4px 0 rgba(0,0,0,0.28)',
      }}
     />
    </Link>
    <Link href="/podcast/huberman-lab-podcast">
     <img
      src="/huberman-lab.jpeg"
      className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
       boxShadow:
        '0px 4px 4px 0 rgba(0,0,0,0.28)',
      }}
     />
    </Link>
   </div>
  </div>
 );
}
