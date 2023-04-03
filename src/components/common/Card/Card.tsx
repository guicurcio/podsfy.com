import SectionIntro from "components/SectionIntro";
import mergeClasses from "utils/mergeClasses";

/**
 * BlogComponent Props description
 */
export interface BlogComponentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   *
   * @todo: change.. too muich flow to pass down state.
   */
  descriptionClassname?: string;
  children?: React.ReactNode;
}

/**
 * Card Component
 */
export default function Card({
  className,
  children,
  title = "Trending Episodes",
  description,
  descriptionClassname = "",
}: BlogComponentProps) {
  return (
    <div
      className={mergeClasses(
        className,
        "h-[600px]",
        " overflow-hidden rounded-[5px]",
        "bg-[#0D0E12] py-[25px]",
        "border border-sharper border-opacity-10",
        "px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]",
      )}
    >
      {children}
      <SectionIntro
        title={title}
        description={description || ""}
        descriptionClassname={descriptionClassname}
      ></SectionIntro>
      {/* <div className="grid grid-flow-row gap-6">
        <BlogPostPreview title={'asd'}></BlogPostPreview>
      </div> */}
    </div>
  );
}
