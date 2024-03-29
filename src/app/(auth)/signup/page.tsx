"use client";

import { Label } from "components/new-york/ui/label";
import CLASSNAMES_BUTTON from "lib/constants/constants";
import { useState } from "react";
import Button from "ui/components/Button";
import { Input } from "ui/components/Input";
import FacebookIcon from "ui/components/icons/FacebookIcon";
import GoogleIcon from "ui/components/icons/GoogleIcon";
import TwitterIcon from "ui/components/icons/TwitterIcon";
import mergeClasses from "utils/mergeClasses";
import { useRouter } from "next/navigation";
import { nhost } from "lib/setupBackendConfig";
import { ZodError, z } from "zod";

const Credentials = z.object({
  email: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z
    .string()
    .min(8, { message: "Must be 8 or more characters long" })
    .max(32, { message: "Must be 32 or fewere characters long" }),
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      Credentials.parse({ email, password });
    } catch (er) {
      if (er instanceof ZodError) {
        // Replace `ZodError` with the correct type if different
        const messages = er.errors.map(
          (e) => `${e.path.join(".")} ${e.message}`,
        ); // Assuming `errors` is the array
        console.log(messages);
        setErrorMessage(messages);
        return;
      }
    }
    const res = await nhost.auth.signUp({
      email,
      password,
    });
    console.log(res);
    if (res?.session) {
      router.push("/");
    } else {
      if (res.error.message.includes("Network Error")) {
        setErrorMessage(["Please try again later"]);
      }
      if (res.error.message.includes("Incorrect email or password")) {
        setErrorMessage(["Incorrect email or password"]);
      }
      if (res.error.message.includes("User is already signed in")) {
        router.push("/");
      }
      if (res.error.message.includes("Email already in use")) {
        setErrorMessage(["Email already in use"]);
      }
    }
    router.refresh();
    return;
  };

  return (
    <div
      className={mergeClasses(
        "z-50 mx-auto grid h-full w-[400px] scale-100 text-white",
        "py-[48px] opacity-100",
        "mx-auto grid h-fit grid-flow-row gap-y-[14px] rounded-md text-white  sm:max-w-[500px]",
      )}
    >
      <form action={handleSignUp}>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setErrorMessage([]);
                setEmail(e.target.value);
              }}
              placeholder="m@example.com"
            />
          </div>
          <div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setErrorMessage([]);
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500">
              {errorMessage?.map((err) => (
                <span key={err} className="block lowercase">
                  {err}
                </span>
              ))}
            </div>
          )}
        </div>
        <Button
          variant="none"
          className={mergeClasses(
            CLASSNAMES_BUTTON,
            "mx-0 mt-[20px] w-full grid-flow-col justify-items-start gap-x-2",
          )}
          type="submit"
        >
          <span className="text-center">Sign up</span>
        </Button>
      </form>
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
      </div>
    </div>
  );
}
