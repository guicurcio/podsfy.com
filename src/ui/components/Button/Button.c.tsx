import React from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";

type ButtonVariants = {
  variant?: keyof typeof ButtonVariantsClasses;
  color?: keyof typeof ButtonColors;
  size?: keyof typeof ButtonSizes;
};

const enum ButtonVariantsClasses {
  /**
   * The default button variant.
   * "px-2 py-1 rounded-md font-medium transition duration-200 ease-in-out"
   */
  BASE = `inline-flex items-center justify-center tracking-[-0.01em] font-medium font-visuelt rounded-md focus:outline-none focus:outline-0 focus-visible:outline-none focus-visible:outline-0  focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 group-focus-visible:ring-0 group-focus-visible:ring-offset-0 disabled:pointer-events-none`,
  /**
   * The default button variant.
   * "px-2 py-1 rounded-md font-medium transition duration-200 ease-in-out"
   */
  DEFAULT = "bg-[#050607f2] border border-[#171717] text-white/75 hover:brightness-[120%] dark:bg-slate-50 dark:text-slate-900",
  ERROR = "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
  OUTLINE = "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
  SUBTLE = "bg-transparent font-SpaceGrotesk text-white/90 hover:backdrop-brightness-[150%]",
}

const enum ButtonColors {
  PRIMARY = "bg-blue-500 text-white",
  SECONDARY = "bg-purple-500 text-white",
}

const enum ButtonSizes {
  SM = "text-sm",
  MD = "text-base",
  LG = "px-4 py-3 text-lg",
  DEFAULT = "h-10 py-2 px-4 rounded-md text-[12px]",
}

type ButtonClass<V extends ButtonVariants> =
  `${ButtonVariantsClasses[V["variant"]]} ${ButtonColors[V["color"]]} ${ButtonSizes[V["size"]]}`;
type GetButtonClass = <V extends ButtonVariants>(variant: V) => ButtonClass<V>;

// // We can use the `Required` utility type to make sure all properties of the `ButtonVariant` type are provided
const getButtonClass: GetButtonClass = (variants) => {
  const { variant, color, size } = variants;

  // We can use the `as const` assertion to tell TypeScript that the values of the `ButtonColors` and `ButtonSizes` enums are constant
  const variantClass: string = ButtonVariantsClasses[variant] as const;
  const colorClass: string = ButtonColors[color] as const;
  const sizeClass: string = ButtonSizes[size] as const;

  return mergeClasses(
    `${ButtonVariantsClasses.BASE}`,
    `${variantClass} ${colorClass} ${sizeClass}`,
  );
};

/**
 *
 */
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariants {
  /**
   *  If true, the button will be disabled and show a loading indicator
   */
  loading?: boolean;
}

const TestingNewButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, ...props }, ref) => {
    const passedClassName = className || "";
    const fullClassName = getButtonClass({
      variant,
      color,
      size,
      passedClassName,
    });

    return (
      <button
        className={mergeClasses(fullClassName, className)}
        ref={ref}
        {...props}
      />
    );
  },
);

TestingNewButton.displayName = "Button";

export default TestingNewButton;
