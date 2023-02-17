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
  return (
    <NhostProvider nhost={nhost}>
      <SignUpModalForm></SignUpModalForm>
    </NhostProvider>
  );
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
  const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();

  const form = useForm<SignUpModalFormValues>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(SIGN_UP_MODAL_VALIDATION_SCHEMA),
  });

  const { register, formState } = form;

  const handleSignUpFormSubmit = async ({ email, password }: SignUpModalFormValues) => {
    try {
      const newUser = await signUpEmailPassword(email, password);
      console.log(newUser);
      if (newUser.isSuccess) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
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
            <div className="grid grid-flow-col gap-8 pt-2 mx-auto pb-[-2px]">
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
          </div>
          <div className="grid grid-flow-col gap-x-2  mx-auto w-fit items-center justify-items-center">
            <div className="bg-white/20 w-[100px] h-[1px] " />
            <h1 className="self-center uppercase font-visuelt text-sm">or</h1>
            <div className="bg-white/20 w-[100px] h-[1px] " />
          </div>
          <FormProvider {...form}>
            <Form onSubmit={handleSignUpFormSubmit} className="grid grid-flow-row gap-3">
              <div className="grid grid-flow-row items-center gap-2">
                <Label
                  htmlFor="email"
                  className="text-left text-white/80 text-[14px] font-moderat"
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
                  <p className="self-center ml-1 font-visuelt text-xs text-red-500">
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
                  className="text-left text-white/80 text-[14px] font-moderat"
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
                  <p className="self-center ml-1 font-visuelt text-xs text-red-500">
                    {formState.errors?.password?.message}
                  </p>
                )}
              </div>
              <Button loading={isLoading} type="submit" className="w-full" size="lg">
                Register Now
              </Button>
            </Form>
          </FormProvider>

          <DialogFooter className="grid grid-flow-row gap-2 w-full mx-auto">
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
