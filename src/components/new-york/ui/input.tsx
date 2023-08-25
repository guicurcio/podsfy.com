import * as React from "react";
import mergeClasses from "utils/mergeClasses";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={mergeClasses(
        "flex h-10 w-full rounded-[7px] bg-white/5",
        "px-3 py-2",
        "border border-transparent",
        "focus:border-1 ring-offset-transparent focus:border-white focus:border-white/10 focus:outline-none",
        "focus:ring-0 focus:ring-transparent",
        "placeholder:text-white/50",
        "font-visuelt text-[14px] ",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
