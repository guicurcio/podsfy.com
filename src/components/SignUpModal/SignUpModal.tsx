'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  NhostProvider,
  useAuthenticated,
  useSignUpEmailPassword,
  useUserData,
} from '@nhost/nextjs';
import Form from 'components/Form/Form';
import { nhost } from 'lib/setupBackendConfig';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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
import * as z from 'zod';

/**
 * Join Props description
 */
export interface JoinProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

const SIGN_UP_MODAL_VALIDATION_SCHEMA = z.object({
  email: z
    .string()
    .email()
    .min(4)
    .max(32, { message: 'The Email should be at most 32 characters long.' }),
  password: z.string().min(9, { message: 'Password is required' }),
});

export default function SignUpModal({ className }: JoinProps) {
  return <SignUpModalForm></SignUpModalForm>;
}

export interface SignUpModalFormValues {
  email: string;
  password: string;
}

/**
 * SignUpModal Component
 */
export function SignUpModalForm({ className }: JoinProps) {
  const router = useRouter();

  const form = useForm<SignUpModalFormValues>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(SIGN_UP_MODAL_VALIDATION_SCHEMA),
  });

  const { register, formState } = form;

  const handleSignUpFormSubmit = async ({
    email,
    password,
  }: SignUpModalFormValues) => {
    try {
      // const newUser = await signUpEmailPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={twMerge('mx-auto mt-4 w-fit', className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="lg">
            Discover New Podcasts - it‘s free!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle className="">Create a Podsfy Account</DialogTitle>
            <DialogDescription className="mx-auto max-w-[250px] text-center text-white/60">
              Create a free account to get access to all the features of Podsfy.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-flow-row gap-6 py-4">
            <div className="mx-auto grid grid-flow-col gap-8 pt-2 pb-[-2px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button
                      className="h-[65px] w-[75px]"
                      tabIndex={-1}
                      autoFocus={false}
                    >
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up with Google</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="h-[65px] w-[75px]" tabIndex={-1}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button className="h-[65px] w-[75px]" autoFocus={false}>
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                    <Button
                      className="h-[65px] w-[75px]"
                      tabIndex={-1}
                      autoFocus={false}
                    >
                      <img src="/images/google.svg" alt="Google" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sign Up</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="mx-auto grid w-fit  grid-flow-col items-center justify-items-center gap-x-2">
            <div className="h-[1px] w-[100px] bg-white/20 " />
            <h1 className="self-center font-visuelt text-sm uppercase">or</h1>
            <div className="h-[1px] w-[100px] bg-white/20 " />
          </div>
          <FormProvider {...form}>
            <Form
              onSubmit={handleSignUpFormSubmit}
              className="grid grid-flow-row gap-3"
            >
              <div className="grid grid-flow-row items-center gap-2">
                <Label
                  htmlFor="email"
                  className="text-left font-moderat text-[14px] text-white/80"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  {...register('email')}
                  name="email"
                  aria-label="email"
                />
                {formState.errors?.email && (
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
              <div className="grid grid-flow-row items-center gap-2">
                <Label
                  htmlFor="email"
                  className="text-left font-moderat text-[14px] text-white/80"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type={'password'}
                  className="col-span-4"
                  {...register('password')}
                />
                {formState.errors?.password && (
                  <p className="ml-1 self-center font-visuelt text-xs text-red-500">
                    {formState.errors?.password?.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" size="lg">
                Register Now
              </Button>
            </Form>
          </FormProvider>

          <DialogFooter className="mx-auto grid w-full grid-flow-row gap-2">
            <div className="grid w-full grid-flow-row gap-[2px]">
              <p className="text-center text-sm text-white/70">
                Already have an account?
              </p>
              <button className="mx-auto flex w-fit text-center font-visuelt text-sm font-medium text-white">
                Sign In
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
