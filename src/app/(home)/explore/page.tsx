import FollowingFeedJSON from "components/home/feed/FollowingFeedJSON/FollowingFeedJSON";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import podcasts from "json/podcast.json";

export default function ExplorePage() {
  return (
    <FollowingFeedJSON>
      {podcasts.slice(0, 10).map((podcast) => (
        <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
      ))}
    </FollowingFeedJSON>
  );
}
