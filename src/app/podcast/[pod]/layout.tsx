import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';

export default function PodcastPage({ children }) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <Header></Header>
      <div className="relative z-0">{children}</div>
      <Footer className='bg-transparent backdrop-blur-[8px] backdrop-brightness-[60%] border-0 pt-[60px]'></Footer>
    </div>
  );
}
