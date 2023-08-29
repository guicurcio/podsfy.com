import HomeFeedNavigator from "components/home/HomeFeedNavigator";
import FollowingFeedJSON from "components/home/feed/FollowingFeedJSON/FollowingFeedJSON";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import podcasts from "json/podcast.json";

export default function ExplorePage() {
  return (
    <>
      <HomeFeedNavigator></HomeFeedNavigator>
      <FollowingFeedJSON className="max-w-[900px]">
        {podcasts.slice(0, 15).map((podcast) => (
          <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
        ))}
      </FollowingFeedJSON>
    </>
  );
}
