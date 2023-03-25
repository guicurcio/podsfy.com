import HomeHeader from "components/home/HomeHeader/HomeHeader";
import HomeSidebar from "components/home/HomeSidebar/HomeSidebar";
import Scroller from "components/home/Scroller/Scroller";
import Image from "next/image";
import { lazy } from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";

// const Trending = lazy(() => import("components/home/Trending/Trending"));
const Trending = lazy(() => import("components/home/Trending"));

export default function HomeLayout({ children }) {
  return (
    <div className="bg-[#0D0E12] 2xl:w-[1920px]">
      <Image
        className={mergeClasses(
          "absolute overflow-hidden  bg-[#0D0E12] object-fill brightness-[60%] md:top-[50px]",
          " md:rotate-[11deg] md:scale-[130%] xl:top-[-100px] xl:translate-x-[25px] xl:scale-x-[115%] xl:scale-y-[95%]",
        )}
        src={backgroundImage}
        alt="Podcasts"
        priority
        quality={10}
      ></Image>
      <div
        className={mergeClasses(
          "mx-auto",
          "bg-opacity-[95%] font-visuelt",
          "shadow-3xl backdrop-blur-[10px] backdrop-brightness-[60%]",
        )}
      >
        <div className="max-h-screen w-full overflow-hidden">
          <HomeHeader></HomeHeader>
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto grid h-full  max-w-[1200px] grid-flow-col grid-cols-12">
              <HomeSidebar className="col-span-2"></HomeSidebar>
              <Scroller className="col-span-7">{children}</Scroller>
              <Trending></Trending>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
