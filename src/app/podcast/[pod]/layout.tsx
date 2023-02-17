import Header from 'components/pod/Header';

export default function PodcastPage({ children }) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <Header></Header>
      <div className="relative z-0">{children}</div>
      {/* <Footer2></Footer2> */}
    </div>
  );
}
