import mergeClasses from "utils/mergeClasses"

/**
 * SectionIntro Props description
 */
export interface SectionIntroProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
  /**
   * Title of the section
   */
  title: string
  /**
   * Description of the section
   * @default "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
   */
  description: string
  /**
   * Class names to be passed to the description wrapper.
   */
  descriptionClassname: string
}

/**
 * SectionIntro Component
 */
export default function SectionIntro({
  className,
  title,
  description,
  descriptionClassname,
}: SectionIntroProps) {
  return (
    <div
      className={mergeClasses(
        "absolute bottom-[20px] left-[20px] mx-[16px] grid grid-flow-row gap-1",
        className
      )}
    >
      <p className="text-left font-lausanne text-[19px] font-bold leading-[18px] tracking-[-2%] text-white/[0.49] ">
        {title}
      </p>
      <p
        className={mergeClasses(
          "w-[300px] text-left text-[11px] text-white/[0.21]",
          descriptionClassname
        )}
      >
        {description}
      </p>
    </div>
  )
}
