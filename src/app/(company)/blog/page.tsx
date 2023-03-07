import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';
import PodImage from 'components/pod/PodImage';

export default function PodcastPage({ children }) {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <Header></Header>
      <div className="relative z-0 h-[800px]">
        <PodImage image={`./bg/bg.png`}></PodImage>
        {children}
      </div>
      <Footer className="border-0 bg-transparent pt-[60px] backdrop-blur-[8px] backdrop-brightness-[60%]"></Footer>
    </div>
  );
}
