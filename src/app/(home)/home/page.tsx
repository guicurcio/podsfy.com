import ForYouFeedJSONComponent from "components/home/feed/ForYouFeedJSON/ForYouFeedJSON";
import PodcastEpisodeFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";
import podcastEpisodes from "json/episodes.json";
import podcasts from "json/podcast.json";

export default function HomePage() {
  return (
    <ForYouFeedJSONComponent>
      {podcastEpisodes.map((podcastEpisode) => (
        <PodcastEpisodeFeedUnit
          key={podcastEpisode.id}
          podcastEpisode={podcastEpisode}
          podcast={podcasts.find(
            (individualPodcast) =>
              individualPodcast.id === podcastEpisode.podcastId,
          )}
        ></PodcastEpisodeFeedUnit>
      ))}
    </ForYouFeedJSONComponent>
  );
}
