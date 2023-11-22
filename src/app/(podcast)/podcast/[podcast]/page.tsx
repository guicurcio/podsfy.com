import fs from "fs";

import mergeClasses from "utils/mergeClasses";

import { notFound } from "next/navigation";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";
import Rating from "components/home/Rating";
import PodEpisodes from "components/pod/PodEpisodes";
import PodReviews from "components/pod/PodReviews";
import PodStreaming from "components/pod/PodStreaming";
import PodSimilar from "components/pod/PodSimilar copy/PodSimilar";
import PodGuests from "components/pod/PodGuests";
import PodcastSidebar from "components/pod/PodcastSidebar";
import { Toaster } from "ui/components/Toaster";

const getPodInfoJSON = async (podcastSlug: string) => {
  const inputFilePath = `./src/json/podcastsJSONsliced/${podcastSlug}.json`;
  const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));
  return jsonData;
};

const getPodcastsToStaticallyGenerate = async () => {
  const inputFilePath = `./src/json/podcasts/slugs.json`;
  const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));
  return jsonData;
};

export async function generateStaticParams() {
  const podcasts = await getPodcastsToStaticallyGenerate();
  return podcasts.map((podcast) => ({
    podcast: podcast.slug,
  }));
}

export async function generateMetadata({ params }) {
  const staticPodcastData = await getPodInfoJSON(params?.podcast);

  return {
    title: staticPodcastData.title,
    template: "%s | podsfy.com",
  };
}

/**
 * HomePodcast Component
 */
export default async function HomePodcastPage({ params }) {
  // const staticPodcastData = await getPodInfo(params?.podcast);
  const staticPodcastData = await getPodInfoJSON(params?.podcast);

  if (!staticPodcastData?.title) {
    notFound();
  }

  return (
    <div
      className={mergeClasses(
        "scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "shadow-3xl grid grid-flow-row items-start gap-[25px] font-visuelt backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "grid w-[1150px] grid-flow-row items-start justify-start",
          "gap-3 px-[38px] py-[38px] ",
          "backdrop-contrast-[101%] ",
          "relative",
        )}
      >
        <div className="grid grid-flow-col place-items-start items-start justify-items-start gap-[22px]">
          <PodcastSidebar podcast={staticPodcastData}></PodcastSidebar>
          <div className="grid grid-flow-row gap-y-[22px]">
            <div className="grid min-w-full grid-flow-col  gap-[18px]">
              <div className="grid grid-flow-row gap-[12px] ">
                <h2 className="w-full text-left font-moderat text-[28px] font-medium tracking-[-0.5px] text-[#E7E9EA] ">
                  {generateGoodTitleForReviews(staticPodcastData.title)}
                </h2>
                <h2 className="mt-[-4px]  font-moderat text-[17px] text-[#fff] text-opacity-[50%]">
                  By{" "}
                  <span className="underline">
                    {staticPodcastData?.podcastHost?.name ||
                      generateGoodTitleForReviews(staticPodcastData.title)}
                  </span>
                </h2>
                <p
                  className={mergeClasses(
                    "ml-[2px] w-[450px] font-lausanne text-[18px] font-normal  leading-[25px] tracking-[0.2px]",
                    "text-[#9ab] text-opacity-80",
                  )}
                >
                  {(staticPodcastData?.description || "")
                    .replace(/\\n/g, " ")
                    .slice(0, 300)}
                </p>
              </div>
            </div>
            <div className="grid w-full min-w-full grid-flow-row gap-[60px]">
              <PodEpisodes
                episodes={[{ title: "asd", description: ".." }]}
              ></PodEpisodes>
              <PodReviews
                reviews={[
                  { review: "asd" },
                  { review: "asd" },
                  { review: "asd" },
                ]}
              ></PodReviews>
              <PodStreaming
                streamingSites={[
                  { streamingSite: "asd" },
                  { streamingSite: "asd" },
                  { streamingSite: "asd" },
                ]}
              ></PodStreaming>
              <PodSimilar></PodSimilar>
              <PodGuests></PodGuests>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[8%] ">
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
}
