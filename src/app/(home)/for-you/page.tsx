import ForYouFeedJSONComponent from "components/home/feed/ForYouFeedJSON/ForYouFeedJSON";
import PodcastEpisodeFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";
import episodes from "json/episodes.json";
import podcast from "json/podcast.json";

export default function FollowingPage() {
  return (
    <ForYouFeedJSONComponent>
      {episodes.map((episode) => (
        <PodcastEpisodeFeedUnit
          key={episode.id}
          podcastEpisode={episode}
          podcast={podcast.find(
            (individualPodcast) => individualPodcast.id === episode.podcastId,
          )}
        ></PodcastEpisodeFeedUnit>
      ))}
    </ForYouFeedJSONComponent>
  );
}
