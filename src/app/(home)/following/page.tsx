import HomeFeedNavigator from "components/home/HomeFeedNavigator";
import FollowingFeedJSON from "components/home/feed/FollowingFeedJSON/FollowingFeedJSON";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import podcasts from "json/podcast.json";

export default function HomeFollowingPage() {
  return (
    <>
      <HomeFeedNavigator></HomeFeedNavigator>
      <FollowingFeedJSON>
        {podcasts.slice(0, 10).map((podcast) => (
          <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
        ))}
      </FollowingFeedJSON>
    </>
  );
}
