import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

import PodDetails from "components/pod/PodDetails/PodDetails";
import PodEpisodes from "components/pod/PodEpisodes";
import PodReviews from "components/pod/PodReviews";
import PodSimilar from "components/pod/PodSimilar";
import PodStreaming from "components/pod/PodStreaming";
import { db } from "lib/setupDBConfig/setupDBConfig";
import { notFound } from "next/navigation";
import { cache } from "react";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";

const getPodInfo = cache(async (pod: string) =>
  db.podcast.findUnique({
    where: {
      slug: pod,
    },
    select: {
      title: true,
      description: true,
      slug: true,
      cover: true,
      host: true,
      backgroundCoverImage: true,
      tags: true,
      genre: true,
      rating: true,
      episodes: true,
      reviews: {
        select: {
          review: true,
        },
      },
      streamingAt: {
        select: {
          title: true,
        },
      },
      similarPodcasts: {
        select: {
          title: true,
          cover: true,
          slug: true,
        },
      },
      podcastHost: {
        select: {
          name: true,
        },
      },
    },
  }),
);

const getPodcastsToStaticallyGenerate = async () =>
  db.podcast.findMany({
    select: {
      slug: true,
    },
  });

export async function generateStaticParams() {
  const podcasts = await getPodcastsToStaticallyGenerate();
  return podcasts.map((podcast) => ({
    pod: podcast.slug,
  }));
}

/**
 * HomePodcast Component
 */
export default async function HomePodcast({ params }) {
  const staticPodcastData = await getPodInfo(params?.pod);

  if (!staticPodcastData?.title) {
    notFound();
  }

  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "col-span-10 grid grid-flow-row items-start gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "hover:brightness-[105%  justify-start] grid w-full grid-flow-row gap-3 border-0 py-[18px] px-[18px]",
        )}
      >
        <div className="grid w-full grid-flow-row items-start justify-items-start gap-4 border py-[18px] px-[18px]">
          <div className="grid grid-flow-col gap-3">
            <Image
              src={"/joe-rogan-experience.jpeg"}
              className="h-[128px] w-[128px] rounded-[5px] border border-[#88888820] shadow-3xl"
              alt="Podcast cover"
              width={128}
              height={128}
            ></Image>
            <PodDetails
              podcastHostName="Joe Rogan"
              description="The Joe Rogan Experience is a long-form conversation podcast hosted by comedian and UFC commentator Joe Rogan. The podcast features in-depth discussions with a wide range of guests, including comedians, actors, musicians, scientists, and political figures.\n\nThrough these conversations, Rogan explores a variety of topics, from science and technology to culture and current events. Known for his conversational style and willingness to engage in controversial topics, Rogan often tackles challenging subjects and encourages guests to explore their opinions and ideas in depth. With a loyal following and a reputation for lively and engaging discussions, The Joe Rogan Experience has become one of the most popular and influential podcasts in the world, providing listeners with a unique and thought-provoking window into contemporary culture and society."
              title="The Joe Rogan Experience Podcast"
            ></PodDetails>
          </div>
        </div>
        <div className="grid w-full grid-flow-row gap-12">
          <div className="grid w-full grid-flow-row gap-[32px]">
            <PodEpisodes
              title={`Featured Episodes of ${generateGoodTitleForReviews(
                staticPodcastData.title,
              )}`}
              episodes={staticPodcastData.episodes}
              defaultCoverImage={`/${staticPodcastData.cover}`}
            />
            <PodEpisodes
              title={`Latest Episodes of ${generateGoodTitleForReviews(
                staticPodcastData.title,
              )}`}
              episodes={staticPodcastData.episodes}
              defaultCoverImage={`../${staticPodcastData.cover}`}
            />
            <PodStreaming streamingSites={staticPodcastData.streamingAt} />
          </div>

          <div className="grid grid-flow-row items-start justify-start gap-[100px]">
            {/* todo: put a button that says to leave a comment */}
            {staticPodcastData.reviews.length > 0 && (
              <PodReviews
                title={generateGoodTitleForReviews(staticPodcastData.title)}
                reviews={staticPodcastData.reviews}
              />
            )}
            {staticPodcastData.similarPodcasts.length > 0 && (
              <PodSimilar
                title={staticPodcastData.title}
                similarPodcasts={staticPodcastData.similarPodcasts}
              />
            )}
            {/* <PodGuests title={staticPodcastData.title}></PodGuests> */}
          </div>
        </div>
        <div className="grid grid-flow-row gap-[8px]">
          <p className="ml-[2px] font-visuelt text-[14px] font-normal leading-[24px] tracking-[0.5px] text-[#9ab] text-opacity-80  antialiased">
            Lorem
          </p>
        </div>
        {/* <div className=" mt-[-5px] grid grid-flow-row items-start justify-start gap-[8px]">
            <TooltipContainer className="gap-[32px]">
              <TooltipIconButton
                Icon={Heart}
                likeCount={150}
                tooltipContent="Hold to Like"
              ></TooltipIconButton>
              <TooltipIconButton
                Icon={BellPlus}
                likeCount={322}
                tooltipContent="Hold to Follow"
                likeCountClassName="right-[-20px]"
              ></TooltipIconButton>
              <TooltipIconButton
                Icon={MessageCircle}
                likeCount={322}
                tooltipContent="Hold to Comment"
                likeCountClassName="right-[-19px]"
              ></TooltipIconButton>
            </TooltipContainer>
          </div> */}
      </div>
    </div>
  );
}

HomePodcast.displayName = "HomePodcast";
