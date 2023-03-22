import mergeClasses from "utils/mergeClasses";

/**
 * Props for the TwitterIcon component.
 */
export interface TwitterIconProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * TwitterIcon Component
 */
export default function TwitterIcon({
  className,
  ...props
}: TwitterIconProps): JSX.Element {
  return (
    <svg
      width={18}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={mergeClasses("self-center align-middle", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.002.333c-.509.344-1.676.843-2.252.843A3.515 3.515 0 0 0 12.14 0c-1.993 0-3.61 1.705-3.61 3.808 0 .292.033.577.092.85C5.916 4.583 2.958 3.153 1.178.706.084 2.705 1.03 4.928 2.274 5.738c-.426.034-1.208-.052-1.577-.43-.025 1.326.58 3.084 2.785 3.722-.425.24-1.176.171-1.503.12.115 1.12 1.601 2.584 3.227 2.584-.58.707-2.76 1.99-5.206 1.582C1.662 14.382 3.598 15 5.648 15c5.824 0 10.348-4.98 10.104-11.123l-.001-.021.001-.048-.002-.056a6.432 6.432 0 0 0 1.75-1.95c-.295.172-1.18.514-2.002.6.528-.301 1.31-1.286 1.504-2.07Z"
        fill="#1DA1F2"
      />
    </svg>
  );
}

TwitterIcon.displayName = "TwitterIcon";
