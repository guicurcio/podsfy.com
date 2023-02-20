import Join from 'components/SignUpModal';
import SignInModal from 'components/SignInModal';
import PodcastCover from 'components/pod/PodcastCover/PodcastCover';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  console.log(cookieStore);
  return (
    <div className="relative bg-[#0D0E12] overflow-x-hidden">
      <div className="">
        <img
          className="absolute xl:scale-x-[105%] bg-[#0D0E12] scale-[120%] brightness-[60%] object-cover xl:scale-y-[100%] md:top-[50px] xl:top-[-120px] md:rotate-[8deg] xl:translate-x-[25px]"
          src="/bg/bg.png"
        ></img>
      </div>
      <div className="backdrop-blur-[8px] backdrop-brightness-[50%]">
        <div className="mx-auto z-50 relative gap-y-[30px] grid grid-flow-row select-none cursor-default backdrop-blur-[0.1px] backdrop-brightness-[120%]">
          <div className="min-w-[1280px] items-center  mx-auto py-[12px] place-content-between grid grid-flow-col">
            <a className="font-SpaceGrotesk py-2 text-[#CDCDCD] px-3 cursor-pointer tracking-[-0.08em] text-[30px] font-bold ">
              podsfy
            </a>
            <div className="py-2 px-3 rounded-md text-[#CDCDCD] align-middle self-center">
              <div className="backdrop-brightness-[125%] w-full h-full">
                <SignInModal></SignInModal>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row gap-y-2 w-[900px] mx-auto -mt-[25px]">
            <h1 className="font-SpaceGrotesk text-[90px] font-normal leading-[95px] text-white drop-shadow-2xl text-opacity-[75%] brightness-[200%] tracking-[-0.06em] text-center select-none cursor-default">
              Your companion for podcasts reviews and rankings
            </h1>
            <Join></Join>
          </div>
          <div className="grid grid-flow-row gap-y-[12px] mx-auto mt-[75px]">
            <h1 className="font-moderat text-[16.5px] font-medium  text-[#BDBDBD] tracking-[-8%] text-center ">
              Reviews and rankings of podcasts from all streaming services
            </h1>
            <div className="grid grid-flow-col gap-x-5 mx-auto brightness-[105%]">
              <img
                src="/pods/tunein.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/stitcher.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>

              <img
                src="/pods/audible.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>

              <img
                src="/pods/google.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/youtube.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/amazon.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/soundcloud.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/deezer.webp"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
              <img
                src="/pods/insta.png"
                className="pod-streaming shadow-3xl border-[#88888820] border-2"
              ></img>
            </div>
            <div className="mt-[8px] grid grid-flow-row gap-2 py-[40px]">
              <h1 className="font-moderat text-[16.5px] font-medium  text-[#BDBDBD] tracking-[-8%] text-center ">
                The social network for podcast lovers
              </h1>
              <div className="grid grid-flow-col md:max-w-[1440px] lg:max-w-[1900px] mx-auto relative gap-[18px] pt-[12px]">
                <PodcastCover
                  imageURL="/optimized/podcast/found-my-fitness.webp"
                  podcastURL="/podcast/found-my-fitness"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/huber.webp"
                  podcastURL="/podcast/huberman-lab-podcast"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/on-purpose.webp"
                  podcastURL="/podcast/on-purpose"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/alex.webp"
                  podcastURL="/podcast/call-her-daddy"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/jre.webp"
                  podcastURL="/podcast/joe-rogan-experience"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/to-optimize/lex.png"
                  podcastURL="/podcast/joe-rogan-experience"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/charlotte.webp"
                  podcastURL="/podcast/beyond-good-and-evil"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/to-optimize/all-in.png"
                  podcastURL="/podcast/joe-rogan-experience"
                ></PodcastCover>
                {/* <PodcastCover
         imageURL="/to-optimize/tigerbelly.png"
         podcastURL="/podcast/joe-rogan-experience"
        ></PodcastCover> */}
              </div>
              {/* <h1 className="font-moderat text-[16.5px] font-medium  text-[#BDBDBD] tracking-[-8%] text-center">
              The social network for podcast lovers
            </h1> */}
            </div>
            {/* <div className="grid grid-flow-col mt-[40px] scale-x-[98%]">
            <CardBlend title="The New Queen Of Podcast"></CardBlend>
            <CardBlend
              title="Top 10 Joe Rogan Episodes"
              img={"./rogan2.webp"}
            ></CardBlend>
            <CardBlend
              title="Top 10 Life Changing Podcasts"
              img={"./goggins.jpg"}
            ></CardBlend>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
