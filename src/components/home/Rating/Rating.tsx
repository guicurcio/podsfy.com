import { CategoryBar } from "@tremor/react";

/**
 * Props for the Rating component.
 */
export interface RatingProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Rating Component
 */
export default function Rating({
  className,
  ...props
}: RatingProps): JSX.Element {
  return (
      <div className="bg-black bg-opacity-[35%] self-center border-opacity-5 grid grid-flow-row gap-[12px] border-white rounded-[3px] w-[300px] h-[130px] backdrop-blur-[50px] backdrop-brightness-[40%] backdrop-contrast-[525%] border py-3 px-4">
        <h2 className="uppercase font-moderat text-[15px] text-tremor-brand-faint">Rating &bull; 88/100</h2>
        {/* <ProgressBar value={75} color="teal" className="mt-3" /> */}
        <CategoryBar
      values={[20, 30, 30, 20]}
      colors={["rose", "orange", "yellow", "emerald"]}
      markerValue={88}
      className="mt-3"
    />
      </div>
  );
}

Rating.displayName = "Rating";
