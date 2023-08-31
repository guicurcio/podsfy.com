import fs from "fs";
import Image from "next/image";

import mergeClasses from "utils/mergeClasses";

import { notFound } from "next/navigation";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";
import Rating from "components/home/Rating";
import Trackers from "components/home/Trackers";
import PodEpisodes from "components/pod/PodEpisodes";
import PodReviews from "components/pod/PodReviews";
import PodBehind from "components/pod/PodBehind";
import PodStreaming from "components/pod/PodStreaming";
import PodSimilar from "components/pod/PodSimilar copy/PodSimilar";
import PodDetails from "components/pod/PodDetails";
import PodcastCover from "components/pod/PodcastCover";
import PodGuests from "components/pod/PodGuests";

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
        "h-screen w-[1150px] overflow-scroll overflow-y-scroll scrollbar-none",
        "scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "shadow-3xl grid grid-flow-row items-start gap-[25px] font-visuelt backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "mx-auto grid w-[1150px] grid-flow-row items-start justify-start",
          "gap-3 px-[38px] py-[38px] ",
          "backdrop-contrast-[101%] ",
        )}
      >
        <div className="grid grid-flow-col place-items-start items-start justify-items-start gap-[22px]">
          <div className="shadow-3xl relative h-[391px]  rounded-[4px] border-b-[4px] border-l-[4px] border-r-[4px] border-t-[4px] border-[#88888820]">
            <div className=" h-[383px] w-[305px]  self-center p-0 align-middle">
              <Image
                src={`/${staticPodcastData.cover}`}
                className="h-[380px]  w-[305px]"
                alt="Podcast cover"
                width={305}
                height={380}
              ></Image>
            </div>
            <div className="absolute bottom-[-2px] grid h-[70px] w-[305px] grid-flow-col gap-x-0 rounded-bl-md rounded-br-md    bg-black bg-opacity-60 pt-[0px] backdrop-blur-[150px] backdrop-brightness-[30%] backdrop-contrast-[150%]">
              <Trackers
                tooltipContent="Track"
                iconSpecification="NOTIFY"
              ></Trackers>
              <Trackers
                tooltipContent="Like"
                iconSpecification="LIKE"
              ></Trackers>
              <Trackers
                tooltipContent="Share"
                iconSpecification="SHARE"
              ></Trackers>
            </div>
            <div>
              <PodBehind
                rating={5}
                tags="family,sports,finance"
                genre="Sports"
                podcastTitle={staticPodcastData.title}
                duration={60}
                language="English"
              ></PodBehind>
            </div>
          </div>
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
              <Rating></Rating>
            </div>
            <div className="grid w-full min-w-full grid-flow-row gap-[60px]">
              <PodEpisodes
                episodes={[
                  {
                    title: "asd",
                    description: "asdsad",
                    whereToWatchOrListenLink: "asd",
                  },
                  {
                    title: "asd",
                    description: "asdsad",
                    whereToWatchOrListenLink: "asd",
                  },
                  {
                    title: "asd",
                    description: "asdsad",
                    whereToWatchOrListenLink: "asd",
                  },
                  {
                    title: "asd",
                    description: "asdsad",
                    whereToWatchOrListenLink: "asd",
                  },
                ]}
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
      </div>
    </div>
  );
}
