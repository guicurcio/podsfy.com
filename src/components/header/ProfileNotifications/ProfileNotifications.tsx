"use client";

import TooltipIconButton from "components/home/TooltipIconButton";
import { Inbox } from "lucide-react";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ProfileNotifications component.
 */
export interface ProfileNotificationsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * ProfileNotifications Component
 */
const ProfileNotifications = ({ className }: ProfileNotificationsProps) => (
  <div className={mergeClasses("self-center align-middle", className)}>
    <Link href="/notifications">
      <TooltipIconButton
        className="h-[28px] self-center rounded-md px-2 align-middle text-[13px]"
        Icon={Inbox}
        tooltipContent="Notifications"
      ></TooltipIconButton>
    </Link>
  </div>
);

ProfileNotifications.displayName = "ProfileNotifications";

export default ProfileNotifications;
