import mergeClasses from "utils/mergeClasses"

/**
 * Props for the UnitOfContent component.
 */
export interface UnitOfContentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * UnitOfContent Component
 */
export default function UnitOfContent({
  className,
}: UnitOfContentProps): JSX.Element {
  return (
    <div className={mergeClasses("h-[250px] w-full bg-fondy", className)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque
      voluptate dicta provident quas dolores fuga voluptas iusto quam libero
      perferendis tenetur officiis temporibus odio, ipsum eos error ea nam.
    </div>
  )
}

UnitOfContent.displayName = "UnitOfContent"
