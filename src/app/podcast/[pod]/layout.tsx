import Footer from "components/common/Footer"
import Header from "components/pod/Header"

export default function PodcastPage({ children }) {
  return (
    <div className=" overflow-x-hidden bg-[#0D0E12]">
      <Header></Header>
      <div className=" z-0">{children}</div>
      <Footer className="border-0 bg-transparent pt-[60px] backdrop-blur-[8px] backdrop-brightness-[60%]"></Footer>
    </div>
  )
}
