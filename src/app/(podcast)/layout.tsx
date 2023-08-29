import HomeHeader from "components/home/HomeHeader/HomeHeader";
import Scroller from "components/home/Scroller/Scroller";
import Image from "next/image";
import { lazy } from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";
import HomeFeedNavigator from "components/home/HomeFeedNavigator";

const Trending = lazy(() => import("components/home/Trending"));

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="bg-[#0D0E12] 2xl:w-[1920px]">
        <Image
          className={mergeClasses(
            "absolute h-[850px] w-screen overflow-hidden  bg-[#0D0E12] object-fill brightness-[60%] md:top-[50px]",
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
            "bg-opacity-[95%] font-visuelt",
            "shadow-3xl backdrop-blur-[10px] backdrop-brightness-[60%]",
          )}
        >
          <div className="w-full">
            <HomeHeader></HomeHeader>
            <HomeFeedNavigator
              className="mx-0 w-full bg-[#0D0E12] px-0"
              tabsClassName="w-[1240px]"
            ></HomeFeedNavigator>
            <div className="mx-auto max-w-[1250px] ">
              <Scroller className="w-full  bg-transparent">
                <div className="mx-auto w-full  bg-transparent">{children}</div>
              </Scroller>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
