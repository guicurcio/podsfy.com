import HomeFeedNavigator from "components/home/HomeFeedNavigator";
import ForYouFeedJSONComponent from "components/home/feed/ForYouFeedJSON/ForYouFeedJSON";
import PodcastEpisodeFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import podcastEpisodes from "json/episodes.json";
import podcasts from "json/podcast.json";

export default function HomePage() {
  return (
    <div className="w-full">
      <HomeFeedNavigator></HomeFeedNavigator>
      <ForYouFeedJSONComponent>
        {podcastEpisodes.slice(0, 2).map((podcastEpisode) => (
          <PodcastEpisodeFeedUnit
            key={podcastEpisode.id}
            podcastEpisode={podcastEpisode}
            podcast={podcasts.find(
              (individualPodcast) =>
                individualPodcast.id === podcastEpisode.podcastId,
            )}
          ></PodcastEpisodeFeedUnit>
        ))}
        {podcasts.slice(0, 2).map((podcast) => (
          <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
        ))}
        {podcastEpisodes.slice(2, 5).map((podcastEpisode) => (
          <PodcastEpisodeFeedUnit
            key={podcastEpisode.id}
            podcastEpisode={podcastEpisode}
            podcast={podcasts.find(
              (individualPodcast) =>
                individualPodcast.id === podcastEpisode.podcastId,
            )}
          ></PodcastEpisodeFeedUnit>
        ))}
        {podcasts.slice(2, 5).map((podcast) => (
          <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
        ))}
        {podcastEpisodes.slice(5, 15).map((podcastEpisode) => (
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
    </div>
  );
}
