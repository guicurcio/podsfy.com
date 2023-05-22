import HomeHeader from "components/home/HomeHeader/HomeHeader";
import HomeSidebar from "components/home/HomeSidebar/HomeSidebar";
import Scroller from "components/home/Scroller/Scroller";
import Image from "next/image";
import { lazy } from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";

/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";

const Trending = lazy(() => import("components/home/Trending"));

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="bg-[#0D0E12] 2xl:w-[1920px]">
        <Image
          className={mergeClasses(
            "absolute h-[850px] w-[1900px] overflow-hidden  bg-[#0D0E12] object-fill brightness-[60%] md:top-[50px]",
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
            "shadow-3xl backdrop-blur-[10px] backdrop-brightness-[60%]",
          )}
        >
          <div className="mx-auto max-h-screen w-full  overflow-hidden">
            <HomeHeader></HomeHeader>
            <div className="mx-auto max-w-[1200px]">
              <div className="mx-auto grid h-full  max-w-[1200px] grid-flow-col  lg:w-[1200px]">
                <HomeSidebar className=" lg:w-[200px]"></HomeSidebar>
                <Scroller className=" lg:w-[780px] ">{children}</Scroller>
                <Trending className=" lg:w-[250px]"></Trending>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
