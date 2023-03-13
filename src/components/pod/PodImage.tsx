import type { StaticImageData } from "next/image"
import Image from "next/image"
import mergeClasses from "utils/mergeClasses"
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage2 from "/public/bg.png"

/**
 * PodImage Props
 */
export interface PodImageProps {
  /**
   * Class names passed to the root element.
   */
  className?: string
  /**
   *
   */
  image?: string | StaticImageData
  /**
   * Class names passed to the image element.
   */
  imageClassName?: string
}

/**
 * This component
 */
export default function PodImage({ className, imageClassName }: PodImageProps) {
  return (
    <div
      className={mergeClasses(
        "z-0 blur-[8px] brightness-[60%] backdrop-brightness-[50%]",
        className
      )}
    >
      <div className="relative">
        {/* <Image
          src={backgroundImage}
          alt="Podcast cover"
          className={mergeClasses(
            imageClassName,
            "absolute  z-0 h-[896px] w-[1920px] scale-x-[110%] scale-y-[150%] rounded-b-[220px] object-none opacity-100"
          )}
        /> */}
        <Image
          src={backgroundImage2}
          alt="Podcasts"
        ></Image>
      </div>
    </div>
  )
}
