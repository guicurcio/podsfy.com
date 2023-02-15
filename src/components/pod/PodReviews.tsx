import PodComment from './PodComment';

/**
 * PodReviews Props
 */
export interface PodReviewsProps {
 /**
  * Class names passed to the root element.
  */
 className?: string;
 /**
  * Pass a custom title to the component.
  * @default ""
  */
 title?: string;
}

/**
 * This component PodReviews
 */
export default function PodReviews({
 className,
 title,
}: PodReviewsProps) {
 return (
  <div className="grid grid-flow-row gap-2 py-2">
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
     Popular Reviews
     and Comments{' '}
     {title &&
      `for ${title}`}
    </h2>
   </div>
   <div className="grid grid-flow-row gap-6 divide-y-[1px] items-start justify-start  divide-fondy/50 px-2">
    <PodComment className="pt-4 border-t-[1px] border-fondy/50"></PodComment>
    <PodComment></PodComment>
   </div>
  </div>
 );
}
