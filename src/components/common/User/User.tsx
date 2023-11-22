"use client";

// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-misused-promises */

import {
  Home,
  Mail,
  Settings,
  UserCheck,
  User as UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "ui/components/Avatar";
import Button from "ui/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "ui/components/Dropdown";
import Link from "next/link";
import { nhost } from "lib/setupBackendConfig";

/**
 * Props for the User component.
 */
export interface UserProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * User Component
 */
export default function User() {
  const user = nhost.auth.getUser();

  // const supabase = createServerComponentClient<Database>({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  return (
    <div className="self-center align-middle">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=" h-[32px] w-[32px] self-center rounded-full align-middle">
            <Avatar className="h-[32px] w-[32px]">
              <AvatarImage
                // src="/avatars/mike.jpg"
                alt="Avatar image"
                className="h-[32px] w-[32px] opacity-75 shadow-md brightness-[100%]"
              />
              <AvatarFallback className="border border-white border-opacity-5 bg-fondy  shadow-2xl">
                <UserIcon className="h-[14px] w-[14px] text-white/40"></UserIcon>
              </AvatarFallback>
            </Avatar>
            {/* <DemoIndicator className="right-0 top-0" /> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="shadow-3xl w-[200px] overflow-x-auto rounded-[4px] border-0 bg-[#1f1f23] py-1 font-visuelt text-[14px] font-normal text-white/50"
          align="end"
          forceMount
        >
          <DropdownMenuGroup className="font-normal text-white/50">
            <Link href="/home">
              <DropdownMenuItem>
                <Home className="mr-3 h-4 w-4 self-center align-middle" />
                <span className="h-4 self-center align-middle">Home</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/profile">
              <DropdownMenuItem className="font-normal text-white/50">
                <UserCheck className="mr-3 h-4 w-4 self-center align-middle" />
                <span className="h-4 self-center  align-middle ">Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>

            <Link href="/profile">
              <DropdownMenuItem>
                <Settings className="mr-3 h-4 w-4 self-center align-middle" />
                <span className="h-4 self-center align-middle">Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>

            <Link href="/company">
              <DropdownMenuItem>
                <Mail className="mr-3 h-4 w-4 self-center align-middle" />
                <span className="h-4 self-center align-middle">Contact Us</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-[4px]" />
          <DropdownMenuItem className="font-normal text-white/50">
            <UserCheck className="mr-3 h-4 w-4 self-center align-middle" />
            {user?.displayName ? (
              <span className="h-4 self-center align-middle">Log out</span>
            ) : (
              <Link href="/signup">
                <span className="h-4 self-center align-middle">Sign Up</span>
              </Link>
            )}
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

User.displayName = "User";
