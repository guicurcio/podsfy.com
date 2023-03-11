'use client';

import Search from 'components/common/Search';
import { ArchiveIcon, KeyboardIcon, UsersIcon, ZapIcon } from 'lucide-react';
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

export default function HomePage() {
  return (
    <div className="relative z-50 m-[80px] mx-auto  max-w-[1100px]">
      <div className="grid w-full grid-flow-col ">
        <div
          className={mergeClasses(
            'h-[1200px]',
            ' overflow-hidden rounded-[5px]',
            'bg-[#0D0E12] py-[25px]',
            'border border-sharper border-opacity-10',
            'px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]',
          )}
        >
          <div className="grid grid-flow-row py-4 px-4">
            <Search
              podcasts={podcasts}
              title="Search posts, changes, bugfixes..."
              className="w-[300px]"
              popoverClassName="w-[300px]"
            ></Search>
            <NavigationMenu className="w-[300px] py-4">
              <NavigationMenuList className='grid grid-flow-row gap-2'>
                <NavigationMenuItem>
                  <NavigationMenuLink className="grid w-[300px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
                    <ArchiveIcon className="h-4 w-4 self-center align-middle" />
                    <span>All Posts</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="grid w-[300px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
                    <ZapIcon className="h-4 w-4 self-center align-middle" />
                    <span>Changelog</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="grid w-[300px] cursor-pointer grid-flow-col items-start justify-start gap-3 font-normal text-white/80">
                    <UsersIcon className="h-4 w-4 self-center align-middle" />
                    <span>About</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
