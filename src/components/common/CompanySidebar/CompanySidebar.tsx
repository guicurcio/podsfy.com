'use client';

import Search from 'components/common/Search';
import {
  Archive as ArchiveIcon,
  Boxes as BoxesIcon,
  Building2 as Building2Icon,
  CheckSquare as CheckSquareIcon,
  Code2 as Code2Icon,
  HelpCircle as HelpCircleIcon,
  Users as UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'ui/components/NavigationMenu/NavigationMenu';
import mergeClasses from 'utils/mergeClasses';

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
 * CompanySidebar Props description
 */
export interface CompanySidebarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;

  /**
   *
   * @todo: change.. too muich flow to pass down state.
   */
  descriptionClassname?: string;
  children?: React.ReactNode;
}

/**
 * Card Component
 */
export default function CompanySidebar({
  className,
  children,
  title = 'Trending Episodes',
  description,
  descriptionClassname = '',
}: CompanySidebarProps) {
  return (
    <div className={mergeClasses(className)}>
      <Search
        podcasts={podcasts}
        title="Search for posts, bugfixes..."
        className="w-[275px]"
        popoverClassName="w-[275px]"
      ></Search>
      <NavigationMenu className="w-[275px] py-4">
        <NavigationMenuList className="grid grid-flow-row gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
              <ArchiveIcon className="h-4 w-4 self-center align-middle" />
              <span>All Posts</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/changelog">
              <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
                <CheckSquareIcon className="h-4 w-4 self-center align-middle" />
                <span>Changelog</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
              <Code2Icon className="h-4 w-4 self-center align-middle" />
              <span>Engineering</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about">
              <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
                <UsersIcon className="h-4 w-4 self-center align-middle" />
                <span>About</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
              <HelpCircleIcon className="h-4 w-4 self-center align-middle" />
              <span>Support & FAQ</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
              <Building2Icon className="h-4 w-4 self-center align-middle" />
              <span>Company</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="grid w-[275px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
              <BoxesIcon className="h-4 w-4 self-center align-middle" />
              <span>Platform</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
