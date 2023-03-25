import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

import TooltipContainer from "components/common/TooltipContainer/TooltipContainer";
import TooltipIconButton from "components/home/TooltipIconButton/TooltipIconButton";
import PodEpisodes from "components/pod/PodEpisodes";
import PodReviews from "components/pod/PodReviews";
import PodSimilar from "components/pod/PodSimilar";
import PodStreaming from "components/pod/PodStreaming";
import { db } from "lib/setupDBConfig/setupDBConfig";
import { notFound } from "next/navigation";
import { cache } from "react";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";

const getPodInfo = cache(async (podcastSlug: string) =>
  db.podcast.findUnique({
    where: {
      slug: podcastSlug,
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
    podcast: podcast.slug,
  }));
}

/**
 * HomePodcast Component
 */
export default async function HomePodcastPage({ params }) {
  const staticPodcastData = await getPodInfo(params?.podcast);

  if (!staticPodcastData?.title) {
    notFound();
  }

  return (
    <div
      className={mergeClasses(
        "h-screen overflow-scroll overflow-y-scroll scrollbar-none scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "col-span-7 grid grid-flow-row items-start gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "grid w-full  grid-flow-row items-start   justify-start gap-3 border-0 py-[18px] px-[18px] shadow-3xl  backdrop-brightness-[75%] backdrop-contrast-[101%] hover:brightness-[105%]",
        )}
      >
        <div className="grid w-fit grid-flow-col place-items-start items-start justify-items-start gap-3 ">
          <Image
            src={`/${staticPodcastData.cover}`}
            className="h-[156px] w-[156px] self-center   rounded-[4px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl"
            alt="Podcast cover"
            width={156}
            height={156}
          ></Image>

          <div className="grid grid-flow-row gap-[8px]">
            <h2 className="text-left font-moderat text-[26px] font-medium text-[#E7E9EA] ">
              {generateGoodTitleForReviews(staticPodcastData.title)}
            </h2>
            <h2 className="mt-[-4px]  font-moderat text-[13px] text-[#fff] text-opacity-[50%]">
              By{" "}
              <span className="underline">
                {staticPodcastData?.podcastHost?.name || ""}
              </span>
            </h2>
            <h1 className="mt-[2px] break-before-avoid-page text-left font-moderat text-[14px] font-normal text-[#71767B]">
              The Found My Fitness podcast is hosted by Rhonda Patrick, a
              biomedical scientist who focuses on nutrition, aging, and health.
            </h1>
            <div className=" mt-[5px] grid grid-flow-row items-start justify-start gap-[8px]">
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
        </div>
        <div className="grid w-full grid-flow-row gap-12">
          <div className="grid grid-flow-row gap-[1px]">
            {/* {staticPodcastData.description.split("\\n").map((line) => (
          // <p className="ml-[2px] mt-[-2px] font-visuelt text-[15px] font-normal leading-[25px] tracking-[0.5px] text-dimmed2 text-opacity-80  antialiased">
          <p
            key={line}
            className="ml-[2px] text-[14px] font-normal text-left font-moderat leading-[21px] tracking-[0.5px] text-[#71767B]   antialiased"
          >
            {line}
          </p>
        ))} */}
            {/* <h2 className="text-left font-moderat text-[15px] break-before-avoid-page font-normal text-[#71767B]">
              {staticPodcastData.description}
            </h2> */}
          </div>
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
              defaultCoverImage={`/${staticPodcastData.cover}`}
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
