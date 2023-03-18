"use server";

import { db } from "lib/setupDBConfig";
import mergeClasses from "utils/mergeClasses";
import PodcastFeedUnit from "../PodcastFeedUnit/PodcastFeedUnit";

/**
 * Props for the ForYouFeed component.
 */
export interface ForYouFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

const getAllPodcastsInDB = async () =>
  db.podcast.findMany({
    select: {
      slug: true,
    },
  });

const getAllEpisodesInDB = async () =>
  db.episode.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      podcast: {
        select: {
          title: true,
          slug: true,
        },
      },
    },
  });

/**
 * ForYouFeed Component
 */
// eslint-disable-next-line @typescript-eslint/require-await
export default async function ForYouFeed({ className }: ForYouFeedProps) {
  const forYouPodcastEpisodes = await getAllEpisodesInDB();
  console.log(forYouPodcastEpisodes);
  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12]",
        "scrollbar-thumb-[#0D0E12]",
        className,
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {/* <FeedUpdater feedUpdaterText="Show 11 new updates"></FeedUpdater> */}
        {forYouPodcastEpisodes.map((episode) => (
          <>
            {/* @ts-expect-error Async Server Component */}
            <PodcastFeedUnit
              key={episode.id}
              title={episode.title}
              podcastEpisodeDescription={episode.description}
              podcast={episode.podcast.title}
              podcastSlug={episode.podcast.slug}
            ></PodcastFeedUnit>
          </>
        ))}
      </div>
    </div>
  );
}

ForYouFeed.displayName = "ForYouFeed";
