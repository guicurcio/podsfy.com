import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * Props for the FacebookIcon component.
 */
export interface FacebookIconProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * FacebookIcon Component
 */
export default function FacebookIcon({
  className,
  ...props
}: FacebookIconProps): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={mergeClasses("self-center align-middle", className)}
      {...props}
    >
      <path
        d="M9.583 0A9.583 9.583 0 0 0 0 9.583c0 4.783 3.501 8.742 8.077 9.467l.004-6.69H5.63V9.587h2.45s-.012-1.578 0-2.28c.01-.703.15-1.379.514-1.995.56-.954 1.432-1.42 2.502-1.552.88-.108 1.747.012 2.615.132.06.007.09.015.15.026a413.942 413.942 0 0 0 0 2.367c-.417-.008-1.108-.049-1.566.022-.76.117-1.195.602-1.21 1.364-.015.594-.008 1.916-.008 1.916h2.671l-.431 2.773h-2.236v6.69c4.583-.717 8.088-4.684 8.088-9.467C19.167 4.29 14.876 0 9.583 0Z"
        fill="#0075FA"
      />
    </svg>
  );
}

FacebookIcon.displayName = "FacebookIcon";
