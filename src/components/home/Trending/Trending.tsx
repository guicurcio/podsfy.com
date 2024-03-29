"use client";

import Logs from "components/Logs";
import { nhost } from "lib/setupBackendConfig";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Trending component.
 */
export interface TrendingProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Trending Component
 */
export default function Trending({ className }: TrendingProps): JSX.Element {
  const user = nhost.auth.getUser();

  return (
    <div
      className={mergeClasses(
        "col-span-3  w-full overflow-hidden",
        "border-r border-sharper border-opacity-10",
        "shadow-3xl grid grid-flow-row items-start  justify-items-start font-visuelt backdrop-blur-[10px] ",
        "h-full gap-[20px] pl-[5px] pr-[20px] pt-[38px]",
        className,
      )}
    >
      {user?.displayName ? (
        <></>
      ) : (
        <div
          className={mergeClasses(
            "grid w-full grid-flow-row gap-[20px] p-3",
            // isUserAuthenticated && "opacity-0",
            // !isInStorage && "invisible",
          )}
        >
          <div className="grid grid-flow-row gap-y-[1px]">
            <h1 className="w-full text-left font-moderat text-[20px] font-medium text-[#E7E9EA] ">
              New to Podsfy.com?
            </h1>
            <h2 className="w-[230px] text-left font-moderat text-[14px] font-normal leading-[18px] text-[#71767B]">
              Sign up now and get personalized recommendations, follow podcasts
              and more.
            </h2>
          </div>

          <div className="grid w-full grid-flow-row gap-[18px] pr-8 font-moderat">
            <Logs></Logs>
          </div>
        </div>
      )}
    </div>
  );
}

Trending.displayName = "Trending";
