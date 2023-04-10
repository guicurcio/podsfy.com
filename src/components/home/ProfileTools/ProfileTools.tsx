import TooltipContainer from "components/common/TooltipContainer";
import ProfileMessages from "components/header/ProfileMessages";
import ProfileNotifications from "components/header/ProfileNotifications";
import { Suspense, lazy } from "react";
import mergeClasses from "utils/mergeClasses";

const User = lazy(() => import("components/common/User"));

/**
 * Props for the ProfileTools component.
 */
export interface ProfileToolsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * ProfileTools Component
 */
const ProfileTools = ({
  className,
}: ProfileToolsProps) => (
  <div
    className={mergeClasses(
      "col-span-3 grid w-full grid-flow-col place-items-end items-end justify-end justify-items-end gap-[10px]",
      className,
    )}
  >
    <TooltipContainer>
      <ProfileNotifications></ProfileNotifications>
      <ProfileMessages></ProfileMessages>
    </TooltipContainer>
    {/* <Suspense fallback={<div className="h-10 w-10 rounded-full"></div>}>
      <User></User>
    </Suspense> */}
  </div>
);

ProfileTools.displayName = "ProfileTools";

export default ProfileTools;