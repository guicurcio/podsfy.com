'use client';

import { twMerge } from 'tailwind-merge';
import User from 'components/User/User';
import Link from 'next/link';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'ui/components/NavigationMenu/NavigationMenu';
import mergeClasses from 'utils/mergeClasses/mergeClasses';
import { Preset, PresetSelector } from 'ui/components/Selector';

/**
 * Header Props description
 */
export interface HeaderProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export const presets: Preset[] = [
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
    <div className={twMerge('bg-[#0D0E12] border-b border-white/20', className)}>
      <div className="max-w-[1250px] mx-auto w-full">
        <div className="w-full py-3  grid grid-flow-col gap-2">
          <NavigationMenu>
            <NavigationMenuList className="grid grid-flow-col gap-2">
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={mergeClasses(
                      'tracking-[-0.10em] text-2xl font-bold text-white/90 font-SpaceGrotesk mr-3'
                    )}
                  >
                    podsfy
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={mergeClasses(
                      'text-white/90 font-medium rounded-[4px] font-visuelt text-[14px]',
                      'transition-colors focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0  focus:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none bg-transparent',
                      'hover:bg-fondy dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50',
                      'dark:data-[state=open]:bg-slate-800 h-10 py-2 px-3 group w-max'
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={mergeClasses(
                      'text-white/90 font-medium rounded-[4px] font-visuelt text-[14px]',
                      'transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent',
                      'hover:bg-fondy dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50',
                      'dark:data-[state=open]:bg-slate-800 h-10 py-2 px-3 group w-max'
                    )}
                  >
                    Trending
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={mergeClasses(
                      'text-white/90 font-medium rounded-[4px] font-visuelt text-[14px]',
                      'transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent',
                      'hover:bg-fondy dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50',
                      'dark:data-[state=open]:bg-slate-800 h-10 py-2 px-3 group w-max'
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
                      'text-white/90 font-medium rounded-[4px] font-visuelt text-[14px]',
                      'transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 disabled:pointer-events-none bg-transparent',
                      'hover:bg-fondy dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50',
                      'dark:data-[state=open]:bg-slate-800 h-10 py-2 px-3 group w-max'
                    )}
                  >
                    Watchlist
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <PresetSelector presets={presets}></PresetSelector>

          <div>
            <User></User>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.displayName = 'DashboardHeader';
