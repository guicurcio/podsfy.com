import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';
import PodImage from 'components/pod/PodImage';

export default async function DashboardLayout() {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <PodImage imageClassName={`top-[-20px]`} image={`./bg/bg.png`}></PodImage>
      <div className="backdrop-brightness-[40%]">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}
