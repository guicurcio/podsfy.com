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
}

/**
 * Card Component
 */
export default function Card({ className, title = 'Trending Episodes' }: BlogComponentProps) {
  return (
    <div
      className={mergeClasses(
        className,
        ' h-[600px]',
        ' overflow-hidden rounded-[5px]',
        'bg-[#0D0E12] py-[25px]',
        'border  border-sharper border-opacity-10',
        'px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]',
      )}
    >
      <SectionIntro
        title={title}
        description="Discover the latest trending episodes. This dynamic collection features the most talked-about, most viewed, and most-listened episodes."
      ></SectionIntro>
      <div className="grid grid-flow-row gap-6">
        <BlogPostPreview title={'asd'}></BlogPostPreview>
      </div>
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
}

export function SectionIntro({ className, title, description }: SectionIntroProps) {
  return (
    <div className={twMerge('mx-[16px] my-[10px] grid grid-flow-row gap-2', className)}>
      <p className="text-left font-lausanne text-[24px] font-bold leading-[18px] tracking-[-2%] text-white/[0.49] ">
        {title}
      </p>
      <p className="w-[350px] text-left text-[14px] text-white/[0.21]">{description}</p>
    </div>
  );
}
