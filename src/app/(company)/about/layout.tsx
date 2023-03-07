import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';
import PodImage from 'components/pod/PodImage';

export default function AboutLayout({ children }) {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <PodImage image={`./bg/bg.png`}></PodImage>

      <Header></Header>
      <Footer className="border-0 bg-transparent pt-[60px] backdrop-blur-[8px] backdrop-brightness-[60%]"></Footer>
    </div>
  );
}
