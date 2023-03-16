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
  descriptionClassname?: string
}

export default function SectionIntro({
  className,
  title,
  description,
  descriptionClassname = "",
}: SectionIntroProps) {
  return (
    <div
      className={mergeClasses(
        "grid grid-flow-row place-items-start gap-2 px-[16px] py-[10px]",
        className
      )}
    >
      <div className="grid grid-flow-row gap-2">
        <h1 className="text-left font-lausanne text-[20px] font-semibold leading-[18px] tracking-[-1.5%] text-white/[0.50]">
          {title}
        </h1>
        <p
          className={mergeClasses(
            "w-[350px] text-left text-[14px] text-white/[0.31]",
            descriptionClassname
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
