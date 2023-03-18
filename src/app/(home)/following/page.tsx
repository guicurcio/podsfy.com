import FollowingFeed from "components/home/feed/FollowingFeed/FollowingFeed";

// export const dynamic = "force-static";

export default function HomePage() {
  return (
    /* @ts-expect-error Async Server Component */
    <FollowingFeed></FollowingFeed>
  );
}
