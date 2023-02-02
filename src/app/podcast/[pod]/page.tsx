import { PodHeader } from "components/pod/Header";
import PodBehind from "components/pod/PodBehind";
import PodDetails from "components/pod/PodDetails";
import PodEpisodes from "components/pod/PodEpisodes";
import PodGuests from "components/pod/PodGuests";
import PodImage from "components/pod/PodImage";
import PodReviews from "components/pod/PodReviews";
import PodSimilar from "components/pod/PodSimilar";
import PodStreaming from "components/pod/PodStreaming";
import { db } from "lib/setupDBConfig/setupDBConfig";
import { redirect } from "next/navigation";
import { cache } from "react";
import generateSlugCombinations from "utils/generateSlugCombinations";

const getPodInfo = cache(async (pod: string) => {
  return await db.podcast.findUnique({
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
    },
  });
});

const getPodcastsToStaticallyGenerate = async () => {
  return await db.podcast.findMany({
    select: {
      slug: true,
    },
  });
};

export async function generateStaticParams() {
  const podcasts = await getPodcastsToStaticallyGenerate();
  return podcasts.map((podcast) => ({
    pod: podcast.slug,
  }));
}

export default async function PodcastPage({ params }) {
  // console.log(params, "the params");
  const staticPodcastData = await getPodInfo(params.pod);
  // console.log(staticPodcastData, "staticPodcastData info  ");
  // console.log(
  //   generateSlugCombinations(staticPodcastData.slug),
  //   "the slug combinations"
  // );
  if (!staticPodcastData.title) {
    redirect("/404");
  }

  console.log(
    staticPodcastData.episodes.some((episode) => episode.bestEpisode)
  );
  return (
    <>
      <PodImage
        image={`../${staticPodcastData.backgroundCoverImage}`}
      ></PodImage>
      <div className="max-w-[1200px]  z-50 mx-auto mt-32 relative">
        <div className="max-w-[1200px] mx-auto rounded-lg z-20  bg-[#0D0E12] bg-opacity-90">
          <div className="grid grid-flow-col  gap-12  justify-start backdrop-brightness-[50%] w-full p-8 rounded-xl">
            <div className=" rounded-md flex flex-col justify-start">
              <div className="rounded-md flex flex-col justify-start">
                <img
                  height={250}
                  width={320}
                  src={`../${staticPodcastData.cover}`}
                  draggable={false}
                  className="rounded-[4px] border border-white border-opacity-[10%] blur-[0.5px] brightness-[75%] w-[300px] h-[340px]"
                />
              </div>
              <PodBehind
                genre={staticPodcastData.genre}
                rating={staticPodcastData.rating}
                tags={staticPodcastData.tags}
                podcastTitle={staticPodcastData.title}
              ></PodBehind>
            </div>
            <div className="justify-start items-start grid grid-flow-row gap-6 h-full w-[650px]">
              <PodDetails
                title={staticPodcastData.title}
                description={staticPodcastData.description}
              ></PodDetails>
              {staticPodcastData.episodes.some(
                (episode) => episode.bestEpisode
              ) && (
                <PodEpisodes
                  title="Best Episodes"
                  episodes={staticPodcastData.episodes}
                ></PodEpisodes>
              )}
              <PodEpisodes
                title="Newest Episodes"
                episodes={staticPodcastData.episodes}
              ></PodEpisodes>
              <PodStreaming></PodStreaming>
              <PodReviews></PodReviews>
              <PodSimilar></PodSimilar>
              <PodGuests></PodGuests>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
