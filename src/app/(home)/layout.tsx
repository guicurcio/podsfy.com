import Image from "next/image"
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png"

export default function HomeLayout({ children }) {
  return (
    <div className="  w-[1920px]  bg-[#0D0E12]">
      <Image
        className="absolute overflow-hidden  bg-[#0D0E12] object-cover brightness-[60%] md:top-[50px] md:rotate-[8deg] md:scale-[120%] xl:top-[-120px] xl:translate-x-[25px] xl:scale-x-[105%] xl:scale-y-[100%]"
        src={backgroundImage}
        alt="Podcasts"
      ></Image>
      <div
        className="mx-auto
bg-opacity-[95%] font-visuelt
  shadow-3xl backdrop-blur-[10px] backdrop-brightness-[60%]
      "
      >
        {children}
      </div>
    </div>
  )
}
