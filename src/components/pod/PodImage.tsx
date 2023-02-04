/**
 * PodImage Props
 */
export interface PodImageProps {
 /**
  * Class names passed to the root element.
  */
 className?: string;
 /**
  *
  */
 image?: string;
}

/**
 * This component
 */
export default function PodImage({
 className,
 image,
}: PodImageProps) {
 return (
  <div className="blur-[8px] brightness-[50%] backdrop-brightness-[50%]">
   <div className="relative">
    {image && (
     <img
      src={image}
      className="w-[1920px] h-[496px] absolute scale-x-[110%] scale-y-[100%]  rounded-[20px] opacity-100 object-none z-0"
     />
    )}
   </div>
  </div>
 );
}
