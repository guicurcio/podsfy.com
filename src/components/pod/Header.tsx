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
    slug: 'the-joe-rogan-experience',
    name: 'The Joe Rogan Experience',
  },
  {
    slug: 'on-purpose-with-jay-shetty',
    name: 'On Purpose with Jay Shetty',
  },
  {
    slug: 'call-her-daddy',
    name: 'Call Her Daddy',
  },
  {
    slug: 'found-my-fitness',
    name: 'Found My Fitness',
  },
  {
    slug: 'all-in-podcast',
    name: 'All-In',
  },
  {
    slug: 'the-huberman-lab-podcast',
    name: 'The Huberman Lab Podcast',
  },
  {
    slug: 'between-good-and-evil',
    name: 'Between Good and Evil',
  },
];

/**
 * Header Component
 */
export default function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        'relative z-50 h-full w-full border-b border-gray-700 border-opacity-25 bg-[#0D0E12] bg-opacity-100',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="mx-auto grid grid-flow-row items-center gap-2 pr-[90px] pl-[60px]">
          <div className="grid grid-flow-col place-content-between py-1.5">
            <Link href="/" legacyBehavior passHref>
              <a
                className={mergeClasses(
                  'cursor-pointer py-2 px-3 font-SpaceGrotesk text-[26px] font-bold tracking-[-0.08em] text-[#CDCDCD]',
                )}
              >
                podsfy
              </a>
            </Link>
            <Search podcasts={podcasts} className=""></Search>
            <SignInModal></SignInModal>
          </div>
          <div className="mx-auto grid w-[1200px]  max-w-[1200px] grid-flow-col   items-center justify-center pb-3">
            <NavigationMenu>
              <NavigationMenuList className="mx-auto grid grid-flow-col items-center gap-[8px] ">
                <NavigationMenuItem>
                  <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/for-you" legacyBehavior passHref>
                    <NavigationMenuLink>For you</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/charts" legacyBehavior passHref>
                    <NavigationMenuLink>Top Charts</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/podcast/category/new" passHref>
                    <NavigationMenuLink>New</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <Separator orientation="vertical"></Separator>
                <NavigationMenuItem>
                  <Link href="/podcast/category/health" passHref>
                    <NavigationMenuLink>Health</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcast/category/relationships" passHref>
                    <NavigationMenuLink>Relationships</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcast/category/conversations" passHref>
                    <NavigationMenuLink>Conversations</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcast/category/entrepreneurship" passHref>
                    <NavigationMenuLink>Entrepreneurship</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcast/category/finance" passHref>
                    <NavigationMenuLink>Finance</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcast/category/serial" passHref>
                    <NavigationMenuLink>Serial</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className=" relative h-7 w-7 rounded-full">
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
