"use client"

import {
  Archive,
  Archive as ArchiveIcon,
  CheckSquare as CheckSquareIcon,
  Code2 as Code2Icon,
  HelpCircle as HelpCircleIcon,
  Users as UsersIcon
} from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "ui/components/NavigationMenu/NavigationMenu"
import mergeClasses from "utils/mergeClasses"

const commonClassName = mergeClasses(
  "focus:bg-slate-100 dark:splitfocus:bg-slate-700 relative grid w-fit cursor-pointer select-none  grid-flow-col items-center",
  "justify-start  gap-[15px] rounded-[4px] py-1.5 px-[16px] font-visuelt text-[16px]  font-normal text-white/80",
  "outline-none transition-colors duration-200 hover:bg-fondy data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
)

const menuItems = [
  {
    label: "Home",
    href: "/home",
    icon: ArchiveIcon,
  },
  {
    label: "Explore",
    href: "/home",
    icon: CheckSquareIcon,
  },
  {
    label: "Popular",
    href: "/home",
    icon: Code2Icon,
  },
  {
    label: "Search",
    href: "/home",
    icon: UsersIcon,
  },

  {
    label: "Lists",
    href: "/home",
    icon: Archive,
  },
  {
    label: "Notifications",
    href: "/home",
    icon: HelpCircleIcon,
  },
  {
    label: "Profile",
    href: "/home",
    icon: HelpCircleIcon,
  },
]

/**
 * Props for the HomeSidebar component.
 */
export interface HomeSidebarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
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
        "bg-[#0D0E12] py-[25px]",
        "border-l border-sharper border-opacity-10",
        "grid grid-flow-col shadow-3xl backdrop-blur-[10px]",
        "h-screen max-h-screen min-h-screen overflow-hidden",
        className
      )}
    >
      <NavigationMenu className=" py-4 px-[20px]">
        <NavigationMenuList className="grid grid-flow-row gap-2 !text-[21px] ">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={commonClassName}>
                    <item.icon className="h-4 w-4 self-center align-middle" />
                    <span>{item.label}</span>
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
  )
}

HomeSidebar.displayName = "HomeSidebar"
