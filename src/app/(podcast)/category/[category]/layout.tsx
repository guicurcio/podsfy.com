import Footer from "components/common/Footer"
import Header from "components/pod/Header"
import Image from "next/image"
import { Suspense } from "react"
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png"

export default function PodcastCategoryLayout({ children }) {
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
        <div className="   mx-auto pt-[90px] backdrop-blur-[8px] backdrop-brightness-[60%] ">
          <div
            className="mx-auto max-w-[1200px]  rounded-[9px]    bg-opacity-[95%] py-[25px]  px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]
      "
          >
            {children}
          </div>
        </div>
      </div>
      <Footer className="border-0 bg-transparent pt-[60px] backdrop-blur-[8px] backdrop-brightness-[60%]"></Footer>
    </div>
  )
}