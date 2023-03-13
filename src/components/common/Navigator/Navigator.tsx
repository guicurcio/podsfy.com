"use client"

import { NavigationMenu } from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "ui/components/NavigationMenu/NavigationMenu"
import mergeClasses from "utils/mergeClasses/mergeClasses"

/**
 * Header Props description
 */
export interface NavigatorProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

export function CustomNagivationMenuLink({ href, children, className = "" }) {
  return (
    <NavigationMenuLink asChild className={className}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  )
}

function isActiveNavItem(path, navItemPath) {
  return path.split("/")[3] === navItemPath
}

function CustomNavigationMenuItem({ isActive, children, className = "" }) {
  return (
    <NavigationMenuItem
      className={mergeClasses(
        isActive && "border-b-[2px] border-white/20",
        className
      )}
    >
      {children}
    </NavigationMenuItem>
  )
}

const navItems = [
  { path: "home", label: "Home" },
  { path: "for-you", label: "For You" },
  { path: "charts", label: "Top Charts" },
  { path: "podcast/category/health", label: "Health" },
  { path: "podcast/category/relationships", label: "Relationships" },
  { path: "podcast/category/conversations", label: "Conversations" },
  { path: "podcast/category/entrepreneurship", label: "Entrepreneurship" },
  { path: "podcast/category/finance", label: "Finance" },
  { path: "podcast/category/serial", label: "Serial" },
]

/**
 * Header Component
 */
export default function Navigator({ className }: NavigatorProps) {
  const pathName = usePathname()
  // .split("/")[3] // replace with actual path name

  return (
    <div
      className={mergeClasses(
        "mx-auto grid grid-flow-col  items-center justify-center",
        className
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="mx-auto grid grid-flow-col items-center gap-[8px]">
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
  )
}

Navigator.displayName = "Navigator"
