import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/new-york/ui/dialog";
import { Input } from "components/new-york/ui/input";
import { Label } from "components/new-york/ui/label";
import CLASSNAMES_BUTTON from "lib/constants/constants";
import { User } from "lucide-react";
import Button from "ui/components/Button";
import FacebookIcon from "ui/components/icons/FacebookIcon";
import GoogleIcon from "ui/components/icons/GoogleIcon";
import TwitterIcon from "ui/components/icons/TwitterIcon";
import mergeClasses from "utils/mergeClasses";
import { signIn } from "../../../auth";

/**
 * Props for the Logs component.
 */
export interface LogsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Logs Component
 */
export default function Logs({ className, ...props }: LogsProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="none" className={mergeClasses(CLASSNAMES_BUTTON, "")}>
          <User className="h-[17px] w-[17px] self-center align-middle text-black/80"></User>
          <span className="w-[120px] self-center align-middle">
            Sign up with Email
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={mergeClasses(
          "z-50 grid h-full w-full scale-100 border border-white border-opacity-5  text-white",
          "px-[40px] py-[48px] opacity-100 animate-in fade-in-90 slide-in-from-bottom-10",
          "sm:rounded-[8px] sm:zoom-in-90 sm:slide-in-from-bottom-0",
          "z-50 mx-auto grid h-fit w-full grid-flow-row gap-y-[14px] rounded-md bg-black text-white  sm:max-w-[500px]",
        )}
      >
        <form
          action={async () => {
            "use server";
            const url = await signIn("github", { redirect: false });
            console.log(url);
          }}
        >
          <DialogHeader>
            <DialogTitle className="mx-auto text-center">
              Create an account
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="mx-auto grid w-fit  grid-flow-col items-center justify-items-center gap-x-2">
            <div className="h-[1px] w-[110px] bg-white/20 " />
            <h1 className="self-center font-moderat text-sm uppercase text-white/80">
              or
            </h1>
            <div className="h-[1px] w-[110px] bg-white/20 " />
          </div>
          <div className="grid w-full grid-flow-row gap-y-[16px]">
            <Button
              variant="none"
              className={mergeClasses(
                CLASSNAMES_BUTTON,
                "mx-0 w-full grid-flow-col justify-items-start gap-x-2",
              )}
            >
              <span className="grid w-[50px] grid-cols-1 justify-items-end ">
                <TwitterIcon className=""></TwitterIcon>
              </span>
              <span className="w-[150px] text-left">Sign up with Twitter</span>
            </Button>
            <Button
              variant="none"
              className={mergeClasses(
                CLASSNAMES_BUTTON,
                "mx-0 w-full grid-flow-col justify-items-start gap-x-2",
              )}
            >
              {/* <Twitter></Twitter> */}
              <span className="grid w-[50px] grid-cols-1 justify-items-end ">
                <GoogleIcon className=""></GoogleIcon>
              </span>
              <span className="w-[150px] text-left">Sign up with Google</span>
            </Button>
            <Button
              variant="none"
              className={mergeClasses(
                CLASSNAMES_BUTTON,
                "mx-0 w-full grid-flow-col justify-items-start gap-x-2",
              )}
            >
              {/* <Twitter></Twitter> */}
              <span className="grid w-[50px] grid-cols-1 justify-items-end">
                <FacebookIcon className="scale-[95%]"></FacebookIcon>
              </span>
              <span className="w-[150px] text-left">Sign up with Facebook</span>
            </Button>
            <Button
              variant="none"
              className={mergeClasses(
                CLASSNAMES_BUTTON,
                "mx-0 w-full grid-flow-col justify-items-start gap-x-2",
              )}
            >
              {/* <Twitter></Twitter> */}
              <span className="grid w-[50px] grid-cols-1 justify-items-end">
                <FacebookIcon className="scale-[95%]"></FacebookIcon>
              </span>
              <span className="w-[150px] text-left">Sign up with GitHub</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

Logs.displayName = "Logs";
