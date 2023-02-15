'use client';

import { NhostProvider, useSignUpEmailPassword, useUserData } from '@nhost/nextjs';
import { nhost } from 'lib/setupBackendConfig';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from 'ui/components/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'ui/components/Dialog';
import { Input } from 'ui/components/Input';
import Label from 'ui/components/Label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui/components/Tooltip';

/**
 * Join Props description
 */
export interface JoinProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export default function Join({ className }: JoinProps) {
  return (
    <NhostProvider nhost={nhost}>
      <JoinBelow></JoinBelow>
    </NhostProvider>
  );
}

/**
 * Join Component
 */
export function JoinBelow({ className }: JoinProps) {
  const router = useRouter();
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const user = useUserData();
  console.log(user);
  if (user) {
    router.push('/dashboard');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailVerificationToggle, setEmailVerificationToggle] = useState(false);
  const differentPassword = useMemo(
    () => password && password !== confirmPassword && 'Should match the given password',
    [password, confirmPassword]
  );
  const signUp = async () => {
    try {
      const result = await signUpEmailPassword(email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className={twMerge('mx-auto w-fit mt-4', className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="lg">
            Discover New Podcasts - it‘s free!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle className="">Create a Podsfy Account</DialogTitle>
            <DialogDescription className="text-center max-w-[250px] mx-auto text-white/60">
              Create a free account to get access to all the features of Podsfy.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-flow-row gap-6 py-4">
            <div className="grid grid-flow-col gap-7 mx-auto pt-3 pb-[-2px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="w-[75px] h-[65px]" tabIndex={-1} autoFocus={false}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up with Google</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="w-[75px] h-[65px]" tabIndex={-1}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="w-[75px] h-[65px]" autoFocus={false}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="w-[75px] h-[65px]" tabIndex={-1} autoFocus={false}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="grid grid-flow-col gap-x-2  mx-auto w-fit items-center justify-items-center">
              <div className="bg-white/20 w-[100px] h-[1px] " />
              <h1 className="self-center uppercase font-visuelt text-sm">or</h1>
              <div className="bg-white/20 w-[100px] h-[1px] " />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-flow-row items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input
                  id="email"
                  className="col-span-4"
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="grid grid-flow-row items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  Password
                </Label>
                <Input
                  id="password"
                  type={'password'}
                  className="col-span-4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="grid grid-flow-row gap-2 w-full mx-auto">
            <div className="w-full">
              <Button type="submit" className="w-full" size="lg" onClick={signUp}>
                Register Now
              </Button>
            </div>
            <div className="grid grid-flow-row gap-[2px] w-full">
              <p className="text-sm text-center text-white/70">
                Already have an account?
              </p>
              <button className="text-sm font-medium font-visuelt text-center text-white mx-auto w-fit flex">
                Sign In
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
