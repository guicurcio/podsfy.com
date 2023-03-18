import CompanySidebar from "components/common/CompanySidebar";
import Footer from "components/common/Footer";
import Header from "components/pod/Header";
import Image from "next/image";
import { Suspense } from "react";
import mergeClasses from "utils/mergeClasses";
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";

export const dynamic = "force-static";

export default function HomeLayout({ children }) {
  return (
    <div className="relative w-[1920px] overflow-x-hidden bg-[#0D0E12]">
      <Suspense>
        <Header></Header>
      </Suspense>
      <Image
        className="absolute overflow-hidden  bg-[#0D0E12] object-cover brightness-[60%] md:top-[50px] md:rotate-[8deg] md:scale-[120%] xl:top-[-120px] xl:translate-x-[25px] xl:scale-x-[105%] xl:scale-y-[100%]"
        src={backgroundImage}
        alt="Podcasts"
      ></Image>
      <div className="overflow-x-hidden">
        <div className="   mx-auto pt-[50px] backdrop-blur-[8px] backdrop-brightness-[60%] ">
          <div
            className="mx-auto
max-w-[1200px]  rounded-[9px]    bg-opacity-[95%] py-[25px]  px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]
      "
          >
            <div
              className={mergeClasses(
                "min-h-[1200px] w-[1250px]",
                " overflow-hidden rounded-[5px]",
                "bg-[#0D0E12] py-[25px]",
                "border border-sharper border-opacity-10",
                "px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px] ",
              )}
            >
              <div className="grid w-full  grid-flow-col items-start justify-start justify-items-start gap-[84px]">
                <div className="mt-[20px] grid w-[320px] max-w-[310px] grid-flow-row rounded-[4px] border border-white border-opacity-10 bg-black    bg-opacity-[35%]  px-4 pb-4 pt-[20px] shadow-3xl backdrop-blur-[10px]">
                  <CompanySidebar></CompanySidebar>
                </div>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="border-0 bg-transparent pt-[60px] backdrop-blur-[8px] backdrop-brightness-[60%]"></Footer>
    </div>
  );
}
