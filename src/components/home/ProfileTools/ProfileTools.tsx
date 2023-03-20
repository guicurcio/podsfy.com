import TooltipContainer from "components/common/TooltipContainer";
import User from "components/common/User";
import ProfileMessages from "components/header/ProfileMessages";
import ProfileNotifications from "components/header/ProfileNotifications";
import { nhost } from "lib/setupBackendConfig";
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
export default function ProfileTools({
  className,
}: ProfileToolsProps): JSX.Element {
  const isTheUserAunthenticated = nhost.auth.isAuthenticated();

  return (
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
      <User className="self-center"></User>
    </div>
  );
}

ProfileTools.displayName = "ProfileTools";
