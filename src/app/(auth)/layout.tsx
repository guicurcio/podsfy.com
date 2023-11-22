import Footer from "components/common/Footer";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";
import HomeHeader from "components/home/HomeHeader";

export const dynamic = "force-static";

export default function HomeLayout({ children }) {
  return (
    <div className="relative w-[1920px] overflow-x-hidden bg-[#0D0E12]">
      <HomeHeader></HomeHeader>
      <Image
        className="absolute overflow-hidden  bg-[#0D0E12] object-cover brightness-[60%] md:top-[50px] md:rotate-[8deg] md:scale-[120%] xl:top-[-120px] xl:translate-x-[25px] xl:scale-x-[105%] xl:scale-y-[100%]"
        src={backgroundImage}
        alt="Podcasts"
      ></Image>
      <div className="overflow-x-hidden">
        <div className="mx-auto pt-[50px] backdrop-blur-[8px] backdrop-brightness-[60%]">
          <div className="shadow-3xl mx-auto  max-w-[1200px] rounded-[9px] bg-opacity-[95%]  px-[20px] py-[25px] font-visuelt backdrop-blur-[10px]">
            <div
              className={mergeClasses(
                "mx-auto w-[550px]",
                "bg-[#0D0E12] py-[25px]",
                "border border-sharper border-opacity-10",
                "shadow-3xl px-[20px] font-visuelt",
              )}
            >
              <div className="mx-auto grid w-full grid-flow-col">
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
