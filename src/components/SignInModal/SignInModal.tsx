'use client';

import {
  NhostProvider,
  useAuthenticated,
  useSignInEmailPassword,
  useUserData,
} from '@nhost/nextjs';
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
import { FormProvider, useForm } from 'react-hook-form';
import { nhost } from 'lib/setupBackendConfig';
import Form from 'components/Form/Form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
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

  const handleSignInFormSubmit = async ({ email, password }: SignInModalFormValues) => {
    try {
      console.log('run');
      const user = await signInEmailPassword(email, password);
      await router.push('/dashboard');
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSignInFormSubmit}>
        <div className="mx-auto w-fit mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="main" size="md">
                sign in
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
                <div className="grid grid-flow-col gap-7 mx-auto pt-3 pb-[-2px]">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild tabIndex={-1} autoFocus={false}>
                        <Button
                          className="w-[75px] h-[65px]"
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
                        <Button
                          className="w-[75px] h-[65px]"
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
                <div className="grid grid-flow-col gap-x-2  mx-auto w-fit items-center justify-items-center">
                  <div className="bg-white/20 w-[100px] h-[1px] " />
                  <h1 className="self-center uppercase font-visuelt text-sm">or</h1>
                  <div className="bg-white/20 w-[100px] h-[1px] " />
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-4">
                    <div className="grid grid-flow-row items-center gap-2">
                      <Label htmlFor="email" className="text-left">
                        Email or Username
                      </Label>

                      <Input
                        id="email"
                        className="col-span-4"
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
                        <p className="self-center ml-1 font-visuelt text-xs text-red-500">
                          {formState.errors?.password?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button loading={isLoading} type="submit" className="w-full" size="lg">
                    Sign In
                  </Button>
                </form>
              </div>

              <DialogFooter className="grid grid-flow-row gap-2 w-full mx-auto">
                <div className="grid grid-flow-row gap-[2px] w-full">
                  <p className="text-sm text-center text-white/70">
                    Don't have an account already?
                  </p>
                  <button className="text-sm font-medium font-visuelt text-center text-white mx-auto w-fit flex">
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
