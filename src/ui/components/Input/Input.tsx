import * as React from "react";
import mergeClasses from "utils/mergeClasses";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={mergeClasses(
        "flex h-10 w-full rounded-[7px] bg-white/10",
        "py-2 px-3",
        "placeholder:text-white/50",
        "font-moderat text-[14px] ",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
