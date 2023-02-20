'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  NhostProvider,
  useAuthenticated,
  useSignInEmailPassword,
} from '@nhost/nextjs';
import Form from 'components/Form/Form';
import { nhost } from 'lib/setupBackendConfig';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'ui/components/Button';
import {
  Dialog,
  DialogContent,
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

const schema = z.object({
  email: z.string().email().min(4).max(18),
  password: z.string().min(9, { message: 'Password is required' }),
});

/**
 * SignInModal Props description
 */
export interface SignInModalProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export interface SignInModalFormValues {
  email: string;
  password: string;
}

export default function SignInModal({ className }: SignInModalProps) {
  return (
    <NhostProvider nhost={nhost}>
      <SignInModalForm></SignInModalForm>
    </NhostProvider>
  );
}

/**
 * SignInModal Component
 */
export function SignInModalForm({ className }: SignInModalProps) {
  const { signInEmailPassword, isLoading, isSuccess, isError, error } =
    useSignInEmailPassword();
  const router = useRouter();

  const form = useForm<SignInModalFormValues>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const { register, formState } = form;

  const handleSignInFormSubmit = async ({
    email,
    password,
  }: SignInModalFormValues) => {
    try {
      console.log('run');
      const user = await signInEmailPassword(email, password);
      if (user.isSuccess) {
        router.push('/dashboard');
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSignInFormSubmit}>
        <div className="mx-auto mt-4 w-fit">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="main" size="sm">
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
              <DialogHeader>
                <DialogTitle className="">Sign In</DialogTitle>
                {/* <DialogDescription className="text-center max-w-[250px] mx-auto text-white/60">
              Create a free account to get access to all the features of Podsfy.
            </DialogDescription> */}
              </DialogHeader>
              <div className="grid grid-flow-row gap-6 py-4">
                <div className="mx-auto grid grid-flow-col gap-7 pt-3 pb-[-2px]">
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
                <div className="mx-auto grid w-fit  grid-flow-col items-center justify-items-center gap-x-2">
                  <div className="h-[1px] w-[100px] bg-white/20 " />
                  <h1 className="self-center font-visuelt text-sm uppercase">
                    or
                  </h1>
                  <div className="h-[1px] w-[100px] bg-white/20 " />
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-4">
                    <div className="grid grid-flow-row items-center gap-2">
                      <Label htmlFor="email" className="text-left">
                        Email or Username
                      </Label>

                      <Input
                        className="col-span-4"
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
                    <div className="grid grid-flow-row items-center gap-2">
                      <Label htmlFor="email" className="text-left">
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
                  </div>
                  <Button
                    loading={isLoading}
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </form>
              </div>

              <DialogFooter className="mx-auto grid w-full grid-flow-row gap-2">
                <div className="grid w-full grid-flow-row gap-[2px]">
                  <p className="text-center text-sm text-white/70">
                    Don't have an account already?
                  </p>
                  <button className="mx-auto flex w-fit text-center font-visuelt text-sm font-medium text-white">
                    Sign Up
                  </button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Form>
    </FormProvider>
  );
}
