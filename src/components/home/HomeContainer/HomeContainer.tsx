import { twMerge } from "tailwind-merge";


/**
 * Props for the HomeContainer component.
 */
export interface HomeContainerProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * HomeContainer Component
 */
export default function HomeContainer({
  className,
}: HomeContainerProps): JSX.Element {
  return (
    <div className={twMerge('', className)}>

    </div>
  );
}

HomeContainer.displayName =
 'HomeContainer';
