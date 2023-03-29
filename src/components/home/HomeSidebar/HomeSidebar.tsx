"use client";

import {
  File,
  Globe,
  Home,
  Inbox,
  MessageSquare,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "ui/components/NavigationMenu/NavigationMenu";
import mergeClasses from "utils/mergeClasses";

const commonClassName = mergeClasses(
  "focus:bg-slate-100 relative grid w-fit cursor-pointer select-none grid-flow-col items-center",
  "justify-start  gap-[8px] rounded-[12px] py-[8px] pl-[16px] pr-[18px] font-visuelt text-[15px]  font-normal text-white/60",
  "outline-none transition-colors duration-300 hover:bg-fondy hover:bg-opacity-60 bg-backdrop-brightness-[50%] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
);

const menuItems = [
  {
    label: "Home",
    href: "/home",
    icon: Home,
  },
  {
    label: "Explore",
    href: "/home",
    icon: Globe,
  },
  {
    label: "Lists",
    href: "/home",
    icon: File,
  },
  {
    label: "Search",
    href: "/home",
    icon: Search,
  },
  {
    label: "Notifications",
    href: "/home",
    icon: Inbox,
  },
  {
    label: "Messages",
    href: "/home",
    icon: MessageSquare,
  },
  {
    label: "Profile",
    href: "/home",
    icon: User,
  },
];

/**
 * Props for the HomeSidebar component.
 */
export interface HomeSidebarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Scroller Component
 */
export default function HomeSidebar({
  className,
}: HomeSidebarProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "bg-[#0D0E12]",
        "border-l border-sharper border-opacity-10",
        "grid grid-flow-col shadow-3xl backdrop-blur-[10px]",
        "h-screen max-h-screen min-h-screen overflow-hidden",
        className,
      )}
    >
      <NavigationMenu className="px-[20px] pb-4 pt-2">
        <NavigationMenuList className="grid grid-flow-row gap-[6px]">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={commonClassName}>
                    <item.icon className="h-[15px] w-[15px] self-center align-middle text-white/40" />
                    <span className="h-4 w-fit self-center pb-[21px] align-middle font-moderat text-[14px] font-normal text-white/60">
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </Link>
              ) : (
                <NavigationMenuLink className={commonClassName}>
                  <item.icon className="h-4 w-4 self-center align-middle" />
                  <span>{item.label}</span>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

HomeSidebar.displayName = "HomeSidebar";
