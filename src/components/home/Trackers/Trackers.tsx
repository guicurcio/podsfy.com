"use client";

import { Share1Icon } from "@radix-ui/react-icons";
import type { LucideIcon } from "lucide-react";
import { BellPlus, Heart, MessageCircle } from "lucide-react";
import { iconClasses } from "static/customStyles";
import Button from "ui/components/Button";
import useToggle from "ui/hooks/useToggle";
import { useLongPress } from "use-long-press";
import mergeClasses from "utils/mergeClasses";
import triggerInteraction from "../../../../utils/triggerInteraction";

/**
 * Props for the Trackers component.
 */
export interface TrackersProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  podcastID?: string;
  likeCount?: number;
  Icon?: LucideIcon | React.FC;
  tooltipContent?: string;
  likeCountClassName?: string;
  iconSpecification?: "LIKE" | "NOTIFY" | "COMMENT" | "SHARE" | "DISLIKE";
}

/**
 * Trackers Component
 */
export default function Trackers({
  className,
  onLike,
  likeCount,
  Icon,
  tooltipContent = "Hold to like",
  likeCountClassName,
  iconSpecification,
}: TrackersProps) {
  // const [addPodcastToFavoritesMutation, status] =
  //   useAddPodcastToFavoritesMutation()
  // const getProfileBio = useGetProfileBioLazyQuery()

  const [isToggled, setIsToggled] = useToggle(false);

  const bind = useLongPress(() => {
    setIsToggled();
  });

  return (
    <Button
      className={mergeClasses(
        "grid grid-flow-row items-center gap-[6px]  py-2 text-center text-[13px] text-white text-opacity-50 ",
        className,
      )}
      variant="subtle"
      size="none"
      {...bind}
      onClick={() => {
        triggerInteraction("The Joe Rogan Podcast", "tracklist");
      }}
    >
      {Icon && (
        <Icon
          className={mergeClasses(
            iconClasses,
            "mx-auto h-4 w-4 self-center text-center text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
            isToggled && "fill-white/60 brightness-[100%]",
          )}
        ></Icon>
      )}
      {iconSpecification === "LIKE" && (
        <Heart
          className={mergeClasses(
            iconClasses,
            "mx-auto h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
            isToggled && "fill-white/60 brightness-[100%]",
          )}
        ></Heart>
      )}
      {iconSpecification === "NOTIFY" && (
        <BellPlus
          className={mergeClasses(
            iconClasses,
            "mx-auto h-4 w-4 self-center text-center text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
            isToggled && "fill-white/60 brightness-[100%]",
          )}
        ></BellPlus>
      )}
      {iconSpecification === "SHARE" && (
        <Share1Icon
          className={mergeClasses(
            iconClasses,
            "mx-auto h-4 w-4 self-center text-center text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
            isToggled && "fill-white/60 brightness-[100%]",
          )}
        ></Share1Icon>
      )}
      {iconSpecification === "COMMENT" && (
        <MessageCircle
          className={mergeClasses(
            iconClasses,
            "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
            isToggled && "fill-white/60 brightness-[100%]",
          )}
        ></MessageCircle>
      )}
      <span className="font-moderat text-[14px] font-normal text-white text-opacity-60">
        {tooltipContent}
      </span>
    </Button>
  );
}

Trackers.displayName = "Trackers";
