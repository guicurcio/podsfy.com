'use client';

import Search from 'components/common/Search';
import SignInModal from 'components/SignInModal';
import {
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  UserIcon,
  UserPlus,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarImage } from 'ui/components/Avatar';
import Button from 'ui/components/Button/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'ui/components/Dropdown';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'ui/components/NavigationMenu/NavigationMenu';
import Separator from 'ui/components/Separator';
import mergeClasses from 'utils/mergeClasses/mergeClasses';

/**
 * Header Props description
 */
export interface HeaderProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export const podcasts = [
  {
    id: '9cb0e66a-9937-465d-a188-2c4c4ae2401f',
    name: 'Grammatical Standard English',
  },
  {
    id: '61eb0e32-2391-4cd3-adc3-66efe09bc0b7',
    name: 'Summarize for a 2nd grader',
  },
  {
    id: 'a4e1fa51-f4ce-4e45-892c-224030a00bdd',
    name: 'Text to command',
  },
  {
    id: 'cc198b13-4933-43aa-977e-dcd95fa30770',
    name: 'Q&A',
  },
  {
    id: 'adfa95be-a575-45fd-a9ef-ea45386c64de',
    name: 'English to other languages',
  },
  {
    id: 'c569a06a-0bd6-43a7-adf9-bf68c09e7a79',
    name: 'Parse unstructured data',
  },
  {
    id: '15ccc0d7-f37a-4f0a-8163-a37e162877dc',
    name: 'Classification',
  },
  {
    id: '4641ef41-1c0f-421d-b4b2-70fe431081f3',
    name: 'Natural language to Python',
  },
  {
    id: '48d34082-72f3-4a1b-a14d-f15aca4f57a0',
    name: 'Explain code',
  },
  {
    id: 'dfd42fd5-0394-4810-92c6-cc907d3bfd1a',
    name: 'Chat',
  },
];

/**
 * Header Component
 */
export default function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        'relative z-50 h-full w-full border-b border-white border-opacity-5 bg-[#0D0E12] bg-opacity-100',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-flow-row items-center gap-2 ">
          <div className="grid grid-flow-col place-content-between py-1.5">
            <Link href="/" legacyBehavior passHref>
              <a
                className={mergeClasses(
                  'cursor-pointer py-2 px-3 font-SpaceGrotesk text-[28px] font-bold tracking-[-0.08em] text-[#CDCDCD]',
                )}
              >
                podsfy
              </a>
            </Link>
            <Search podcasts={podcasts} className="w-[800px]"></Search>
            <SignInModal></SignInModal>
          </div>
          <div className="mx-auto grid w-full  max-w-[900px] grid-flow-col items-center py-2.5">
            <NavigationMenu>
              <NavigationMenuList className="grid grid-flow-col items-center gap-[8px]">
                <NavigationMenuItem>
                  <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={mergeClasses(
                        'rounded-[4px] font-visuelt text-[14px] font-medium text-white/90',
                        'transition-colors focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent',
                        'bg-transparent disabled:pointer-events-none disabled:opacity-50',
                        'dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 hover:bg-fondy',
                        'dark:data-[state=open]:bg-slate-800 group h-10 w-max py-2 px-3',
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/for-you" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={mergeClasses(
                        'rounded-[4px] font-visuelt text-[14px] font-medium text-white/90',
                        'transition-colors focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent',
                        'bg-transparent disabled:pointer-events-none disabled:opacity-50',
                        'dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 hover:bg-fondy',
                        'dark:data-[state=open]:bg-slate-800 group h-10 w-max py-2 px-3',
                      )}
                    >
                      For you
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={mergeClasses(
                        'rounded-[4px] font-visuelt text-[14px] font-medium text-white/90',
                        'transition-colors focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent',
                        'bg-transparent disabled:pointer-events-none disabled:opacity-50',
                        'dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 hover:bg-fondy',
                        'dark:data-[state=open]:bg-slate-800 group h-10 w-max py-2 px-3',
                      )}
                    >
                      Top Charts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={mergeClasses(
                        'rounded-[4px] font-visuelt text-[14px] font-medium text-white/90',
                        'transition-colors focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent',
                        'bg-transparent disabled:pointer-events-none disabled:opacity-50',
                        'dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 hover:bg-fondy',
                        'dark:data-[state=open]:bg-slate-800 group h-10 w-max py-2 px-3',
                      )}
                    >
                      Watchlist
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <Separator orientation="vertical"></Separator>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={mergeClasses(
                        'rounded-[4px] font-visuelt text-[14px] font-medium text-white/90',
                        'transition-colors focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent',
                        'bg-transparent disabled:pointer-events-none disabled:opacity-50',
                        'dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 hover:bg-fondy',
                        'dark:data-[state=open]:bg-slate-800 group h-10 w-max py-2 px-3',
                      )}
                    >
                      Watchlist
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className=" relative h-7 w-7 rounded-full"
                >
                  <Avatar className="absolute h-7 w-7">
                    <AvatarImage src="../bg" alt="@guicurcio" />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent forceMount>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.displayName = 'DashboardHeader';
