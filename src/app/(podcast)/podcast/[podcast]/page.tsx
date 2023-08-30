import fs from "fs";
import Image from "next/image";

import mergeClasses from "utils/mergeClasses";

import { notFound } from "next/navigation";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";
import Rating from "components/home/Rating";
import TooltipContainer from "components/common/TooltipContainer";
import ContentInteraction from "components/home/ContentInteraction";

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
        "grid grid-flow-row items-start gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
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
          <div>
          <div className="self-center   rounded-[4px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl">
            <Image
              src={`/${staticPodcastData.cover}`}
              className="h-[305px] w-[275px] self-center   rounded-[4px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl"
              alt="Podcast cover"
              width={230}
              height={345}
            ></Image>
          </div>
<div className=" mt-[5px] grid grid-flow-row items-start justify-start gap-[8px]">
<TooltipContainer className="gap-[32px]">
                  <ContentInteraction
                    likeCount={150}
                    tooltipContent="Hold to Like"
                    iconSpecification="LIKE"
                  ></ContentInteraction>
                  <ContentInteraction
                    tooltipContent="Hold to Follow"
                    likeCountClassName="right-[-20px]"
                    iconSpecification="NOTIFY"
                  ></ContentInteraction>
                </TooltipContainer>
            </div>
          </div>

          <div className="grid min-w-full grid-flow-col  gap-[18px]">
            <div className="gap-[12px] grid grid-flow-row ">
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
        </div>
      </div>
    </div>
  );
}
