import HomeHeader from "components/home/HomeHeader/HomeHeader";
import HomeSidebar from "components/home/HomeSidebar/HomeSidebar";
import Scroller from "components/home/Scroller/Scroller";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";
import Trending from "../../components/home/Trending/Trending";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="bg-[#0D0E12] 2xl:w-[1920px]">
        <Image
          className={mergeClasses(
            "absolute h-[850px]  w-screen overflow-hidden   object-fill brightness-[80%] md:top-[50px]",
            " md:rotate-[9deg] md:scale-[130%] xl:top-[-90px] xl:translate-x-[25px] xl:scale-x-[115%] xl:scale-y-[95%]",
          )}
          src={backgroundImage}
          height={800}
          width={300}
          alt="Podcasts"
          priority
          quality={1}
        ></Image>
        <div
          className={mergeClasses(
            "mx-auto",
            "bg-opacity-[95%] font-visuelt",
            "shadow-3xl backdrop-blur-[10px] backdrop-brightness-[70%]",
          )}
        >
          <div className="mx-auto max-h-screen w-full overflow-hidden">
            <HomeHeader></HomeHeader>
            <div className="mx-auto max-w-[1250px] ">
              <div className="mx-auto grid h-full max-w-[1250px] grid-flow-col  place-content-start items-start">
                <HomeSidebar className="w-[210px]"></HomeSidebar>
                <Scroller className="w-full max-w-[830px]">{children}</Scroller>
                {/* <Trending className="max-w-[260px]"></Trending> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
