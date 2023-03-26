import FollowingFeedJSON from "components/home/feed/FollowingFeedJSON/FollowingFeedJSON";
import PodcastFeedUnit from "components/home/feed/PodcastFeedUnit/PodcastFeedUnit";
import { default as podcasts } from "json/podcast.json";

export default async function HomeFollowingPage() {
  return (
    <FollowingFeedJSON>
      {podcasts.slice(0, 20).map((podcast) => (
        <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
      ))}
    </FollowingFeedJSON>
  );
}
