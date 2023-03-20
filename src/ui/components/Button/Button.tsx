import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";
import mergeClasses from "utils/mergeClasses";

export const buttonVariants = cva(
  mergeClasses(
    "inline-flex items-center justify-center tracking-[-0.01em]",
    "font-medium font-visuelt rounded-md focus:outline-none focus:outline-0 focus-visible:outline-none focus-visible:outline-0  focus:ring-0 focus:ring-offset-0",
    "focus-visible:ring-0 focus-visible:ring-offset-0",
    "group-focus-visible:ring-0 group-focus-visible:ring-offset-0",
    "disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        default:
          "bg-[#050607f2]  border border-[#171717] text-white/75 hover:brightness-[120%] dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-transparent font-SpaceGrotesk text-white/90 hover:backdrop-brightness-[150%]",
        ghost:
          "bg-transparent relative hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        main: "bg-[#050607f2]  border border-[#171717] text-white/75 hover:brightness-[120%] dark:bg-slate-50 dark:text-slate-900 font-SpaceGrotesk tracking-[-0.08em] text-[18px] font-medium",
        icon: "grid h-[28px] grid-flow-col self-center align-middle text-[13px]",
        none: "",
      },
      size: {
        default: "h-10 py-2 px-4 rounded-md text-[12px]",
        none: "",
        subtle: "text-[14px]",
        sm: "h-9 px-3 rounded-md text-[13px]",
        md: "px-3 py-1.5 rounded-md text-[15px]",
        lg: "h-12 px-10 rounded-md text-[14px] md:text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 *
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   *  If true, the button will be disabled and show a loading indicator
   */
  loading?: boolean;
}

/**
 *
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, loading, ...props }, ref) => {
    if (loading) {
      return (
        <button
          disabled
          className={mergeClasses(
            buttonVariants({
              variant,
              size,
              className,
            }),
          )}
          ref={ref}
          {...props}
        >
          <Loader2 className="h-5 w-5 animate-spin" />
        </button>
      );
    }
    return (
      <button
        disabled={disabled || loading}
        className={mergeClasses(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
