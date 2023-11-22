import TooltipContainer from "components/common/TooltipContainer";
import User from "components/common/User";
import ProfileNotifications from "components/header/ProfileNotifications";
import mergeClasses from "utils/mergeClasses";

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
const ProfileTools = ({ className }: ProfileToolsProps) => (
  <div
    className={mergeClasses(
      "grid w-full grid-flow-col place-items-end items-end justify-end justify-items-end gap-[10px]",
      className,
    )}
  >
    <TooltipContainer>
      <ProfileNotifications></ProfileNotifications>
    </TooltipContainer>
    <User></User>
  </div>
);

ProfileTools.displayName = "ProfileTools";

export default ProfileTools;
