import ForYouFeedNoCom from "components/home/feed/ForYouFeedNoCom/ForYouFeedNoCom";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    /* @ts-expect-error Async Server Component */
    <ForYouFeedNoCom></ForYouFeedNoCom>
  );
}
