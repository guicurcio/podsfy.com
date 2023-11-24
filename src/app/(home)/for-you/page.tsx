import HomeFeedNavigator from "components/home/HomeFeedNavigator";
import ForYouFeedJSONComponent from "components/home/feed/ForYouFeedJSON/ForYouFeedJSON";
import PodcastEpisodeFeedUnit from "components/home/feed/PodcastEpisodeFeedUnit/PodcastEpisodeFeedUnit";
import podcastEpisodes from "json/episodes.json";
import podcasts from "json/podcast.json";
import PodcastFeedUnit from '../../../components/home/feed/PodcastFeedUnit/PodcastFeedUnit';

export default function ForYouPage() {
  return (
    <>
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


        {podcastEpisodes.slice(2, 15).map((podcastEpisode) => (
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
    </>
  );
}
