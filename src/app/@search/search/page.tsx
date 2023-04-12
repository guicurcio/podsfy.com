import Modal from "components/modal/Modal";
import CLASSNAMES_BUTTON from "lib/constants/constants";
import { X } from "lucide-react";
import Button from "ui/components/Button/Button";
import { Input } from "ui/components/Input";
import FacebookIcon from "ui/components/icons/FacebookIcon/FacebookIcon";
import GoogleIcon from "ui/components/icons/GoogleIcon/GoogleIcon";
import TwitterIcon from "ui/components/icons/TwitterIcon/TwitterIcon";
import mergeClasses from "utils/mergeClasses/mergeClasses";

function OrDivider() {
  return (
    <div className="mx-auto grid w-fit  grid-flow-col items-center justify-items-center gap-x-2">
      <div className="h-[1px] w-[110px] bg-white/20 " />
      <h1 className="self-center font-moderat text-sm uppercase text-white/80">
        or
      </h1>
      <div className="h-[1px] w-[110px] bg-white/20 " />
    </div>
  );
}

export default function LoginModal({ params: { id: podcastID } }) {
  return (
    <Modal>
      <div
        className={mergeClasses(
          "z-50 grid h-full w-full scale-100 border border-white border-opacity-5  text-white",
          "px-[60px] py-[48px] opacity-100 animate-in fade-in-90 slide-in-from-bottom-10",
          "sm:max-w-lg sm:rounded-[8px] sm:zoom-in-90 sm:slide-in-from-bottom-0",
          "z-50 mx-auto grid h-fit w-full grid-flow-row gap-y-[14px] rounded-md bg-black text-white  sm:max-w-[400px]",
        )}
      >
        <div
          className={mergeClasses(
            "grid grid-flow-row gap-y-[-1px] text-center sm:text-left",
            "pb-[16px]",
          )}
        >
          <h1
            className={mergeClasses(
              "text-slate-900 text-lg font-semibold",
              "text-center font-SpaceGrotesk text-[26px]",
              "dark:text-slate-50",
            )}
          >
            Create Account
          </h1>
        </div>
        <div
          tabIndex={-1}
          className="focus:ring-slate-400 data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 absolute right-4 top-4 rounded-sm opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none hover:opacity-100"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>

        <div className="grid h-full w-full grid-flow-row gap-y-[24px]">
          <div className="z-50 grid grid-flow-row gap-y-[24px]">
            <div className="grid h-fit grid-flow-row items-center gap-2">
              <Input
                id="email"
                name="email"
                aria-label="email"
                tabIndex={1}
                placeholder="Phone, email, or username"
              />
            </div>
            {/* <div className="grid grid-flow-row items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  Username
                </Label>
                <Input id="username" className="col-span-4" />
              </div>
              <div className="grid grid-flow-row items-center gap-2">
                <Label className="text-left">Name</Label>
                <Input id="name" className="col-span-4" />
              </div> */}
            {/* <div className="grid grid-flow-row items-center gap-2">
                <Label
                  htmlFor="email"
                  className="text-left font-moderat text-[14px] text-white/80"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type={"password"}
                  className="col-span-4"
                  {...register("password")}
                  tabIndex={2}
                />
                {formState.errors?.password && (
                  <p className="ml-1 self-center font-visuelt text-xs text-red-500">
                    {formState.errors?.password?.message}
                  </p>
                )}
              </div> */}
            <Button
              tabIndex={3}
              type="submit"
              variant="none"
              className={mergeClasses(CLASSNAMES_BUTTON, "w-full py-1")}
              // loading={loading}
              // onClick={() => {
              //   nhost.auth.signUp({
              //     email: "joe@example.com",
              //     password: "secret-password",
              //   })
              // }}
            >
              Sign In
            </Button>
            {/* {formState.errors?.root?.message && (
              <div className="my-[1px] rounded-[5px] backdrop:brightness-[5%]">
                <p className="self-center font-moderat text-[13px] text-red-500">
                  {formState.errors?.root?.message}
                </p>
              </div>
            )} */}
          </div>
          <OrDivider></OrDivider>
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
              <span className="w-[150px]  text-left">Sign up with Twitter</span>
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
              <span className="w-[150px]  text-left">Sign up with Google</span>
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
          </div>
          <div className="grid w-full grid-flow-row">
            <Button
              variant="ghost"
              className="font-moderat text-[15px] font-normal text-[#71767B] hover:bg-white/5"
            >
              <span>Don't have an account?</span>
              <span className="ml-1 text-[15px] font-semibold ">Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
