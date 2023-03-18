"use server";

import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

import TooltipContainer from "components/common/TooltipContainer/TooltipContainer";
import TooltipIconButton from "components/home/TooltipIconButton/TooltipIconButton";
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
  const staticPodcastData = await getPodInfo(params?.podcast);

  if (!staticPodcastData?.title) {
    notFound();
  }

  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "col-span-9 grid grid-flow-row items-start gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "grid w-full  grid-flow-row justify-start gap-3 border-0 py-[18px] px-[18px] shadow-3xl  backdrop-brightness-[75%] backdrop-contrast-[101%] hover:brightness-[105%]",
        )}
      >
        <div className="grid w-full grid-flow-row items-start justify-items-start gap-4  py-[18px] pl-[18px]">
          <div className="grid grid-flow-col gap-[32px]">
            <div>
            <div className="h-fit rounded-[4px] bg-[#71767B] bg-opacity-5 p-2 backdrop-blur-[25px] backdrop-brightness-[25%]">
              <Image
                src={`/${staticPodcastData.cover}`}
                className="h-[226px] w-[226px]"
                alt="Podcast cover"
                width={226}
                height={226}
              ></Image>
            </div>
            <div className=" mt-[-5px] grid grid-flow-row items-start justify-start gap-[8px]">
          <TooltipContainer className="gap-[32px]">
            <TooltipIconButton
              likeCount={150}
              tooltipContent="Hold to Like"
            ></TooltipIconButton>
            <TooltipIconButton
              likeCount={322}
              tooltipContent="Hold to Follow"
              likeCountClassName="right-[-20px]"
            ></TooltipIconButton>
            <TooltipIconButton
              likeCount={322}
              tooltipContent="Hold to Comment"
              likeCountClassName="right-[-19px]"
            ></TooltipIconButton>
          </TooltipContainer>
          </div>
        </div>
            <PodDetails
              podcastHostName={staticPodcastData.podcastHost.name}
              description={staticPodcastData.description}
              title={staticPodcastData.title}
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

      </div>
    </div>
  );
}
