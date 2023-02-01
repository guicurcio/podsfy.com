import Join from "components/Join";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative bg-[#0D0E12] overflow-x-hidden">
      <div className="">
        <img
          className="absolute xl:scale-x-[105%] bg-[#0D0E12] scale-[120%] brightness-[60%] object-cover xl:scale-y-[100%] md:top-[50px] xl:top-[-120px] md:rotate-[8deg] xl:translate-x-[25px]"
          src="/bg/bg.png"
        ></img>
      </div>
      <div className="backdrop-blur-[8px] backdrop-brightness-[50%]">
        <div className="mx-auto z-50 relative gap-y-[50px] grid grid-flow-row select-none cursor-default backdrop-blur-[0.1px] backdrop-brightness-[120%]">
          <div className="min-w-[1280px] items-center  mx-auto py-[18px] place-content-between grid grid-flow-col">
            <div className=" inline-block py-2 px-3 rounded-md text-[#CDCDCD]  items-center text-center leading-[-0.025em]">
              <h1 className="font-SpaceGrotesk tracking-[-0.08em] text-[30px] font-bold ">
                podsfy
              </h1>
            </div>
            <div className="py-2 px-3 rounded-md text-[#CDCDCD] align-middle self-center">
              <div className="backdrop-brightness-[125%] w-full h-full">
                <button className="font-SpaceGrotesk tracking-[-0.08em] text-[18px] font-medium">
                  sign in
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row gap-y-2 w-[900px] mx-auto -mt-[25px]">
            <h1 className="font-SpaceGrotesk text-[90px] font-normal leading-[95px] text-white drop-shadow-2xl text-opacity-[75%] brightness-[200%] tracking-[-0.06em] text-center select-none cursor-default">
              Your companion for podcasts reviews and rankings
            </h1>
            <Join></Join>
          </div>
          <div className="grid grid-flow-row gap-y-[12px] mx-auto mt-[100px]">
            <h1 className="font-moderat text-[16.5px] font-medium  text-[#BDBDBD] tracking-[-8%] text-center ">
              Reviews and rankings of podcasts from all streaming services
            </h1>
            <div className="grid grid-flow-col gap-x-8  mx-auto brightness-[105%]">
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
            <div className="mt-[8px] grid grid-flow-row gap-2 py-[80px]">
              <h1 className="font-moderat text-[16.5px] font-medium  text-[#BDBDBD] tracking-[-8%] text-center ">
                The social network for podcast lovers
              </h1>
              <div className="grid grid-flow-col md:max-w-[1440px] lg:max-w-[1900px] mx-auto relative gap-[32px] py-[12px]">
                <Link href="/podcast/call-her-daddy">
                  <img
                    src="./ab67706c0000bebbe74171c42b0069e80316ab7e.jpeg"
                    className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                  />
                </Link>
                <img
                  src="./images-(10).jpeg"
                  className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                />
                <Link href="/podcast/huberman-lab-podcast">
                  <img
                    src="./huberman-lab.jpeg"
                    className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                  />
                </Link>
                <img
                  src="./be2988047a80d577c453a0651d74d3edd12bfb85.jpeg"
                  className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                />
                <img
                  src="./ab67706c0000bebbf8a88a32d47562027bafed1c.jpeg"
                  className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                />
                <img
                  src="./images-(2).png"
                  className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                />
                <img
                  src="./ab67616d0000b273aa9b280f81bf9e8f66e88e91.jpeg"
                  className="flex-grow-0 flex-shrink-0 w-[180px] h-[250px] rounded-[15px] object-cover border border-black cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.28)" }}
                />
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
