import { twMerge } from 'tailwind-merge';

/**
 * BlogPostPreview Props description
 */
export interface BlogPostPreviewProps {
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
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({
  className,
  title = 'Some episode',
}: BlogPostPreviewProps) {
  return (
    <div className={twMerge('', className)}>
      <div className="mx-auto h-[150px] w-[574px]  rounded-[5px] border-sharper border-opacity-[55%] p-[10px] shadow-sm">
        <div className="grid grid-flow-row items-start justify-start gap-3">
          <div className={twMerge('grid w-full grid-flow-col gap-2 pt-4', className)}>
            <div className="wf grid grid-flow-row items-start justify-start gap-4">
              <div className="grid grid-flow-col items-center gap-3">
                <img
                  src="/pods/tunein.webp"
                  className="pod-episode-img border border-[#88888820] shadow-3xl"
                ></img>
                <h2 className="w-full text-left font-moderat text-[14px] text-white text-opacity-75">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
