import mergeClasses from 'utils/mergeClasses';

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
  /**
   * Class names passed to the image element.
   */
  imageClassName?: string;
}

/**
 * This component
 */
export default function PodImage({ className, image, imageClassName }: PodImageProps) {
  return (
    <div className="z-0 blur-[8px] brightness-[60%] backdrop-brightness-[50%]">
      <div className="relative">
        {image && (
          <img
            src={image}
            className={mergeClasses(
              imageClassName,
              'absolute  z-0 h-[896px] w-[1920px] scale-x-[110%] scale-y-[150%] rounded-b-[220px] object-none opacity-100',
            )}
          />
        )}
      </div>
    </div>
  );
}
