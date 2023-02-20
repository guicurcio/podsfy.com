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
export default function PodImage({ className, image }: PodImageProps) {
  return (
    <div className="z-0 blur-[8px] brightness-[50%] backdrop-brightness-[50%]">
      <div className="relative">
        {image && (
          <img
            src={image}
            className="absolute z-0 h-[896px] w-[1920px] scale-x-[110%]  scale-y-[150%] rounded-b-[220px] object-none opacity-100"
          />
        )}
      </div>
    </div>
  );
}
