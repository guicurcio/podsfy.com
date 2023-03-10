import Footer from 'components/common/Footer';
import PodcastCover from 'components/pod/PodcastCover/PodcastCover';
import SignInModal from 'components/SignInModal';
import Join from 'components/SignUpModal';

export default function Page() {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <div className="">
        <img
          className="absolute scale-[120%] bg-[#0D0E12] object-cover brightness-[60%] md:top-[50px] md:rotate-[8deg] xl:top-[-120px] xl:translate-x-[25px] xl:scale-x-[105%] xl:scale-y-[100%]"
          src="/bg/bg.png"
        ></img>
      </div>
      <div className="backdrop-blur-[8px] backdrop-brightness-[50%]">
        <div className="relative z-50 mx-auto grid cursor-default select-none grid-flow-row gap-y-[30px] backdrop-blur-[0.1px] backdrop-brightness-[120%]">
          <div className="mx-auto grid  min-w-[1280px] grid-flow-col place-content-between items-center py-[12px]">
            <a className="cursor-pointer py-2 px-3 font-SpaceGrotesk text-[30px] font-bold tracking-[-0.08em] text-[#CDCDCD] ">
              podsfy
            </a>
            <div className="self-center rounded-md py-2 px-3 align-middle text-[#CDCDCD]">
              <div className="h-full w-full backdrop-brightness-[125%]">
                <SignInModal></SignInModal>
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-[25px] grid w-[900px] grid-flow-row gap-y-2">
            <h1 className="cursor-default select-none text-center font-SpaceGrotesk text-[90px] font-normal leading-[95px] tracking-[-0.06em] text-white text-opacity-[75%] brightness-[200%] drop-shadow-2xl">
              Your companion for podcasts reviews and rankings
            </h1>
            <Join></Join>
          </div>
          <div className="mx-auto mt-[75px] grid grid-flow-row gap-y-[12px]">
            <h1 className="text-center font-moderat text-[16.5px]  font-medium tracking-[-8%] text-[#BDBDBD] ">
              Reviews and rankings of podcasts from all streaming services
            </h1>
            <div className="mx-auto grid grid-flow-col gap-x-5 brightness-[105%]">
              <img
                src="/pods/tunein.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/stitcher.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>

              <img
                src="/pods/audible.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>

              <img
                src="/pods/google.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/youtube.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/amazon.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/soundcloud.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/deezer.webp"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
              <img
                src="/pods/insta.png"
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
            </div>
            <div className="mt-[8px] grid grid-flow-row gap-2 py-[40px]">
              <h1 className="text-center font-moderat text-[16.5px]  font-medium tracking-[-8%] text-[#BDBDBD] ">
                The social network for podcast lovers
              </h1>
              <div className="relative mx-auto grid grid-flow-col gap-[18px] pt-[12px] md:max-w-[1440px] lg:max-w-[1900px]">
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
                  imageURL="/alex2.jpg"
                  podcastURL="/podcast/call-her-daddy"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/optimized/podcast/jre.webp"
                  podcastURL="/podcast/the-joe-rogan-experience"
                ></PodcastCover>
                <PodcastCover
                  imageURL="/to-optimize/lex.png"
                  podcastURL="/podcast/lex-fridman-podcast"
                ></PodcastCover>
                {/* <PodcastCover
                  imageURL="/optimized/podcast/charlotte.webp"
                  podcastURL="/podcast/beyond-good-and-evil"
                ></PodcastCover> */}
                <PodcastCover
                  imageURL="/to-optimize/all-in.png"
                  podcastURL="/podcast/all-in-podcast"
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
        <Footer></Footer>
      </div>
    </div>
  );
}
