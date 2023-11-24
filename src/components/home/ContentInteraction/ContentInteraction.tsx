"use client";

import type { LucideIcon } from "lucide-react";
import { BellPlus, Heart, MessageCircle } from "lucide-react";
import { iconClasses } from "static/customStyles";
import Button from "ui/components/Button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from "ui/components/Tooltip";
import useToggle from "ui/hooks/useToggle";
import mergeClasses from "utils/mergeClasses";
import { nhost } from "lib/setupBackendConfig";
import useSWR from "swr";
import triggerInteraction from "../../../../utils/triggerInteraction";
import { isArray } from "@apollo/client/utilities";
/**
 * Props for the ContentInteraction component.
 */
export interface ContentInteractionProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  onLike?: () => void;
  podcastID?: string | number;
  likeCount?: number;
  Icon?: LucideIcon | React.FC;
  tooltipContent?: string;
  likeCountClassName?: string;
  iconSpecification?: "LIKE" | "NOTIFY" | "COMMENT" | "SHARE";
}

export async function fetcher(...args) {
  console.log(...args);
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
}

export async function fetchWithToken(...args) {
  const [url, token] = [...args];
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function fetchWithTokenMutation(...args) {
  console.log("called");
  const [url, token] = [...args];
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

/**
 * ContentInteraction Component
 */
export default function ContentInteraction({
  className,
  likeCount,
  Icon,
  tooltipContent = "Hold to like",
  likeCountClassName,
  iconSpecification,
  podcastID,
}: ContentInteractionProps) {
  // const [addPodcastToFavoritesMutation, status] =
  //   useAddPodcastToFavoritesMutation()
  // const getProfileBio = useGetProfileBioLazyQuery()

  const accessToken = nhost.auth.getAccessToken();
  const followingPodcasts = useSWR(
    "http://localhost:8080/api/rest/UserPodcastFollows",
    (url) => fetchWithToken(url, accessToken),
  );
  const user = nhost.auth.getUser();

  const [isToggled, setIsToggled] = useToggle(false);

  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={mergeClasses(
              "grid h-[28px] grid-flow-col self-center align-middle text-[13px]",
              className,
            )}
            variant="subtle"
            size="none"
            onClick={async () => {
              try {
                const res = await fetch(
                  "http://localhost:8080/api/rest/insertlike/",
                  {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },

                    body: JSON.stringify({
                      object: {
                        podcast_id: podcastID,
                        user_id: user.id,
                      },
                    }),
                    method: "POST",
                  },
                );
                triggerInteraction("The Joe Rogan Podcast", "tracklist");
                return res.json();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {Icon && (
              <Icon
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></Icon>
            )}
            {iconSpecification === "LIKE" && (
              <Heart
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isArray(followingPodcasts?.data) &&
                    followingPodcasts?.data
                      .map((follow) => follow.id)
                      .includes(podcastID) &&
                    "scale-150 fill-white brightness-[140%]",
                )}
              ></Heart>
            )}
            {iconSpecification === "NOTIFY" && (
              <BellPlus
                className={mergeClasses(
                  iconClasses,
                  "h-4 w-4 text-white/40 transition-colors duration-1000 ease-in-out hover:text-white/70",
                  isToggled && "fill-white/60 brightness-[100%]",
                )}
              ></BellPlus>
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
          </Button>
        </TooltipTrigger>
        <div className="group relative">
          {likeCount && (
            <span
              className={mergeClasses(
                "absolute bottom-[-1px] right-[-16px] self-center font-moderat text-[11px] font-normal text-white/30 hover:text-white/50",
                "text-white/30 transition-colors duration-200 ease-in-out hover:text-white/50",
                likeCountClassName,
              )}
            >
              {likeCount}
            </span>
          )}
        </div>
        <TooltipPortal>
          <TooltipContent
            className="shadow-3xl overflow-x-hidden rounded-[3px] border-0 bg-[#1f1f23] font-visuelt text-[13px] font-normal text-white/50"
            side="bottom"
            align="center"
          >
            <p>{tooltipContent}</p>
            <TooltipArrow></TooltipArrow>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  );
}

ContentInteraction.displayName = "ContentInteraction";
