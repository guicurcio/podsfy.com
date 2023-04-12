import CLASSNAMES_BUTTON from "lib/constants/constants";
import { User } from "lucide-react";
import Link from "next/link";
import Button from "ui/components/Button/Button";
import GoogleIcon from "ui/components/icons/GoogleIcon/GoogleIcon";
import TwitterIcon from "ui/components/icons/TwitterIcon/TwitterIcon";
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
  return (
    <div
      className={mergeClasses(
        "col-span-3  w-full overflow-hidden",
        "bg-[#0D0E12]",
        "border-r border-sharper border-opacity-10",
        "grid grid-flow-row items-start justify-items-start  font-visuelt shadow-3xl backdrop-blur-[10px] ",
        "h-full gap-[20px] pl-[5px] pr-[20px] pt-[38px]",
        className,
      )}
    >
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
        <div className="grid w-full grid-flow-row gap-[18px] pr-8">
          <Button variant="none" className={mergeClasses(CLASSNAMES_BUTTON)}>
            {/* <Twitter></Twitter> */}
            <TwitterIcon className=""></TwitterIcon>
            <span className="mx-auto w-[120px] self-center align-middle">
              Sign up with Twitter
            </span>
          </Button>
          <Button variant="none" className={mergeClasses(CLASSNAMES_BUTTON)}>
            {/* <Twitter></Twitter> */}
            <GoogleIcon className=""></GoogleIcon>
            <span className="w-[120px] self-center align-middle">
              Sign up with Google
            </span>
          </Button>
          <Link key="login" href="/login">
            <Button
              variant="none"
              className={mergeClasses(CLASSNAMES_BUTTON, "")}
            >
              {/* <Twitter></Twitter> */}
              <User className="h-[17px] w-[17px] self-center align-middle text-black/80"></User>
              <span className="w-[120px] self-center align-middle">
                Sign up with Email
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Trending.displayName = "Trending";
