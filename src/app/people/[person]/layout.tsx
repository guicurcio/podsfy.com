import { PodHeader } from "components/pod/Header";

export default function PodcastPage({ children }) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <div className="backdrop-brightness-[10%]">
        <PodHeader></PodHeader>
        {children}
        {/* <Footer2></Footer2> */}
      </div>
    </div>
  );
}
