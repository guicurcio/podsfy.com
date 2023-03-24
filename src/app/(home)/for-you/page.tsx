import ForYouFeed from "components/home/feed/ForYouFeed";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import { db } from "lib/setupDBConfig";

export const dynamic = "force-static";

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

export default async function HomePage() {
  const forYouPodcastEpisodes = await getAllEpisodesInDB();

  return (
    <ForYouFeed>
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
    </ForYouFeed>
  );
}
