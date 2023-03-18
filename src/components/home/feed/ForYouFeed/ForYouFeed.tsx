"use server";

import UnitOfContent from "components/home/UnitOfContent";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ForYouFeed component.
 */
export interface ForYouFeedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * ForYouFeed Component
 */
// eslint-disable-next-line @typescript-eslint/require-await
export default async function ForYouFeed({ className }: ForYouFeedProps) {
  return (
    <div
      className={mergeClasses(
        " h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        className,
      )}
    >
      <div className="grid grid-flow-row divide-y-[1px] divide-fondy/50  backdrop-brightness-[75%]">
        {/* <FeedUpdater feedUpdaterText="Show 11 new updates"></FeedUpdater> */}
        {/* @ts-expect-error Async Server Component */}
        <UnitOfContent
          key="asd"
          defaultCoverImage="/joe-rogan-experience.jpeg"
          title="Joe Rogan Experience #1278 - Kevin Hart"
          description="Joe Rogan Experience"
        ></UnitOfContent>
        {/* <UnitOfContent
          title="Beyond Good and Evil"
          description="Beyond Good and Evil"
          defaultCoverImage="/pods/ab67656300005f1f988e1a5bd74eb65370c8478e.jfif"
        ></UnitOfContent>
        <UnitOfContent
          title="Sean Kelly: Existentialism, Nihilism, and the Search for Meaning"
          description="Lex Fridman Podcast"
          defaultCoverImage="/pods/ab67616d0000b273aa9b280f81bf9e8f66e88e91.jfif"
        ></UnitOfContent>
        <UnitOfContent defaultCoverImage="/pods/ab67616d0000b2731f89fd98d0bbad7758b18381.jfif"></UnitOfContent>
        <UnitOfContent defaultCoverImage="/pods/7d8cdb1534526ade7bea683feee3d151849f9fa4.jfif"></UnitOfContent>
        <UnitOfContent defaultCoverImage="/pods/ab67656300005f1f3450dccc54cb967ae7b73a5c.jfif"></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent>
        <UnitOfContent></UnitOfContent> */}
      </div>
    </div>
  );
}

ForYouFeed.displayName = "ForYouFeed";
