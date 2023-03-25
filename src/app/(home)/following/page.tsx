import ForYouFeedJSONComponent from "components/home/feed/ForYouFeedJSON/ForYouFeedJSON";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import episodes from "json/episodes.json";
import podcast from "json/podcast.json";

export default async function HomeFollowingPage() {
  return (
    <ForYouFeedJSONComponent>
      {episodes.slice(0, 3).map((episode) => {
        return (
          <PodcastFeedUnit
            key={episode.id}
            title={episode.title}
            podcastEpisodeDescription={episode.description}
            podcast={podcast.find(
              (podcast) => podcast.id === episode.podcastId,
            )}
          ></PodcastFeedUnit>
        );
      })}
    </ForYouFeedJSONComponent>
  );
}
