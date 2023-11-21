import HomeFeedNavigator from "components/home/HomeFeedNavigator";
import JSONBlank from "components/home/feed/JSONBlank";

export default function HomeFollowingPage() {
  return (
    <>
      <HomeFeedNavigator></HomeFeedNavigator>
      <JSONBlank></JSONBlank>
      {/* <FollowingFeedJSON>
        {podcasts.slice(0, 10).map((podcast) => (
          <PodcastFeedUnit key={podcast.id} podcast={podcast}></PodcastFeedUnit>
        ))}
      </FollowingFeedJSON> */}
    </>
  );
}
