// eslint-disable-next-line import/extensions
import "styles/fonts.css";
// eslint-disable-next-line import/extensions
import "styles/globals.css";

/* eslint-disable-next-line import/no-absolute-path, import/extensions */

import Footer from "components/common/Footer";
import PodcastCover from "components/pod/PodcastCover/PodcastCover";
import Link from "next/link";
import Button from "ui/components/Button";

const podImages = [
  { src: "/pods/tunein.webp" },
  { src: "/pods/stitcher.webp" },
  { src: "/pods/audible.webp" },
  { src: "/pods/google.webp" },
  { src: "/pods/youtube.webp" },
  { src: "/pods/amazon.webp" },
  { src: "/pods/soundcloud.webp" },
  { src: "/pods/deezer.webp" },
  { src: "/pods/insta.png" },
];

const featuredPodcasts = [
  {
    imageURL: "/optimized/podcast/found-my-fitness.webp",
    podcastURL: "/podcast/found-my-fitness",
  },
  {
    imageURL: "/optimized/podcast/huber.webp",
    podcastURL: "/podcast/huberman-lab-podcast",
  },
  {
    imageURL: "/optimized/podcast/on-purpose.webp",
    podcastURL: "/podcast/on-purpose",
  },
  {
    imageURL: "/alex2.jpg",
    podcastURL: "/podcast/call-her-daddy",
  },
  {
    imageURL: "/optimized/podcast/jre.webp",
    podcastURL: "/podcast/the-joe-rogan-experience",
  },
  {
    imageURL: "/to-optimize/lex.png",
    podcastURL: "/podcast/lex-fridman-podcast",
    className: "hidden 2xl:block",
  },
  {
    imageURL: "/to-optimize/all-in.png",
    podcastURL: "/podcast/all-in-podcast",
    className: "hidden 2xl:block",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="relative z-50 mx-auto grid cursor-default select-none grid-flow-row gap-y-[30px] backdrop-blur-[0.1px] backdrop-brightness-[120%]">
        <div className="mx-auto grid  grid-flow-col place-content-between items-center py-[12px] md:min-w-[1280px]">
          <Link
            href="/"
            className="cursor-pointer py-2 px-3 text-center font-SpaceGrotesk text-[30px] font-bold tracking-[-0.08em] text-[#CDCDCD] md:text-left"
          >
            podsfy
          </Link>

          <div className="hidden self-center rounded-md py-2 px-3 align-middle text-[#CDCDCD] md:block">
            <div className="mx-auto w-fit">
              <Link href="/login">
                <Button variant="subtle" size="lg">
                  Sign in
                </Button>
              </Link>
              {/* <Suspense>
                        <Join
                          openModalState={true}
                          baseState="SIGNING IN"
                        ></Join>
                      </Suspense> */}
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-[10px] grid grid-flow-row gap-y-2 md:-mt-[25px] md:w-[900px]">
          <h1 className="cursor-default  select-none px-[5px] text-center font-SpaceGrotesk text-[55px] font-normal leading-[55px] tracking-[-0.08em] text-white text-opacity-[75%]   brightness-[200%] drop-shadow-2xl md:w-full md:px-[0] md:text-[90px] md:leading-[95px] md:tracking-[-0.06em]">
            Your companion for podcasts reviews and rankings
          </h1>
          <div className="mx-auto max-w-[800px] my-[8px]">
            <Link href="/register">
              <Button variant="main" size="lg" className="">
                {`Discover new podcasts -- it's free!`}
              </Button>
            </Link>
          </div>
          {/* <Suspense fallback={<div></div>}>
                    <Join baseState="REGISTERING"></Join>
                  </Suspense> */}
        </div>
        <div className="mx-auto grid grid-flow-row gap-y-[14px] ">
          <h1 className="mx-auto w-[250px] text-center font-moderat text-[14px] font-medium tracking-[-8%]  text-[#BDBDBD] md:w-full md:text-[16.5px] ">
            Reviews and rankings of podcasts from all streaming services
          </h1>
          <div className="mx-auto grid grid-cols-3 justify-items-center gap-5 brightness-[105%] md:mx-auto md:mb-[55px] md:grid-flow-col">
            {podImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
                alt="streaming service"
              ></img>
            ))}
          </div>
          <div className="mt-[8px] grid grid-flow-row gap-2 py-[40px] md:py-[50px]">
            <h1 className="text-center font-moderat text-[17px]  font-medium tracking-[-8%] text-[#BDBDBD] ">
              The social network for podcast lovers
            </h1>
            <div className="mx-auto grid w-[250px] grid-cols-2 gap-[18px] pt-[12px] md:w-full md:grid-cols-5 2xl:grid-flow-col">
              {featuredPodcasts.map((podcast, index) => (
                <PodcastCover
                  key={index}
                  imageURL={podcast.imageURL}
                  podcastURL={podcast.podcastURL}
                  className={podcast.className}
                ></PodcastCover>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
