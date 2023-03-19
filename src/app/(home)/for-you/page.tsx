import ForYouFeed from "components/home/feed/ForYouFeed/ForYouFeed";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    /* @ts-expect-error Async Server Component */
    <ForYouFeed></ForYouFeed>
  );
}
