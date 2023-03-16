"use client";

import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "ui/components/NavigationMenu/NavigationMenu";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/**
 * Header Props description
 */
export interface NavigatorProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  navItems?: { path: string; label: string }[];
}

export function CustomNagivationMenuLink({ href, children, className = "" }) {
  return (
    <NavigationMenuLink asChild className={className}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  );
}

function isActiveNavItem(path, navItemPath) {
  return path.split("/")[3] === navItemPath;
}

function CustomNavigationMenuItem({ isActive, children, className = "" }) {
  return (
    <NavigationMenuItem
      className={mergeClasses(
        isActive && "border-b-[2px] border-white/20",
        className,
      )}
    >
      {children}
    </NavigationMenuItem>
  );
}

const defaultNavItems = [
  { path: "home", label: "Home" },
  { path: "for-you", label: "For You" },
  { path: "charts", label: "Following" },
  { path: "charts", label: "Latest" },
  { path: "podcast/category/health", label: "Health" },
  { path: "podcast/category/relationships", label: "Relationships" },
  { path: "podcast/category/conversations", label: "Conversations" },
  { path: "podcast/category/entrepreneurship", label: "Entrepreneurship" },
];

/**
 * Header Component
 */
export default function Navigator({
  className,
  navItems = defaultNavItems,
}: NavigatorProps) {
  const pathName = usePathname();
  // .split("/")[3] // replace with actual path name

  return (
    <div
      className={mergeClasses(
        "mx-auto grid grid-flow-col  items-center justify-center pb-1",
        className,
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="mx-auto grid grid-flow-col items-center gap-[8px] text-[14px] text-white/60">
          {navItems.map((item) => (
            <CustomNavigationMenuItem
              key={item.path}
              isActive={isActiveNavItem(pathName, item.path)}
              className={
                item.path.split("/")[1] === "category" ? "hidden md:block" : ""
              }
            >
              <CustomNagivationMenuLink href={`/${item.path}`}>
                {item.label}
              </CustomNagivationMenuLink>
            </CustomNavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

Navigator.displayName = "Navigator";
