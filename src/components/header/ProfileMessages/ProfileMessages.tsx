// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-misused-promises */

"use client"

import TooltipIconButton from "components/home/TooltipIconButton"
import { Home, Mail, MessageSquare, Settings } from "lucide-react"
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
 * Props for the ProfileMessages component.
 */
export interface ProfileMessagesProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * ProfileMessages Component
 */
export default function ProfileMessages({
  className,
}: ProfileMessagesProps): JSX.Element {
  return (
    <div className={mergeClasses("self-center align-middle", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipIconButton
            className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
            Icon={MessageSquare}
            tooltipContent="Messages"
          ></TooltipIconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[200px] overflow-x-auto rounded-[4px] border-0 bg-[#1f1f23] font-visuelt text-[14px] font-normal text-white/50 shadow-3xl"
          align="end"
          forceMount
        >
          <div className="grid grid-flow-col justify-center justify-items-center gap-[10px] py-2 px-2">
            <div className="self-center align-middle">
              <h1 className="font-normal text-white/50">Messages</h1>
            </div>
          </div>
          <DropdownMenuSeparator className="mx-[4px]" />
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

ProfileMessages.displayName = "ProfileMessages"
