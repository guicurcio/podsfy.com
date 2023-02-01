import { PodHeader } from "components/pod/Header";
import PodBehind from "components/pod/PodBehind";
import PodDetails from "components/pod/PodDetails";
import PodEpisodes from "components/pod/PodEpisodes";
import PodGuests from "components/pod/PodGuests";
import PodImage from "components/pod/PodImage";
import PodReviews from "components/pod/PodReviews";
import PodSimilar from "components/pod/PodSimilar";
import PodStreaming from "components/pod/PodStreaming";

export default function PodcastPage() {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <div className="backdrop-brightness-[10%]">
        <PodHeader></PodHeader>
        <div className="blur-[8px] brightness-[60%] backdrop-brightness-[10%]">
          <PodImage></PodImage>
        </div>
        <div className="max-w-[1200px]  z-50 mx-auto mt-32 relative">
          <div className="max-w-[1200px] mx-auto rounded-lg z-20  bg-[#0D0E12] bg-opacity-90">
            <div className="grid grid-flow-col  gap-12  justify-start backdrop-brightness-[50%] w-full p-8 rounded-xl">
              <div className=" rounded-md flex flex-col justify-start">
                <div className="rounded-md flex flex-col justify-start">
                  <img
                    height={250}
                    width={320}
                    src="/podcastcover.png"
                    className="rounded-[4px] object-contain border border-white border-opacity-[10%] opacity-[100%] blur-[0.5px] brightness-[60%]"
                  />
                </div>
                <PodBehind></PodBehind>
              </div>
              <div className="justify-start items-start grid grid-flow-row gap-6 h-full w-[650px]">
                <PodDetails></PodDetails>
                <PodEpisodes></PodEpisodes>
                <PodStreaming></PodStreaming>
                <PodReviews></PodReviews>
                <PodSimilar></PodSimilar>
                <PodGuests></PodGuests>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer2></Footer2> */}
      </div>
    </div>
  );
}
