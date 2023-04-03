export namespace ButtonClass {
  export enum VARIANTS {
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

  export type ButtonVariants = {
    variant?: keyof typeof ButtonVariantsClasses;
    color?: keyof typeof ButtonColors;
    size?: keyof typeof ButtonSizes;
  };

  export enum ButtonColors {
    PRIMARY = "bg-blue-500 text-white",
    SECONDARY = "bg-purple-500 text-white",
  }

  export enum ButtonSizes {
    SM = "text-sm",
    MD = "text-base",
    LG = "px-4 py-3 text-lg",
    DEFAULT = "h-10 py-2 px-4 rounded-md text-[12px]",
  }
}
