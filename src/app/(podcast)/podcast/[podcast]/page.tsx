import fs from "fs";
import Image from "next/image";

import mergeClasses from "utils/mergeClasses";

import TooltipContainer from "components/common/TooltipContainer/TooltipContainer";
import TooltipIconButton from "components/home/TooltipIconButton/TooltipIconButton";
import { notFound } from "next/navigation";
import generateGoodTitleForReviews from "utils/generateGoodTitleForReviews";

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
        "h-screen w-[1250px] overflow-scroll overflow-y-scroll scrollbar-none",
        "scrollbar-track-[#0D0E12] scrollbar-thumb-[#0D0E12]",
        "border-x border-sharper border-opacity-5 bg-[#0D0E12]",
        "grid grid-flow-row items-start gap-[25px] font-visuelt shadow-3xl backdrop-blur-[10px]",
      )}
    >
      <div
        className={mergeClasses(
          "grid min-w-full grid-flow-row items-start justify-start",
          "gap-3 px-[58px] py-[38px] shadow-3xl  backdrop-brightness-[75%]",
          "backdrop-contrast-[101%] hover:brightness-[105%]",
        )}
      >
        <div className="grid grid-flow-col place-items-start items-start justify-items-start gap-[22px]">
          <div className="self-center   rounded-[4px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl">
            <Image
              src={`/${staticPodcastData.cover}`}
              className="h-[226px] w-[222px] self-center   rounded-[4px] border-[2px] border-[#88888820] p-0  align-middle shadow-3xl"
              alt="Podcast cover"
              width={222}
              height={186}
            ></Image>
          </div>

          <div className="grid min-w-full grid-flow-row  gap-[8px]">
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
            <h1
              className={mergeClasses(
                "ml-[2px] w-[750px] font-lausanne text-[18px] font-normal  leading-[25px] tracking-[0.2px]",
                "text-[#9ab] text-opacity-80",
              )}
            >
              {(staticPodcastData?.description || "")
                .replace(/\\n/g, " ")
                .slice(0, 300)}
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
      </div>
    </div>
  );
}
