import * as React from 'react';
import mergeClasses from 'utils/mergeClasses';

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      className={mergeClasses(
        'flex h-10 w-full rounded-[3px] border border-white/20',
        'bg-transparent py-2 px-3 text-sm placeholder:text-slate-400',
        'focus:outline-none focus:ring-1 focus:ring-white/60',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50 dark:border-slate-700 dark:text-slate-50',
        'dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
