'use client';

import BlogPostPreview from 'components/common/BlogPostPreview';
import { twMerge } from 'tailwind-merge';

/**
 * BlogComponent Props description
 */
export interface BlogComponentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Card Component
 */
export default function Card({ className }: BlogComponentProps) {
  return (
    <div className={twMerge('', className)}>
      <div
        className="h-[600px] w-[600px]
        overflow-hidden rounded-[5px] border
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]  bg-[#0D0E12] bg-opacity-[95%]
        backdrop-blur-[10px] font-visuelt shadow-3xl relative"
      >
        <div className="grid grid-flow-row gap-6">
          <BlogPostPreview></BlogPostPreview>
        </div>
        <SectionIntro
          title="blog & behind the scenes"
          description="Jeremy Bentham often wrote prose that, like Jorge Luis Borges, had to be solved rather than just read.”"
        ></SectionIntro>
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
    <div
      className={twMerge(
        'grid grid-flow-row gap-1 absolute bottom-[20px] left-[20px] mx-[16px]',
        className
      )}
    >
      <p className="text-[19px] font-lausanne font-bold text-left text-white/[0.49] leading-[18px] tracking-[-2%] ">
        {title}
      </p>
      <p className="text-[11px] text-left text-white/[0.21] w-[300px]">{description}</p>
    </div>
  );
}
