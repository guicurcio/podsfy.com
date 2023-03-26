"use server";

import PodcastFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";
import { db } from "lib/setupDBConfig";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ForYouFeed component.
 */
export interface ForYouFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | Element | Element[];
}

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
export async function ForYouFeedComponent({
  className,
  ...props
}: ForYouFeedProps) {
  const forYouPodcastEpisodes = await getAllEpisodesInDB();
  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12]",
        "scrollbar-thumb-[#0D0E12]",
        className,
      )}
      {...props}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {/* <FeedUpdater feedUpdaterText="Show 11 new updates"></FeedUpdater> */}
        {forYouPodcastEpisodes.map((episode) => (
          <PodcastFeedUnit
            key={episode.id}
            title={episode.title}
            podcastEpisodeDescription={episode.description}
            podcast={episode.podcast.title}
            podcastSlug={episode.podcast.slug}
          ></PodcastFeedUnit>
        ))}
      </div>
    </div>
  );
}

export default ForYouFeedComponent as unknown as ({
  className,
  ...props
}: ForYouFeedProps) => JSX.Element;

ForYouFeedComponent.displayName = "ForYouFeed";
