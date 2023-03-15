/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"

import { twMerge } from "tailwind-merge"

import { nhost } from "lib/setupBackendConfig"
import asyncTuple from "lib/try/try"
import { Home, LogOut, Mail, Settings, UserCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "ui/components/Avatar"
import Button from "ui/components/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "ui/components/Dropdown"

/**
 * Props for the User component.
 */
export interface UserProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * User
 */
export interface HandleUserSignOutArgs {
  /**
   *
   */
}

/**
 * User Component
 */
export default function User({ className }: UserProps): JSX.Element {
  const user = nhost.auth.getUser()

  /**
   *
   * User
   *
   * @param
   * @returns
   */
  async function handleUserSignOut() {
    await asyncTuple(nhost.auth.signOut())
  }

  return (
    <div className={twMerge("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative h-[32px] w-[32px] self-center rounded-full align-middle">
            <Avatar className="h-[32px] w-[32px]">
              <AvatarImage
                // src="/avatars/mike.jpg"
                alt="Avatar image"
                className="h-[32px] w-[32px] opacity-75 shadow-md brightness-[100%]"
              />
              <AvatarFallback className="border border-white border-opacity-5 bg-fondy  shadow-2xl">
                <span className="self-center align-middle font-moderat text-[10px] text-white/60">
                  US
                </span>
              </AvatarFallback>
            </Avatar>
            {/* <DemoIndicator className="right-0 top-0" /> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[232px] overflow-x-auto rounded-[3px] border-0 bg-[#1f1f23] font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
          align="end"
          forceMount
        >
          <div className="grid grid-flow-col justify-center justify-items-center gap-[10px] py-2 px-2">
            <div className="self-center align-middle">
              <Avatar className="justify-center">
                <AvatarImage
                  // src="/avatars/mike.jpg"
                  alt="Avatar image"
                  className="opacity-75 shadow-md brightness-[100%]"
                />
                <AvatarFallback className="border border-white border-opacity-5 bg-fondy shadow-2xl">
                  <span className="self-center align-middle font-moderat text-[12px] text-white/60">
                    US
                  </span>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="self-center align-middle">
              <h1 className="font-normal text-white/50">{user?.email}</h1>
            </div>
          </div>
          <DropdownMenuSeparator className="mx-[4px]" />
          <DropdownMenuGroup className="font-normal text-white/50">
            <DropdownMenuItem className="font-normal text-white/50">
              <UserCheck className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center  align-middle ">Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Home className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Home</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Contact Us</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-[4px]" />
          <DropdownMenuItem
            onClick={async () => {
              await handleUserSignOut()
            }}
          >
            <LogOut className="mr-3 h-4 w-4 self-center align-middle" />
            <span className="h-4 self-center align-middle">Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

User.displayName = "User"
