// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-misused-promises */

"use client"

import TooltipIconButton from "components/home/TooltipIconButton"
import {
  Home,
  Inbox,
  LogOut,
  Mail,
  MessageSquare,
  Settings
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "ui/components/Dropdown"
import mergeClasses from "utils/mergeClasses"

/**
 * Props for the ProfileNotifications component.
 */
export interface ProfileNotificationsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * ProfileNotifications Component
 */
export default function ProfileNotifications({
  className,
}: ProfileNotificationsProps): JSX.Element {
  return (
    <div className={mergeClasses("self-center align-middle", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipIconButton
            className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
            Icon={Inbox}
            tooltipContent="Notifications"
          ></TooltipIconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[200px] overflow-x-auto rounded-[4px] border-0 bg-[#1f1f23] font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
          align="end"
          forceMount
        >
          <DropdownMenuGroup className="font-normal text-white/50">
            <DropdownMenuItem className="font-normal text-white/50">
              <MessageSquare className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center  align-middle ">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Home className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail className="mr-3 h-4 w-4 self-center align-middle" />
              <span className="h-4 self-center align-middle">Contact Us</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-[4px]" />
          <DropdownMenuItem>
            <LogOut className="mr-3 h-4 w-4 self-center align-middle" />
            <span className="h-4 self-center align-middle">Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

ProfileNotifications.displayName = "ProfileNotifications"
