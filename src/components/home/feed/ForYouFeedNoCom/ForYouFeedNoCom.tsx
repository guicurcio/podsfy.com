import { db } from "lib/setupDBConfig";
import mergeClasses from "utils/mergeClasses";
import PodcastFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";

/**
 * Props for the ForYouFeedNoCom component.
 */
export interface ForYouFeedNoComProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
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
 * ForYouFeedNoCom Component
 */
// eslint-disable-next-line @typescript-eslint/require-await
export default async function ForYouFeedNoCom({
  className,
}: ForYouFeedNoComProps) {
  const forYouPodcastEpisodes = await getAllEpisodesInDB();
  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12]",
        "scrollbar-thumb-[#0D0E12]",
        className,
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {forYouPodcastEpisodes.map((episode) => (
          <PodcastFeedUnit
            key={episode.id}
            title={episode.title}
            podcast={episode.podcast.title}
          ></PodcastFeedUnit>
        ))}
      </div>
    </div>
  );
}

ForYouFeedNoCom.displayName = "ForYouFeedNoCom";
