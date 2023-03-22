/**
 * Props for the GoogleIcon component.
 */
export interface GoogleIconProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * GoogleIcon Component
 */
export default function GoogleIcon({
  className,
  ...props
}: GoogleIconProps): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.916 10.18c0-.562-.051-1.102-.147-1.62h-7.608v3.063h4.348a3.64 3.64 0 0 1-1.612 2.39v1.985h2.61c1.528-1.378 2.41-3.407 2.41-5.818Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.161 17.917c2.181 0 4.01-.709 5.347-1.918l-2.611-1.986c-.723.475-1.649.755-2.736.755-2.104 0-3.885-1.392-4.52-3.264H2.942v2.052c1.33 2.587 4.061 4.361 7.22 4.361Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.641 11.504A4.671 4.671 0 0 1 5.388 10c0-.522.092-1.03.253-1.504V6.445H2.942a7.785 7.785 0 0 0 0 7.11l2.7-2.051Z"
        fill="#FBBC04"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.161 5.232c1.186 0 2.251.4 3.088 1.184l2.317-2.27c-1.399-1.278-3.227-2.063-5.405-2.063-3.157 0-5.89 1.774-7.219 4.362l2.7 2.05c.634-1.87 2.415-3.263 4.52-3.263Z"
        fill="#EA4335"
      />
    </svg>
  );
}

GoogleIcon.displayName = "GoogleIcon";
