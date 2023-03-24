"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Form from "components/Form/Form";
import CLASSNAMES_BUTTON from "lib/constants/constants";
import { nhost } from "lib/setupBackendConfig";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "ui/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "ui/components/Dialog";
import { Input } from "ui/components/Input";
import FacebookIcon from "ui/components/icons/FacebookIcon/FacebookIcon";
import GoogleIcon from "ui/components/icons/GoogleIcon/GoogleIcon";
import TwitterIcon from "ui/components/icons/TwitterIcon/TwitterIcon";
import useToggle from "ui/hooks/useToggle";
import mergeClasses from "utils/mergeClasses/mergeClasses";
import * as z from "zod";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Join Props description
 */
export interface JoinProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;

  baseState?: "SIGNING IN" | "REGISTERING";
  openModalState?: boolean;
  onClickOutside?: () => void;
}

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

const SIGN_UP_MODAL_VALIDATION_SCHEMA = z.object({
  email: z
    .string()
    .email()
    .min(4)
    .max(32, { message: "The Email should be at most 32 characters long." }),
  password: z
    .string()
    .min(3, { message: "The password should be at least 3 characters long." }),
});

// function useEffectOnce(effect: EffectCallback) {
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(effect, []);
// }

export interface SignUpModalFormValues {
  email: string;
  password: string;
}

/**
 * SignUpModal Component
 */
export default function SignUpModal({
  className,
  baseState,
  openModalState,
  onClickOutside,
}: JoinProps) {
  const [loading, toggleLoading] = useToggle(false);
  const [action, setSignAction] = useState<"REGISTERING" | "SIGNING IN">(
    baseState || "REGISTERING",
  );

  // const mounted = useIsMounted();
  const router = useRouter();

  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const form = useForm<SignUpModalFormValues>({
    reValidateMode: "onChange",
    resolver: zodResolver(SIGN_UP_MODAL_VALIDATION_SCHEMA),
  });

  const { register, formState, setError: setFormError } = form;

  const handleSignInFormSubmit = async ({
    email,
    password,
  }: SignUpModalFormValues) => {
    toggleLoading();
    try {
      const session = await nhost.auth.signIn({
        email,
        password,
      });
      if (session?.session) {
        onClickOutside();
        toggleLoading();

        router.refresh();
        return;
      }

      if (session?.error) {
        toggleLoading();

        if (session.error.error === "already-signed-in") {
          onClickOutside();
          router.refresh();
          return;
        }

        if (session.error.error === "invalid-email-password") {
          setFormError("root", {
            type: "manual",
            message:
              "Incorrect email or password combination. Please try again, or sign up for a new account.",
          });
          return;
        }

        if (session.error.error === "invalid-request") {
          if (session.error.message.includes("email")) {
            setFormError("email", {
              type: "manual",
              message: session.error.message,
            });
            return;
          }

          setFormError("root", {
            type: "manual",
            message: session.error.message,
          });
          return;
        }
      }
    } catch (error_) {
      if (toggleLoading) {
        toggleLoading();
      }
      toggleLoading();
      setError({
        message: error_.message as string,
        isError: true,
      });
    } finally {
      if (error.isError) {
        toggleLoading();
      }
    }
  };

  const handleSignUpFormSubmit = async ({
    email,
    password,
  }: SignUpModalFormValues) => {
    toggleLoading();
    try {
      const session = await nhost.auth.signUp({
        email,
        password,
      });

      if (session?.session) {
        onClickOutside();
        router.refresh();
        return;
      }

      if (session?.error) {
        toggleLoading();
        if (session.error.error === "already-signed-in") {
          router.refresh();
          // @TODO: Tell the user that they are already signed in
          return;
        }

        if (session.error.error === "email-already-in-use") {
          setFormError("email", {
            type: "manual",
            message:
              "This email is already in use. Please sign in or try another one.",
          });
          // handleSignInFormSubmit({ email, password }),
        }
      }
      router.refresh();
    } catch (error_) {
      console.log(error_, "error_");

      toggleLoading();
      setFormError("root", {
        type: "manual",
        message:
          (error_.message as string) ||
          "Something went wrong during sign up, please try in a few minutes. We have been notified of this issue and will fix it as soon as possible.",
      });
    }
  };

  return (
    <Dialog open={openModalState}>
      <DialogPortal className="">
        <DialogOverlay
          className="z-0"
          onClick={() => {
            onClickOutside();
          }}
        ></DialogOverlay>
        <DialogContent
          className={mergeClasses(
            "z-50 mx-auto grid h-fit w-full grid-flow-row gap-y-[14px] bg-black  sm:max-w-[400px]",
            className,
          )}
          forceMount
        >
          <DialogHeader className="pb-[16px]">
            <DialogTitle>Create Account</DialogTitle>
          </DialogHeader>
          <DialogClose
            tabIndex={-1}
            onClick={() => {
              onClickOutside();
            }}
            className="focus:ring-slate-400 data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 absolute top-4 right-4 rounded-sm opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="grid h-full w-full grid-flow-row gap-y-[24px]">
            <FormProvider {...form}>
              <Form
                onSubmit={
                  action === "REGISTERING"
                    ? handleSignUpFormSubmit
                    : handleSignInFormSubmit
                }
                className="z-50 grid grid-flow-row gap-y-[24px]"
              >
                <div className="grid h-fit grid-flow-row items-center gap-2">
                  <Input
                    id="email"
                    {...register("email")}
                    name="email"
                    aria-label="email"
                    tabIndex={1}
                    placeholder="Phone, email, or username"
                  />
                  {formState?.errors?.email && (
                    <p className="ml-1 self-center font-visuelt text-xs text-red-500">
                      {formState.errors?.email?.message}
                    </p>
                  )}
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
                  loading={loading}
                  // onClick={() => {
                  //   nhost.auth.signUp({
                  //     email: "joe@example.com",
                  //     password: "secret-password",
                  //   })
                  // }}
                >
                  {action === "REGISTERING" ? "Sign Up" : "Sign In"}
                </Button>
                {formState.errors?.root?.message && (
                  <div className="my-[1px] rounded-[5px] backdrop:brightness-[5%]">
                    <p className="self-center font-moderat text-[13px] text-red-500">
                      {formState.errors?.root?.message}
                    </p>
                  </div>
                )}
              </Form>
            </FormProvider>
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
                <span className="w-[150px]  text-left">
                  Sign up with Twitter
                </span>
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
                <span className="w-[150px]  text-left">
                  Sign up with Google
                </span>
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
                <span className="w-[150px] text-left">
                  Sign up with Facebook
                </span>
              </Button>
            </div>
            <DialogFooter className="grid w-full grid-flow-row">
              <Button
                variant="ghost"
                className="font-moderat text-[15px] font-normal text-[#71767B] hover:bg-white/5"
                onClick={() => {
                  if (action === "SIGNING IN") {
                    setSignAction("REGISTERING");
                  }
                  if (action === "REGISTERING") {
                    setSignAction("SIGNING IN");
                  }
                }}
              >
                <span>
                  {action === "REGISTERING"
                    ? " Already have an account?"
                    : `Don't have an account?`}
                </span>
                <span className="ml-1 text-[15px] font-semibold ">
                  {action === "SIGNING IN" ? "Sign Up" : "Sign In"}
                </span>
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
