'use client';

import BlogPostPreview from 'components/common/BlogPostPreview';
import { twMerge } from 'tailwind-merge';
import mergeClasses from 'utils/mergeClasses';

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
  title = 'Trending Episodes',
  description,
  descriptionClassname = '',
}: BlogComponentProps) {
  return (
    <div
      className={mergeClasses(
        className,
        'h-[600px]',
        ' overflow-hidden rounded-[5px]',
        'bg-[#0D0E12] py-[25px]',
        'border border-sharper border-opacity-10',
        'px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]',
      )}
    >
      {children}
      <SectionIntro
        title={title}
        description={description || ''}
        descriptionClassname={descriptionClassname}
      ></SectionIntro>
      {/* <div className="grid grid-flow-row gap-6">
        <BlogPostPreview title={'asd'}></BlogPostPreview>
      </div> */}
    </div>
  );
}

/**
 * SectionIntro Props description
 */
export interface SectionIntroProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Title of the section
   */
  title: string;
  /**
   * Description of the section
   * @default "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
   */
  description: string;
  /**
   * Class names to be passed to the description wrapper.
   */
  descriptionClassname?: string;
}

export function SectionIntro({
  className,
  title,
  description,
  descriptionClassname = '',
}: SectionIntroProps) {
  return (
    <div
      className={twMerge(
        'grid grid-flow-row place-items-start gap-2 px-[16px] py-[10px]',
        className,
      )}
    >
      <div className="grid grid-flow-row gap-2">
        <h1 className="text-left font-lausanne text-[20px] font-semibold leading-[18px] tracking-[-1.5%] text-white/[0.50]">
          {title}
        </h1>
        <p
          className={mergeClasses(
            'w-[350px] text-left text-[14px] text-white/[0.31]',
            descriptionClassname,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
